import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectOverview from '@/components/ProjectOverview';
import AthleteRoster from '@/components/AthleteRoster';
import RebornProgram from '@/components/RebornProgram';
import Partners from '@/components/Partners';
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
          <RebornProgram />
          <Partners />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
