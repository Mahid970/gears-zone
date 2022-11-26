import React from "react";
import Quote from "../../images/people/quote.svg";
import People1 from "../../images/people/people1.png";
import People2 from "../../images/people/people2.png";
import People3 from "../../images/people/people3.png";
import ReviewCard from "./ReviewCard";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const { data, isLoading, refetch } = useQuery("reviews", () =>
    fetch("http://localhost:5000/reviews", {}).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="">
        <div className=" flex justify-between mx-6 mt-12 ">
          <div className="lg:w-1/2 md:w-1/2 mx-auto md:mx-0 lg:mx-0">
            <h2 className="text-2xl mt-6 font-bold">
              What Our Happy Customer Says About Our company...
            </h2>
          </div>
          <div className="hidden md:block lg:block">
            <img className=" w-24 lg:w-40" src={Quote} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {data.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
