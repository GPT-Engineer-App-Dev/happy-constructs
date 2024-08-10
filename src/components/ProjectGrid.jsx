import React from 'react';

const ProjectCard = ({ title, author, time, imageUrl }) => (
  <div className="bg-blue-800 rounded-lg overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
    <div className="p-4">
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-blue-300 text-sm">Created {time} by {author}</p>
    </div>
  </div>
);

const ProjectGrid = () => {
  const projects = [
    { title: 'marketmind-forecaster', author: 'Marcel Jiron', time: '1 hour ago', imageUrl: '/placeholder.svg' },
    { title: 'lil-fashion-gallery', author: 'Viktor Eriksson', time: '2 hours ago', imageUrl: '/placeholder.svg' },
    { title: 'quant-backtest-hub', author: 'lingzhi-he', time: '4 hours ago', imageUrl: '/placeholder.svg' },
    { title: 'autumn-scroll-harmony', author: 'Unknown', time: '4 hours ago', imageUrl: '/placeholder.svg' },
    { title: 'sunset-scroll-studio', author: 'Unknown', time: '4 hours ago', imageUrl: '/placeholder.svg' },
    { title: 'neon-scroll-symphony', author: 'Magnus Hambleton', time: '4 hours ago', imageUrl: '/placeholder.svg' },
    { title: 'teenmind-mate', author: 'Marcel Jiron', time: '6 hours ago', imageUrl: '/placeholder.svg' },
    { title: 'perplexity-chat-bot', author: 'matias santiago witsch shared', time: '7 hours ago', imageUrl: '/placeholder.svg' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectGrid;