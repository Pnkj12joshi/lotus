import React from "react";
import Slider from "react-slick";
import sliderone from "../assets/flexprintingslider.png";
import slidertwo from "../assets/Welding Iron.avif";
import sliderthree from "../assets/holding boards.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaPrint, FaPaintBrush, FaBullhorn } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Dashboard = () => {
  const arr = ["Flex Printing", "Banner", "Standee Design"];
  const customerarray = [
    {
      postion: "xyz",
      name: "Pankaj",
    },
    {
      postion: "abc",
      name: "Amit",
    },
    {
      postion: "pqr",
      name: "Sandeep",
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
                className="
            w-full
            h-64
            sm:h-80
            md:h-96
            lg:h-[500px]
            object-cover
            object-center
            rounded-none
            shadow-md
          "
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-5 p-2 mt-5">
        <h1 className="text-4xl font-semibold">
          "Crafting Your Vision – From Print to Precision"
        </h1>
        <p className=" text-black text-lg aling-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          aspernatur adipisci, laborum iusto delectus ut quibusdam ipsa
          nesciunt, odit debitis saepe fugiat quia laboriosam iste officia?
          Omnis, ipsam! Unde, nam nostrum accusamus iusto doloribus reiciendis
          explicabo reprehenderit quia eum temporibus vel ut quos, quae esse
          perspiciatis aut, voluptas aperiam quidem enim error provident?
          Quibusdam assumenda non nemo tempora ducimus. Ipsa magnam suscipit
          magni repellat eveniet animi pariatur possimus quod ea harum tempora,
          repellendus provident dolore autem, natus vero, nisi laboriosam unde
          rem nulla mollitia eos saepe perferendis voluptatum? Error explicabo
          aut sunt ad est dolorem, quisquam molestias debitis? Voluptatum,
          architecto.
        </p>
      </div>
      {/* Top Services Section */}
      <div className="flex flex-col gap-5 w-full text-center justify-center items-center px-4 bg-[hsl(160,11%,89%)] py-6">
        <h1 className="text-4xl font-bold text-blue-700">Our Top Services</h1>
        <p className="max-w-3xl text-gray-700">
          We specialize in Flex Printing, Welding, Iron Frame work, Letter
          Boards, and more.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mt-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-red-500 text-center">
            <FaPrint className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Flex Printing
            </h3>
            <p className="text-gray-600">
              Vibrant, long-lasting flex prints for banners, boards, and more.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-red-500 text-center">
            <FaPaintBrush className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Standee Design
            </h3>
            <p className="text-gray-600">
              Eye-catching standees that elevate your brand presence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-red-500 text-center">
            <FaBullhorn className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              Banner Holding
            </h3>
            <p className="text-gray-600">
              Durable frames and holders for impactful banner displays.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full flex sm:flex-row flex-col mt-[-24px]">
        <div className="flex-1">
          <img
            src={slidertwo}
            alt="why-us"
            className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 flex justify-center items-center bg-red-500 text-white p-8 flex-col gap-10">
          <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>
          <ul className="text-left space-y-4">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-white text-xl mt-1" />
              <span>
                <span className="font-semibold">High-Quality Work:</span>{" "}
                Precision and excellence in every project.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-white text-xl mt-1" />
              <span>
                <span className="font-semibold">Affordable Pricing:</span>{" "}
                Top-quality service that fits your budget.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-white text-xl mt-1" />
              <span>
                <span className="font-semibold">Timely Delivery:</span> We value
                your time and deliver fast.
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/*  Testimonial Section */}
      <div className="flex flex-col w-full p-2 gap-5">
        <h1 className="text-4xl font-bold text-center">
          What our Customers Say
        </h1>
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
              className="flex justify-center items-center flex-col gap-[50px] text-center px-4 "
              key={index}
            >
              <div className="flex justify-center items-center">
                <FaQuoteLeft className="text-5xl text-red-500" />
              </div>
              <p className="text-black ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                provident tenetur eveniet omnis dolore labore a veniam minus
                modi dolor? Quos quasi natus quod animi vel dolores ut nemo
                commodi.
              </p>
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
  <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
    Our Clients
  </h1>
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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ]}
  >
    {[
      "google.png",
      "amazon.png",
      "flipkart.png",
      "meta.png",
      "tata.png",
      "microsoft.png",
    ].map((logo, index) => (
      <div
        key={index}
        className="flex justify-center items-center px-4 py-2"
      >
        <img
          src={sliderone}
          alt={`client-${index}`}
          className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    ))}
  </Slider>
</div>

    </div>
  );
};

export default Dashboard;
