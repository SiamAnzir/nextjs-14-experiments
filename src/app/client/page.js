"use client";
import React, { useState, useEffect } from "react";
//import { cookies } from "next/headers";

const ClientPage = () => {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/polls/AppProductSearch/search/?keyword=Best%20Deals&limit=30&offset=0`
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
        //cookies().set("test", data.products[0].product_name);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <main>
      <div>
        <h1>Client Side Rendering</h1>
        <ul>
          {fetchData &&
            fetchData.products &&
            fetchData.products.map((d) => <li key={d.id}>{d.product_name}</li>)}
        </ul>
      </div>
    </main>
  );
};

export default ClientPage;
