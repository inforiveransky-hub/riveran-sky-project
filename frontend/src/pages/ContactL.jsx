import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SEO from "../common/SEO";
import { seoData } from "../data/text";

const ContactL = () => {
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
    <>
      {" "}
      <SEO
        title={seoData.contact.title}
        description={seoData.contact.description}
        keywords={seoData.contact.keywords}
        ogImage={seoData.contact.ogImage}
        canonical={seoData.contact.canonical}
        ogUrl={seoData.contact.canonical}
      />
      <div>
        {/* Hero Section */}
        <section className="about-us relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-4">
            <h1 className="text-5xl lg:text-7xl font-heading font-semibold text-white text-center mb-4 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-lg lg:text-xl text-white/90 text-center max-w-2xl font-body">
              We're here to help and answer any question you might have
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="container mx-auto px-5 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Side - Contact Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 font-body leading-relaxed mb-8 text-base lg:text-lg">
                    Our staff is available around the clock to address your
                    questions, provide recommendations, and make booking process
                    seamless.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                        <FaPhone className="text-primary text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-dark mb-1">
                          Reservation
                        </h3>
                        <a
                          href="tel:+9325117757"
                          className="text-primary hover:text-primary-700 transition-colors font-body"
                        >
                          9325117757 - 9923339906
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                        <FaEnvelope className="text-primary text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-dark mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:info.riveransky@gmail.com"
                          className="text-primary hover:text-primary-700 transition-colors font-body"
                        >
                          info.riveransky@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                        <FaMapMarkerAlt className="text-primary text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-dark mb-1">
                          Address
                        </h3>
                        <p className="text-gray-600 font-body">
                          RiverANSky Luxury Resort, Rajur Bahula, Nashik
                          {/* Ruijterkade 42,
                        <br />
                        Amsterdam 1011TD */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-dark mb-8">
                  Get In Touch
                </h2>

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
                    />

                    <input
                      type="text"
                      id="checkout"
                      name="ch_out"
                      placeholder="Check Out"
                      className="border border-gray-300 px-4 py-3 rounded-lg w-full bg-white"
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

        {/* Map Section */}
        <section className="w-full h-[400px] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8738630344677!2d4.900479776793934!3d52.37927524616947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b6b9b3e3e3%3A0x3b3b3b3b3b3b3b3b!2sDe%20Ruijterkade%2042%2C%201011%20TD%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          />
        </section>

        {/* Booking Section */}
      </div>
    </>
  );
};

export default ContactL;
