import React from "react";
import Slider from "react-slick";
import sliderone from "../assets/eco-solvent-printing-machine-4311410_1280.jpg";
import slidertwo from "../assets/c-lipped-channel-5528517_1280.jpg";
import sliderthree from "../assets/standee design.avif";
import contactus from "../assets/contactus.jpg";
import brandone from "../assets/branding hub brand.jpg";
import brandtwo from "../assets/gk advertising brands.png";
import brandthree from "../assets/kgn-publicity brands.jpg";
import brandfour from "../assets/sk signs brands.png";
import brandfive from "../assets/holding boards.jpg";

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
  {
    position: "Branding Hub",
    name: "Raj Kumar",
    testimonial:
      "They brought our branding ideas to life with amazing quality.",
  },
  {
    position: "KGN Advertising (Flex Printing)",
    name: "Rihan",
    testimonial: "Superb quality prints at reasonable pricing!",
  },
  {
    position: "SK Sign",
    name: "Birender",
    testimonial: "Reliable and timely delivery, every time.",
  },
  {
    position: "Yug Enterprise",
    name: "Ajay Sharma",
    testimonial: "Professional service and attention to detail.",
  },
  {
    position: "GM Motor",
    name: "Raja",
    testimonial: "Very happy with the creative design work!",
  },
  {
    position: "GK Advertising",
    name: "Gaurav",
    testimonial: "Our go-to team for all promotional materials.",
  },
];

const serviceList = [
  {
    icon: <FaPrint />,
    title: "Flex Printing",
    description:
      "Vibrant, long-lasting flex prints for banners, boards, and more.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Standee Design",
    description: "Eye-catching standees that elevate your brand presence.",
  },
  {
    icon: <FaBullhorn />,
    title: "Banner Holding",
    description: "Durable frames and holders for impactful banner displays.",
  },
  {
    icon: <FaBullhorn />,
    title: "Banner Holding",
    description: "Durable frames and holders for impactful banner displays.",
  },
  {
    icon: <FaBullhorn />,
    title: "Banner Holding",
    description: "Durable frames and holders for impactful banner displays.",
  },
  {
    icon: <FaBullhorn />,
    title: "Banner Holding",
    description: "Durable frames and holders for impactful banner displays.",
  },
];

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
    <div className="mt-24 grid grid-cols-1 gap-20 px-4 lg:px-16">
<section className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl px-6 py-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    {/* Text Content */}
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-800">
        <span className="text-red-500">Creative Printing</span> That Builds Your Brand
      </h1>
      <p className="text-lg sm:text-xl text-gray-700">
        We craft vibrant flex prints, eye-catching standees, and strong banners to help your business stand out. Let your brand speak loud and clear with every visual.
      </p>
      <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
        Let’s Get Started
      </button>
    </div>

    {/* Image Slider Section */}
    <div className="flex justify-center w-full">
      <Slider
        dots={true}
        infinite={true}
        autoplay={true}
        speed={600}
        autoplaySpeed={3000}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        className="w-full max-w-md rounded-xl overflow-hidden shadow-lg"
      >
        {[sliderone, slidertwo, sliderthree].map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>




      {/* Vision Section */}
      <section className="text-center max-w-8xl mx-auto grid gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 w-full">
          Crafting Your Vision – From Print to Precision
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          We take pride in transforming your concepts into reality with
          unmatched quality and attention to detail. Our dedication to premium
          printing, sturdy fabrication, and professional service ensures your
          brand makes a lasting impression.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-4 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">Our Top Services</h2>
          <p className="text-gray-600 mt-4 text-lg">
            From printing to promotion, we bring creativity and durability to
            your brand presence.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {serviceList.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>

    {/* Why Choose Us Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-10">
      Why Choose Us?
    </h2>

    <ul className="space-y-6 text-lg text-gray-700 text-left sm:text-center">
      {[
        "High-Quality Work: Precision and excellence in every project.",
        "Affordable Pricing: Top-quality service that fits your budget.",
        "Timely Delivery: We value your time and deliver fast.",
      ].map((item, index) => (
        <li key={index} className="flex items-start justify-start gap-3 sm:justify-center">
          <FaCheckCircle className="text-green-600 mt-1 text-xl" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</section>



      {/* Testimonials */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>
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
            <div
              key={i}
              className="flex flex-col items-center text-center gap-6 px-6"
            >
              <FaQuoteLeft className="text-5xl text-red-500" />
              <p className="text-lg text-gray-700 italic">
                “{item.testimonial}”
              </p>
              <div>
                <p className="text-blue-800 font-semibold">{item.position}</p>
                <p className="text-gray-900 font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Trusted Clients
        </h2>
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
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ]}
        >
          {[brandone, brandtwo, brandthree, brandfour, brandfive].map(
            (logo, i) => (
              <div key={i} className="flex justify-center items-center px-6">
                <img
                  src={logo}
                  alt={`client-${i}`}
                  className="h-24 w-auto object-contain transition duration-300"
                />
              </div>
            )
          )}
        </Slider>
      </section>

      {/* Contact Form */}
      <section className="bg-gradient-to-br from-red-500 to-red-700 text-white py-16 px-6 rounded-xl">
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h2 className="text-4xl font-bold">Let’s Work Together</h2>
          <p className="mt-4 text-lg w-full">
            Have a question or need a custom quote? Fill out the form below —
            we’d love to hear from you.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white text-gray-800 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            maxLength={10}
            pattern="\\d{10}"
            inputMode="numeric"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            rows="5"
            placeholder="Write your message..."
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none md:col-span-2"
          ></textarea>
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

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-red-500 text-center">
    <div className="text-5xl text-red-500 mb-4 mx-auto">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

export default Dashboard;
