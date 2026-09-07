import React from "react";
import { ArrowUpRight } from "lucide-react";
function Consultant() {
  const features = [
    {
      title: "Expert-Led Learning",
      desc: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Comprehensive Curriculum",
      desc: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Interactive Workshops",
      desc: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Global Recognition",
      desc: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  return (
    <>
      <section className="w-full py-10 px-6 xl:px-16 bg-[#5712441A]">
        <div className="max-w-[1312px] mx-auto flex flex-col gap-[10px]">
          <h2 className="font-sans font-bold text-[24px] xl:text-[40px] text-primary">
            Training The Consultant
          </h2>
          <p className="text-[16px] xl:text-[18px] font-semibold text-primary">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-sm xl:text-base leading-[150%] text-main-text">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>

          <div className="bg-primary text-white rounded-xl p-6 xl:p-10 grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="font-bold xl:text-[18px] text-[16px] mb-1">
                  {f.title}
                </h3>
                <p className="text-[14px] xl:text-[18px] text-white leading-[150%]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <button className="self-start bg-primary text-white py-[10.5px] px-6 gap-2 rounded-md text-sm font-medium inline-flex items-center gap-2 hover:bg-primary-hover transition-colors">
            Learn More
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
      <section className="gap-[32px] xl:px-[64px] xl:py-[32px] px-[24px] py-[32px] bg-white">
        <div className="max-w-[1312px] mx-auto rounded-[8px] bg-primary text-center gap-[32px] xl:px-[64px] xl:py-[32px] px-[24px] py-[32px] items-center">
          <h2 className="font-semibold xl:text-[20px] text-[16px] leading-[150%] tracking-[3%] text-white font-sans">
            Want to accelerate professional growth and development at your
            organisation?
            <br />
            See how we can help.
          </h2>

          <button className="bg-white text-primary px-6 py-3 rounded-md text-sm font-medium">
            Book a Consultation
          </button>
        </div>
      </section>
    </>
  );
}

export default Consultant;
