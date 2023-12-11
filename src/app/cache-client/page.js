"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CacheClientPage = () => {
  const router = useRouter();
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  //console.log(document.cookie);

  const getData = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/polls/AppProductSearch/search/?keyword=Best%20Deals&limit=30&offset=0`,
      { cache: "force-cache" }
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
        document.cookie = `test = ${data.products[0].product_name}`;
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <main>
      <div>
        <h1>Cache Client Side Rendering</h1>
        <ul>
          {fetchData &&
            fetchData.products &&
            fetchData.products.map((d) => (
              <li
                key={d.id}
                onClick={() => router.push(`/cache-client/${d.id}`)}
              >
                {d.product_name}
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};

export default CacheClientPage;
