import React from "react";

function Hero() {
  return (
    <section className="relative bg-[url('/tobams-herobg.jpg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center px-6 xl:px-16">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 items-center text-center flex flex-col gap-6 max-w-[1077px] mx-auto">
        <span className=" bg-white/10 text-center rounded-full font-medium text-white bg-black text-xs uppercase border border-white/30  px-4 py-2 opacity-100 flex ">
          WHAT WE DO
        </span>
        <h1 className="text-white font-sans font-bold text-3xl xl:text-5xl leading-tight ">
          Training and Development
        </h1>
        <p className="text-white font-sans font-semibold text-base xl:text-lg leading-[150%] tracking-normal">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today's ever-evolving landscape.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-primary-hover transition-colors">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
export default Hero;
