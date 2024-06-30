import React, { useEffect, useState } from "react";
import {
  HAMBERGER_ICON,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false)
  const dispatch = useDispatch();
  const searchCache=useSelector((store)=>store.search)
  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery])
      }
      else{
        getSearchSuggestion();
      }
     
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestion(json[1]);
    dispatch(cacheResults({[searchQuery]:json[1]}))
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    //     <div className="grid grid-flow-col p-5 m-2 shadow-lg">
    //       <div className="flex col-span-1 ">
    //         <img
    //           className="h-8 cursor-pointer"
    //           alt="icon"
    //           src={HAMBERGER_ICON}
    //           onClick={toggleMenuHandler}
    //         />
    //         <a href="/">
    //           <img className="h-8 mx-2" alt="logo" src={YOUTUBE_LOGO} />
    //         </a>
    //       </div>
    //       <div className="col-span-10 px-10 flex flex-col">
    //   <div className="flex">
    //     <input
    //       className="w-1/2 border border-gray-400 rounded-l-full p-2"
    //       type="text"
    //       value={searchQuery}
    //       onChange={(e) => setSearchQuery(e.target.value)}
    //     />
    //     <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
    //       <img src={SEARCH_ICON} alt="search_icon" className="h-7" />
    //     </button>
    //   </div>
    //   {searchQuery && (
    //     <div className="w-[26rem] border border-gray-400 rounded-b-md bg-white mt-12 shadow-lg fixed py-2 px-5">
    //       <ul>
    //         <li className="p-2 border-b border-gray-300 hover:bg-gray-100">Iphone</li>
    //         <li className="p-2 border-b border-gray-300 hover:bg-gray-100">Iphone</li>
    //         <li className="p-2 border-b border-gray-300 hover:bg-gray-100">Iphone</li>
    //         <li className="p-2 border-b border-gray-300 hover:bg-gray-100">Iphone</li>
    //         <li className="p-2 hover:bg-gray-100">Iphone</li>
    //       </ul>
    //     </div>
    //   )}
    // </div>

    //       <div className="col-span-1">
    //         <img className="h-8" alt="user_icon" src={USER_ICON} />
    //       </div>
    //     </div>
    <div className="grid grid-flow-col p-5 m-2 shadow-lg items-center">
      {/* Left section with hamburger icon and logo */}
      <div className="flex col-span-1 items-center">
        <img
          className="h-8 cursor-pointer"
          alt="icon"
          src={HAMBERGER_ICON}
          onClick={toggleMenuHandler}
        />
        <a href="/" className="ml-2">
          <img className="h-8" alt="logo" src={YOUTUBE_LOGO} />
        </a>
      </div>

      {/* Middle section with search bar and suggestions */}
      <div className="col-span-10 px-10 flex flex-col relative">
        <div className="flex w-full justify-center">
          <input
            className="w-1/2 border border-gray-400 rounded-l-full p-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=> setShowSuggestion(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            <img src={SEARCH_ICON} alt="search_icon" className="h-7" />
          </button>
        </div>
        {searchQuery && showSuggestion && (
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-1/2 border border-gray-400 rounded-b-md bg-white shadow-lg py-2 px-5 z-10">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="p-2 border-b border-gray-300 hover:bg-gray-100"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right section with user icon */}
      <div className="col-span-1 flex justify-end">
        <img className="h-8" alt="user_icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
