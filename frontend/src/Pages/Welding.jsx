import React from 'react';
const Welding = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-12 mt-[100px]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Professional Welding Services
        </h1>
        <p className="text-lg md:text-xl">
          Reliable, strong, and precise welding solutions for industrial, commercial, and custom fabrication needs.
        </p>
      </section>

      {/* Grid of Welding Types */}
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {[
          {
            title: "Structural Welding",
            desc: "Reinforced welding for heavy-duty steel and metal structures.",
          },
          {
            title: "Custom Fabrication",
            desc: "Tailored welding for gates, frames, racks, and more.",
        
          },
          {
            title: "On-Site Welding",
            desc: "Portable welding for emergency repairs or construction projects.",

          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Our Welding Services */}
      <section className="bg-white text-blue-800 p-8 rounded-2xl shadow-md max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Welding Services?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">🧑‍🏭 Certified Welders</h3>
            <p>Skilled professionals with extensive experience in all major welding techniques.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">⚙️ Advanced Equipment</h3>
            <p>High-grade welding tools for precision, safety, and strength in every joint.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📍 On-Site Availability</h3>
            <p>We offer mobile welding for emergency repairs or construction support.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📏 Custom Fabrication</h3>
            <p>From simple gates to complex frames — we weld to fit your specs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">⏱️ Fast Turnaround</h3>
            <p>Same-day service available for urgent welding jobs and repairs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💰 Affordable Rates</h3>
            <p>Competitive pricing for all welding jobs — small or large-scale.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Q: What types of welding do you offer?</h4>
            <p>We specialize in MIG, TIG, Arc, and spot welding depending on the job type.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Can you come to our site?</h4>
            <p>Yes, we offer portable welding services at your location for emergency and structural needs.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: How long does a typical job take?</h4>
            <p>Most small jobs are completed the same day. Larger projects are scheduled in advance.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Do you provide materials?</h4>
            <p>Yes, we offer both labor-only and full-material packages based on your requirements.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white text-blue-900 text-center p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Need Reliable Welding Services?</h2>
        <p className="text-lg mb-5">Contact us today for quick, affordable, and professional welding solutions!</p>
        <button className="bg-blue-700 hover:bg-blue-800 font-semibold px-8 py-3 rounded-full transition-all text-white">
          Request a Quote
        </button>
      </section>
    </div>
  );
};

export default Welding;
