import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import OrderCard from "./OrderCard";

const ManageOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <h1 className="text-center mt-6 text-blue-500 font-bold mb-4 text-3xl">
          All Orders
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 my-6 mx-16">
        {orders?.map((order) => (
          <OrderCard key={order._id} order={order}></OrderCard>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
