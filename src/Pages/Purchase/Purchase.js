import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import ConfirmOrder from "./ConfirmOrder";
import ProductDetails from "./ProductDetails";

const Purchase = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["product", id], () =>
    fetch(`http://localhost:5000/product/${id}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex mx-60">
      <ConfirmOrder data={data}></ConfirmOrder>
      <ProductDetails data={data}></ProductDetails>
    </div>
  );
};

export default Purchase;
