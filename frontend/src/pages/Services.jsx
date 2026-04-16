import React from "react";
import { sectionOne, seoData } from "../data/text";
import SEO from "../common/SEO";
import AOSWrapper from "../common/AOSWrapper";
const colors = {
  primary: {
    DEFAULT: "#DD3333",
    50: "#FBE9E9",
    100: "#F8D3D3",
    200: "#F0A8A8",
    300: "#E97C7C",
    400: "#E25050",
    600: "#AF1D1D",
    700: "#831616",
    800: "#570F0F",
    900: "#2C0707",
    950: "#160404",
  },
  dark: "#1B1B1B",
};
const Services = () => {
  return (
    <div>
      {" "}
      <SEO
        title={seoData.services.title}
        description={seoData.services.description}
        keywords={seoData.services.keywords}
        ogImage={seoData.services.ogImage}
        canonical={seoData.services.canonical}
        ogUrl={seoData.services.canonical}
      />
      <section
        className="flex flex-col"
        style={{
          background: `radial-gradient(circle at top left, ${colors.primary[50]}, #ffffff 40%, ${colors.primary[100]} 80%)`,
          color: "#111827",
        }}
      >
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
                  Services
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                  Experience luxury and comfort with our premium amenities
                </p>
              </AOSWrapper>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 container mx-auto px-5 md:px-10 lg:px-20 py-14 lg:py-24 ">
          {sectionOne.map((item, i) => (
            <div
              key={i}
              className="flex items-center flex-col md:flex-row gap-4 md:gap-10 md:h-[400px] bg-white shadow-xl"
            >
              <div className="w-full h-full">
                <img
                  src={item.img}
                  alt={item.heading}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full p-2 md:p-14">
                <h5 className="text-sm tracking-widest text-primary mb-4">
                  {item.heading}
                </h5>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-dark leading-tight mb-6">
                  {item.title}
                </h2>
                <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed mb-4">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
