"use client";
import { useState } from "react";
import awsIcons from "@/app/lib/awsicons";
import AISideIcon from "@/component/AiChat/sideChat_pop"; 
import Image from "next/image";


function getAwsIconsByCategory() {
  const categories = {};
  Object.entries(awsIcons).forEach(([name, path]) => {
    const match = path.match(/Architecture-Service-Icons\/(Arch_[^/]+)/);
    if (match) {
      const category = match[1].replace("Arch_", "");
      if (!categories[category]) categories[category] = [];
      categories[category].push({ name, iconPath: path });
    }
  });
  return categories;
}

export default function AiChat() {
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [ShapeShow, setShape] = useState(false);
  const [ChatShow, setChat] = useState(false);
  const [categoryStates, setCategoryStates] = useState(
    Object.keys(getAwsIconsByCategory()).reduce((acc, category) => {
      acc[category] = { isOpen: false, isFavorite: false };
      return acc;
    }, {})
  );

  const toggleCategoryOpen = (category) => {
    setCategoryStates((prev) => ({
      ...prev,
      [category]: { ...prev[category], isOpen: !prev[category].isOpen },
    }));
  };

  const toggleCategoryFavorite = (e, category) => {
    e.stopPropagation();
    setCategoryStates((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        isFavorite: !prev[category].isFavorite,
      },
    }));
  };

  const categories = getAwsIconsByCategory();

  return (
    <section className="flex relative">
      {/* Side menu */}
      <div className="bg-[#DAE5F9] ml-2  w-13 h-70 rounded hover:ring-black hover:ring-1  ">
        <div className="mt-3 ">

          <button onMouseEnter={() => setChat(true)}
            onMouseLeave={() => setChat(false)}
            onClick={() =>
              setActiveTab(activeTab === "chat" ? null : "chat")
            }
            className={`p-2 rounded-md ml-1 ${activeTab === "chat" && "border-2 border-gray-500 shadow-lg "
              }`}
          >
            <span className="material-symbols-outlined">chat</span>
          </button>
          {ChatShow && (
            <div className="absolute left-18 top-3 bg-black shadow-md text-white rounded-2xl z-100 px-4 py-3 ">

              <div >  Chat </div>

            </div>
          )}



          <button onMouseEnter={() => setShape(true)}
            onMouseLeave={() => setShape(false)}
            onClick={() =>
              setActiveTab(activeTab === "icon" ? null : "icon")
            }
            className={`p-2 rounded-md ml-1 ${activeTab === "icon" && "border-2 border-gray-500 shadow-lg"
              }`}
          >
            <span className="material-symbols-rounded">shapes</span>
          </button>
          {ShapeShow && (
            <div className="absolute z-100 left-18 top-17 bg-black shadow-md text-white  rounded-2xl  px-4 py-3 ">

              <div >  Shapes</div>

            </div>
          )}
        </div>
      </div>

      {/* Chat Section */}
      {activeTab === "chat" && (
        <div className="absolute  left-18 ">
          <div className="bg-white h-[100%] border-1 rounded shadow-lg  flex flex-col mt-0">
            {/* chat section*/}
            <div className="p-4 overflow-y-auto h-130 space-y-3 relative">


              <div className=" place-self-end  w-53 font-sans whitespace-normal break-words hover:shadow-md  p-3 rounded-2xl  bg-gray-200 shrink-0"><span>hey we are dummy text for user
              </span></div>




              <div className=" place-self-start w-70  left-5 font-sans  "            >
                <div className=''>
                  <details>
                    <summary className=" font-sans cursor-pointer ">Reasoning</summary>
                    <div className="max-h-max p-2 border-1 hover:ring-2 hover:shadow-lg hover:ring-blue-500 mt-2">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <p>Praesent sit amet dui nec ligula pretium consequat.</p>
                      <p>Aliquam erat volutpat. Integer euismod, nisi at facilisis luctus.</p>
                      <p>Curabitur vel justo vitae sapien ultricies posuere.</p>
                      <p>Extra content... Extra content... Extra content...</p>
                      <p>Extra content... Extra content... Extra content...</p>
                    </div>
                  </details>
                </div>



                <div className=" mt-6">
                  <div className="flex gap-4">
                    <div className="ml-4"> <Image src="/brand/logo-black.svg" alt="logo" width={20} height={20} /> </div>
                    <div><span>here a response....</span> </div>
                  </div>

                  <div className="mt-2 ml-3"> <span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Verbordero debitis nam quidem sit nobis amet iusto voluptas eius praesentium magni, cumque quis, repudiandae impedit explicabo porro harum nisi dolore. Ratione?
                    Omnis reprehenderit nihil, voluptate architecto voluptatibus et nisi mollitia delectus similique quia facere at tenetur molestias odio assumenda pariatur culpa praesentium asperiores cupiditate libero placeat hic, nostrum quam. Sunt, inventore?
                    Voluptate unde sapiente perferendis incidunt velit modi cum facilis placeat, alias veritatis vitae sequi obcaecati quidem nobis tempore blanditiis amet ex ratione tenetur temporibus sit magni dolores. Odit, aperiam quis!
                    Perferendis soluta odit molestias omnis error mollitia eaque dolorum ea iusto facilis! Explicabo dolore voluptatibus mollitia aut quae quia nulla facere illo, beatae ipsam iste corrupti exercitationem? Eius, labore ex!
                    Quod sint eius quidem facilis ratione voluptate beatae saepe dolorum corrupti voluptates, earum fuga doloribus ipsam, cumque autem delectus magni consequatur! Illum obcaecati magni ducimus neque esse debitis voluptates cum!</span>       </div>

                </div>




              </div>
            </div>
            {/* input section */}
            <div className="flex justify-center items-center mt-5">
              <div className=" border-2 font-sans hover  p-2 hover:ring-2 hover:shadow-lg hover:ring-orange-400  mb-5  shrink-0">
                <input type="text" placeholder="Enter enquery..." className=" focus:outline-none font-sans w-50 p-2" />

                <button className="bg-[#091f2C] text-white hover:bg-orange-300 hover:text-black  w-7 h-7   rounded-[50%]"><span className="material-symbols-outlined">
                  arrow_upward_alt
                </span></button>

              </div></div>

          </div>
        </div>
      )}

      {/* Icon Section */}

      {activeTab === "icon" && (
        <div className="absolute  left-18 border-black w-[320px] max-h-[80vh] rounded shadow-lg overflow-y-auto">
          {Object.entries(categories).map(([category, icons]) => (
            <div key={category}>
              <hr />
              <div
                className="flex justify-between items-center cursor-pointer bg-white px-4 py-3 hover:bg-gray-200"
                onClick={() => toggleCategoryOpen(category)}
              >
                <span className="font-semibold text-gray-800">{category}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => toggleCategoryFavorite(e, category)}
                  >
                    {categoryStates[category]?.isFavorite ? "★" : "☆"}
                  </button>
                  <span
                    className={`material-symbols-outlined transform transition-transform duration-300 ${categoryStates[category]?.isOpen
                        ? "rotate-180"
                        : "rotate-0"
                      }`}
                  >
                    expand_more
                  </span>
                </div>
              </div>

              {/* Icons Grid */}
              {categoryStates[category]?.isOpen && (
                <div className=" bg-white p-4 shadow relative">
                  <div className="flex flex-wrap ">
                    {icons.reduce((rows, iconObj, index) => {
                      if (index % 5 === 0) rows.push([]);
                      rows[rows.length - 1].push(iconObj);
                      return rows;
                    }, []).map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="flex gap-5 mt-2 first:mt-0"
                      >
                        {row.map(({ name, iconPath }) => (
                          <AISideIcon
                            key={name}
                            iconPath={iconPath}
                            name={name}
                            onHover={setHoveredIcon}
                            onLeave={() => setHoveredIcon(null)}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Hovered Icon Popup */}
      <div className="fixed  left-105 mt-50 rounded-lg  items-center">

        {hoveredIcon && (
          <div
            className="z-50  bg-[#88F2B6] shadow-lg rounded-md p-4 flex flex-col items-center"
            style={{
              top: hoveredIcon.y + 10,
              left: hoveredIcon.x + 10,
            }}
          >
            <Image
              alt={hoveredIcon.name}
              src={hoveredIcon.iconPath}
              height={80}
              width={80}
            />
            <p className="mt-2 font-semibold text-gray-800">{hoveredIcon.name}</p>
          </div>
        )}
      </div>
    </section>
  );
}
