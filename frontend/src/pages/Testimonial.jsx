import React, { useEffect, useState } from "react";
import { testimonials } from "../data/text";

// Renders 5 stars — reads item.rating (supports halves), defaults to 5
const StarRating = ({ rating = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating);
      const half = !filled && i < rating;
      return (
        <svg key={i} viewBox="0 0 24 24" className="w-5 h-5">
          {half && (
            <defs>
              <linearGradient id={`hg-${i}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
          )}
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={filled ? "#f59e0b" : half ? `url(#hg-${i})` : "none"}
            stroke="#f59e0b"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    })}
  </div>
);

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="w-full py-10 md:py-20 flex justify-center bg-[#f7f3ef]">
      <div className="relative w-full max-w-2xl h-[420px]">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col gap-4 items-center text-center p-4 md:p-8 rounded-2xl bg-[#f7f3ef] transition-all duration-500 ease-in-out ${
              i === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-90 z-0"
            }`}
          >
            {/* Profile image */}
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="w-20 h-20 opacity-25 object-cover"
            />

            {/* ★ Stars — sits right below the photo */}
            <StarRating rating={item.rating ?? 5} />

            {/* Quote */}
            <p className="text-base md:text-xl text-dark font-heading">
              "{item.dsc}"
            </p>

            {/* Name + position */}
            <div>
              <h6 className="text-sm md:text-lg text-dark font-body font-semibold">
                {item.name}
              </h6>
              <p className="text-sm text-dark/60 font-body">{item.positions}</p>
            </div>
          </div>
        ))}

        {/* Prev / Next buttons */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-6 md:static md:gap-0">
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-400 text-white flex items-center justify-center transition md:absolute md:left-[-48px] md:top-1/2 md:-translate-y-1/2"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-400 text-white flex items-center justify-center transition md:absolute md:right-[-48px] md:top-1/2 md:-translate-y-1/2"
          >
            ❯
          </button>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-[-28px] inset-x-0 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary-600 w-4" : "bg-primary-600/30 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
