import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ConfirmOrder = (data) => {
  const [user, loading] = useAuthState(auth);
  const { OrderQuantity, AvailableQuantity } = data.data;

  const handleOrder = (event) => {
    event.preventDefault();
    const Quantity = event.target.quantity.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;

    const orderData = {
      userName: user.displayName,
      email: user.email,
      Address: address,
      img: data.data.img,
      ProductName: data.data.cardTitle,
      Quantity: Quantity,
      phone: phone,
      price: data.data.Price,
    };
    console.log(orderData);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast("order is confirmed");
        } else {
          return toast.error(`you already have an appointment`);
        }
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <form
        onSubmit={handleOrder}
        className="grid grid-cols-1 gap-2 justify-items-center"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Your Name<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            disabled
            value={user?.displayName}
            type="text"
            name="name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Your Email<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            disabled
            value={user?.email}
            type="email"
            name="email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Quantity<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            required
            placeholder="Quantity"
            defaultValue={OrderQuantity}
            type="number"
            name="quantity"
            min={OrderQuantity}
            max={AvailableQuantity}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Your Address<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            required
            placeholder="your Address"
            type="text"
            name="address"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Phone<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            required
            placeholder="Phone"
            type="text"
            name="phone"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="lg:btn md:btn btn btn-sm btn-primary upercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full mt-2 max-w-xs"
        />
      </form>
    </div>
  );
};

export default ConfirmOrder;
