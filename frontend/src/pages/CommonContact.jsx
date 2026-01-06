import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CommonContact = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    adults: "2",
    children: "0",
  });
  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Form:", bookingData);
    // Add your booking logic here
  };
  return (
    <div>
      <section className="relative py-20 lg:py-32 bg-dark">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/path-to-your-hotel-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-5 md:px-10 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold mb-6 leading-tight">
                Luxury & Comfort Awaits in
                <br />
                <span className="text-primary">Amsterdam</span> and{" "}
                <span className="text-primary">Rotterdam</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 font-body leading-relaxed">
                Experience world-class hospitality in the heart of Netherlands
              </p>
            </div>

            {/* Right - Booking Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-3xl font-heading font-semibold text-dark mb-6">
                Book A Room
              </h3>

              <form onSubmit={handleBookingSubmit} className="space-y-5">
                {/* Check In */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                    Check In *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                  />
                </div>

                {/* Check Out */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                    Check Out *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                  />
                </div>

                {/* Adults and Children */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                      Adults
                    </label>
                    <select
                      name="adults"
                      value={bookingData.adults}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                      Children
                    </label>
                    <select
                      name="children"
                      value={bookingData.children}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg font-body mt-6"
                >
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommonContact;
