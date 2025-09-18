const NavBar = () =>{
    return(
        <nav className=" relative w-[100%] bg-blue-200 h-15 ">
          <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          <a href="#" className="rounded border px-3 py-2"><span className="material-symbols-outlined ">menu_open</span></a>
          <a href="" className="rounded px-3 py-2 "> Arky</a>
         </div>
        
         </div>
        </nav>
    );

}

export default NavBar;