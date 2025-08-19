import React from 'react';

const ExperienceSection = ({ isVisible }) => {
  const experiences = [
    {
      company: "Hashstudioz Technology Pvt Ltd",
      period: "Nov 2023 - Present",
      role: "Frontend Developer",
      description: "Leading frontend development with React, Next.js, and modern UI frameworks. Mentoring junior developers and optimizing application performance."
    },
    {
      company: "Ahom Technologies Pvt. Ltd",
      period: "Oct 2022 - Oct 2023",
      role: "Software Engineer",
      description: "Developed full-stack applications with focus on user experience and performance. Implemented CI/CD pipelines and worked with cloud technologies."
    },
    {
      company: "Quick Live Solutions",
      period: "Jun 2021 - Aug 2022",
      role: "Junior Developer",
      description: "Started career building responsive web applications and learning industry best practices. Collaborated with cross-functional teams on multiple projects."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl lg:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Professional Journey</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                <div className="h-px bg-gradient-to-r from-blue-500/50 to-purple-500/50 flex-1"></div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:translate-x-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <span className="text-blue-400 font-semibold">{exp.period}</span>
                </div>
                <p className="text-purple-300 font-medium mb-2">{exp.role}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
