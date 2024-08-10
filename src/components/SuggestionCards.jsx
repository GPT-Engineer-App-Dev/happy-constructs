import React from 'react';
import { Table2, Newspaper, Wrench, Headphones } from 'lucide-react';

const SuggestionCard = ({ icon, text }) => (
  <div className="bg-blue-800 p-4 rounded-lg flex flex-col items-center justify-center w-48 h-32">
    {icon}
    <p className="text-center mt-2 text-sm">{text}</p>
  </div>
);

const SuggestionCards = () => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <SuggestionCard 
        icon={<Table2 className="text-blue-400" size={24} />}
        text="A tool to upload and edit CSV files"
      />
      <SuggestionCard 
        icon={<Newspaper className="text-blue-300" size={24} />}
        text="A page showing top stories from Hacker News"
      />
      <SuggestionCard 
        icon={<Wrench className="text-blue-200" size={24} />}
        text="Create a boilerplate app I can easily modify"
      />
      <SuggestionCard 
        icon={<Headphones className="text-blue-100" size={24} />}
        text="A tool to help me manage my sneaker addiction"
      />
    </div>
  );
};

export default SuggestionCards;