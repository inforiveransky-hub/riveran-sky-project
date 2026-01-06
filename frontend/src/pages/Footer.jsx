// import React from "react";
// import logo from "../assets/landingPage/Logo.png";
// import { footerLinks, socialMedia } from "../data/text";
// import { Link } from "react-router-dom";
// import { MdOutlineLocationOn } from "react-icons/md";
// import { HiOutlineMail } from "react-icons/hi";
// import { LuPhoneCall } from "react-icons/lu";
// const Footer = () => {
//   return (
//     <section className="bg-dark">
//       <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-10">
//         <div className="flex items-start gap-7 justify-between">
//           <div>
//             <img src={logo} alt="footer-logo" className="w-[200px]" />
//             <p className="text-gray-200 text-base font-body">
//               Enjoy sweeping water views when you{" "}
//               <br className="hidden md:block" /> reserve a Hudson River View
//               Suite.{" "}
//             </p>
//           </div>
//           <div className="flex flex-col gap-4">
//             <h1 className="text-base text-gray-200 font-heading font-semibold">
//               Explore
//             </h1>
//             <div className="flex flex-col gap-2">
//               {footerLinks.map((item, i) => (
//                 <div>
//                   <Link
//                     to={item.url}
//                     className="text-gray-200 font-body hover:text-primary"
//                   >
//                     {item.name}
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex flex-col gap-4">
//             <h1 className="text-base text-gray-200 font-heading font-semibold">
//               Contact
//             </h1>
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center gap-2">
//                 <span>
//                   <MdOutlineLocationOn size={24} className="text-primary" />
//                 </span>
//                 <h5 className="text-gray-200 font-body">
//                   455 West Orchard Street Kings Mountain, NC 28086
//                 </h5>
//               </div>
//               <a
//                 href="mailto:needhelp@gmail.com"
//                 className="flex items-center gap-2 text-gray-200 font-body hover:text-primary transition"
//               >
//                 <HiOutlineMail size={22} className="text-primary" />
//                 <span>needhelp@gmail.com</span>
//               </a>

//               {/* Phone */}
//               <a
//                 href="tel:+18408412569"
//                 className="flex items-center gap-2 text-gray-200 font-body hover:text-primary transition"
//               >
//                 <LuPhoneCall size={20} className="text-primary" />
//                 <span>+1 840 841 2569</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-600 w-full h-[1px]"></div>
//         <div className="flex items-center justify-between gap-3">
//           <div>
//             <h6 className="text-sm font-body text-gray-200">
//               © 2026 All Right Design & Develop by{" "}
//               <Link
//                 to="https://www.linkedin.com/in/pratik-dhere-full-stack-developer/"
//                 target="_blank"
//                 className="underline hover:text-primary"
//               >
//                 Pratik Dhere
//               </Link>
//             </h6>
//           </div>
//           <div className="flex items-center gap-2">
//             {socialMedia.map((item, i) => (
//               <div className="h-10 w-10 rounded-full bg-[#3D3A38] flex items-center justify-center">
//                 <Link to={item.path} target="_blank">
//                   {item.icon}
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;

import React from "react";
import logo from "../assets/landingPage/Logo.png";
import { footerLinks, socialMedia } from "../data/text";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 lg:mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-5">
              <img
                src={logo}
                alt="Hotel Logo"
                className="w-[180px] lg:w-[200px] h-auto hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-gray-300 text-sm lg:text-base font-body leading-relaxed max-w-md">
              Enjoy sweeping water views when you reserve a Hudson River View
              Suite. Experience luxury and comfort in every moment of your stay.
            </p>

            {/* Social Media - Mobile Position */}
            <div className="flex items-center gap-3 mt-6 md:hidden">
              {socialMedia.map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-[#3D3A38] hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={`Visit our ${item.name || "social media"}`}
                >
                  <span className="text-gray-200 hover:text-white">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h2 className="text-lg lg:text-xl text-white font-heading font-semibold mb-5">
              Quick Links
            </h2>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((item, i) => (
                <Link
                  key={i}
                  to={item.url}
                  className="text-gray-300 text-sm lg:text-base font-body hover:text-primary hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 w-fit"
                >
                  <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-300" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h2 className="text-lg lg:text-xl text-white font-heading font-semibold mb-5">
              Get In Touch
            </h2>
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-start gap-3 group">
                <MdOutlineLocationOn
                  size={24}
                  className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                />
                <address className="text-gray-300 text-sm lg:text-base font-body not-italic leading-relaxed">
                  455 West Orchard Street,
                  <br />
                  Kings Mountain, NC 28086
                </address>
              </div>

              {/* Email */}
              <a
                href="mailto:needhelp@gmail.com"
                className="flex items-center gap-3 text-gray-300 font-body hover:text-primary transition-all duration-300 group w-fit"
              >
                <HiOutlineMail
                  size={22}
                  className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm lg:text-base">needhelp@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+18408412569"
                className="flex items-center gap-3 text-gray-300 font-body hover:text-primary transition-all duration-300 group w-fit"
              >
                <LuPhoneCall
                  size={20}
                  className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm lg:text-base">+1 840 841 2569</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-700 mb-6 lg:mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xs lg:text-sm font-body text-gray-400">
              © {new Date().getFullYear()} Hotel Name. All Rights Reserved.
              <span className="hidden sm:inline"> Design & Developed by </span>
              <span className="sm:hidden"> By </span>
              <a
                href="https://www.linkedin.com/in/pratik-dhere-full-stack-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-400 underline ml-1 transition-colors"
              >
                Pratik Dhere
              </a>
            </p>
          </div>

          {/* Social Media - Desktop Position */}
          <div className="hidden md:flex items-center gap-3">
            {socialMedia.map((item, i) => (
              <a
                key={i}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-[#3D3A38] hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                aria-label={`Visit our ${item.name || "social media"}`}
              >
                <span className="text-gray-200 hover:text-white transition-colors">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
