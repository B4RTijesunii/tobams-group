import React from "react";
import learning from "../assets/learning.jpg";
import corporate from "../assets/corporate.jpg";

import LightningIcon from "../assets//lightning.svg?react";
import personalized from "../assets/personalized-training.jpg";
import capacity from "../assets/capacity.jpg";
import management from "../assets/management.jpg";

function LearningSystem() {
  return (
    <>
      <section className="bg-[#E9E2E7] py-12 px-6 xl:py-20 xl:px-16">
        <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center gap-10 xl:gap-16">
          <div className="w-64 xl:w-96 shrink-0 aspect-square">
            <img
              src={learning}
              alt="Learning Management System"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="rounded-2xl p-6 xl:p-10 text-center xl:text-left">
            <h2 className="font-sans font-bold text-2xl xl:text-3xl text-primary mb-4">
              Learning Management System
            </h2>
            <div className="bg-[#5712441A] rounded-2xl p-8 xl:p-10">
              <p className="font-sans font-normal text-base xl:text-lg leading-[150%] tracking-normal  text-main-text mb-6 text-justify">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest programming languages and
                development frameworks to soft skills training in leadership,
                effective communication and project management, TG Academy
                offers a wide range of courses to cater to diverse learning
                needs. With accessible and interactive learning materials,
                individuals can enhance their skills and stay ahead in today's
                competitive tech landscape.
              </p>
              <h3 className="font-sans font-semibold text-primary mb-3">
                Some of our courses include:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-main-text list-disc list-inside text-justify">
                <li>Business Analysis</li>
                <li>Design Thinking</li>
                <li>Effective Communication</li>
                <li>Entrepreneurship</li>
                <li>Career Development</li>
                <li>Business Model</li>
              </ul>
            </div>
            <button className="mt-6 bg-primary text-white px-6 py-3 rounded-md text-sm font-medium inline-flex items-center gap-2 hover:bg-primary-hover transition-colors">
              Learn More
              <span>↗</span>
            </button>
          </div>
        </div>
        <div className=""></div>
      </section>
      <section className="bg-white py-12 px-6 xl:py-20 xl:py-16">
        <div className=" mt-5 max-x-6xl px-6 flex flex-col xl:flex-row mx-auto items-center">
          <div className="w-full xl:w-1/2 shrink-0 order-1 xl:order-2 mb-5 mt-0">
            <img
              src={corporate}
              alt="Tobams Corporate Trainings"
              className="w-[602px] h-[346px] object-cover rounded-[56px_24px_23px_12px]"
            />
          </div>
          <div className=" w-full xl:w-1/2 order-2 xl:order-1 text-center xl:text-left xl:flex-1">
            <h2 className="text-main-text tracking-[0.03em] font-sans font-semibold text-2xl md:text-4xl leading-normal mb-4">
              Corporate Training
            </h2>
            <p className="text-subdued font-sans text-[14px] md:text-[18px] tracking-[0.03em] leading-[150%] gap-[24px] xl:text-[18px]">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company's goals and values.
            </p>
            <ul className="space-y-2  text-subdued text-justify mt-5 xl:text-[18px] text-[14px]">
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Leadership Training
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Strategic Planning and Imlementation
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Project Management
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Sustainability Training
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Customised Training
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* second div */}
      <section className="bg-white py-12 px-6 ">
        <div className=" mt-5 max-x-6xl px-6 flex flex-col xl:flex-row mx-auto items-stretch gap-10 xl:gap-16">
          <div className="w-full xl:w-1/2 shrink-0 ">
            <img
              src={personalized}
              alt="Tobams Personalized Individual Training"
              className="w-full h-full object-cover rounded-[33px_8px_8px_8px]"
            />
          </div>
          <div className=" w-full xl:w-1/2 text-center xl:text-left xl:flex-1 gap-[21px]">
            <h2 className="text-main-text tracking-[0.03em] font-sans font-semibold text-2xl md:text-4xl leading-normal mb-4">
              Personalized Individual Training
            </h2>
            <p className="text-subdued font-sans text-[14px] md:text-[18px] tracking-[0.03em] leading-[150%] gap-[24px] xl:text-[18px]">
              Begin a journey of lifelong learning and professional development
              with Tobams Group's diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today's professionals.
            </p>
            <ul className="space-y-2  text-subdued text-justify mt-5 xl:text-[18px] text-[14px]">
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Leadership Development
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Soft Skills Development
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Industry Specific Knowledge
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Technical Skills Enhancement
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Time Management and Productivity
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Career Development
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* third div */}
      <section className="bg-white py-12 px-6 ">
        <div className=" mt-5 max-x-6xl px-6 flex flex-col xl:flex-row mx-auto items-stretch gap-10 xl:gap-16">
          <div className="w-full xl:w-1/2 shrink-0 order-1 xl:order-2 mb-5 mt-0">
            <img
              src={capacity}
              alt="Tobams Capacity Development"
              className="w-full h-full object-cover rounded-[56px_24px_23px_12px]"
            />
          </div>
          <div className=" w-full xl:w-1/2 order-2 xl:order-1 text-center xl:text-left xl:flex-1">
            <h2 className="text-main-text tracking-[0.03em] font-sans font-semibold text-2xl md:text-4xl leading-normal mb-4">
              Capacity Development
            </h2>
            <p className="text-subdued font-sans text-[14px] md:text-[18px] tracking-[0.03em] leading-[150%] gap-[24px] xl:text-[18px]">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <ul className="space-y-2  text-subdued text-justify mt-5 xl:text-[18px] text-[14px]">
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Tailored Training Programs
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Expert-Led Workshops
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Personalized Mentorship
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Technical Skills Enhancement
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Collaborative Learning Environment
              </li>
              <li className="flex items-start gap-2">
                <LightningIcon className="w-4 h-4 text-primary mt-1 shrink-0" />
                Ongoing Support and Resources
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default LearningSystem;
