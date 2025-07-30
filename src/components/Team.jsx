import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react';

function Team() {
 const team = [
    {
      name: 'Gouri Shankar konwar',
      role: 'Full Stack Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
      bio: 'Builds both frontend and backend, bridging user interface and server logic.',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dipankur Saikia',
      role: 'Backend Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
      bio: 'Develops server-side logic, databases, APIs, and application infrastructure.',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Abhishek Poddar',
      role: 'Frontend Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
      bio: 'Creates user-facing interfaces with responsive, interactive design and functionality.',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Bikelal Goswami',
      role: 'Frontend Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
      bio: 'Creates user-facing interfaces with responsive, interactive design and functionality.',
      social: { github: '#', linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <section id="team" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The team that developed this hackathon prototype
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-blue-600 font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {member.bio}
              </p>

              <div className=' absolute bottom-5 w-full left-0'>
              <div className="flex justify-center space-x-4">
                <a href={member.social.github} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team