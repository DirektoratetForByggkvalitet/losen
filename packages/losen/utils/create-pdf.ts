import axios from "axios";

declare global {
  interface Navigator {
    msSaveOrOpenBlob?: Function;
  }
}

export default function createPDF(
  pdfServiceUrl: string,
  localStorageKey: string
) {
  // Get localstore data
  const localStorageData = localStorage.getItem(localStorageKey);

  // Exit in the unlikely event when no data is set
  if (localStorageData === null) {
    return Promise.reject();
  }

  // Call external API to create pdf
  return axios
    .post(
      pdfServiceUrl,
      {
        url: window.location.href,
        localStorageData: JSON.parse(localStorageData),
        localStorageKey,
      },
      {
        responseType: "blob",
        headers: {
          Accept: "application/pdf",
        },
      }
    )
    .then((response) => {
      const file = new Blob([response.data], {
        type: "application/pdf",
      });

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file);
        return;
      }

      const data = window.URL.createObjectURL(file);
      const link = document.createElement("a");
      link.setAttribute("type", "hidden");
      link.href = data;
      link.download = "veiviser.pdf";
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        // For Firefox it is necessary to delay revoking the ObjectURL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(data);
      }, 100);
    });
}
