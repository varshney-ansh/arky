
const SideBar = () => {
  return (
    <div className="h-[100%]  border-r border-gray-400 bg-white flex flex-col justify-between">
      {/* Top Section */}
      <div  className="flex flex-col justify-between">
        <h1 className="p-4 text-4xl ">Arky</h1>
         <div className="px-4 space-y-3">
          <a href="##"className="flex items-center space-x-2 rounded-4xl px-3 py-2 hover:bg-gray-100">
           
            <span>New Chat</span>
          </a>
          <a href="##"className="flex items-center space-x-2 rounded-4xl px-3 py-2 hover:bg-gray-100" >
           
            <span>Architectures</span>
          </a>
          <a href="##" className="flex items-center space-x-2 rounded-4xl px-3 py-2 hover:bg-gray-100" >
            <span>Design</span>
          </a>
       </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 space-y-3 mb-4">
        <button className="w-50 flex items-center justify-between rounded-4xl border px-3 py-2 hover:bg-gray-300">
          <span className="flex items-center space-x-2">
            
            <span>Settings</span>
          </span>
        </button>
        <button className="w-50 flex items-center justify-between rounded-4xl border px-3 py-2 hover:bg-gray-300">
 
          <span className="flex items-center ">
          <span className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center text-sm">N </span>
            <span>Profile</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
