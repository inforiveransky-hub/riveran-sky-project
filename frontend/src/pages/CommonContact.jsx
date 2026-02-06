// import React, { useState } from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const CommonContact = () => {
//   const [bookingData, setBookingData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     checkIn: "",
//     checkOut: "",
//     adults: "2",
//     children: "0",
//   });
//   const [loading, setLoading] = useState(false);
//   const handleBookingChange = (e) => {
//     setBookingData({
//       ...bookingData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:8000/api/get-in-tech", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstName: bookingData.firstName,
//           lastName: bookingData.lastName,
//           email: bookingData.email,
//           phone: bookingData.phone,
//           checkIn: bookingData.checkIn,
//           checkOut: bookingData.checkOut,
//           adults: Number(bookingData.adults),
//           children: Number(bookingData.children),
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Booking failed");
//       }

//       alert("Booking request sent successfully!");

//       setBookingData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         checkIn: "",
//         checkOut: "",
//         adults: "2",
//         children: "0",
//       });
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       <section className="relative py-20 lg:py-32 bg-dark">
//         <div
//           className="absolute inset-0 opacity-30"
//           style={{
//             backgroundImage: "url('/path-to-your-hotel-image.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         <div className="container mx-auto px-5 md:px-10 lg:px-20 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left - Text */}
//             <div className="text-white">
//               <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold mb-6 leading-tight">
//                 Luxury & Comfort Awaits in
//                 <br />
//                 <span className="text-primary">Amsterdam</span> and{" "}
//                 <span className="text-primary">Rotterdam</span>
//               </h2>
//               <p className="text-lg lg:text-xl text-gray-300 font-body leading-relaxed">
//                 Experience world-class hospitality in the heart of Netherlands
//               </p>
//             </div>

//             {/* Right - Booking Form */}
//             <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-10">
//               <h3 className="text-3xl font-heading font-semibold text-dark mb-6">
//                 Book A Room
//               </h3>

//               <form onSubmit={handleBookingSubmit} className="space-y-5">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
//                       First Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={bookingData.firstName}
//                       onChange={handleBookingChange}
//                       required
//                       placeholder="Enter Your First Name"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
//                       Last Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={bookingData.lastName}
//                       onChange={handleBookingChange}
//                       required
//                       placeholder="Enter Your Last Name"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={bookingData.email}
//                     onChange={handleBookingChange}
//                     required
//                     placeholder="Enter Your Email"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
//                     Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={bookingData.phone}
//                     onChange={handleBookingChange}
//                     required
//                     placeholder="Enter Your Phone Number"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   {/* Check In */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
//                       Check In *
//                     </label>
//                     <input
//                       type="date"
//                       name="checkIn"
//                       value={bookingData.checkIn}
//                       onChange={handleBookingChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
//                     />
//                   </div>

//                   {/* Check Out */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
//                       Check Out *
//                     </label>
//                     <input
//                       type="date"
//                       name="checkOut"
//                       value={bookingData.checkOut}
//                       onChange={handleBookingChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
//                     />
//                   </div>
//                 </div>

//                 {/* Adults and Children */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
//                       Adults
//                     </label>
//                     <select
//                       name="adults"
//                       value={bookingData.adults}
//                       onChange={handleBookingChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
//                     >
//                       <option value="0">0</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                       <option value="5+">5+</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
//                       Children
//                     </label>
//                     <select
//                       name="children"
//                       value={bookingData.children}
//                       onChange={handleBookingChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
//                     >
//                       <option value="0">0</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4+">4+</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className={`w-full text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform font-body mt-6
//     ${
//       loading
//         ? "bg-gray-400 cursor-not-allowed"
//         : "bg-primary-600 hover:bg-primary hover:scale-[1.02] hover:shadow-lg"
//     }
//   `}
//                 >
//                   {loading ? "Checking..." : "Check Availability"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CommonContact;

import React, { useEffect } from "react";

const CommonContact = () => {
  useEffect(() => {
    // Load jQuery
    const jquery = document.createElement("script");
    jquery.src =
      "https://www.eglobe-solutions.com/mailer/EglobeCalender/jquery-1.9.1.js";
    jquery.async = true;

    // Load jQuery UI
    const jqueryUI = document.createElement("script");
    jqueryUI.src =
      "https://www.eglobe-solutions.com/mailer/EglobeCalender/jquery-ui.js";
    jqueryUI.async = true;

    document.body.appendChild(jquery);
    document.body.appendChild(jqueryUI);

    // Initialize datepicker after scripts load
    jqueryUI.onload = () => {
      window.$("#checkin").datepicker({
        defaultDate: "+0d",
        numberOfMonths: 1,
        minDate: 0,
        dateFormat: "dd-M-yy",
        onClose: function (selectedDate) {
          window.$("#checkout").datepicker("option", "minDate", selectedDate);
        },
      });

      window.$("#checkout").datepicker({
        dateFormat: "dd-M-yy",
        onClose: function (selectedDate) {
          window.$("#checkin").datepicker("option", "maxDate", selectedDate);
        },
      });
    };

    return () => {
      document.body.removeChild(jquery);
      document.body.removeChild(jqueryUI);
    };
  }, []);

  // Date validation (same logic eGlobe gave)
  const isValidDate = () => {
    const indt = document.getElementById("checkin").value;
    const outdt = document.getElementById("checkout").value;

    if (!indt || !outdt) {
      alert("Please select Check-In and Check-Out dates");
      return false;
    }

    const checkInDate = new Date(indt);
    const checkOutDate = new Date(outdt);

    const diffTime = checkOutDate - checkInDate;
    let diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

    if (diffDays <= 0) diffDays = 1;

    document.getElementById("numNightsParam").value = diffDays;
    return true;
  };

  return (
    <section className="relative py-20 bg-dark">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
              Luxury & Comfort Awaits
              <br />
              <span className="text-primary">Book Your Stay</span>
            </h2>
            <p className="text-lg text-gray-300">
              Check availability and book instantly with our official booking
              partner.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Book Online</h3>

            <form
              action="https://hotels.eglobe-solutions.com/riveranskyresorts/booking/hotels/river-an-sky-resort-nasik"
              method="post"
              name="frmHotelDetails"
              id="frmHotelDetails"
              target="_parent"
              autoComplete="off"
              onSubmit={isValidDate}
            >
              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  id="checkin"
                  name="checkIn"
                  placeholder="Check In"
                  className="border border-gray-300 px-4 py-3 rounded-lg w-full"
                  readOnly
                />

                <input
                  type="text"
                  id="checkout"
                  name="ch_out"
                  placeholder="Check Out"
                  className="border border-gray-300 px-4 py-3 rounded-lg w-full"
                  readOnly
                />
              </div>

              <input
                type="hidden"
                name="nights"
                id="numNightsParam"
                value="1"
              />

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                BOOK ONLINE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonContact;
