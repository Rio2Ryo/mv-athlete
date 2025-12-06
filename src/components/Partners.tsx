import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Partners() {
  const { t } = useLanguage();

  const partnerCategories = [
    {
      id: 'international',
      title: { JP: '国際的パートナー', EN: 'International Partners' },
      isOpen: true,
      partners: [
        { name: { JP: 'ASEAN', EN: 'ASEAN' }, type: { JP: '地域協力', EN: 'Regional Cooperation' } },
        { name: { JP: 'マレーシア政府', EN: 'Government of Malaysia' }, type: { JP: '政府機関', EN: 'Government Agency' } },
        { name: { JP: 'シンガポール', EN: 'Singapore' }, type: { JP: '戦略ハブ', EN: 'Strategic Hub' } },
      ]
    },
    {
      id: 'academic',
      title: { JP: '学術・研究機関', EN: 'Academic & Research' },
      isOpen: false,
      partners: [
        { name: { JP: '大学機関', EN: 'Universities' }, type: { JP: '共同研究', EN: 'Joint Research' } },
      ]
    },
    {
      id: 'industry',
      title: { JP: '産業パートナー', EN: 'Industry Partners' },
      isOpen: false,
      partners: [
        { name: { JP: 'Coming Soon', EN: 'Coming Soon' }, type: { JP: '産業連携', EN: 'Industry Alliance' } },
      ]
    }
  ];

  const [categories, setCategories] = useState(partnerCategories);

  const toggleCategory = (id: string) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, isOpen: !cat.isOpen } : cat
    ));
  };

  return (
    <section id="partners" className="py-24 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#4ade80] mb-8">
            {t({ JP: 'パートナーシップ', EN: 'Partnership' })}
          </h2>
          
          <p className="text-lg md:text-xl text-white leading-relaxed">
            {t({
              JP: '私たちのミッションは、ASEANをはじめとする国際的なパートナー、学術機関、業界リーダーの強力なネットワークによって支えられています。',
              EN: 'Our mission is supported by a powerful network of international partners, academic institutions, and industry leaders across ASEAN and beyond.'
            })}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/30">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/50 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {t(category.title)}
                </h3>
                {category.isOpen ? (
                  <ChevronUp className="w-6 h-6 text-[#4ade80]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              <div 
                className={cn(
                  "transition-all duration-300 ease-in-out overflow-hidden",
                  category.isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.partners.map((partner, index) => (
                    <div 
                      key={index}
                      className="bg-black/50 border border-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-[#4ade80]/30 transition-colors group aspect-square"
                    >
                      <div className="w-12 h-12 mb-3 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#4ade80]/10 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-[#4ade80] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">{t(partner.name)}</h4>
                      <p className="text-gray-500 text-[10px] uppercase tracking-wider">{t(partner.type)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
