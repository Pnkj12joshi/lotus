import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-[100px] flex flex-col gap-10 items-center justify-center w-full">

      {/* Who We Are Section */}
      <section className="max-w-6xl px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          At <span className="font-semibold">Branding Hub</span>, we specialize in delivering
          high-quality flex printing, iron frame work, and promotional material services. With
          years of experience and a passion for creativity, our team is dedicated to helping you
          build a powerful visual identity for your business. Whether you need banners, standees,
          or customized signage, we turn your vision into reality with precision and style.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-[hsl(160,11%,89%)] w-full py-10 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to provide businesses with impactful and affordable branding solutions.
            We are committed to quality, innovation, and timely service that helps our clients
            succeed and stand out in the market.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full px-4 max-w-6xl">
        <div className="bg-red-500 text-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
          <ul className="space-y-4 text-left sm:text-lg">
            {[
              "High-Quality Prints with rich colors and durability.",
              "Creative Designs tailored to your business needs.",
              "Affordable Pricing that fits your budget.",
              "Timely Delivery every time without compromise.",
            ].map((item, index) => (
              <li className="flex items-start gap-3" key={index}>
                <FaCheckCircle className="mt-1 text-xl" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-lg">
            Have a question or need a custom quote? Fill out the form and our team will get back to
            you promptly.
          </p>
        </div>

        <form
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white text-gray-800 p-8 rounded-2xl shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              required
              placeholder="Enter your phone number"
              maxLength={10}
              pattern="\d{10}"
              inputMode="numeric"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              placeholder="Subject (optional)"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-red-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default About;
