import React from "react";
import Slider from "react-slick";
import sliderone from "../assets/flexpriniting.jpg";
import slidertwo from "../assets/ironframe.avif";
import sliderthree from "../assets/letterboard.webp";
import contactus from "../assets/contactus.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaCheckCircle,
  FaPrint,
  FaPaintBrush,
  FaBullhorn,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  { position: "Branding Hub", name: "Raj Kumar", testimonial: "They brought our branding ideas to life with amazing quality." },
  { position: "KGN Advertising (Flex Printing)", name: "Rihan", testimonial: "Superb quality prints at reasonable pricing!" },
  { position: "SK Sign", name: "Birender", testimonial: "Reliable and timely delivery, every time." },
  { position: "Yug Enterprise", name: "Ajay Sharma", testimonial: "Professional service and attention to detail." },
  { position: "GM Motor", name: "Raja", testimonial: "Very happy with the creative design work!" },
  { position: "GK Advertising", name: "Gaurav", testimonial: "Our go-to team for all promotional materials." },
];

const serviceList = [
  { icon: <FaPrint />, title: "Flex Printing", description: "Vibrant, long-lasting flex prints for banners, boards, and more." },
  { icon: <FaPaintBrush />, title: "Standee Design", description: "Eye-catching standees that elevate your brand presence." },
  { icon: <FaBullhorn />, title: "Banner Holding", description: "Durable frames and holders for impactful banner displays." },
];

const clientLogos = ["google", "amazon", "flipkart", "meta", "tata", "microsoft"];

const Dashboard = () => {
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="mt-[100px] w-full flex flex-col gap-16">

      {/* Hero Slider */}
      <section className="w-full">
        <Slider {...heroSliderSettings}>
          {[sliderone, slidertwo, sliderthree].map((img, index) => (
            <div key={index} className="w-full h-[300px] md:h-[380px] lg:h-[400px]">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover object-center rounded-xl shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Vision */}
      <section className="text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">Crafting Your Vision – From Print to Precision</h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          We take pride in transforming your concepts into reality with unmatched quality and attention to detail. Our dedication to premium printing, sturdy fabrication, and professional service ensures your brand makes a lasting impression.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">Our Top Services</h2>
          <p className="text-gray-600 mt-4 text-lg">From printing to promotion, we bring creativity and durability to your brand presence.</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {serviceList.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-red-600 text-white rounded-xl overflow-hidden shadow-xl">
        <img src={contactus} alt="Why choose us" className="w-full h-full object-cover" />
        <div className="p-10 flex flex-col justify-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose Us?</h2>
          <ul className="space-y-4 text-lg">
            {["High-Quality Work: Precision and excellence in every project.", "Affordable Pricing: Top-quality service that fits your budget.", "Timely Delivery: We value your time and deliver fast."].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-xl text-white" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          autoplay={true}
          autoplaySpeed={4000}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          pauseOnHover={true}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-6 px-6">
              <FaQuoteLeft className="text-5xl text-red-500" />
              <p className="text-lg text-gray-700 italic">“{item.testimonial}”</p>
              <div>
                <p className="text-blue-800 font-semibold">{item.position}</p>
                <p className="text-gray-900 font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Clients */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Trusted Clients</h2>
        <Slider
          dots={false}
          infinite={true}
          speed={1000}
          autoplay={true}
          autoplaySpeed={2000}
          slidesToShow={4}
          slidesToScroll={1}
          arrows={false}
          pauseOnHover={false}
          className="max-w-6xl mx-auto"
          responsive={[{ breakpoint: 1024, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }, { breakpoint: 480, settings: { slidesToShow: 1 } }]}
        >
          {clientLogos.map((logo, i) => (
            <div key={i} className="flex justify-center items-center px-6">
              <img
                src={sliderone}
                alt={`client-${logo}`}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Contact Form */}
      <section className="bg-gradient-to-br from-red-500 to-red-700 text-white py-16 px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl font-bold">Let’s Work Together</h2>
          <p className="mt-4 text-lg">Have a question or need a custom quote? Fill out the form below — we’d love to hear from you.</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white text-gray-800 p-8 rounded-xl shadow-lg"
        >
          <input type="text" placeholder="Enter your name" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="email" placeholder="Enter your email" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="tel" placeholder="Enter your phone number" maxLength={10} pattern="\\d{10}" inputMode="numeric" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <textarea rows="5" placeholder="Write your message..." required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none md:col-span-2"></textarea>
          <div className="md:col-span-2 flex justify-center">
            <button type="submit" className="bg-red-500 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-red-600 transition duration-300">
              Submit
            </button>
          </div>
        </form>
      </section>

    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-red-500 text-center">
    <div className="text-5xl text-red-500 mb-4 mx-auto">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

export default Dashboard;
