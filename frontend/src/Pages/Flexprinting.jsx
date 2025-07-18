import React from 'react';

const Flexprinting = () => {
  return (
    <div className="  min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-12 mt-[100px]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Flex Printing Services 
        </h1>
        <p className="text-lg md:text-xl ">
          Affordable, durable, and eye-catching flex banners, hoardings, posters, and signage for events, promotions, shops, and more.
        </p>
      </section>

      {/* Grid of Services */}
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {[
          {
            title: "Event Flex Banners",
            desc: "High-quality banners for product launches, weddings, trade fairs, and more.",
            img: "/images/flex-banner.jpg",
          },
          {
            title: "Political Flex Posters",
            desc: "Grab voter attention with impactful political banners printed in bulk.",
            img: "/images/political-banner.jpg",
          },
          {
            title: "Advertising Hoardings",
            desc: "Large format hoardings to boost visibility in high-traffic areas.",
            img: "/images/event-hoarding.jpg",
          },
          {
            title: "Retail Flex Signage",
            desc: "Display your offers, new arrivals, or branding with bold and colorful prints.",
            img: "/images/shop-signage.jpg",
          },
          {
            title: "Backlit Flex Boards",
            desc: "Perfect for nighttime promotions — light up your message with backlit flex.",
            img: "/images/backlit.jpg",
          },
          {
            title: "Roll-Up Standees",
            desc: "Portable, compact, and professional standees for events and exhibitions.",
            img: "/images/flex-standee.jpg",
          },
        ].map((item, index) => (
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

      {/* Detailed Services Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Flex Printing Solutions</h2>
        <ul className="space-y-4  text-lg">
          <li>
            ✅ **Eco-Solvent Flex Printing** – Bright and eco-friendly prints with high-resolution output.
          </li>
          <li>
            ✅ **Blackout Flex** – Ideal for front-lit and backlit applications, prevents image transparency.
          </li>
          <li>
            ✅ **Star Flex** – Glossy, durable, waterproof, and affordable — perfect for general advertising.
          </li>
          <li>
            ✅ **Canvas Flex** – Premium matte texture used for indoor events and artistic displays.
          </li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white text-red-700 p-8 rounded-2xl shadow-md max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Flex Printing Services?</h2>
        <div className="grid sm:grid-cols-1  gap-6 ">
          <div>
            <h3 className="text-xl font-semibold mb-2">✨ High Resolution</h3>
            <p>We use top-tier printers for ultra-sharp and vibrant prints.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🚚 Same-Day Delivery</h3>
            <p>Need it urgent? We deliver flex within hours in [Your City].</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💸 Budget Friendly</h3>
            <p>Best prices guaranteed. No compromise on quality.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🌦️ Weather Proof</h3>
            <p>UV and rain resistant flex ideal for outdoor use.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📏 Custom Sizes</h3>
            <p>We print on any size — from posters to giant hoardings.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📞 Free Design Help</h3>
            <p>No designer? We assist you in creating appealing banner designs.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Q: What is the minimum order for flex printing?</h4>
            <p className="">We cater to both bulk and single-piece orders — no minimum quantity.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Do you offer design support?</h4>
            <p className="">Yes, we offer free basic design and layout support for your prints.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: How long does it take to print and deliver?</h4>
            <p className="">Standard orders are ready within 4–6 hours. We also offer same-day delivery.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Can I print custom sizes?</h4>
            <p className="">Absolutely! We support all sizes, from A4 to large hoardings.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white text-red-800 text-center p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Print Your Flex?</h2>
        <p className="text-lg mb-5">Get in touch with us for quick, affordable, and premium flex printing.</p>
        <button className="bg-red-600 hover:bg-red-700  font-semibold px-8 py-3 rounded-full transition-all text-white">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default Flexprinting;
