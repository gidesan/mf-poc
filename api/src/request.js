export default async function request(url, options) {
  try {
    const response = await window.fetch(url, options);
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
