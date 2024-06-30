import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API polling🚨
      console.log("API polling ✈ ");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "✈ ",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Ekata",
        message: liveMessage,
      })
    );
    setLiveMessage(""); // Clear the input field after submitting
  };
  return (
    <>
      <div className="ml-2 w-full h-[600px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={handleSubmit}
      >
        <input
          className="w-96 px-2 border border-gray-100"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
