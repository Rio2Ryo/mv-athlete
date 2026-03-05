import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  // Parallax-style subtle animation for the badge
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Background Video */}
      <div className="absolute inset-0" onClick={handleVideoClick}>
        <video
          ref={videoRef}
          src={import.meta.env.BASE_URL + 'sports_v3.mp4'}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Mute/Unmute indicator */}
      <button
        onClick={handleVideoClick}
        className="absolute bottom-6 right-6 z-20 bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all hover:bg-black/70 hover:scale-110 border border-white/10"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-5xl mx-auto px-4"
        style={{ transform: `translateY(${scrollY * 0.15}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
      >
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/mazavege_logo_midori.png"
            alt="Mother Vegetable Logo"
            className="mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]"
          />
        </div>

        {/* REBORN PROJECT Title */}
        <div className="mb-4">
          <span className="text-[#4ade80] text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
            {t({ JP: 'Mother Vegetable Athlete Foundation', EN: 'Mother Vegetable Athlete Foundation' })}
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #4ade80 50%, #22c55e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          REBORN PROJECT
        </h1>

        <div className="w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-[#4ade80] to-transparent mx-auto mb-8"></div>

        {/* Catchcopy */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-4">
          {t({
            JP: '人間と地球が',
            EN: 'A future where humans and Earth'
          })}
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
          {t({
            JP: 'さらなる可能性を手にいれる',
            EN: 'unlock even greater possibilities'
          })}
        </p>

        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {t({
            JP: 'レジェンドアスリートの力で、次世代の健康と地球環境の再生を実現するプロジェクト。',
            EN: 'A project that leverages the power of legendary athletes to realize next-generation health and the regeneration of our planet.'
          })}
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 text-[#4ade80] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
