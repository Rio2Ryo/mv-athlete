import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectOverview from '@/components/ProjectOverview';
import AthleteRoster from '@/components/AthleteRoster';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-[#4ade80] selection:text-black">
        <Header />
        <main>
          <Hero />
          <ProjectOverview />
          <AthleteRoster />
        </main>
        <Footer />
        
        {/* Mazavege-chan Fixed Widget (Placeholder) */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center pointer-events-none">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-800 border-2 border-[#4ade80] overflow-hidden shadow-[0_0_20px_rgba(74,222,128,0.3)]">
            <img
              src="/mazavegechan.gif"
              alt="Mazavege-chan"
              className="w-full h-full object-cover"
              onError={(e) => e.currentTarget.src = "https://placehold.co/100x100/000000/4ade80?text=AI"}
            />
          </div>
          <div className="text-white text-xs text-center mt-2 bg-black/50 backdrop-blur px-2 py-1 rounded">
            <p>Mazavege-chan</p>
            <p>AI Agent</p>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
