"use client";
import { useRouter } from "next/navigation";

const ProductList = ({ data }) => {
  const router = useRouter();
  return (
    <ul>
      {data &&
        data.products.map((d) => (
          <li key={d.id} onClick={() => router.push(`/${d.id}`)}>
            {d.product_name}
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
