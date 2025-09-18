
const MainChat = () => {

    return (
        <section className="w-full  bg-gray-100 flex flex-col items-center p-6 relative">
        <div className="text-6xl font-bold mt-16 text-center">Arky</div>
        <div className="mt-12 w-full max-w-2xl flex flex-col items-center space-y-4">
          <p className="text-sm">What's New</p>
      
          {/* Suggestions */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 justify-center w-full">
            <div className="flex-1 min-w-[200px] max-w-[300px] h-[100px] border border-gray-300 rounded-2xl bg-white shadow flex items-center justify-center text-center cursor-pointer">
              Suggestion 1
            </div>
            <div className="flex-1 min-w-[200px] max-w-[300px] h-[100px] border border-gray-300 rounded-2xl bg-white shadow  flex items-center justify-center text-center cursor-pointer">
              Suggestion 2
            </div>
            <div className="flex-1 min-w-[300px] max-w-[300px] h-[100px] border border-gray-300 rounded-2xl bg-white shadow  flex items-center justify-center text-center cursor-pointer">
              Suggestion 3
            </div>
            <div className="flex-1 min-w-[200px] max-w-[300px] h-[100px] border border-gray-300 rounded-2xl bg-white shadow  flex items-center justify-center text-center cursor-pointer">
              Suggestion 4
            </div>
          </div>
        </div>
      
        {/* Input Box */}
        <div className=" absolute top-[450px] w-full  max-w-2xl px-4">
          <div className="border-2 p-2 rounded-full flex items-center space-x-2 bg-white shadow ">
            <input
              type="text"
              placeholder="Enter messages..."
              className="flex-1 p-2 focus:outline-none"
            />
            <button className="bg-[#091f2C] text-white px-6 py-2 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">subdirectory_arrow_left</span>
            </button>
          </div>
        </div>
      </section>
      



    );

}

export default MainChat;
