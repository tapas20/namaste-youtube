import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex gap-6 p-7 col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer"
          src="https://www.svgrepo.com/show/336031/hamburger-button.svg"
          alt="menu"
        />
        <a href="/">
        <img
          className="h-7"
          src="https://sguru.org/wp-content/uploads/2018/02/2000px-YouTube_Logo_2017.svg_.png"
          alt="Logo"
        />
        </a>
      </div>
      <div className="h-10 mt-7 col-span-10 text-center gap-10">
        <input
          placeholder="Search"
          type="text"
          className="w-1/2 px-5 p-2 rounded-l-full border border-gray-400"
        />
        <button className="hover:bg-gray-400 bg-gray-1.00 border border-gray-400 px-5 p-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-8 mt-7 col-span-1"
          src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
