import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = ({ isVisible }) => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl lg:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Education</span>
        </h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-400 mr-4" size={24} />
              <h3 className="text-xl font-bold">B.Tech in Information Technology</h3>
            </div>
            <p className="text-gray-300 mb-2">AKTU University</p>
            <p className="text-blue-400 font-semibold">2016 - 2020</p>
          </div>
          <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center mb-4">
              <Award className="text-green-400 mr-4" size={24} />
              <h3 className="text-xl font-bold">12th Grade</h3>
            </div>
            <p className="text-gray-300 mb-2">CBSE Board</p>
            <p className="text-green-400 font-semibold">2016</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
