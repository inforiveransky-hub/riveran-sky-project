import React, { useState } from "react";
import { rooms, seoData } from "../data/text";
import { Link } from "react-router-dom";
import BookPopUp from "../common/BookPopUp";
import SEO from "../common/SEO";
import AOSWrapper from "../common/AOSWrapper";

const Rooms = () => {
  const [openBooking, setOpenBooking] = useState(false);
  return (
    <>
      <SEO
        title={seoData.rooms.title}
        description={seoData.rooms.description}
        keywords={seoData.rooms.keywords}
        ogImage={seoData.rooms.ogImage}
        canonical={seoData.rooms.canonical}
        ogUrl={seoData.rooms.canonical}
      />

      <section className="">
        <div className="about-us">
          <div className="absolute bg-black/70 w-full h-[70vh]" />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark z-10" /> */}
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src="/path-to-amenities-hero.jpg"
              alt="Amenities"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <AOSWrapper animation="zoom-in" duration={1200}>
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-4 tracking-wide">
                  Rooms
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                  Discover world-class facilities designed for your comfort and
                  enjoyment
                </p>
              </AOSWrapper>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 md:px-10 lg:px-20 py-14 lg:py-24 ">
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            {rooms.map((room, index) => {
              let colSpan =
                index < 3
                  ? "lg:col-span-4"
                  : index === 3
                    ? "lg:col-span-4"
                    : "lg:col-span-8";

              return (
                <div
                  key={index}
                  className={`w-full relative group overflow-hidden rounded-xl shadow-lg 
          col-span-12 md:col-span-6 ${colSpan}`}
                >
                  {/* IMAGE */}
                  <img
                    src={room.image}
                    alt={room.title}
                    loading="lazy"
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h3 className="text-xl font-heading font-semibold">
                      {room.title}
                    </h3>
                    {/* <p className="text-sm text-white/80 mt-1">
                    Price from {room.price}
                  </p> */}
                    <button
                      onClick={() => setOpenBooking(true)}
                      className="inline-block mt-4 bg-primary px-5 py-2 text-sm font-semibold rounded-md hover:bg-primary/90 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <BookPopUp isOpen={openBooking} onClose={() => setOpenBooking(false)} />
      </section>
    </>
  );
};

export default Rooms;
