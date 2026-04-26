import bedOne from "../assets/landingPage/bed/bed-1.webp";
import bedTwo from "../assets/landingPage/bed/bed-2.webp";
import bedthree from "../assets/landingPage/bed/bed-3.webp";
import bedfour from "../assets/landingPage/bed/bed-4.webp";
import bedfive from "../assets/landingPage/bed/bed-5.webp";
import { IoWifi } from "react-icons/io5";
import {
  FaLeaf,
  FaSwimmingPool,
  FaRing,
  FaBriefcase,
  FaInstagram,
  FaFacebookF,
  FaHeart,
  FaCamera,
  FaMusic,
  FaUtensils,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { FaChalkboardTeacher, FaCoffee, FaUserTie } from "react-icons/fa";
import { MdMeetingRoom, MdScreenShare, MdGroups } from "react-icons/md";
import { BsProjector, BsPeopleFill } from "react-icons/bs";
import { IoMdWifi } from "react-icons/io";
import { GiTeamIdea } from "react-icons/gi";
import { SiFirewalla } from "react-icons/si";
import { FaGlassWater } from "react-icons/fa6";
import { GiFlowers } from "react-icons/gi";
import {
  MdOutlineRoomService,
  MdOutlineFastfood,
  MdOutlineLocationOn,
  MdFamilyRestroom,
} from "react-icons/md";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineCar } from "react-icons/ai";
// import Testi from "../assets/1743399665832.jpeg";
import place_1 from "../assets/bhandardara.webp";
import place_2 from "../assets/jain-temple.webp";
import place_3 from "../assets/pandav-leni.webp";
import place_4 from "../assets/ramkund.webp";
import place_5 from "../assets/sula-vine.webp";
import place_6 from "../assets/trambkeshvar.webp";
import place_7 from "../assets/Nasik-Road-railway.webp";
import place_8 from "../assets/mahamarg.webp";
import place_9 from "../assets/kasara-railaway.webp";
import place_10 from "../assets/igatpuri.webp";
import place_11 from "../assets/igarpuri-railway.webp";
import place_12 from "../assets/dwarka-circle.webp";
import place_13 from "../assets/airport.webp";
import place from "../assets/landingPage/Prime-Location.webp";
import ervice from "../assets/landingPage/Exceptional-ervice.webp";
import team from "../assets/landingPage/Tailored-Experiences.webp";
import servicesOne from "../assets/landingPage/servivces.webp";
import servicesTwo from "../assets/landingPage/hotel.png";
// import servicesThree from "../assets/landingPage/servivces.webp";
import swiming from "../assets/swiming-pool.webp";
import green from "../assets/green.jpg";
import Weddings from "../assets/why-choose-us-bg.webp";
import meeting from "../assets/bg-1.webp";
import greenImg1 from "../assets/aboutPage/greenImg1.jpg";
import greenImg2 from "../assets/aboutPage/greenImg2.jpg";
import greenImg3 from "../assets/aboutPage/greenImg3.jpg";
import Testi from "../assets/review_icons.png";
export const headerText = [
  { path: "/", name: "Home" },
  {
    type: "dropdown",
    section: "All Info",
    items: [
      { path: "/about-us", name: "About Us" },
      { path: "/gallery", name: "Gallery" },
      {
        path: "/amenities",
        name: "Amenities",
        submenu: [
          { path: "/sapphire-lawn", name: "Sapphire Lawn" },
          { path: "/swimming-pool", name: "Swimming Pool" },
          {
            path: "/destination-weddings",
            name: "/Destination Weddings",
          },
          { path: "corporate-meetings", name: "Corporate Meetings" },
        ],
      },

      { path: "/rooms", name: "Rooms" },
      // { path: "/custome-pricing", name: "Custome Pricing" },
      { path: "/ourFacility", name: "Our Facilities" },
    ],
  },

  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];
