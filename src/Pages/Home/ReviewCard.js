import React from "react";

const ReviewCard = ({ review }) => {
  const { name, city, message } = review;
  return (
    <div>
      <div className="card w-80 bg-base-100 mx-auto shadow-xl">
        <div className="card-body">
          <p>{message}</p>
          <div className="flex py-6">
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="pelople" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="font-bold">{name}</h4>
              <small className="font-bold">{city}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
