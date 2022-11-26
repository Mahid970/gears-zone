import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Review = () => {
  const [user, loading] = useAuthState(auth);
  const handleReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const city = event.target.city.value;
    const message = event.target.message.value;

    const reviewData = {
      name: name,
      city: city,
      message: message,
    };
    console.log(reviewData);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("You Review has been submitted");
        } else {
          toast.error("Faild to Submit");
        }
      });
  };

  return (
    <div className="bg-emerald-300 rounded-xl lg:mx-24 py-8 mt-6 justify-items-center">
      <div>
        <h5 className="text-4xl text-cyan-500 font-bold text-center">
          Add Your Review
        </h5>
      </div>
      <form onSubmit={handleReview}>
        <div className="  grid grid-cols-1 gap-2 w-2/3 mx-auto mt-6">
          <div>
            <label class="label ">
              <span class="label-text">
                Your Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full"
              value={user.displayName}
            />
          </div>
          <div>
            <label class="label ">
              <span class="label-text">
                Your City<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              required
              name="city"
              type="text"
              placeholder="Your city"
              className="input w-full"
            />
          </div>
          <div>
            <label class="label ">
              <span class="label-text">
                Your Message<span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              required
              name="message"
              type="text"
              placeholder="Your Messege"
              className="textarea w-full"
              rows={6}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="lg:btn md:btn btn btn-sm btn-primary upercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-1/3 mt-2  "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Review;
