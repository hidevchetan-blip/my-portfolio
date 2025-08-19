import React from 'react';

const SkillIcon = ({ skill }) => {
  const getSkillIcon = (skillName) => {
    const icons = {
      'HTML': '🌐',
      'CSS': '🎨',
      'JavaScript': '⚡',
      'React': '⚛️',
      'Next.js': '▲',
      'Redux': '🔄',
      'React Native': '📱',
      'Bootstrap': '🅱️',
      'Material UI': '🎯',
      'Tailwind CSS': '💨',
      'Responsive Design': '📐',
      'Node.js': '🟢',
      'API Integration': '🔗',
      'JWT Auth': '🔐',
      'Payment Gateways': '💳',
      'Jenkins': '⚙️',
      'Docker': '🐳',
      'AWS EC2': '☁️',
      'SSH': '🔑',
      'MongoDB': '🍃'
    };
    return icons[skillName] || '💻';
  };

  return (
    <div className="flex items-center space-x-3 group">
      <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
        {getSkillIcon(skill)}
      </span>
      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill}</span>
    </div>
  );
};

const SkillsSection = ({ skills, isVisible }) => {
  return (
    <section id="skills" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl lg:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technical Arsenal</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <div
              key={skillSet.category}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${skillSet.color} bg-clip-text text-transparent`}>
                {skillSet.category}
              </h3>
              <div className="space-y-3">
                {skillSet.items.map((skill, skillIndex) => (
                  <SkillIcon key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
