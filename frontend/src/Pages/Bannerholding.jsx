import React from 'react';

const Bannerholding = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-12 mt-[100px]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Banner Holding Services
        </h1>
        <p className="text-lg md:text-xl">
          Professional banner holding services for political rallies, events, brand promotions, and street campaigns — make your message move with impact.
        </p>
      </section>

      {/* Grid of Holding Types */}
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {[
          {
            title: "Event Banner Holding",
            desc: "Display promotional banners at exhibitions, trade shows, and local events.",
          },
          {
            title: "Political Campaign Holding",
            desc: "Engage the public during rallies and marches with clear message banners.",
          },
          {
            title: "Street Promotion Holding",
            desc: "Target busy streets with eye-level banner holding for maximum visibility.",
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

      {/* Why Choose Our Banner Holding */}
      <section className="bg-white text-green-800 p-8 rounded-2xl shadow-md max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Banner Holding Services?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">🙋 Trained Staff</h3>
            <p>Professionals trained to hold and present banners effectively for maximum visibility.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🚦 Targeted Locations</h3>
            <p>Strategic placement in traffic zones, markets, rallies, and high footfall areas.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📢 Brand Visibility</h3>
            <p>Boost your campaign or brand with mobile and human-held promotional power.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🕒 Flexible Timing</h3>
            <p>Hourly, half-day, and full-day options available based on your event needs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📍 On-Spot Execution</h3>
            <p>Immediate deployment of holders in your preferred location.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💰 Cost Efficient</h3>
            <p>Affordable rates with volume discounts for extended campaigns.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Q: Do you provide banners too?</h4>
            <p>Yes, we offer both banner printing and holding services together or separately.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Can I choose specific locations?</h4>
            <p>Absolutely! You can give us your preferred routes, intersections, or event venues.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Is it available for night events?</h4>
            <p>Yes, we provide holding services day and night as per your requirement.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Is there a minimum duration?</h4>
            <p>The minimum holding duration is 2 hours. Longer durations come at discounted rates.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white text-green-900 text-center p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Need Banner Holding Service?</h2>
        <p className="text-lg mb-5">Book trained banner holders for your next campaign or event now!</p>
        <button className="bg-green-700 hover:bg-green-800 font-semibold px-8 py-3 rounded-full transition-all text-white">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default Bannerholding;
