"use client"
import { useState } from "react";
export default function SideChat({ isOpen }) {
    const [hovered, setHovered] = useState(false);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const handleLike = () => {
        setLiked(false);
        setDisliked(true);
    };

    const handleDislike = () => {
        setDisliked(false);
        setLiked(true);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText("hey we are dummy text for model");

        alert("Copied!");

    };
    return (

        <section className=" flex">

            <div className={`bg-white h-[100%] rounded-2xl border-1 overflow-hidden min-w-0  flex flex-col mt-2 transition-[flex-basis,opacity] duration-700 ease-in-out
   
        ${isOpen ? "basis-90 opacity-100" : "basis-0 opacity-0 pointer-events-none"}`}>
                {/* chat section*/}

                <div className="p-4 flex-1  overflow-y-auto  space-y-3 relative shrink-0" >


                    <div className=" place-self-end  w-53 font-sans whitespace-normal break-words hover:shadow-md  p-3 rounded-3xl  bg-gray-200 shrink-0"><span>hey we are dummy text for user
                    </span></div>
                           



                    <div className="  p-3 place-self-start w-70 h-100 left-5 font-sans  shrink-0                  "
                        // onMouseEnter={() => setHovered(true)}
                        // onMouseLeave={() => setHovered(false)}             
                        >
               <div>
                           <details>
    <summary class=" font-sans cursor-pointer ">Reasoning</summary>
    <div class="max-h-max p-2 border-1 hover:ring-2 hover:shadow-lg hover:ring-blue-500 mt-2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Praesent sit amet dui nec ligula pretium consequat.</p>
      <p>Aliquam erat volutpat. Integer euismod, nisi at facilisis luctus.</p>
      <p>Curabitur vel justo vitae sapien ultricies posuere.</p>
      <p>Extra content... Extra content... Extra content...</p>
      <p>Extra content... Extra content... Extra content...</p>
    </div>
  </details>
               </div>
                      <div className="mt-6">
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Verbordero debitis nam quidem sit nobis amet iusto voluptas eius praesentium magni, cumque quis, repudiandae impedit explicabo porro harum nisi dolore. Ratione?
                    Omnis reprehenderit nihil, voluptate architecto voluptatibus et nisi mollitia delectus similique quia facere at tenetur molestias odio assumenda pariatur culpa praesentium asperiores cupiditate libero placeat hic, nostrum quam. Sunt, inventore?
                    Voluptate unde sapiente perferendis incidunt velit modi cum facilis placeat, alias veritatis vitae sequi obcaecati quidem nobis tempore blanditiis amet ex ratione tenetur temporibus sit magni dolores. Odit, aperiam quis!
                    Perferendis soluta odit molestias omnis error mollitia eaque dolorum ea iusto facilis! Explicabo dolore voluptatibus mollitia aut quae quia nulla facere illo, beatae ipsam iste corrupti exercitationem? Eius, labore ex!
                    Quod sint eius quidem facilis ratione voluptate beatae saepe dolorum corrupti voluptates, earum fuga doloribus ipsam, cumque autem delectus magni consequatur! Illum obcaecati magni ducimus neque esse debitis voluptates cum!</span>
                      </div>
                        {true && (
                            <div className="  flex  w-[40%]  rounded-md  mt-5  ">
                                <div className="  w-10 h-10 flex items-center justify-center">
                                {!liked && (
                                     <button className={` text-black px-1 pt-1 hover:bg-[#F2CD88] hover:rounded-[40%]`}  onClick={handleLike}>
                                        <span class="material-symbols-outlined">
                                            thumb_up
                                        </span>
                                    </button>
                                )}
                                   </div>
                                   <div className=" w-10 h-10 flex items-center justify-center">  
                                {!disliked && (
                                  <button className={` text-black px-1 pt-1 hover:bg-[#F2CD88] hover:rounded-[40%]`}
  onClick={handleDislike}>
                                        <span class="material-symbols-outlined">
                                            thumb_down
                                        </span>
                                    </button> 
                                )}</div>
                               <div className="  w-10 h-10 flex items-center justify-center"> <button className=" text-black px-1 pt-1 hover:bg-[#F2CD88] hover:rounded-[40%]" onClick={handleCopy}>
                                    <span class="material-symbols-outlined">
                                        file_copy
                                    </span>
                                </button> </div>
                            </div>
                        )}

                    </div>
                </div>
                {/* input section */}
                <div className="flex justify-center items-center shrink-0">  
                     <div className=" border-2 font-sans  p-2  rounded-3xl mb-5  shrink-0">
                    <input type="text" placeholder="Enter enquery..." className=" focus:outline-none font-sans w-50 p-2" />

                    <button className="bg-[#091f2C] text-white  w-7 h-7   rounded-[50%]"><span class="material-symbols-outlined">
                        arrow_upward_alt
                    </span></button>

                </div></div>


            </div>

        </section>
    );
}

