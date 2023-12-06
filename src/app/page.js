import ProductList from "@/components/ProductList";
import getItem from "@/api/productListItem";
import Image from "next/image";

const Home = async () => {
  const res = await fetch(
    `${process.env.NEXT_APP_BASE_URL}/api/v1/product/polls/AppProductSearch/search/?keyword=Best%20Deals&limit=30&offset=0`,
    { next: { revalidate: 120 } }
  );

  const prodList = await fetch(
    `${process.env.NEXT_APP_BASE_URL}/api/inventory/v1/product/list/?limit=5&offset=0`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzg3ODkwMDMzLCJpYXQiOjE3MDE2NjI4MzMsImp0aSI6ImNjOTkyMzRjZDVlMzQ0NzJiZDc5MzMxNjE1OTE2NWI4IiwidXNlcl9pZCI6MTQ1M30.fJI-mws2ok1ig9RiBPNoYQEybbDrua1nDRiSAxVJ0rE`,
      },
    }
  );
  console.log("api called");
  const data = await res.json();
  //const prod = await prodList.json();
  //const item = await getItem()
  //console.log(prod);
  return (
    <main>
      <h1>Home Page</h1>
      <div>Product Details</div>
      <ProductList data={data} />
      <div>
        <Image
          src="https://d318e0jv36oqd2.cloudfront.net/media/product_medicine/4154.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
};

export default Home;
