import React from "react";
import management from "../assets/management.jpg";
import LightningIcon from "../assets//lightning.svg?react";
function Management() {
  const highlights = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];
  return (
    <section className="py-12 px-6 xl:py-20 xl:px-16">
      <div className="max-w-[1312px] mx-auto rounded-[20px] p-6 xl:p-10 flex flex-col xl:flex-row items-stretch gap-10 xl:gap-16 bg-[#2C0922]">
        <h2 className="xl:hidden order-1 font-sans font-semibold text-2xl leading-[130%] text-white">
          Management Development Program
        </h2>
        <div className="order-2 xl:order-1 w-full xl:w-1/2 shrink-0">
          <img
            src={management}
            alt="Management Development Program"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="order-3 xl:order-2 w-full xl:w-1/2 text-white flex flex-col gap-4">
          <h2 className="hidden xl:block font-sans font-semibold text-[40px] xl:text-4xl leading-[130%] tracking-normal">
            Management Development Program
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-sm xl:text-base leading-[150%] text-white/80">
              Tobams Group offers a comprehensive Management Development Program
              designed to equip corporate organisations with the high-performing
              leaders they need to thrive.
            </p>
            <p className="font-sans text-sm xl:text-base leading-[150%] text-white/80">
              Our program includes workshops, seminars, coaching sessions,
              online courses, and experiential learning opportunities designed
              to improve leadership, strategic thinking, communication, and
              other essential managerial competencies for corporate
              organisations.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-[#8F6182] rounded-[8px] px-5 py-3 text-sm font-medium"
              >
                <LightningIcon className="w-4 h-4 shrink-0 text-white" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Management;
