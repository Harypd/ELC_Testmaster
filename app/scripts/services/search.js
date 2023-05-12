export const search = async (query) => {
  const resp = await fetch(`http://localhost:3035/getProducts?query=${query}`);
  const data = await resp.json();
  return data;
}