// import React from "react";
// import one from "../../assets/aboutPage/gall-1.webp";
// import two from "../../assets/aboutPage/gall-2.webp";
// import three from "../../assets/aboutPage/gall-3.webp";
// import four from "../../assets/aboutPage/gall-4.webp";
// import five from "../../assets/aboutPage/gall-5.webp";
// import six from "../../assets/aboutPage/gall-6.webp";
// import seven from "../../assets/aboutPage/gall-7.webp";
// import one1 from "../../assets/aboutPage/gallary-one.webp";
// import two2 from "../../assets/aboutPage/gallary-two.webp";
// import three3 from "../../assets/aboutPage/gallary-three.webp";
// import four4 from "../../assets/aboutPage/gallary-four.webp";
// import five5 from "../../assets/aboutPage/gallary-six.webp";
// import six6 from "../../assets/aboutPage/gallary-seven.webp";
// import seven7 from "../../assets/aboutPage/gallary-eghith.webp";
// const HomeGallery = () => {
//   return (
//     <section className="">
// <div className="about-us">
//   <div className="absolute bg-black/50 w-full h-[70vh]" />
//   <div className="w-full h-full flex items-center justify-center relative">
//     <h1 className="text-5xl lg:text-7xl font-heading font-semibold text-white text-center">
//       Gallery
//     </h1>
//   </div>
// </div>
//       <div className="container mx-auto px-5 md:px-10 lg:px-20 ">
//         <div className="flex flex-col md:flex-row w-full h-full">
//           <div className="flex flex-col w-full">
//             <div className="w-full">
//               <img
//                 src={one}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-full">
//               <img
//                 src={two}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col w-full">
//             <div className="w-full">
//               <img
//                 src={three}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-full">
//               <img
//                 src={four}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//           <div className="w-full">
//             <img
//               src={five}
//               alt=""
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />
//           </div>
//           <div className="flex flex-col w-full">
//             <div className="w-full">
//               <img
//                 src={six}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-full">
//               <img
//                 src={seven}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>{" "}
//       </div>
//       <div className="container mx-auto px-5 md:px-10 lg:px-20 ">
//         <div className="flex flex-col md:flex-row w-full h-full">
//           <div className="flex flex-col w-full">
//             <div className="w-full">
//               <img
//                 src={one1}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-full">
//               <img
//                 src={two2}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col w-full">
//             <div className="w-full">
//               <img
//                 src={three3}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-full">
//               <img
//                 src={four4}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//           <div className="w-full">
//             <img
//               src={five5}
//               alt=""
//               className="w-full h-full object-cover"
//               loading="lazy"
//             />
//           </div>
//           <div className="flex flex-col w-full">
//             <div className="w-full">
//               <img
//                 src={six6}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-full">
//               <img
//                 src={seven7}
//                 alt=""
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>{" "}
//       </div>
//     </section>
//   );
// };

// export default HomeGallery;

import React, { useState } from "react";
import one from "../../assets/aboutPage/gall-1.webp";
import two from "../../assets/aboutPage/gall-2.webp";
import three from "../../assets/aboutPage/gall-3.webp";
import four from "../../assets/aboutPage/gall-4.webp";
import five from "../../assets/aboutPage/gall-5.webp";
import six from "../../assets/aboutPage/gall-6.webp";
import seven from "../../assets/aboutPage/gall-7.webp";
import one1 from "../../assets/aboutPage/gallary-one.webp";
import two2 from "../../assets/aboutPage/gallary-two.webp";
import three3 from "../../assets/aboutPage/gallary-three.webp";
import four4 from "../../assets/aboutPage/gallary-four.webp";
import five5 from "../../assets/aboutPage/gallary-six.webp";
import six6 from "../../assets/aboutPage/gallary-seven.webp";
import seven7 from "../../assets/aboutPage/gallary-eghith.webp";
import AOSWrapper from "../../common/AOSWrapper";

const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  one1,
  two2,
  three3,
  four4,
  five5,
  six6,
  seven7,
];

const HomeGallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500&display=swap');

        /* ── Grid ── */
        .gallery-wrapper {
          background: #0f0f0f;
          padding: 80px 24px 100px;
        }

        .gallery-grid {
          max-width: 1280px;
          margin: 0 auto;
          columns: 2;
          column-gap: 12px;
        }

        @media (min-width: 640px)  { .gallery-grid { columns: 3; } }
        @media (min-width: 1024px) { .gallery-grid { columns: 4; column-gap: 14px; } }

        .gallery-item {
          break-inside: avoid;
          position: relative;
          overflow: hidden;
          margin-bottom: 12px;
          cursor: pointer;
        }

        @media (min-width: 1024px) { .gallery-item { margin-bottom: 14px; } }

        .gallery-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(0.9);
        }

        .gallery-item:hover img {
          transform: scale(1.06);
          filter: brightness(1);
        }

        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 8, 5, 0.7) 0%,
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
        }

        .gallery-item-icon {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(180,145,95,0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: auto;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .gallery-item:hover .gallery-item-icon {
          background: rgba(180,145,95,0.2);
          transform: scale(1.1);
        }

        .gallery-item-icon svg {
          color: #b4915f;
        }

        /* ── Lightbox ── */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 4, 3, 0.96);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .lightbox-img-wrap {
          position: relative;
          max-width: 90vw;
          max-height: 88vh;
          animation: scaleIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes scaleIn {
          from { transform: scale(0.92); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }

        .lightbox-img-wrap img {
          max-width: 90vw;
          max-height: 85vh;
          object-fit: contain;
          display: block;
          border: 1px solid rgba(180,145,95,0.15);
        }

        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: #b4915f;
          font-size: 28px;
          cursor: pointer;
          line-height: 1;
          transition: transform 0.2s ease;
        }

        .lightbox-close:hover { transform: rotate(90deg); }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(180,145,95,0.1);
          border: 1px solid rgba(180,145,95,0.3);
          color: #b4915f;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .lightbox-nav:hover { background: rgba(180,145,95,0.25); }
        .lightbox-nav.prev { left: -56px; }
        .lightbox-nav.next { right: -56px; }

        .lightbox-counter {
          position: absolute;
          bottom: -34px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          color: rgba(180,145,95,0.6);
        }

        /* ── Section divider ── */
        .gallery-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 1280px;
          margin: 0 auto 56px;
        }

        .gallery-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(180,145,95,0.2);
        }

        .gallery-divider-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #b4915f;
          opacity: 0.6;
        }
      `}</style>

      {/* ── Hero ── */}
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
                Gallery
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
      {/* ── Grid ── */}
      <div className="gallery-wrapper">
        {/* <div className="gallery-divider">
          <div className="gallery-divider-line" />
          <div className="gallery-divider-dot" />
          <div className="gallery-divider-dot" />
          <div className="gallery-divider-dot" />
          <div className="gallery-divider-line" />
        </div> */}

        <div className="gallery-grid">
          {images.map((src, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setLightbox(i)}
            >
              <img src={src} alt={`Gallery image ${i + 1}`} loading="lazy" />
              <div className="gallery-item-overlay">
                <div className="gallery-item-icon">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="lightbox-backdrop" onClick={() => setLightbox(null)}>
          <div
            className="lightbox-img-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>

            <button
              className="lightbox-nav prev"
              onClick={() =>
                setLightbox((lightbox - 1 + images.length) % images.length)
              }
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <img src={images[lightbox]} alt={`Gallery image ${lightbox + 1}`} />

            <button
              className="lightbox-nav next"
              onClick={() => setLightbox((lightbox + 1) % images.length)}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="lightbox-counter">
              {lightbox + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeGallery;
