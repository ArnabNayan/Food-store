import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const ContactUs = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/premium-photo/contact-us-icons-virtual-screen-man-clicks-virtual-screen_218381-12609.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg bg-slate-600 bg-opacity-50 p-5 lg:p-10 m-5">
            <h1 className="mb-5 text-2xl lg:text-4xl font-serif font-bold text-orange-300">
              <Typewriter
                options={{
                  strings: ['Feel free to Contact Us', 'Feel free to message Us'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-5 text-lg lg:text-2xl font-serif font-semibold text-slate-400">
              Always ready for your service, we try to deliver food as soon as
              possible
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="mt-4 flex flex-col lg:flex-row gap-12 justify-evenly">
        {/* Phone Card */}
        <div className="bg-slate-100 border-4 border-amber-500 rounded-lg transform transition-transform duration-300 hover:scale-110 text-center p-8">
          <div className="flex justify-center items-center mb-4">
            <FaPhoneAlt  className="text-amber-500 h-16 w-16" />
          </div>
          <h1 className="text-black font-serif font-bold">Phone</h1>
          <p className="text-slate-400 font-serif">Contact us for ordering your favourite dishes</p>
          <p className="text-slate-400 font-serif">+8801343434676</p>
        </div>

        {/* Email Card */}
        <div className="bg-slate-100 border-4 border-amber-500 rounded-lg transform transition-transform duration-300 hover:scale-110 text-center p-8">
          <div className="flex justify-center items-center mb-4">
            <FaEnvelope className="text-amber-500 h-16 w-16" />
          </div>
          <h1 className="text-black font-serif font-bold">Email</h1>
          <p className="text-slate-400 font-serif">Reach out to us via email for any inquiries</p>
          <p className="text-slate-400 font-serif">contact@foodiverse.com</p>
        </div>

        {/* Location Card */}
        <div className="bg-slate-100 border-4 border-amber-500 rounded-lg transform transition-transform duration-300 hover:scale-110 text-center p-8">
          <div className="flex justify-center items-center mb-4">
            <FaMapMarkerAlt className="text-amber-500 h-16 w-16" />
          </div>
          <h1 className="text-black font-serif font-bold">Location</h1>
          <p className="text-slate-400 font-serif">Visit us at our main office to know more</p>
          <p className="text-slate-400 font-serif">123 Food Street, Food City</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" className=" mt-3 min-h-screen flex items-center justify-center bg-black opacity-90">
      <div className="max-w-md w-full p-8 bg-opacity-50 bg-black rounded-lg shadow-lg">
        <h2 data-aos="fade-up" data-aos-duration="2000" className="text-3xl font-bold text-white text-center mb-6">Contact Us</h2>
        
        <form data-aos="fade-up" data-aos-duration="2000">
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-300 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-300 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button data-aos="zoom-in" data-aos-duration="2000"
            type="submit"
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    {/* Google Map Embed */}
      <div data-aos="fade-up" data-aos-duration="2000" className="mt-0 relative z-10 p-4">
 

<iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8555682853703!2d91.81917207405225!3d22.359081790764595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89aaa8239cd%3A0x6e65fa00001dd59f!2sGEC%20More%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1723212100147!5m2!1sen!2sbd"style={{ border: 0 }} width="100%" height="450"allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"  aria-hidden="false"
    tabIndex="0"
    className="rounded-lg"></iframe>
</div>

    </div>
  );
};

export default ContactUs;
