import { useLanguage } from '@/contexts/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();

  const partners = [
    { name: { JP: '西安', EN: "Xi'an" }, type: { JP: '都市パートナー', EN: 'City Partner' } },
    { name: { JP: 'マレーシア', EN: 'Malaysia' }, type: { JP: '政府・産業パートナー', EN: 'Gov/Industry Partner' } },
    { name: { JP: 'シンガポール', EN: 'Singapore' }, type: { JP: '戦略ハブ', EN: 'Strategic Hub' } },
    { name: { JP: '大学機関', EN: 'Universities' }, type: { JP: '学術研究', EN: 'Academic Research' } },
    { name: { JP: 'ASEANネットワーク', EN: 'ASEAN Network' }, type: { JP: '地域展開', EN: 'Regional Expansion' } },
  ];

  return (
    <section id="partners" className="py-24 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4ade80] mb-8">
            {t({ JP: '戦略的パートナーシップ', EN: 'Strategic Partners' })}
          </h2>
          
          <p className="text-lg md:text-xl text-white leading-relaxed">
            {t({
              JP: '私たちのミッションは、ASEANをはじめとする国際的なパートナー、学術機関、業界リーダーの強力なネットワークによって支えられています。共に、アスリートと地球の持続可能な未来を築いています。',
              EN: 'Our mission is supported by a powerful network of international partners, academic institutions, and industry leaders across ASEAN and beyond. Together, we are building a sustainable future for athletes and the planet.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-[#4ade80]/50 transition-colors duration-300 group aspect-square"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#4ade80]/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#4ade80] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{t(partner.name)}</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wider">{t(partner.type)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
