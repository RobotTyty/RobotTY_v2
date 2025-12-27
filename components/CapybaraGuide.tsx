import React from 'react';
import { GUIDE_SECTIONS, INTRO_TEXT, OUTRO_TEXT } from '../data/guideContent';
import GuideSection from './GuideSection';
import { Leaf, Heart, Coffee } from 'lucide-react';

const CapybaraGuide: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-stone-700 pb-20">
      {/* Hero Header */}
      <header className="relative bg-capy-green/30 pt-20 pb-32 px-4 rounded-b-[3rem] border-b-8 border-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white px-6 py-2 rounded-full text-capy-dark font-bold text-sm mb-4 shadow-sm animate-pulse">
            For Grade 6 Students & Parents 🌿
          </div>
          <h1 className="font-cute text-4xl md:text-6xl text-capy-text mb-6 leading-tight drop-shadow-sm">
            Grade 6 Chinese Boost Guide <br/>
            <span className="text-capy-dark text-2xl md:text-4xl mt-2 block">
              The Capybara Way! 🦙📚
            </span>
          </h1>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-80 md:h-80">
             {/* Placeholder for Main Capybara Illustration */}
             <div className="w-full h-full bg-white rounded-full border-8 border-capy-accent overflow-hidden shadow-xl flex items-center justify-center relative bg-[url('https://picsum.photos/400/400?random=1')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                   <span className="text-6xl filter drop-shadow-lg">🛀</span>
                </div>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 mt-24">
        {/* Intro Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-capy-light mb-16 text-center relative overflow-hidden">
          <Leaf className="absolute top-4 right-4 text-capy-green w-8 h-8 opacity-50" />
          <Leaf className="absolute bottom-4 left-4 text-capy-green w-8 h-8 opacity-50 rotate-180" />
          <h2 className="text-2xl font-cute text-capy-dark mb-4">Hello Little Cuties! 🐾</h2>
          <p className="text-lg leading-relaxed whitespace-pre-line text-stone-600">
            {INTRO_TEXT}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {GUIDE_SECTIONS.map((section, index) => (
            <GuideSection key={section.id} section={section} index={index} />
          ))}
        </div>

        {/* Outro Card */}
        <div className="mt-16 bg-capy-dark text-white p-8 rounded-[2rem] text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-white/20"></div>
            <Heart className="mx-auto w-12 h-12 text-capy-pink mb-4 animate-bounce" />
            <p className="text-lg md:text-xl font-medium leading-relaxed whitespace-pre-line mb-6">
              {OUTRO_TEXT}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition cursor-pointer">
               <Coffee className="w-5 h-5" />
               <span className="font-bold">Stay Chill & Keep Learning</span>
            </div>
        </div>
      </main>

      <footer className="text-center mt-20 text-capy-dark/60 text-sm font-medium">
        <p>Made with 🍊 & 💖 for happy students everywhere.</p>
      </footer>
    </div>
  );
};

export default CapybaraGuide;