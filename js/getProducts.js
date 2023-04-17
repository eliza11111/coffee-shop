async function getProducts() {
  const response = await fetch(API);
  const result = await response.json();
  return result;
}
