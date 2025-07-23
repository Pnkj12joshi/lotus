import React from 'react';
import eventstandee from "../assets/Event Standees.webp";
import retail from "../assets/Retail Promotional Standees.webp";
import productlaunch from "../assets/Product Launch Standees.webp";

const StandeeDesign = () => {
  const standeeData = [
    {
      title: "Event Standees",
      desc: "Perfect for corporate events, conferences, and presentations.",
      img: eventstandee,
    },
    {
      title: "Retail Promotional Standees",
      desc: "Draw attention to offers and products inside your store.",
      img: retail,
    },
    {
      title: "Product Launch Standees",
      desc: "Create buzz and visibility around new product launches.",
      img: productlaunch,
    },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-12 mt-[100px]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Standee Design & Printing
        </h1>
        <p className="text-lg md:text-xl">
          Sleek, professional, and impactful standee designs to elevate your brand at events, stores, and exhibitions.
        </p>
      </section>

      {/* Grid of Standee Types */}
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {standeeData.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={item.img}
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

      {/* Why Choose Our Standees */}
      <section className="bg-white text-purple-800 p-8 rounded-2xl shadow-md max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Standee Design?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">🎨 Creative Designs</h3>
            <p>We craft visually appealing standees that grab attention and reflect your brand.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🖨️ HD Print Quality</h3>
            <p>Vibrant and crisp print quality on durable materials with fade-resistant ink.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">👜 Easy to Carry</h3>
            <p>Compact and lightweight — ideal for on-the-go marketing.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">⚙️ Custom Sizes</h3>
            <p>Choose from standard or fully customized dimensions and orientations.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🧩 End-to-End Service</h3>
            <p>From design to delivery — we take care of everything.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💰 Affordable Pricing</h3>
            <p>Premium quality standees at the most competitive rates.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Q: What material do you use?</h4>
            <p>We use premium vinyl and PP material for durability and visual appeal.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Can you help with design?</h4>
            <p>Yes, our design team provides free basic design services with every order.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: What is the turnaround time?</h4>
            <p>We usually deliver within 24 hours. Express same-day service is also available.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Do you deliver outside the city?</h4>
            <p>Yes, we deliver standees across cities with reliable courier services.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white text-purple-900 text-center p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Need Stunning Standees?</h2>
        <p className="text-lg mb-5">Get in touch for premium design and quick printing service!</p>
        <button className="bg-purple-700 hover:bg-purple-800 font-semibold px-8 py-3 rounded-full transition-all text-white">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default StandeeDesign;
