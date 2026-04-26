import React, { useRef, useState, useEffect } from "react";
const videos = [
  {
    src: new URL("../assets/video/video1.mp4", import.meta.url).href,
    poster: new URL("../assets/video/poster1.jpg", import.meta.url).href,
    title: "Customer Success Story",
    subtitle: "See how we helped transform their business",
  },
  {
    src: new URL("../assets/video/video2.mp4", import.meta.url).href,
    poster: new URL("../assets/video/poster2.jpg", import.meta.url).href,
    title: "Client Testimonial",
    subtitle: "Real feedback from a happy client",
  },
  {
    src: new URL("../assets/video/video3.mp4", import.meta.url).href,
    poster: new URL("../assets/video/poster3.jpg", import.meta.url).href,
    title: "User Experience Review",
    subtitle: "What our customers say about us",
  },
  {
    src: new URL("../assets/video/video4.mp4", import.meta.url).href,
    poster: new URL("../assets/video/poster4.jpg", import.meta.url).href,
    title: "Verified Customer Review",
    subtitle: "Honest opinions from real users",
  },
];

/* ─── Modal ─────────────────────────────────────────────────────────────── */
const VideoModal = ({ video, onClose }) => {
  const videoRef = useRef(null);

  // Auto-play when modal opens
  useEffect(() => {
    const el = videoRef.current;
    if (el) el.play().catch(() => {});
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal box */}
      <div
        className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video player */}
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls
          className="w-full aspect-video bg-black"
          playsInline
        />

        {/* Info bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#1a1a1a]">
          <div>
            <p className="text-white font-heading text-base md:text-lg font-semibold leading-tight">
              {video.title}
            </p>
            <p className="text-white/50 font-body text-xs md:text-sm mt-0.5">
              {video.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
            aria-label="Close video"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="w-4 h-4"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─── Card ───────────────────────────────────────────────────────────────── */
const VideoCard = ({ video, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-stone-200 group cursor-pointer select-none"
      style={{ aspectRatio: "16/9" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Thumbnail — shows poster or first frame */}
      <div className="relative w-full h-full">
        <video
          src={video.src}
          className="w-full h-full object-cover"
          preload="metadata"
          muted
          playsInline
        />
      </div>

      {/* Overlay darkens on idle, lightens on hover */}
      <div
        className={`absolute inset-0 transition-all duration-400 ${
          hovered ? "bg-black/15" : "bg-black/35"
        }`}
      />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 ${
            hovered ? "w-16 h-16" : "w-12 h-12"
          }`}
        >
          <svg
            className="w-5 h-5 text-stone-800 ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom title gradient */}
      <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-white font-heading text-sm md:text-base font-semibold leading-tight">
          {video.title}
        </p>
        <p className="text-white/65 font-body text-xs md:text-sm">
          {video.subtitle}
        </p>
      </div>

      {/* Number badge */}
      <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center">
        <span className="text-xs font-body font-semibold text-stone-700">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

/* ─── Section ────────────────────────────────────────────────────────────── */
const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <section className="w-full py-12 md:py-20 bg-[#f7f3ef]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Section header */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary-600 font-body text-sm uppercase tracking-widest mb-2">
              Watch &amp; Learn
            </p>
            <h2 className="text-dark font-heading text-2xl md:text-4xl font-semibold">
              See Us in Action
            </h2>
            <p className="text-dark/60 font-body text-sm md:text-base mt-3 max-w-md mx-auto">
              A closer look at who we are, how we work, and the results we
              create.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {videos.map((video, i) => (
              <VideoCard
                key={i}
                video={video}
                index={i}
                onClick={() => setActiveVideo(video)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popup modal — mounts only when a video is selected */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
};

export default VideoSection;
