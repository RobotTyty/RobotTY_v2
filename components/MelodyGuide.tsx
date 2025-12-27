import React from 'react';
import { GUIDE_SECTIONS, INTRO_TEXT, OUTRO_TEXT } from '../data/guideContent';
import GuideSection from './GuideSection';
import { Music, Heart, Sparkles, CloudSun } from 'lucide-react';

const MelodyGuide: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-melody-text pb-20 overflow-x-hidden">
      {/* Hero Header */}
      <header className="relative bg-melody-light pt-12 pb-24 px-4 rounded-b-[4rem] border-b-[8px] border-melody-dark/30 shadow-lg">
        <div className="absolute top-10 left-10 text-melody-dark/20 animate-bounce-slow">
            <Music size={48} />
        </div>
        <div className="absolute top-20 right-10 text-melody-dark/20 animate-wiggle">
            <Music size={32} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-melody-dark text-white px-8 py-2 rounded-full font-cute text-lg mb-6 shadow-md border-4 border-white transform -rotate-2">
            Grade 6 Chinese Guide / 六年级语文指南 🌸
          </div>
          <h1 className="font-cute text-5xl md:text-7xl text-melody-text mb-6 leading-tight drop-shadow-white text-stroke">
             Learn with Melody! <br/>
            <span className="text-melody-accent text-4xl md:text-6xl mt-2 block font-serif">
              快乐学语文，萌萌哒提升！
            </span>
          </h1>
          
          <div className="relative mt-8 mx-auto w-72 h-72 md:w-80 md:h-80">
             {/* Main Hero Image Placeholder */}
             <div className="w-full h-full bg-white rounded-full border-[6px] border-melody-dark overflow-hidden shadow-[0_10px_0_rgba(0,0,0,0.1)] flex items-center justify-center relative bg-[url('https://picsum.photos/seed/melody/400/400')] bg-cover bg-center">
                 <div className="absolute inset-0 bg-melody-light/20 flex items-center justify-center">
                    <span className="text-8xl filter drop-shadow-lg animate-bounce">🐰</span>
                 </div>
             </div>
             {/* Decorative Elements around image */}
             <div className="absolute -bottom-4 -right-4 bg-melody-yellow p-3 rounded-full border-4 border-melody-dark shadow-md rotate-12">
                <span className="text-3xl">🎵</span>
             </div>
             <div className="absolute -top-4 -left-4 bg-melody-dark p-3 rounded-full border-4 border-white shadow-md -rotate-12">
                <span className="text-3xl">🎀</span>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 mt-20">
        {/* Intro Card */}
        <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl cartoon-border mb-16 text-center relative">
          <CloudSun className="absolute top-6 left-6 text-melody-dark w-10 h-10" />
          <Sparkles className="absolute bottom-6 right-6 text-melody-accent w-10 h-10 animate-pulse" />
          
          <h2 className="text-3xl font-cute text-melody-accent mb-6">Hello Sweethearts! <br/><span className="text-xl text-melody-text">亲爱的小甜心们！</span></h2>
          <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-stone-600 font-medium">
            {INTRO_TEXT}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {GUIDE_SECTIONS.map((section, index) => (
            <GuideSection key={section.id} section={section} index={index} />
          ))}
        </div>

        {/* Outro Card */}
        <div className="mt-20 bg-melody-dark text-white p-10 rounded-[3rem] text-center shadow-[8px_8px_0px_#8B4513] border-4 border-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle,_#fff_2px,_transparent_2px)] bg-[length:16px_16px]"></div>
            <Heart className="mx-auto w-14 h-14 text-white mb-6 animate-bounce" fill="white" />
            <p className="text-xl md:text-2xl font-cute leading-relaxed whitespace-pre-line mb-8 relative z-10">
              {OUTRO_TEXT}
            </p>
            <div className="inline-flex items-center gap-3 bg-white text-melody-dark px-8 py-4 rounded-full hover:scale-105 transition transform cursor-pointer border-4 border-melody-light shadow-lg">
               <Music className="w-6 h-6" />
               <span className="font-bold text-lg">Happy Learning / 快乐学习</span>
            </div>
        </div>
      </main>

      <footer className="text-center mt-24 text-melody-text/70 text-sm font-medium pb-8">
        <p className="flex items-center justify-center gap-2">
           Made with <Heart size={12} fill="#FF69B4" stroke="none"/> & 🍓 for Grade 6
        </p>
      </footer>
    </div>
  );
};

export default MelodyGuide;