import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src="/mazavege_logo_midori.png" 
              alt="Logo" 
              className="h-8 w-8 object-contain" 
            />
            <span className="font-bold text-lg tracking-wider text-white">
              MOTHER VEGETABLE
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm mb-8">
            <span>Japan</span>
            <span>South Korea</span>
            <span>Hong Kong</span>
            <span>Malaysia</span>
            <span>Singapore</span>
            <span>Indonesia</span>
            <span>Thailand</span>
            <span>USA</span>
            <span>Brazil</span>
            <span>Peru</span>
          </div>
          
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-[#4ade80] transition-colors">
              {t({ JP: 'プライバシーポリシー', EN: 'Privacy Policy' })}
            </a>
            <a href="#" className="hover:text-[#4ade80] transition-colors">
              {t({ JP: '利用規約', EN: 'Terms and Conditions' })}
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-xs">
          © 2025 MOTHER VEGETABLE PROJECT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
