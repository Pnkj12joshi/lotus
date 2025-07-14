import React from "react";
import Slider from "react-slick";
import sliderone from "../assets/flexprintingslider.png";
import slidertwo from "../assets/Welding Iron.avif";
import sliderthree from "../assets/holding boards.jpg";
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

const Dashboard = () => {
  const customerarray = [
    {
      postion: "Branding Hub",
      name: "Raj Kumar",
      testimonial: "They brought our branding ideas to life with amazing quality.",
    },
    {
      postion: "KGN Advertising (Flex Printing)",
      name: "Rihan",
      testimonial: "Superb quality prints at reasonable pricing!",
    },
    {
      postion: "SK Sign",
      name: "Birender",
      testimonial: "Reliable and timely delivery, every time.",
    },
    {
      postion: "Yug Enterprise",
      name: "Ajay Sharma",
      testimonial: "Professional service and attention to detail.",
    },
    {
      postion: "GM Motor",
      name: "Raja",
      testimonial: "Very happy with the creative design work!",
    },
    {
      postion: "GK Advertising",
      name: "Gaurav",
      testimonial: "Our go-to team for all promotional materials.",
    },
  ];

  const settings = {
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
    <div className="mt-[100px] w-full flex flex-col items-center justify-center gap-6">
      {/* Slider Section */}
      <div className="w-full">
        <Slider {...settings}>
          {[sliderone, slidertwo, sliderthree].map((img, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover object-center shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Vision Section */}
      <div className="w-full flex flex-col items-center justify-center gap-5 p-4 mt-5">
        <h1 className="text-4xl font-semibold text-center text-blue-800">
          "Crafting Your Vision – From Print to Precision"
        </h1>
        <p className="text-gray-700 text-lg text-justify max-w-5xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur
          adipisci, laborum iusto delectus ut quibusdam ipsa nesciunt, odit debitis
          saepe fugiat quia laboriosam iste officia? Omnis, ipsam! Unde, nam nostrum
          accusamus iusto doloribus reiciendis explicabo reprehenderit quia eum
          temporibus vel ut quos, quae esse perspiciatis aut, voluptas aperiam quidem
          enim error provident? Quibusdam assumenda non nemo tempora ducimus.
        </p>
      </div>

      {/* Top Services Section */}
      <div className="flex flex-col gap-6 w-full text-center justify-center items-center px-4 bg-[hsl(160,11%,89%)] py-10">
        <h1 className="text-4xl font-bold text-blue-700">Our Top Services</h1>
        <p className="max-w-3xl text-gray-700">
          We specialize in Flex Printing, Welding, Iron Frame work, Letter Boards, and more.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mt-6">
          {/* Card 1 */}
          <ServiceCard
            icon={<FaPrint />}
            title="Flex Printing"
            description="Vibrant, long-lasting flex prints for banners, boards, and more."
          />

          {/* Card 2 */}
          <ServiceCard
            icon={<FaPaintBrush />}
            title="Standee Design"
            description="Eye-catching standees that elevate your brand presence."
          />

          {/* Card 3 */}
          <ServiceCard
            icon={<FaBullhorn />}
            title="Banner Holding"
            description="Durable frames and holders for impactful banner displays."
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full flex sm:flex-row flex-col mt-[-24px]">
       <div className="flex-1 flex items-center justify-center">
  <img
    src={contactus}
    alt="why-us"
    className="w-full max-h-[300px]  rounded-xl"
  />
</div>
        <div className="flex-1 flex justify-center items-center bg-red-500 text-white p-8 flex-col gap-10">
          <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>
          <ul className="text-left space-y-4">
            {[
              "High-Quality Work: Precision and excellence in every project.",
              "Affordable Pricing: Top-quality service that fits your budget.",
              "Timely Delivery: We value your time and deliver fast.",
            ].map((text, idx) => (
              <li className="flex items-start gap-3" key={idx}>
                <FaCheckCircle className="text-xl mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="flex flex-col w-full p-4 gap-5 bg-white">
        <h1 className="text-4xl font-bold text-center">What our Customers Say</h1>
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          autoplay={true}
          autoplaySpeed={4000}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          pauseOnHover={true}
          className="w-full max-w-2xl mx-auto"
        >
          {customerarray.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col gap-10 text-center px-4"
            >
              <FaQuoteLeft className="text-5xl text-red-500" />
              <p className="text-lg text-gray-800">{item.testimonial}</p>
              <div className="mt-4">
                <p className="text-blue-800 font-semibold">{item.postion}</p>
                <p className="text-black font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Our Clients Section */}
      <div className="w-full py-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Clients</h1>
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
          {["google", "amazon", "flipkart", "meta", "tata", "microsoft"].map((logo, i) => (
            <div key={i} className="flex justify-center items-center px-4 py-2">
              <img
                src={sliderone} // Replace with actual logos like `/assets/${logo}.png`
                alt={`client-${logo}`}
                className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Contact Form Section */}
<div className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-12 px-4">
  <div className="max-w-3xl mx-auto text-center mb-10">
    <h2 className="text-4xl font-bold">Get in Touch</h2>
    <p className="mt-2 text-lg">
      Have a question or need a quote? Drop us a message and we’ll get back to you.
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
    <div className="col-span-1">
      <input
        type="text"
        placeholder="Enter your name"
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Email */}
    <div className="col-span-1">
      <input
        type="email"
        placeholder="Enter your email"
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Phone Number */}
    <div className="col-span-1">
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

    {/* Message */}
    <div className="col-span-1 md:col-span-2">
      <textarea
        rows="5"
        placeholder="Write your message..."
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="col-span-1 md:col-span-2 flex justify-center">
      <button
        type="submit"
        className="bg-red-500 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-red-600 transition duration-300"
      >
        Submit
      </button>
    </div>
  </form>
</div>

    </div>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-red-500 text-center">
    <div className="text-4xl text-red-500 mb-4 mx-auto">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Dashboard;
