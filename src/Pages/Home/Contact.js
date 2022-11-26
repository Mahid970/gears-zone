import React from "react";

const Contact = () => {
  return (
    <div className="bg-emerald-300 rounded-xl lg:mx-52 lg:py-12 py-6 mt-6 justify-items-center">
      <div>
        <h5 className="text-xl text-cyan-500 font-bold text-center">
          Contact Us
        </h5>
        <h2 className="text-3xl text-center text-white">
          Stay Connected With Us
        </h2>
      </div>
      <div className="  grid grid-cols-1 gap-6 w-2/3 mx-auto mt-6">
        <input type="text" placeholder="Email" className="input w-full" />
        <input type="text" placeholder="Subject" className="input w-full" />
        <textarea
          type="text"
          placeholder="Your Messege"
          className="textarea w-full"
          rows={6}
        />
      </div>
    </div>
  );
};

export default Contact;
