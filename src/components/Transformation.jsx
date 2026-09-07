import React from "react";
import LightningIcon from "../assets/lightning.svg?react";
import transformation from "../assets/transformation.jpg";
import { ArrowUpRight } from "lucide-react";

function Transformation() {
  const items = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="py-12 px-6 xl:py-20 xl:px-16">
      <div className="max-w-[1312px] mx-auto bg-[#EF435333] rounded-[16px] p-6 xl:p-10 flex flex-col gap-6">
        <div className="w-full">
          <p className="xl:text-[20px] text-[14px] text-[#1671D9] italic font-semibold">
            Learning With Our CEO:
          </p>
          <h2 className="font-sans font-semibold italic text-primary text-[20px] xl:text-[32px]">
            Transformation Hub With Jite Newton
          </h2>
          <p className="text-[14px] xl:text-[18px] leading-[150%] text-main-text mt-2">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you're seeking to advance your career
            or enhance your leadership skills, the Transformation Hub provides a
            transformative learning experience to unlock your full potential and
            drive success in your endeavours.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-stretch gap-6">
          <div className="w-full xl:w-1/2 xl:relative">
            <img
              src={transformation}
              alt="Transformation Hub"
              className="w-full h-auto xl:absolute xl:inset-0 xl:h-full rounded-[8px] object-cover"
            />
          </div>

          <div className="w-full xl:w-1/2 flex flex-col gap-4 bg-[#FDE4E7] p-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 radius-[12px] gap-2.5">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-white p-[16px] text-[14px] xl:text-[18px] font-normal text-main-text"
                >
                  <LightningIcon className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <button className="self-start bg-primary text-white px-6 py-3 rounded-sm text-sm font-semibold inline-flex items-center gap-2">
              Learn More
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transformation;
