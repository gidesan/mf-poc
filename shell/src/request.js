export default async function request(url) {
  try {
    const response = await window.fetch(`${url}`);
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      return Promise.reject(json);
    }
  } catch (err) {
    Promise.reject(err);
  }
}
