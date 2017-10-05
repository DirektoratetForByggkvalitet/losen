export default function checkStatus(response) {
  if (response.status === 200) {
    return response.json();
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
