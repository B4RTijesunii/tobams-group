import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aishaImg from "../assets/Aisha.png";
import johnImg from "../assets/John.png";
import chinonsoImg from "../assets/Chinonso.png";
import lastImg from "../assets/peek.jpg";

function Testimonials() {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Aisha Yusuf",
      role: "Founder, CraftHub NG",
      image: aishaImg,
      text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    },
    {
      name: "John Davies",
      role: "Marketing Manager, E-Commerce Emporium",
      image: johnImg,
      text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    },
    {
      name: "Chinonso Nwankwo",
      role: "HR Director, FutureTech Solutions",
      image: chinonsoImg,
      text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    },
    {
      name: "Sarah Johnson",
      role: "CEO of Tech Innovations Inc.",
      image: lastImg,
      text: "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector("[data-card]");
      const cardWidth = card ? card.offsetWidth + 16 : 300; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-10 px-6 xl:px-16 bg-white">
      <div className="max-w-328 mx-auto flex flex-col gap-6">
        <h2 className="font-sans font-bold text-2xl xl:text-3xl text-black text-center">
          Testimonials
        </h2>

        <div className="w-full max-w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2 scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-card
                className="shrink-0 w-full sm:w-[60%] xl:w-[29%] border-l-2 border-[#F04354] rounded-md p-5 flex flex-col gap-3 bg-white shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-main-text">
                      {t.name}
                    </p>
                    <p className="text-xs text-subdued">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-main-text leading-[150%]">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-lg bg-[#F04354]/10 flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-[#F04354]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-lg bg-[#F04354]/10 flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4 text-[#F04354]" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
