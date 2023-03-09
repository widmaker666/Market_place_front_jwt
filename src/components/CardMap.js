import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardMap = () => {
  const api = "http://localhost:3000/products";

  const [dataProducts, setDataProducts] = useState([]);
  console.log(dataProducts);

  useEffect(() => axios.get(api).then((res) => setDataProducts(res.data)), []);

  return (
    <div>
      <ul>
        {dataProducts.map((product, index) => (
          <Card index={index} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default CardMap;
