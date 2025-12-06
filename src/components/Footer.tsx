import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img 
              src="/mazavege_logo_midori.png" 
              alt="Mother Vegetable" 
              className="h-12 w-auto mb-4 mx-auto md:mx-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <p className="text-gray-400 text-sm">
              The vegetable from 3.5 billion years ago.<br />
              Earth's life force, for you.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Mother Vegetable Project. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            {/* Social Media Placeholders */}
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500/20 transition-colors cursor-pointer">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500/20 transition-colors cursor-pointer">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
