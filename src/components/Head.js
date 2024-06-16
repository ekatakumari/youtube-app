import React from "react";
import { HAMBERGER_ICON, SEARCH_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch= useDispatch()
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img className="h-8 cursor-pointer" alt="icon" src={HAMBERGER_ICON}  onClick={toggleMenuHandler}/>
        <a href="/"
        >
            <img className="h-8 mx-2" alt="logo" src={YOUTUBE_LOGO} />
        </a>
      </div>
      <div className="col-span-10 px-10 flex">
        <input className="w-1/2 border border-gray-400 rounded-l-full p-2" type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            <img src={SEARCH_ICON} alt="search_icon" className="h-7"/>
        </button>
      </div>
      <div  className="col-span-1">
        <img className="h-8" alt="user_icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
