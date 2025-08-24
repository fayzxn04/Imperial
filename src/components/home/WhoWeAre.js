/* eslint-disable @next/next/no-img-element */
"use client";
import {
  IconRuler,
  IconArrowLeft,
  IconShieldLock,
  IconSwimming,
} from "@tabler/icons-react";
import { useState } from "react";

const WhoWeAre = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="mx-14 my-5 p-4">
      <div className="flex flex-col ">
        <span className="uppercase bg-[#a6895a] text-white px-4 rounded-4xl py-2 cursor-pointer w-fit ">
          Who we are
        </span>
        <div className="flex justify-between items-center mt-5 mb-3">
          <h1 className="text-6xl font-clash">
            Excellence Defined in Real Estate
          </h1>
          <button className="cursor-pointer mt-6 px-1.5 py-1 gap-2 via-transparent to-transparent text-[#a6895a] font-medium rounded-full flex items-center border border-[#a6895a] bg-[#FFFFFF2E] backdrop-blur-9 w-fit h-fit text-nowrap font-clash">
            KNOW ABBOUT US
            <img
              src="/icons/link.svg"
              alt="svg"
              className="group-hover:-rotate-45 transition-transform duration-200"
            />
          </button>
        </div>
        <p className="max-w-[900px] font-clash text-[#666666]">
          Imperial Holdings builds exceptional homes in Dar es Salaama&apos;s
          most prestigious neighborhoods. Our projects offer refined design,
          top-tier amenities, and oceanfront views.
        </p>
      </div>

      <div className="md:h-[440px] pt-5 flex max-md:flex-col justify-between gap-5 md:gap-10 w-full items-end ">
        <div className="md:w-[30%]">
          {data[active].icon}
          <h3 className="text-2xl pt-2 font-clash">{data[active].title}</h3>
          <p className="text-text pt-4 font-clash">
            {data[active].description}
          </p>
        </div>
        <div className="flex md:w-[70%] gap-4 h-full">
          {data.map((item, index) => (
            <div key={index}>
              <div
                className={`flex flex-col items-center justify-between ${
                  active === index ? "hidden" : "flex"
                } cursor-pointer md:text-3xl text-black/10 font-bold uppercase border-l-2 border-black/10 h-full w-fit md:px-4`}
                onClick={() => setActive(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g opacity="0.12">
                    <path
                      d="M5 12H19M5 12L9 16M5 12L9 8"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <div
                  className="md:text-2xl font-bold whitespace-nowrap font-clash"
                  style={{
                    writingMode: "sideways-lr",
                    textOrientation: "mixed",
                  }}
                >
                  {item.title}
                </div>
                <h6
                  className="text-2xl font-bold whitespace-nowrap"
                  style={{
                    writingMode: "sideways-lr",
                    textOrientation: "mixed",
                  }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </h6>
              </div>
              {/* Break */}
              <div
                className={`relative h-full overflow-hidden ${
                  active === index
                    ? "w-full opacity-100 transition-all duration-700 ease-out"
                    : "w-0 opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`md:h-full rounded-md h-full w-full object-cover ${
                    active === index
                      ? "transition-transform duration-700 ease-out"
                      : ""
                  }`}
                />
                <div className="absolute px-2 md:px-4 py-4 -right-4 lg:right-5 md:right-0 bottom-0 w-[80px] md:w-[150px] origin-bottom-right">
                  <h3 className="md:text-[40px] max-md:hidden text-xl md:leading-[48px]">
                    {(index + 1).toString().padStart(2, "0")}
                  </h3>
                  <p className="md:text-sm text-xs lg:text-nowrap">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

const data = [
  {
    title: "Refined Craftsmanship",
    description:
      "Every residence is built with meticulous attention to detail, combining modern architecture with premium materials for lasting elegance.",
    icon: <IconRuler size={34} />,
    image: "/images/crafted.webp",
  },
  {
    title: "Elevated Amenities",
    description:
      " From private pools to rooftop wellness spaces, our properties are curated to offer a lifestyle of comfort, convenience, and sophistication.",
    icon: <IconSwimming size={34} />,
    image: "/images/ameneties.webp",
  },
  {
    title: "Trusted Living",
    description:
      " Rooted in integrity and a customer-first approach, we deliver secure, high-value homes that exceed expectations in every way.",
    icon: <IconShieldLock size={34} />,
    image: "/images/trusted.webp",
  },
];
