import React from 'react';
import { GuideSection as IGuideSection } from '../types';
import { Music, Star, Heart } from 'lucide-react';

interface Props {
  section: IGuideSection;
  index: number;
}

const GuideSection: React.FC<Props> = ({ section, index }) => {
  return (
    <div className={`mb-12 p-6 md:p-8 rounded-[2rem] bg-white cartoon-border transition-transform hover:-translate-y-2 duration-300 relative overflow-visible`}>
      {/* Decorative Bow Icon absolute positioned */}
      <div className="absolute -top-6 -right-4 text-4xl animate-wiggle select-none">🎀</div>
      
      <div className="flex items-center gap-4 mb-6 border-b-4 border-melody-light pb-4 border-dashed">
        <div className="w-16 h-16 bg-melody-light rounded-full flex items-center justify-center border-4 border-melody-dark shadow-sm">
           <span className="text-3xl filter drop-shadow-sm">{section.emoji.substring(0, 2)}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-cute text-melody-text font-bold leading-tight">
          {section.title}
        </h2>
      </div>

      <div className="text-lg text-stone-600 mb-6 font-medium leading-relaxed whitespace-pre-line bg-melody-light/30 p-4 rounded-xl border-2 border-melody-light">
        {section.content}
      </div>

      <div className="bg-melody-yellow rounded-2xl p-6 mb-6 border-4 border-melody-white shadow-inner">
        <h3 className="text-melody-accent font-cute text-xl mb-4 flex items-center gap-2">
          <Music className="w-6 h-6 animate-bounce" />
          Melody's Daily Steps / 美乐蒂的小任务:
        </h3>
        <ul className="space-y-4">
          {section.steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-stone-700 font-sans font-semibold">
              <Heart className="w-5 h-5 text-melody-dark mt-1 flex-shrink-0 fill-melody-dark" />
              <span className="whitespace-pre-line">{step.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {section.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4">
          {section.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-melody-dark text-white rounded-full font-bold text-sm hover:bg-melody-accent transition-all shadow-md hover:shadow-lg border-2 border-white"
            >
              <Star className="w-4 h-4 fill-white" />
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuideSection;