export default function checkStatus(response: any) {
  if (response.status === 200) {
    return response.json();
  }
  const error: any = new Error(response.statusText);
  error.response = response;
  throw error;
}
