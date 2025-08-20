import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Redux", "React Native"], color: "from-blue-500 to-purple-600" },
    { category: "UI/UX", items: ["Bootstrap", "Material UI", "Tailwind CSS", "Responsive Design"], color: "from-pink-500 to-rose-600" },
    { category: "Backend", items: ["Node.js", "API Integration", "JWT Auth", "Payment Gateways"], color: "from-green-500 to-emerald-600" },
    { category: "DevOps & Database", items: ["Jenkins", "Docker", "AWS EC2", "SSH", "MongoDB"], color: "from-orange-500 to-red-600" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Chetan Chauhan - Portfolio</title>
        <meta name="description" content="Software Engineer with 4+ years of experience in React, Next.js, Node.js and modern web technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
        <HeroSection currentSkill={currentSkill} skills={skills} />
        <SkillsSection skills={skills} isVisible={isVisible} />
        {/* <ProjectsSection isVisible={isVisible} /> */}
        <ExperienceSection isVisible={isVisible} />
        <EducationSection isVisible={isVisible} />
        <ContactSection isVisible={isVisible} />
        <Footer />
      </div>
    </>
  );
}
