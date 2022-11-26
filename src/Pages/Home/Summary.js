import React from "react";

const Summary = () => {
  return (
    <div>
      <h1 className=" text-2xl font-bold text-center mt-14">
        Our Business Summary
      </h1>
      <div className=" hero-content  mt-2">
        <div className="stats stats-vertical md:stats-horizontal lg:stats-horizontal shadow ">
          <div className="stat px-20 py-6 ">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Sale</div>
            <div className="stat-value text-2xl">157M</div>
            <div className="stat-desc">Last Year</div>
          </div>

          <div className="stat px-20 py-6">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Active Customer</div>
            <div className="stat-value text-2xl">4,200</div>
            <div className="stat-desc text-green-500">↗︎ 400 (22%)</div>
          </div>

          <div className="stat px-20 py-6">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Manufacture Hub</div>
            <div className="stat-value text-2xl">48</div>
            <div className="stat-desc text-green-500">↗︎ 12 (25%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
