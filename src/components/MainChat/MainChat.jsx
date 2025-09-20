"use client";
import React, { useState } from "react";

const MainChat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const suggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4"];
  
  // Function to handle sending message
  const handleSend = () => {
    if (!inputValue.trim()) return;

    // 1. User message add karo
    const newMessage = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    // 2. Input clear
    setInputValue("");

    // 3. Fake AI reply (2 second delay ke baad)
    setTimeout(() => {
      const botReply = { text: `🤖 AI Reply for: "${newMessage.text}"`, sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    }, 1500);
  };
  return (
    <section className="w-full h-[calc(100vh-64px)] bg-gray-100 flex flex-col items-center  relative ">
         
      <div className="absolute bottom-0">
      {messages.length === 0 && (
        <>
         <div className="text-6xl font-rebound mt-16 text-center">Arky</div>
        <div className="mt-12 w-full max-w-2xl flex flex-col items-center space-y-4">
          <p className="text-sm">What's New</p>
        
          {/* Suggestions */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center w-full ">
            {suggestions.map((sugg, index) => (
              <div key={index} onClick={() => setInputValue(sugg)} className="flex-1  min-w-[220px] max-w-[400px] h-[80px] border border-gray-300 rounded-3xl bg-white shadow flex items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition">
                {sugg}
              </div>
            ))}
          </div>
        </div>
      </>
      )}
      {/* chat box */}
       {messages.map((msg, i) => (
  <div key={i} className={`flex w-full mb-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
    <div className={`p-3 rounded-2xl  break-words sm:max-w-md lg:max-w-xl xl:max-w-3xl ${
        msg.sender === "user"
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      {msg.text}
    </div>
  </div>
))}

      
        {/* Input Box */}
        <div className="mt-10 mb-6 w-full px-4 ">
          <div className=" w-full  border-2 p-2 rounded-full flex items-center space-x-2 ">
            <input type="text" placeholder="Enter messages..." className="flex-1 p-2 focus:outline-none" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  onKeyDown={(e) => e.key === "Enter" && handleSend()} />
            <button className="bg-[#091f2C] text-white px-6 py-2 rounded-full flex items-center justify-center"   onClick={handleSend}  >
              <span className="material-symbols-outlined">subdirectory_arrow_left</span> </button>
          </div>
        </div>
      </div>
    </section>




  );

}

export default MainChat;
