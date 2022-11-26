import React from "react";

const ProductDetails = (data) => {
  const {
    img,
    cardTitle,
    description,
    OrderQuantity,
    AvailableQuantity,
    Price,
  } = data.data;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-4/5 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">{cardTitle}</h2>
          <p>
            <small>{description}</small>
          </p>
          <div className="mt-2 mb-2">
            <small className="font-bold ">
              <span className="text-blue-500">Minimum Order Quantity:</span>{" "}
              {OrderQuantity}
            </small>
            <br />
            <small className="font-bold">
              <span className="text-blue-500">Available Quantity:</span>{" "}
              {AvailableQuantity}
            </small>
            <br />
            <small className="font-bold">
              <span className="text-red-500">Price:</span> {Price}{" "}
              <span className="text-red-500">(per unit)</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
