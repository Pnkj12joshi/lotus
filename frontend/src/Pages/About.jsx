import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; 

const About = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation only happens once
    });
  }, []);
  return (
    <div className="mt-[80px] w-full flex flex-col gap-20 items-center justify-center text-gray-800">
      {/* Header Section */}
      <section className="max-w-6xl px-4 text-center mt-8" data-aos="fade-up">
        <h1 className="text-5xl font-bold text-black mb-6">
          About Lotus Fabrication
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 text-justify">
          <span className="font-semibold text-black">Lotus Fabrication</span>{" "}
          is a creative powerhouse specializing in high-quality flex printing,
          iron fabrication, and promotional display solutions. With a
          commitment to precision and innovation, we transform ideas into
          impactful visuals that elevate your brand presence. From banners and
          standees to durable iron frame works, we offer customized,
          cost-effective, and visually appealing solutions for all your
          branding needs.
        </p>
      </section>

      {/* Mission + Vision Section in Grid */}
      <section className="w-full px-4 max-w-6xl"  data-aos="fade-up">
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Mission",
              text: "To deliver top-tier visual branding and fabrication services with unmatched reliability, creativity, and speed. We aim to empower businesses with standout promotional materials that leave lasting impressions.",
            },
            {
              title: "Our Vision",
              text: "To become a nationwide leader in fabrication and promotional services, recognized for quality, trust, and creative excellence that redefines how brands engage with their audience.",
            },
          ].map((block, i) => (
            <div
              key={i}
              className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out"
            >
              <h2 className="text-3xl font-bold text-red-500 mb-4">
                {block.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Grid Cards */}
      <section className="w-full px-4 max-w-6xl"  data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Why Choose Lotus Fabrication?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Vibrant, high-resolution prints for maximum impact.",
            "Customized designs that reflect your brand identity.",
            "Iron frame work built for strength and durability.",
            "Affordable pricing with uncompromised quality.",
            "Prompt delivery with consistent performance.",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-100 p-6 rounded-xl shadow-md transition duration-300 ease-in-out hover:shadow-xl hover:bg-red-500 hover:text-white"
            >
              <FaCheckCircle className="text-2xl mt-1 text-red-500 group-hover:text-white" />
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-16 px-4"  data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Let’s Talk</h2>
          <p className="mt-3 text-lg">
            Need a quote or have a custom project in mind? Reach out and we’ll
            bring your vision to life.
          </p>
        </div>

        <form
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white text-gray-800 p-8 rounded-3xl shadow-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="col-span-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="col-span-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            pattern="\d{10}"
            maxLength={10}
            className="col-span-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Subject (optional)"
            className="col-span-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            rows="5"
            placeholder="Write your message..."
            required
            className="col-span-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          ></textarea>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-md text-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default About;
