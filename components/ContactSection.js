import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactSection = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMail = () => {
    const { name, email, message } = formData;

    // Construct the mailto link
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:chetanrajputsm@gmail.com?subject=${subject}&body=${body}`;

    // Open the user's default email app
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl lg:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left Side */}
            <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-400" size={20} />
                  <span className="text-gray-300">chetanrajputsm@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-green-400" size={20} />
                  <span className="text-gray-300">+91-7011626365</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-red-400" size={20} />
                  <span className="text-gray-300">India</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/chetan-chauhan-b8aba3167/', '_blank')}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </button>
                <button
                  onClick={() => window.open('https://github.com/hidevchetan-blip', '_blank')}
                  className="bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </button>
              </div>
            </div>

            {/* Right Side — Form */}
            <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-2xl font-bold mb-6 text-white">Quick Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                ></textarea>
                <button
                  onClick={handleSendMail}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
