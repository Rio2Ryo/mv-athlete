import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('2025-11-11T11:00:00Z'); // UTC time

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdown('Launched!');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown(); // Initial update
    const interval = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Regeneration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 transition-all duration-1500 pt-40 md:pt-48 lg:pt-56">
        {/* Title Section - Single Component */}
        <div className="mb-12">

          {/* Logo */}
          <div className="mb-6">
            <img
              src="/mazavege_logo_midori.png"
              alt="Mother Vegetable Logo"
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
          </div>

          <div
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(34, 197, 94, 0.2))',
            }}
          >
            <h1 className="text-xl text-left sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              <div>Mother vegetable</br>
              Pro sports</br>
            Foundation</div>
        </h1>
      </div>

      <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80"></div>

    </div>


        {/* Description - Not in Box */ }
  <div className="max-w-4xl mx-auto mb-12 mt-16 px-4">
    <div className="space-y-3">
      <p className="text-lg md:text-xl text-[#4ade80] leading-relaxed">
        {t({
          JP: '35億年前の地球のはじまりの植物',
          EN: 'The vegetable from 3.5 billion years ago'
        })}
      </p>
      <p className="text-lg md:text-xl text-[#4ade80] leading-relaxed">
        {t({
          JP: '「マザーベジタブル」',
          EN: '"Mother Vegetable"'
        })}
      </p>
      <p className="text-lg md:text-xl text-[#4ade80] leading-relaxed">
        {t({
          JP: '地球が生み出した生命力を、あなたに。',
          EN: 'Earth’s life force, for you.'
        })}
      </p>
    </div>
  </div>

      </div >
    </section >
  );
}
