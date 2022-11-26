import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "687339ef07cbcb5788d6db6248070991";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            cardTitle: data.name,
            description: data.details,
            OrderQuantity: data.minimumQuantity,
            AvailableQuantity: data.AvailableQuantity,
            Price: data.Price,
            img: img,
          };
          console.log(product);
          // sendin data to database

          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("product added successfully");
                reset();
              } else {
                toast.error("Faild to add a Product");
              }
            });
        }
      });
  };
  return (
    <div className="bg-emerald-300 rounded-xl lg:mx-24 py-8 mt-6 justify-items-center">
      <h1 className="text-4xl font-bold text-center">Add A product</h1>
      <form
        className="grid grid-cols-1 w-2/3 mx-auto mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full "
            {...register("name", {
              required: {
                value: true,
                message: "Product name is Required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Your Name"
            className="input input-bordered w-full "
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full "
            {...register("Price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
          />
          <label class="label">
            {errors.Price?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.Price.message}
              </span>
            )}
          </label>
        </div>

        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Minimum Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Minimum Quantity"
            className="input input-bordered w-full "
            {...register("minimumQuantity", {
              required: {
                value: true,
                message: "Minimum Quantity is Required",
              },
            })}
          />
          <label class="label">
            {errors.minimumQuantity?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.minimumQuantity.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered w-full "
            {...register("AvailableQuantity", {
              required: {
                value: true,
                message: "Available Quantity is Required",
              },
            })}
          />
          <label class="label">
            {errors.AvailableQuantity?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.AvailableQuantity.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Product Details</span>
          </label>
          <textarea
            type="text"
            placeholder="Product Details"
            className="textarea w-full "
            {...register("details", {
              required: {
                value: true,
                message: "Product details is Required",
              },
            })}
            rows="6"
          ></textarea>
          <label class="label">
            {errors.details?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.details.message}
              </span>
            )}
          </label>
        </div>
        <input className="btn w-full max-w-xs mt-6" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProduct;
