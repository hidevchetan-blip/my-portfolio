import React from 'react';
import { Github, Eye } from 'lucide-react';

const ProjectsSection = ({ isVisible }) => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Payment Gateway"],
      gradient: "from-blue-500 to-cyan-500",
      icon: "🛒"
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time analytics dashboard built with Next.js and Redux. Integrated multiple social media APIs for comprehensive data visualization.",
      tech: ["Next.js", "Redux", "Chart.js", "API Integration"],
      gradient: "from-purple-500 to-pink-500",
      icon: "📊"
    },
    {
      title: "Mobile Banking App",
      description: "Cross-platform mobile application using React Native. Secure transaction processing with biometric authentication.",
      tech: ["React Native", "Redux", "JWT Auth", "Biometric"],
      gradient: "from-green-500 to-emerald-500",
      icon: "🏦"
    },
    {
      title: "DevOps Automation Tool",
      description: "CI/CD pipeline automation tool built with Jenkins and Docker. Streamlined deployment process with AWS EC2 integration.",
      tech: ["Jenkins", "Docker", "AWS EC2", "Node.js"],
      gradient: "from-orange-500 to-red-500",
      icon: "⚙️"
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with message encryption and file sharing capabilities. Built with modern UI frameworks.",
      tech: ["React", "WebSocket", "Node.js", "Material UI"],
      gradient: "from-indigo-500 to-purple-500",
      icon: "💬"
    },
    {
      title: "Content Management System",
      description: "Headless CMS with drag-and-drop interface. SEO-optimized with server-side rendering using Next.js.",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "SSR"],
      gradient: "from-teal-500 to-cyan-500",
      icon: "📝"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl lg:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 group ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{project.icon}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white border border-white/20`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Eye size={16} />
                  <span className="text-sm">Demo</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
