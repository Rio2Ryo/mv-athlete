import { useLanguage } from '@/contexts/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();

  const partners = [
    { name: 'Partner 1', logo: '/partners/partner1.png' },
    { name: 'Partner 2', logo: '/partners/partner2.png' },
    { name: 'Partner 3', logo: '/partners/partner3.png' },
    { name: 'Partner 4', logo: '/partners/partner4.png' },
    // Add more partners as needed or use placeholders if images are missing
  ];

  return (
    <section id="partners" className="py-24 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t({ JP: 'パートナー', EN: 'Partners' })}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t({
              JP: '世界中の企業・研究機関と連携し、プロジェクトを推進しています。',
              EN: 'Collaborating with companies and research institutions worldwide to drive the project forward.'
            })}
          </p>
        </div>

        {/* 
          Since we might not have actual partner logos yet, 
          we'll use a simple grid layout that can be easily populated.
        */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder for partners if images are missing */}
          <div className="text-gray-600 font-bold text-xl">ALGAE INTERNATIONAL</div>
          <div className="text-gray-600 font-bold text-xl">REVOGANIX</div>
          <div className="text-gray-600 font-bold text-xl">UNIVERSITI KEBANGSAAN MALAYSIA</div>
          <div className="text-gray-600 font-bold text-xl">TEMASEK</div>
        </div>
      </div>
    </section>
  );
}