export const rooms = [
  {
    title: "Deluxe Room",
    price: "15000 / Night",
    image: bedOne,
  },
  {
    title: "Deluxe Room",
    price: "9000 / Night",
    image: bedTwo,
  },
  {
    title: "Deluxe Room",
    price: "15000 / Night",
    image: bedthree,
  },
  {
    title: "Deluxe Room",
    price: "8000 / Night",
    image: bedfour,
  },
  {
    title: "Deluxe Room",
    price: "10000 / Night",
    image: bedfive,
  },
];
export const servicesSection = [
  {
    icon: <IoWifi size={32} className="text-primary" />,
    title: "High Speed Wifi",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <AiOutlineCar size={32} className="text-primary" />,
    title: "Pick & Drop Facility",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <MdOutlineRoomService size={32} className="text-primary" />,
    title: "Room Service",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <LiaSwimmingPoolSolid size={32} className="text-primary" />,
    title: "Swimming Pool",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <MdOutlineFastfood size={32} className="text-primary" />,
    title: "Breakfast Included",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <PiBathtub size={32} className="text-primary" />,
    title: "Shower Bathtub",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
];
export const footerLinks = [
  {
    url: "/about-us",
    name: "About Us",
  },
  {
    url: "/rooms",
    name: "Hotel Room",
  },
  {
    url: "/gallery",
    name: "Our Gallery",
  },
  {
    url: "/contact",
    name: "Contact Us",
  },
];
export const socialMedia = [
  {
    path: "https://www.instagram.com/riveranskyresorts/",
    icon: (
      <FaInstagram size={18} className="text-gray-200 hover:text-primary" />
    ),
  },
  {
    path: "https://www.facebook.com/RiveranskyResortNashik/",
    icon: (
      <FaFacebookF size={18} className="text-gray-200 hover:text-primary" />
    ),
  },
  {
    path: "https://www.google.com/maps/place/RiverANSky+Luxury+Resorts+%26+Hotels/@19.8993408,73.6985998,17z/data=!3m1!4b1!4m9!3m8!1s0x3bdd933c08339f61:0x3a6026cc1f59c507!5m2!4m1!1i2!8m2!3d19.8993408!4d73.6985998!16s%2Fg%2F11mj__9xzm?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    icon: (
      <MdOutlineLocationOn
        size={18}
        className="text-gray-200 hover:text-primary"
      />
    ),
  },
];
export const testimonials = [
  {
    img: Testi,
    dsc: "We recently celebrated a birthday at River & Sky Resort dated on 11th April 2026, and it turned out to be an absolutely wonderful experience! From the moment we arrived, the ambiance was beautiful and refreshing, creating the perfect setting for a special celebration. The event arrangements were very well organized, and every detail was handled with care and professionalism.",
    name: "Lalita Patil",
    positions: " ",
  },
  {
    img: Testi,
    dsc: "Family We had a wonderful stay with exceptional service and spotless rooms. The staff was incredibly friendly and made us feel right at home. The location was perfect, and the views were absolutely stunning. Everything from check-in to check-out was smooth and professional. food quality best",
    name: "ganesh berad",
    positions: " ",
  },
  {
    img: Testi,
    dsc: "The restaurant offers a pleasant dining experience with a good balance of food quality, ambiance, and service. The menu has a decent variety, catering to different tastes, and the dishes are generally well-prepared and flavorful. Presentation is appealing, and portion sizes are satisfying.",
    name: "Abhay Mandal",
    positions: " ",
  },
  {
    img: Testi,
    dsc: "Excellent service, rooms and meals are very good. Staff is polite and helpful. Special shoutout to Deepak Kumar for giving us very good service and for being extremely professional and helpful. We enjoyed our stay. Will come again.",
    name: "Darrell Fernandes",
    positions: " ",
  },
];
export const nearPlaces = [
  {
    img: place_1,
    title: "BHANDARDARA WATERFALL",
    desc: " 30 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_2,
    title: "JAIN TEMPLE VILHOLI",
    desc: "2 KM",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_3,
    title: "PANDAV LENI CAVES",
    desc: " 5 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_4,
    title: "RAMKUND PANCHAVATI",
    desc: " 13 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_5,
    title: "SULA VINEYARDS",
    desc: " 10 KM Away",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_6,
    title: "TRIMBAKESHWAR",
    desc: " 12 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_7,
    title: "RAILWAY STATION",
    desc: " 20 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_8,
    title: "MAHAMARG BUS DEPO",
    desc: " 15 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_9,
    title: "KASARA RAILWAY STATION",
    desc: " 47 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_10,
    title: "IGATPURI",
    desc: " 30 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_11,
    title: "IGATPURI RAILWAY STATION",
    desc: " 28 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_12,
    title: "DWARKA CIRCLE",
    desc: " 10 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_13,
    title: "AIRPORT",
    desc: " 25 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
];
export const whyChooseUsData = [
  {
    img: place,
    title: "Prime Location",
    desc: "Nestled in the serene surroundings of Rajur Bahula, our resort offers easy access to Nashik's famous attractions and natural beauty.",
  },
  {
    img: ervice,
    title: "Exceptional Service",
    desc: "Our dedicated team is always ready to assist you, ensuring that your stay with us is comfortable and hassle-free.",
  },
  {
    img: team,
    title: "Tailored Experiences",
    desc: "We offer personalized services and experiences that cater to your specific needs and preferences.",
  },
];
export const faqs = [
  {
    question: "How can I make bookings?",
    answer:
      "You can easily make bookings through our website, by calling our reception desk, or by contacting us via email. Our team will assist you throughout the process.",
  },
  {
    question: "What is the check-in and check-out policy?",
    answer:
      "Check-in time is from 2:00 PM and check-out time is until 11:00 AM. Early check-in and late check-out are subject to availability.",
  },
  {
    question: "Do you have a cancellation policy?",
    answer:
      "Yes, cancellations made 48 hours prior to check-in are fully refundable. Late cancellations may incur charges.",
  },
];
export const sectionOne = [
  {
    img: servicesTwo,
    heading: "BEST FOOD",
    title: "The Restaurant",
    para: "Well-trained restaurant staff collaborate harmoniously to  orchestrate these elements, culminating in a memorable  and satisfying dining venture.",
  },
  {
    img: servicesOne,
    heading: "RELAXATION",
    title: "Spa Center",
    para: "Spa centers are designed to create a serene and soothing atmosphere. They often have calming decor, soft lighting, tranquil music, and aromatic scents to enhance relaxation.",
  },
  // {
  //   img: servicesThree,
  //   heading: "HEALTH",
  //   title: "Fitness Center",
  //   para: "Fitness centers often have personal trainers available for one-on-one sessions. These trainers provide customized workout plans",
  // },
];
export const ourFacility = [
  {
    icon: "",
    title: "High Speed Wifi",
    disc: "",
  },
  {
    icon: "",
    title: "Pick & Drop Facility",
    disc: "",
  },
  {
    icon: "Room Service",
    title: "",
    disc: "",
  },
  {
    icon: "",
    title: "Swimming Pool",
    disc: "",
  },
  {
    icon: "",
    title: "Breakfast Included",
    disc: "",
  },

  {
    icon: "",
    title: "Shower Bathtub",
    disc: "",
  },
];
export const amenitiesList = [
  {
    id: 1,
    icon: <FaLeaf className="text-6xl" />,
    title: "Sapphire Lawn",
    description:
      "Experience the beauty and versatility of our expansive Sapphire Lawn, perfect for weddings, corporate events, and social gatherings in a stunning outdoor setting.",
    image: green,
    path: "/amenities/sapphire-lawn",
    color: "from-green-500/20 to-emerald-500/20",
    hoverColor: "hover:shadow-green-500/30",
  },
  {
    id: 2,
    icon: <FaSwimmingPool className="text-6xl" />,
    title: "Swimming Pool",
    description:
      "Dive into luxury with our crystal-clear swimming pool featuring modern facilities, poolside cabanas, and a dedicated kids' splash zone.",
    image: swiming,
    path: "swimming-pool",
    color: "from-blue-500/20 to-cyan-500/20",
    hoverColor: "hover:shadow-blue-500/30",
  },
  {
    id: 3,
    icon: <FaRing className="text-6xl" />,
    title: "Destination Weddings",
    description:
      "Create magical moments with our comprehensive destination wedding services, featuring breathtaking venues, expert planning, and unforgettable experiences.",
    image: Weddings,
    path: "/amenities/destination-weddings",
    color: "from-pink-500/20 to-rose-500/20",
    hoverColor: "hover:shadow-pink-500/30",
  },
  {
    id: 4,
    icon: <FaBriefcase className="text-6xl" />,
    title: "Corporate Meetings",
    description:
      "Host productive corporate events with state-of-the-art meeting facilities, modern technology, and professional services tailored to your business needs.",
    image: meeting,
    path: "/amenities/corporate-meetings",
    color: "from-orange-500/20 to-amber-500/20",
    hoverColor: "hover:shadow-orange-500/30",
  },
];
export const features = [
  {
    title: "Vast and Versatile Spaces",
    icon: greenImg1,
    points: [
      "Our Sapphire expansive lawn offers plenty of décor, seating room places for hosting large gatherings, weddings, parties, and corporate events",
      "Flexible Layout: The space can be arranged to suit your specific requirements, from elegant weddings to lively garden parties",
    ],
  },
  {
    title: "Beautiful Surroundings",
    icon: green,
    points: [
      "Lush Greenery: Enjoy the natural beauty of our well-maintained lawns, surrounded by nature's flowers and trees that create a picturesque setting",
      "Scenic Views: The Sapphire Lawn offers stunning views of the surrounding landscape, enhancing the ambiance of any event or activity",
    ],
  },
  {
    title: "Ideal for Events and Activities",
    icon: Weddings,
    points: [
      "Weddings and Receptions: Celebrate your special day in a beautiful outdoor setting, with ample space for ceremonies, receptions, and photos",
      "Corporate Events: Host productive and inspiring corporate events, team-building activities, seminars, and outdoor meetings",
      "Social Gatherings: Our lawns are perfect for birthday parties, family reunions, and other social events, offering a relaxed and enjoyable atmosphere for guests to mingle and enjoy",
    ],
  },
  {
    title: "Recreational Use",
    icon: greenImg2,
    points: [
      "Leisurely Afternoons: Spend a relaxing afternoon on the lawn, enjoying activities like yoga, reading, or simply soaking in the sun",
      "Children's Play Area: Our lawns provide a safe and spacious area for children to run, play, and enjoy outdoor games",
    ],
  },
  {
    title: "Additional Features",
    icon: greenImg3,
    points: [
      "Professional Event Support: Our dedicated event planning team is on hand to assist with every detail, ensuring your event is flawlessly executed",
      "On-site Amenities: Access to amenities such as seating arrangements, décor setup, lighting, and sound systems to enhance your event experience",
    ],
  },
];
export const poolFeatures = [
  {
    icon: <FaSwimmingPool className="text-5xl text-primary" />,
    title: "Crystal Clear Waters",
    description:
      "Dive into our pristine swimming pool with crystal-clear water maintained at the perfect temperature year-round.",
  },
  {
    icon: <MdFamilyRestroom className="text-5xl text-primary" />,
    title: "Family Friendly",
    description:
      "Separate sections for adults and children with trained lifeguards on duty ensuring everyone's safety.",
  },
  {
    icon: <FaUmbrellaBeach className="text-5xl text-primary" />,
    title: "Poolside Relaxation",
    description:
      "Comfortable loungers, cabanas, and umbrellas for the ultimate relaxation experience by the poolside.",
  },
  {
    icon: <FaGlassWater className="text-5xl text-primary" />,
    title: "Refreshments Available",
    description:
      "Enjoy refreshing beverages and light snacks from our poolside bar and café.",
  },
];
export const weddingServices = [
  {
    icon: <FaHeart className="text-5xl text-primary" />,
    title: "Wedding Planning",
    description:
      "Our expert wedding planners work with you every step of the way to create your dream wedding, handling all details from concept to execution.",
  },
  {
    icon: <GiFlowers className="text-5xl text-primary" />,
    title: "Décor & Styling",
    description:
      "Transform your venue with stunning floral arrangements, elegant drapery, and custom décor that reflects your unique style and vision.",
  },
  {
    icon: <FaUtensils className="text-5xl text-primary" />,
    title: "Catering Excellence",
    description:
      "Delight your guests with exquisite cuisine crafted by our award-winning chefs, featuring diverse menus from traditional to contemporary.",
  },
  {
    icon: <FaMusic className="text-5xl text-primary" />,
    title: "Entertainment",
    description:
      "Create the perfect ambiance with live bands, DJs, traditional performers, and custom entertainment tailored to your celebration.",
  },
  {
    icon: <FaCamera className="text-5xl text-primary" />,
    title: "Photography & Videography",
    description:
      "Capture every precious moment with professional photography and cinematic videography services to cherish for a lifetime.",
  },
  {
    icon: <SiFirewalla className="text-5xl text-primary" />,
    title: "Special Effects",
    description:
      "Add magic to your celebration with spectacular fireworks, LED displays, fog effects, and dramatic lighting arrangements.",
  },
];
export const weddingPackages = [
  {
    title: "Intimate Celebration",
    guests: "Up to 100 Guests",
    features: [
      "Sapphire Lawn or poolside venue",
      "Basic décor package",
      "3-course meal",
      "DJ services",
      "Basic photography (6 hours)",
      "Wedding coordinator",
    ],
  },
  {
    title: "Grand Celebration",
    guests: "100-300 Guests",
    features: [
      "Multiple venue options",
      "Premium décor & floral arrangements",
      "5-course gourmet meal",
      "Live band & DJ",
      "Professional photo & video coverage",
      "Dedicated wedding planning team",
      "Guest accommodation packages",
    ],
    popular: true,
  },
  {
    title: "Royal Wedding",
    guests: "300+ Guests",
    features: [
      "Exclusive resort access",
      "Luxury custom décor",
      "Multi-cuisine buffet & live counters",
      "Celebrity entertainment options",
      "Full-day photo & cinematic video",
      "Complete wedding management",
      "Spa & wellness packages",
      "Fireworks & special effects",
    ],
  },
];
export const heroData = {
  title: "Corporate Meetings at Shadow Suit – Dark Hall",
  subtitle: "Elevate Your Business Gatherings",
  description:
    "At RiverANSky Luxury Resorts, we understand the importance of creating the perfect environment for your corporate meetings and events. Our Shadow Suit – Dark Hall offers a sophisticated and versatile space designed to meet all your business needs.",
};

export const venueFeatures = [
  {
    icon: <MdMeetingRoom className="text-5xl" />,
    title: "State-of-the-Art Conference Halls",
    description:
      "Our spacious conference halls are equipped with the latest technology to support presentations, video conferences, and interactive sessions. The halls are designed to accommodate various group sizes, from intimate board meetings to large-scale conferences.",
  },
  {
    icon: <MdGroups className="text-5xl" />,
    title: "Private Meeting Rooms",
    description:
      "For more intimate gatherings or executive meetings, our private rooms offer a quiet and focused environment. These spaces are perfect for strategic planning sessions, one-on-one meetings, or small team discussions.",
  },
  {
    icon: <BsProjector className="text-5xl" />,
    title: "Advanced Audio-Visual Equipment",
    description:
      "We provide cutting-edge AV equipment, including high-definition projectors, large screens, sound systems, and wireless presentation tools. Our technical team is on hand to ensure seamless operation throughout your event.",
  },
  {
    icon: <IoMdWifi className="text-5xl" />,
    title: "High-Speed Internet Connectivity",
    description:
      "Stay connected with our reliable high-speed Wi-Fi, ensuring that your team can collaborate efficiently and conduct virtual meetings without interruption.",
  },
  {
    icon: <FaCoffee className="text-5xl" />,
    title: "Customized Catering Services",
    description:
      "Choose from a variety of catering options, from working lunches to gala dinners. Our culinary team can create menus tailored to your preferences and dietary requirements, ensuring your guests are well taken care of.",
  },
  {
    icon: <FaUserTie className="text-5xl" />,
    title: "Professional Event Support",
    description:
      "Our dedicated event coordinators work closely with you to plan and execute your meeting or event flawlessly. From setup to breakdown, we handle all the details so you can focus on your agenda.",
  },
];

export const meetingTypes = [
  {
    icon: "💼",
    title: "Corporate Meetings & Conferences",
    description:
      "Host board meetings, annual general meetings, and executive conferences in a professional and well-equipped environment.",
  },
  {
    icon: "🎓",
    title: "Training Sessions & Workshops",
    description:
      "Conduct educational seminars, skill development programs, and professional training in our interactive spaces.",
  },
  {
    icon: "🤝",
    title: "Team Building Events",
    description:
      "Strengthen team bonds with outdoor activities, workshops, and recreational programs in our beautiful resort setting.",
  },
  {
    icon: "🚀",
    title: "Product Launches",
    description:
      "Make a lasting impression with impressive venues perfect for unveiling new products with multimedia presentations.",
  },
  {
    icon: "🎤",
    title: "Seminars & Presentations",
    description:
      "Leverage our advanced AV equipment and comfortable seating for impactful presentations and large-scale seminars.",
  },
  {
    icon: "🏖️",
    title: "Corporate Retreats",
    description:
      "Combine productive work sessions with relaxation and team bonding in our luxurious resort environment.",
  },
];

export const additionalAmenities = [
  {
    icon: "🏨",
    title: "Accommodation",
    description:
      "Comfortable and well-appointed rooms for overnight stays, ensuring your team is well-rested and ready for the next day.",
  },
  {
    icon: "🚗",
    title: "Transportation Services",
    description:
      "We can arrange transportation for your attendees, including airport transfers and local transport.",
  },
  {
    icon: "🎯",
    title: "Team-Building Activities",
    description:
      "Enhance your corporate retreat with our range of team-building activities, both indoor and outdoor.",
  },
  {
    icon: "🍽️",
    title: "Dining Options",
    description:
      "Enjoy delicious meals at our on-site restaurant, or opt for customized dining experiences in our banquet areas.",
  },
];

export const whyChooseUs = [
  {
    title: "Versatile Spaces",
    description:
      "Our venues can be configured to suit any type of corporate event, from small meetings to large conferences.",
  },
  {
    title: "Modern Technology",
    description:
      "State-of-the-art AV equipment and high-speed internet ensure your event runs smoothly.",
  },
  {
    title: "Professional Service",
    description:
      "Our experienced team is dedicated to providing exceptional service and support.",
  },
  {
    title: "Scenic Location",
    description:
      "Located in the picturesque surroundings of Nashik, our resort offers a refreshing escape from the city.",
  },
];
export const seoData = {
  home: {
    title: "RiverAnSky Luxury Resorts Nashik | Best Resort in Nashik",
    description:
      "RiverAnSky Luxury Resorts in Nashik offers premium rooms, a crystal-clear swimming pool, Sapphire Lawn for weddings, and state-of-the-art conference halls. Book your dream stay or event in Nashik, Maharashtra.",
    keywords:
      "luxury resort nashik, best resort in nashik, riveransky resorts nashik, nashik luxury hotel, weekend getaway nashik pune, resort near nashik, 5 star resort nashik, family resort nashik, riveransky resort booking, top resort maharashtra, best resort near pune nashik highway, resort with swimming pool nashik",
    ogImage: "/images/og/home-og.jpg",
    canonical: "https://riveranskyresorts.com/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Resort",
      name: "RiverAnSky Luxury Resorts",
      url: "https://riveranskyresorts.com",
      telephone: "+919325117757",
      email: "booking@riveranskyresorts.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rajur Bahula",
        addressLocality: "Nashik",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      image: "https://riveranskyresorts.com/images/og/home-og.jpg",
      priceRange: "₹₹₹",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Swimming Pool",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Conference Hall",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Wedding Venue",
          value: true,
        },
        { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
        {
          "@type": "LocationFeatureSpecification",
          name: "Free WiFi",
          value: true,
        },
      ],
    },
  },

  about: {
    title: "About RiverAnSky Resorts Nashik | Luxury Resort Story & Vision",
    description:
      "RiverAnSky Resorts is Nashik's premier luxury destination blending natural beauty with world-class hospitality. Discover our story, our team, and our commitment to creating unforgettable experiences for every guest.",
    keywords:
      "about riveransky resorts nashik, luxury resort nashik story, best resort nashik maharashtra, premium hospitality nashik, riveransky resort history, resort team nashik, who owns riveransky nashik, luxury resort vision nashik, 5 star resort nashik about, riveransky resort founders",
    ogImage: "/images/og/about-og.jpg",
    canonical: "https://riveranskyresorts.com/about-us",
  },

  services: {
    title: "Services | Weddings, Corporate Events & Stays – RiverAnSky Nashik",
    description:
      "From dream destination weddings and corporate retreats to luxury staycations and private celebrations — RiverAnSky Resorts Nashik delivers end-to-end event management, fine dining, and personalized hospitality.",
    keywords:
      "resort services nashik, destination wedding planning nashik, corporate event management nashik, luxury stay nashik, catering services resort nashik, event decoration nashik resort, private party venue nashik, birthday celebration resort nashik, anniversary venue nashik, pre-wedding shoot resort nashik",
    ogImage: "/images/og/services-og.jpg",
    canonical: "https://riveranskyresorts.com/services",
  },

  amenities: {
    title:
      "Amenities | Pool, Lawn, Conference Hall – RiverAnSky Resorts Nashik",
    description:
      "Explore RiverAnSky Resort's world-class amenities in Nashik: Sapphire Lawn for outdoor events, a crystal-clear swimming pool, modern AV-equipped conference halls, spa, gym, and more — all under one roof.",
    keywords:
      "resort amenities nashik, swimming pool resort nashik, sapphire lawn nashik, conference hall resort nashik, wedding lawn nashik, gym resort nashik, spa resort nashik, kids play area resort nashik, outdoor event venue nashik, resort facilities nashik maharashtra",
    ogImage: "/images/og/amenities-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities",
  },

  sapphireLawn: {
    title: "Sapphire Lawn Nashik | Best Outdoor Wedding & Event Venue",
    description:
      "Sapphire Lawn at RiverAnSky Resorts is Nashik's most sought-after outdoor venue for weddings, receptions, and corporate events. Lush greenery, customizable setups, and dedicated event managers make every occasion extraordinary.",
    keywords:
      "sapphire lawn nashik, outdoor wedding venue nashik, best lawn for wedding nashik, garden wedding venue nashik, outdoor event space nashik, lawn booking nashik resort, wedding reception lawn nashik, budget wedding lawn nashik, green lawn venue nashik, open air wedding venue maharashtra",
    ogImage: "/images/og/sapphire-lawn-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities/sapphire-lawn",
  },

  swimmingPool: {
    title: "Swimming Pool Resort Nashik | Luxury Pool – RiverAnSky Resorts",
    description:
      "Take a dip in RiverAnSky's premium swimming pool in Nashik — featuring crystal-clear waters, kids' splash zone, poolside loungers, and professional lifeguards. Ideal for family vacations and relaxing weekend getaways.",
    keywords:
      "swimming pool resort nashik, resort with pool nashik, luxury pool nashik, family pool resort nashik, kids pool nashik resort, poolside resort nashik, best pool resort near pune, weekend resort with pool nashik, swimming facilities nashik, resort pool maharashtra",
    ogImage: "/images/og/swimming-pool-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities/swimming-pool",
  },

  destinationWeddings: {
    title: "Destination Wedding in Nashik | Best Wedding Venue – RiverAnSky",
    description:
      "Plan the wedding of your dreams at RiverAnSky Resorts, Nashik's finest destination wedding venue. Expert planners, stunning decor, gourmet catering, customized packages, and breathtaking outdoor settings in Maharashtra.",
    keywords:
      "destination wedding nashik, best wedding venue nashik, wedding resort nashik, luxury wedding nashik, marriage hall nashik, wedding packages nashik price, outdoor wedding nashik, wedding planner nashik, sangeet venue nashik, mehndi ceremony venue nashik, wedding photography location nashik, wedding hall booking nashik",
    ogImage: "/images/og/destination-wedding-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities/destination-weddings",
    schema: {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      name: "RiverAnSky Resorts – Destination Wedding Venue Nashik",
      url: "https://riveranskyresorts.com/amenities/destination-weddings",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashik",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      maximumAttendeeCapacity: 1000,
    },
  },

  corporateMeetings: {
    title: "Corporate Events & Conference Hall Nashik | RiverAnSky Resorts",
    description:
      "RiverAnSky Nashik offers premium corporate event facilities: modern conference halls with HD AV systems, high-speed WiFi, team-building activities, business lunches, and dedicated corporate packages for meetings and seminars.",
    keywords:
      "corporate meeting venue nashik, conference hall nashik, business meeting resort nashik, corporate retreat nashik, seminar hall nashik, team outing resort nashik, corporate day out nashik, offsite meeting venue nashik, training room nashik, business conference resort maharashtra, company event venue nashik",
    ogImage: "/images/og/corporate-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities/corporate-meetings",
  },

  rooms: {
    title: "Luxury Rooms & Suites in Nashik | Book Now – RiverAnSky Resorts",
    description:
      "Stay in elegance at RiverAnSky Resorts, Nashik. Choose from deluxe rooms, premium suites, and family rooms with modern amenities, plush bedding, scenic views, and 24/7 room service. Best rates guaranteed.",
    keywords:
      "luxury rooms nashik, resort rooms booking nashik, deluxe room nashik resort, suite nashik resort, family room nashik resort, best hotel rooms nashik, comfortable stay nashik, room with view nashik, premium accommodation nashik, resort stay nashik price, nashik resort room rates, 5 star room nashik",
    ogImage: "/images/og/rooms-og.jpg",
    canonical: "https://riveranskyresorts.com/rooms",
  },

  facilities: {
    title: "Resort Facilities | Restaurant, Spa & Sports – RiverAnSky Nashik",
    description:
      "RiverAnSky Nashik provides a full suite of facilities: multi-cuisine restaurant, spa & wellness centre, indoor games, outdoor sports, fitness gym, kids' play area, and round-the-clock concierge for a truly complete resort experience.",
    keywords:
      "resort facilities nashik, restaurant in resort nashik, spa resort nashik, gym resort nashik, indoor games resort nashik, outdoor sports resort nashik, wellness centre nashik, kids area resort nashik, 24 hour service resort nashik, all facilities resort nashik, dining resort nashik",
    ogImage: "/images/og/facilities-og.jpg",
    canonical: "https://riveranskyresorts.com/ourFacility",
  },

  gallery: {
    title: "Gallery | Photos & Videos of RiverAnSky Luxury Resorts Nashik",
    description:
      "Explore the beauty of RiverAnSky Resorts through our photo and video gallery. View stunning images of rooms, Sapphire Lawn, swimming pool, wedding setups, events, and dining — and picture your perfect Nashik escape.",
    keywords:
      "riveransky resort photos nashik, resort gallery nashik, wedding venue photos nashik, resort swimming pool photos, event hall photos nashik, luxury resort images nashik, resort room pictures nashik, before booking resort gallery, nashik resort video tour",
    ogImage: "/images/og/gallery-og.jpg",
    canonical: "https://riveranskyresorts.com/gallery",
  },

  contact: {
    title: "Contact RiverAnSky Resorts Nashik | Call +91 9325117757 to Book",
    description:
      "Reach out to RiverAnSky Luxury Resorts for bookings, event enquiries, and availability. Call +91 9325117757 or email booking@riveranskyresorts.com. Located at Rajur Bahula, Nashik, Maharashtra. We respond within hours.",
    keywords:
      "contact riveransky resorts nashik, resort booking number nashik, riveransky phone number, resort enquiry nashik, how to book riveransky nashik, resort address nashik, directions riveransky resort, riveransky email, nashik resort reservation, booking riveransky resort online",
    ogImage: "/images/og/contact-og.jpg",
    canonical: "https://riveranskyresorts.com/contact",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact RiverAnSky Resorts Nashik",
      url: "https://riveranskyresorts.com/contact",
    },
  },
};
