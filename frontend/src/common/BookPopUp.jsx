
import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const BookPopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
      });

    const initDatepicker = async () => {
      await loadScript(
        "https://www.eglobe-solutions.com/mailer/EglobeCalender/jquery-1.9.1.js",
      );
      await loadScript(
        "https://www.eglobe-solutions.com/mailer/EglobeCalender/jquery-ui.js",
      );

      window.$("#checkin").datepicker({
        minDate: 0,
        numberOfMonths: 1,
        dateFormat: "dd-M-yy",
        beforeShow: function () {
          setTimeout(() => {
            window.$(".ui-datepicker").css("z-index", 9999);
          }, 0);
        },
        onClose: function (selectedDate) {
          window.$("#checkout").datepicker("option", "minDate", selectedDate);
        },
      });

      window.$("#checkout").datepicker({
        dateFormat: "dd-M-yy",
        beforeShow: function () {
          setTimeout(() => {
            window.$(".ui-datepicker").css("z-index", 9999);
          }, 0);
        },
        onClose: function (selectedDate) {
          window.$("#checkin").datepicker("option", "maxDate", selectedDate);
        },
      });
    };

    initDatepicker();
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
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-10 w-full max-w-xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-3xl font-heading font-semibold text-dark mb-6">
            Book A Room
          </h3>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
          >
            ×
          </button>
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
                className="border border-gray-300 px-4 py-3 rounded-lg w-full bg-white cursor-pointer"
                onFocus={() => window.$("#checkin").datepicker("show")}
              />

              <input
                type="text"
                id="checkout"
                name="ch_out"
                placeholder="Check Out"
                className="border border-gray-300 px-4 py-3 rounded-lg w-full bg-white cursor-pointer"
                onFocus={() => window.$("#checkout").datepicker("show")}
              />
            </div>

            <input type="hidden" name="nights" id="numNightsParam" value="1" />

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              BOOK ONLINE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookPopUp;
