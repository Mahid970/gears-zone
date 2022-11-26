import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../Shared/Loading";

const stripePromise = loadStripe(
  "pk_test_51LlVMBBlLVfwtYyzmk2xB50ZEkGqL4kMxJPo9zdqPnW6HaEIHVR6uu7DrmBFunrLfLfU5q7vCy03eyUjhUc4tzTv00EGuaSsyk"
);

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(`http://localhost:5000/order/${id}`, {
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
      <div className="card w-50 max-w-md bg-base-100 mx-auto my-8 shadow-xl">
        <div className="card-body ">
          <p className="text-success">Hello {order.userName}</p>
          <h2 className="card-title">Pay for {order.ProductName}</h2>
          <p>Please Pay ${order.price * order.Quantity}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
