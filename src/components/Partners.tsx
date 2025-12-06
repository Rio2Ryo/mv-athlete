import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Partners() {
  const { t } = useLanguage();

  const partnerCategories = [
    {
      id: 'international',
      title: { JP: '政府・公的機関・地域パートナー', EN: 'Government, Public & Regional Partners' },
      isOpen: true,
      partners: [
        { 
          name: { JP: 'BioNexus ステータス企業', EN: 'BioNexus Status Company' }, 
          type: { JP: 'マレーシア政府認可', EN: 'Malaysian Government Certified' },
          description: {
            JP: 'マレーシア政府の特別クラス・バイオテクノロジー企業として認定されており、バイオテクノロジー商業化の進歩のための実質的な財政的インセンティブ、税制優遇、制度的サポートへのアクセスを享受しています。',
            EN: 'Certified as a special class biotechnology company by the Malaysian government, enjoying access to substantial financial incentives, tax breaks, and institutional support for the advancement of biotechnology commercialization.'
          },
          logo: '/images/bionexus_logo.png'
        },
        { 
          name: { JP: 'ASEAN', EN: 'ASEAN' }, 
          type: { JP: '東南アジア諸国連合', EN: 'Association of Southeast Asian Nations' },
          description: {
            JP: '持続可能な水産養殖および農業セクターにおけるパートナーシップからの公式支援により、東南アジア全10カ国にわたる地域に責任を有し、実際に実行可能な政策とシステムというASEANの共通ビジョンに貢献しています。',
            EN: 'With official support from partnerships in the sustainable aquaculture and agriculture sectors, we are responsible for the region spanning all 10 Southeast Asian countries, contributing to ASEAN\'s shared vision of practical and actionable policies and systems.'
          },
          logo: '/images/asean_logo.png'
        },
        { 
          name: { JP: 'ANGKASA', EN: 'ANGKASA' }, 
          type: { JP: 'マレーシア政府機関', EN: 'Malaysian Government Agency' },
          description: {
            JP: '16,000以上の協同組合と730万人の組合員を代表する協同組合開発庁の組合員として、1,596億収益455億を超える価値を有しており、マレーシアの中核経済活動における第一セクターとして技術革新を果たしています。',
            EN: 'As a member of the Cooperative Development Agency representing over 16,000 cooperatives and 7.3 million members, with a value exceeding 159.6 billion in revenue and 45.5 billion, we are achieving technological innovation as a primary sector in Malaysia\'s core economic activities.'
          },
          logo: '/images/angkasa_logo.png'
        },
      ]
    },
    {
      id: 'academic',
      title: { JP: '学術・研究機関', EN: 'Academic & Research' },
      isOpen: false,
      partners: [
        { name: { JP: '大学機関', EN: 'Universities' }, type: { JP: '共同研究', EN: 'Joint Research' }, description: { JP: '', EN: '' }, logo: null },
      ]
    },
    {
      id: 'industry',
      title: { JP: '産業パートナー', EN: 'Industry Partners' },
      isOpen: false,
      partners: [
        { name: { JP: 'Coming Soon', EN: 'Coming Soon' }, type: { JP: '産業連携', EN: 'Industry Alliance' }, description: { JP: '', EN: '' }, logo: null },
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            {t({ JP: 'パートナーシップ', EN: 'Partnership' })}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {categories.map((category) => (
            <div key={category.id} className="overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-center gap-4 p-4 text-center hover:opacity-80 transition-opacity mb-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#3b82f6]">
                  {t(category.title)}
                </h3>
                {category.isOpen ? (
                  <ChevronUp className="w-6 h-6 text-[#3b82f6]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              <div 
                className={cn(
                  "transition-all duration-500 ease-in-out overflow-hidden",
                  category.isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {category.partners.map((partner, index) => (
                    <div 
                      key={index}
                      className="bg-[#0f172a] border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#3b82f6]/50 transition-colors h-full"
                    >
                      <div className="w-32 h-32 mb-6 bg-white rounded-xl flex items-center justify-center p-4">
                        {partner.logo ? (
                          <img src={partner.logo} alt={t(partner.name)} className="w-full h-full object-contain" />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
                        )}
                      </div>
                      
                      <h4 className="text-white font-bold text-lg mb-2">{t(partner.name)}</h4>
                      <p className="text-[#3b82f6] text-sm font-medium mb-6">{t(partner.type)}</p>
                      
                      {partner.description.JP && (
                        <p className="text-gray-400 text-sm leading-relaxed text-justify">
                          {t(partner.description)}
                        </p>
                      )}
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
