import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-10">
            Get in Touch with <span className="text-red-500">Lotus Fabrication</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Whether you have a question, project idea, or just want to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project or question..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 "
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Office Address</h3>
              <p>Lotus Fabrication, Industrial Estate, XYZ Street, Your City, Country</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>support@lotusfabrication.com</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p>+91-9876543210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
