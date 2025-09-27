"use client";
import React, { useState, useRef, useEffect } from "react";

const MainChat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const suggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4"];
  const chatEndRef = useRef(null);
  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessage = { text: inputValue, sender: "user", id: Date.now() };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setTimeout(() => {
      const botReply = { text: `AI Reply for: "${newMessage.text}"`, sender: "bot", id: Date.now() + 1 };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <section className="w-full h-screen overflow-hidden  flex flex-col items-center bg-[#fff]">
      {/* Chat container */}
      <div className=" flex-1 w-full  p-4 flex flex-col overflow-y-auto gap-2 items-center">
      <div className="flex-1 w-full max-w-3xl p-4 flex flex-col  gap-2">
        {/* Placeholder when no messages */}
        {messages.length === 0 && (
          <div className="flex flex-col m-auto space-y-4 w-full">
            {/* <div className="text-6xl  font-rebound text-center">Arky</div> */}
            <p className="text-sm">What's New</p>
      {/* suggestion box */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4  justify-center w-full">
              {suggestions.map((sugg, index) => (
                <div  key={index} onClick={() => setInputValue(sugg)}
                  className="flex-1 min-w-[235px] max-w-[400px] h-[80px] border-[#eceff0] border rounded-lg bg-white  flex items-center justify-center text-center cursor-pointer hover:bg-[#f3f4f6] transition"  >
                  {sugg}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Messages */}
        {messages.map((msg) => ( 
          <div
            key={msg.id}
            className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-2xl break-words max-w-[75%] sm:max-w-md lg:max-w-xl xl:max-w-3xl ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
          </div>
            </div>
        ))}
      </div>
      <div ref={chatEndRef} />
      </div>
      {/* Input */}
      <div className="w-full max-w-3xl p-4 flex gap-2">
      <div className=" w-full  p-2 rounded-full flex items-center border-[#eceff0] border "> 
        <input type="text" placeholder="Enter messages..."  className="flex-1 p-2 rounded-full   focus:outline-none "
          value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} />
        <button   className="bg-[#01e5e3] text-[#020203] px-6 py-2 rounded-full flex items-center justify-center cursor-pointer" onClick={handleSend} >
          <span className="material-symbols-outlined">subdirectory_arrow_left</span>
        </button>
      </div>
     </div>
    </section>
  );
};

export default MainChat;
