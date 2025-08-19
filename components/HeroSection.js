import React from 'react';
import { ChevronDown, Code } from 'lucide-react';

const HeroSection = ({ currentSkill, skills }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Chetan Chauhan
              </h1>
              <div className="text-xl lg:text-2xl mb-8 h-20">
                <span className="text-gray-300">Software Engineer specializing in </span>
                <div className="inline-block">
                  <span className={`font-semibold bg-gradient-to-r ${skills[currentSkill]?.color} bg-clip-text text-transparent transition-all duration-500`}>
                    {skills[currentSkill]?.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                4+ years of experience crafting modern web applications with React, Next.js, and cutting-edge technologies. 
                Passionate about creating seamless user experiences and scalable solutions.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View My Work
                </button>
                <button className="border border-white/30 hover:border-white/60 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl font-bold">
                    CC
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Code size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
