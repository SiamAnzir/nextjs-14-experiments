async function getItem() {
  // The `fetch` function is automatically memoized and the result
  // is cached
  const res = await fetch(
    `${process.env.NEXT_APP_BASE_URL}/api/v1/product/polls/AppProductSearch/search/?keyword=Best%20Deals&limit=30&offset=0`
  );
  return res.json();
}

export default getItem;
