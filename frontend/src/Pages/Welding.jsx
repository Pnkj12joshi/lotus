import React from 'react';
import structurewelding from "../assets/images.jpg";
import customfabrication from "../assets/customfabrication.jpg";
import onsitewelding from "../assets/onsitewelding.jpg";

const Welding = () => {
  const weldingTypes = [
    {
      title: "Structural Welding",
      desc: "Reinforced welding for heavy-duty steel and metal structures.",
      image: structurewelding,
    },
    {
      title: "Custom Fabrication",
      desc: "Tailored welding for gates, frames, racks, and more.",
      image: customfabrication,
    },
    {
      title: "On-Site Welding",
      desc: "Portable welding for emergency repairs or construction projects.",
      image: onsitewelding,
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-6 bg-gray-50">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-10 mt-[80px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-gray-800">
          Professional Welding Services
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Reliable, strong, and precise welding solutions for industrial, commercial, and custom fabrication needs.
        </p>
      </section>

      {/* Grid of Welding Types */}
      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 px-2">
        {weldingTypes.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Our Welding Services */}
      <section className="bg-white text-blue-800 p-6 md:p-8 rounded-xl shadow-sm max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Our Welding Services?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm text-gray-800">
          <div>
            <h3 className="text-base font-semibold mb-1">🧑‍🏭 Certified Welders</h3>
            <p>Skilled professionals with extensive experience in all major welding techniques.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">⚙️ Advanced Equipment</h3>
            <p>High-grade welding tools for precision, safety, and strength in every joint.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">📍 On-Site Availability</h3>
            <p>We offer mobile welding for emergency repairs or construction support.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">📏 Custom Fabrication</h3>
            <p>From simple gates to complex frames — we weld to fit your specs.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">⏱️ Fast Turnaround</h3>
            <p>Same-day service available for urgent welding jobs and repairs.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">💰 Affordable Rates</h3>
            <p>Competitive pricing for all welding jobs — small or large-scale.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold">Q: What types of welding do you offer?</h4>
            <p>A: We specialize in MIG, TIG, Arc, and spot welding depending on the job type.</p>
          </div>
          <div>
            <h4 className="font-semibold">Q: Can you come to our site?</h4>
            <p>A: Yes, we offer portable welding services at your location for emergency and structural needs.</p>
          </div>
          <div>
            <h4 className="font-semibold">Q: How long does a typical job take?</h4>
            <p>A: Most small jobs are completed the same day. Larger projects are scheduled in advance.</p>
          </div>
          <div>
            <h4 className="font-semibold">Q: Do you provide materials?</h4>
            <p>A: Yes, we offer both labor-only and full-material packages based on your requirements.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 text-blue-900 text-center p-8 rounded-xl shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Need Reliable Welding Services?</h2>
        <p className="text-sm md:text-base mb-4">Contact us today for quick, affordable, and professional welding solutions!</p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-full transition-all">
          Request a Quote
        </button>
      </section>
    </div>
  );
};

export default Welding;
