import React from "react";

const OrderCard = ({ order }) => {
  console.log(order);
  const { _id, userName, ProductName, address, email, Quantity, paid } = order;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Name: {userName}</h2>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
          <p>Product: {ProductName}</p>
          <p>Quantity: {Quantity}</p>
          <p>
            Payment Status: {paid && <span className="text-success">Paid</span>}
            {!paid && <span className="text-red-500">Not Paid</span>}
          </p>
          {/* <div className="grid grid-cols-2 gap-20">
            <button className="btn btn-sm">Cancel</button>
            <button className="btn btn-sm">Cancel</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
