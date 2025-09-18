"use client"

export default function SideChat() {

    return (
      
  <section>
            
            <div className="bg-[#f9f9f9] w-[100%] h-[100%] rounded-2xl border-1   flex flex-col mt-2 ">               
                {/* chat section*/}

        <div className="p-4 flex-1 overflow-y-auto space-y-3 relative  mt-10" >
                   
                    
                <div className=" place-self-end  w-53 font-sans whitespace-normal break-words  p-3 rounded-3xl  bg-gray-200"><span>hey we are dummy text for user
                    </span></div>
               
                <div className=" place-self-start w-70  left-5 font-sans whitespace-normal break-words   "><span>hey we are dummy text for model</span></div>
        </div>
            {/* input section */}
             <div className="flex justify-center items-center">   <div className=" border-2 font-sans  p-2  rounded-3xl mb-5  ">
                    <input type="text"  placeholder="Enter enquery..." className=" focus:outline-none font-sans w-50 p-2"  />
                   
                    <button className="bg-[#091f2C] text-white  w-7 h-7   rounded-[50%]"> <span class="material-symbols-sharp">
arrow_upward
</span> </button>
                    
                </div></div>


            </div>

        </section>
    );
}
