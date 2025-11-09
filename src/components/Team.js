import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#team');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Tharushi Boteju",
      position: "CEO & Managing Partner",
      bio: "BBNS: MI& SC (Victoria University), AAT Passed Finalist, Part Qualified ICASL, DICA(ESOFT)",
      expertise: ["Strategic Planning", "Financial Advisory", "Leadership"],
      image: "/images/team/tharushie.jpg", // Local image path - add your photo to public/images/team/
      social: {
        linkedin: "https://linkedin.com/in/tharushi-boteju",
        instagram: "https://instagram.com/tharushi_boteju",
        email: "tharushi@elegantcapitals.com"
      }
    },
    {
      name: "Michael Chen",
      position: "Senior Financial Advisor",
      bio: "Michael specializes in financial planning and risk management, helping clients optimize their financial performance and navigate complex market conditions.",
      expertise: ["Financial Planning", "Risk Management", "Investment Analysis"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      social: {
        linkedin: "https://linkedin.com/in/michael-chen-financial",
        instagram: "https://instagram.com/michaelchen_finance",
        email: "michael@elegantcapitals.com"
      }
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director",
      bio: "Emily leads our operations optimization practice, helping businesses streamline processes and improve efficiency across all departments.",
      expertise: ["Operations Management", "Process Improvement", "Efficiency Analysis"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      social: {
        linkedin: "https://linkedin.com/in/emily-rodriguez-ops",
        instagram: "https://instagram.com/emilyrodriguez_ops",
        email: "emily@elegantcapitals.com"
      }
    },
    {
      name: "David Thompson",
      position: "Business Strategy Consultant",
      bio: "David brings extensive experience in market analysis and strategic planning, helping businesses identify opportunities and develop winning strategies.",
      expertise: ["Market Analysis", "Strategic Planning", "Competitive Intelligence"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      social: {
        linkedin: "https://linkedin.com/in/david-thompson-strategy",
        instagram: "https://instagram.com/davidthompson_strategy",
        email: "david@elegantcapitals.com"
      }
    },
    {
      name: "Lisa Park",
      position: "Risk Management Specialist",
      bio: "Lisa specializes in identifying and mitigating business risks, ensuring our clients are well-prepared for any challenges they may face.",
      expertise: ["Risk Assessment", "Compliance", "Crisis Management"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      social: {
        linkedin: "https://linkedin.com/in/lisa-park-risk",
        instagram: "https://instagram.com/lisapark_risk",
        email: "lisa@elegantcapitals.com"
      }
    },
    {
      name: "James Wilson",
      position: "Technology Integration Lead",
      bio: "James helps businesses leverage technology to improve operations and drive innovation, ensuring they stay competitive in the digital age.",
      expertise: ["Digital Transformation", "Technology Strategy", "Innovation"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      social: {
        linkedin: "https://linkedin.com/in/james-wilson-tech",
        instagram: "https://instagram.com/jameswilson_tech",
        email: "james@elegantcapitals.com"
      }
    }
  ];

  return (
    <section id="team" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-navy-800 dark:text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Meet Our Team
          </h2>
          <p 
            className={`text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our team of experienced professionals brings together diverse expertise and a shared 
            commitment to delivering exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{transitionDelay: `${index * 100}ms`}}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-800 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-gold-500 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-navy-100 dark:bg-navy-600 text-navy-800 dark:text-white text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy-600 dark:text-navy-400 hover:text-navy-800 dark:hover:text-white transition-colors duration-300"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href={member.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy-600 dark:text-navy-400 hover:text-navy-800 dark:hover:text-white transition-colors duration-300"
                    aria-label={`${member.name} Instagram`}
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="text-navy-600 dark:text-navy-400 hover:text-navy-800 dark:hover:text-white transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div 
          className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Average Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
