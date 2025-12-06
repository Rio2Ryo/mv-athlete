import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black">
      {/* Countries Section - Small Version */}
      <div className="container mx-auto px-4 pt-4 pb-2 mb-0">
        {/* Decorative underline - Full width above logo */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#25C760] to-transparent mb-4"></div>

        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img
            src="/mazavege_logo_midori.png"
            alt="Mother Vegetable Logo"
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-[clamp(8px,2vw,10px)] md:text-sm font-bold text-[#25C760] text-center mb-3">Mother Vegetable Group</h3>

        {/* Official Page Link */}
        <a
          href="https://www.mothervegetable.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[clamp(8px,2vw,10px)] md:text-sm font-medium text-[#25C760] text-center mb-3 cursor-pointer hover:text-green-400 transition-colors"
        >
          Official Page
        </a>

        {/* Countries Grid - 3 rows on mobile, one line on desktop */}
        <div className="grid grid-cols-6 md:hidden gap-x-1 gap-y-1 mx-auto text-center max-w-5xl">
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Japan</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">South Korea</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Hong Kong</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Malaysia</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Singapore</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Indonesia</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Thailand</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Mongolia</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Australia</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Germany</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Italy</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">France</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Switzerland</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">United Kingdom</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Canada</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">USA</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Brazil</div>
          <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] font-medium whitespace-nowrap tracking-tighter">Peru</div>
        </div>
        {/* Desktop: One line */}
        <div className="hidden md:flex md:flex-wrap md:justify-center gap-x-3 gap-y-1 mx-auto text-center max-w-5xl">
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Japan</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">South Korea</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Hong Kong</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Malaysia</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Singapore</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Indonesia</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Thailand</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Mongolia</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Australia</div>
          <div className="basis-full w-0 h-0"></div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Germany</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Italy</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">France</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Switzerland</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">United Kingdom</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Canada</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">USA</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Brazil</div>
          <div className="text-[#25C760] text-sm font-medium whitespace-nowrap">Peru</div>
        </div>
      </div>

      {/* Legal Links & Copyright */}
      <div className="">
        <div className="container mx-auto px-4 pt-2 pb-6">
          <div className="text-center space-y-4">
            <div className="text-[#25C760] text-[clamp(8px,2vw,10px)] md:text-sm whitespace-pre-line">
              {t({
                JP: '© 2025 MOTHER VEGETABLE FOUNDATION.\nAll rights reserved.',
                EN: '© 2025 MOTHER VEGETABLE FOUNDATION.\nAll rights reserved.'
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
