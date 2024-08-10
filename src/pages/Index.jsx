import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProjectGrid from '../components/ProjectGrid';
import SuggestionCards from '../components/SuggestionCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-white p-8">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
          <span className="text-xl font-semibold">GPTEngineer</span>
        </div>
        <div>
          <span className="mr-4">Docs</span>
          <span>Alexandre Pesant ▼</span>
        </div>
      </header>

      <main>
        <h1 className="text-4xl font-bold text-center mb-8">
          What do you want <span className="text-blue-300">to</span> <span className="text-blue-400">build</span>?
        </h1>

        <SuggestionCards />

        <div className="relative mb-12">
          <Input 
            type="text" 
            placeholder="Type to create..." 
            className="w-full bg-blue-800 text-white border-none py-3 pl-4 pr-10"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex space-x-4 mb-8">
          <Button variant="ghost" className="text-blue-300 hover:text-blue-100 hover:bg-blue-700">My Projects</Button>
          <Button variant="ghost" className="text-blue-300 hover:text-blue-100 hover:bg-blue-700">Featured</Button>
          <Button variant="ghost" className="text-blue-300 hover:text-blue-100 hover:bg-blue-700">Latest</Button>
        </div>

        <ProjectGrid />
      </main>
    </div>
  );
};

export default Index;