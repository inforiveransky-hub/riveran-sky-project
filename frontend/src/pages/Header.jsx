import React, { useState, useEffect, useRef } from "react";
import { headerText } from "../data/text";
import logo from "../assets/landingPage/Logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // tracks which dropdown is open by index
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  // Change header style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-lg"
          : "bg-white/10 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="px-5 md:px-10 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-14 lg:h-16 w-auto"
            loading="lazy"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {headerText.map((item, index) =>
            item.type === "dropdown" ? (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center gap-1 font-medium text-gray-300 hover:text-white transition cursor-pointer"
                >
                  {item.section}
                  {/* Chevron rotates when open */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute top-full left-0 mt-3 w-52 bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-200 origin-top ${
                    openDropdown === index
                      ? "opacity-100 scale-y-100 pointer-events-auto"
                      : "opacity-0 scale-y-95 pointer-events-none"
                  }`}
                >
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={`font-medium transition ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        {/* <div className="hidden md:flex shrink-0">
          <Link
            to="/book"
            className="px-6 py-2.5 rounded-full bg-primary-600 hover:bg-primary-500 active:scale-95 text-white font-body font-semibold text-sm tracking-wide transition-all duration-200 shadow-md"
          >
            Book Now
          </Link>
        </div> */}

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <RxCross2 size={26} /> : <RiMenu3Fill size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/70 backdrop-blur-2xl border-t border-white/10 px-6 py-6 space-y-1">
          {headerText.map((item, index) =>
            item.type === "dropdown" ? (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center justify-between w-full py-3 text-gray-200 font-medium"
                >
                  {item.section}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openDropdown === index ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="ml-4 mb-2 space-y-1 border-l border-white/10 pl-4">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-gray-400 hover:text-white text-sm transition"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 font-medium transition ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}

          {/* Mobile Book Now */}
          {/* <div className="pt-4">
            <Link
              to="/book"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-500 active:scale-95 text-white font-body font-semibold text-sm tracking-wide transition-all duration-200"
            >
              Book Now
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
