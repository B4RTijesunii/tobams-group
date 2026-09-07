function CTA() {
  return (
    <section className="w-full py-10 px-6 xl:px-16 bg-[#1D0617] border-[#C4C4C4] border-b">
      <div className="max-w-328 mx-auto flex flex-col xl:flex-row items-center justify-between gap-6 ">
        <div>
          <p className="text-sm text-white text-[14px]">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="font-sans font-bold text-[20px] xl:text-2xl text-white mt-1">
            Let's work together to create a difference
          </h2>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-sm text-sm font-medium shrink-0 gap-5">
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default CTA;
