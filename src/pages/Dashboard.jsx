import React from "react";

const Dashboard = () => {
  return (
    <div className="w-screen flex">
      <div className="md:w-[25%] sm:w-[100%] xsm:w-[100%] border border-black h-screen bg-secondary">
        <div className="flex gap-2 border shadow p-4 m-2 rounded-lg">
          <img
            src="https://randomuser.me/api/portraits/med/men/1.jpg"
            alt=""
            height={50}
            width={50}
            className="rounded-full"
          />

          <div className="flex flex-col">
            <div className="text-lg">Shazid Morshed</div>
            <div className="text-sm font-light">My Account</div>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] sm:w-[100%] xsm:w-[100%] border border-black h-screen"></div>
      <div className="md:w-[25%] sm:w-[100%] xsm:w-[100%] border border-black h-screen"></div>
    </div>
  );
};

export default Dashboard;
