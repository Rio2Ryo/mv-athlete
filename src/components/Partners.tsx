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
      title: { JP: '学術・研究機関', EN: 'Academic & Research Institutions' },
      isOpen: false,
      partners: [
        { 
          name: { JP: 'ノッティンガム大学', EN: 'University of Nottingham' }, 
          type: { JP: '共同研究', EN: 'Joint Research' }, 
          description: { 
            JP: '大学構内における3エーカーの施設をMother Vegetable事業に提供する戦略的協力体制を構築し、研究開発の発展のため尊敬されるバイオテクノロジーチームによるサポートを受けています。', 
            EN: 'We have established a strategic cooperation system that provides 3 acres of facilities within the university campus for the Mother Vegetable business, supported by a respected biotechnology team for the advancement of research and development.' 
          }, 
          logo: '/images/nottingham_logo.png' 
        },
        { 
          name: { JP: 'シンガポール国立大学', EN: 'National University of Singapore' }, 
          type: { JP: '共同研究', EN: 'Joint Research' }, 
          description: { 
            JP: '農業や水産養殖、生物的防除剤、製品開発の分野において、科学的専門知識と革新を提供するパートナーシップを結んでいます。私たちの活動の基盤となる科学を強化し、イニシアチブが最先端の研究に基づいていることを確保することが重要です。彼らの支援を受けて、特に私たちの主力プロジェクトであるMother Vegetableプロジェクトを通じて、持続可能なソリューションの開発と商業化を加速することが可能になります。', 
            EN: 'We partner to provide scientific expertise and innovation in agriculture, aquaculture, biocontrol agents, and product development. Strengthening the science behind our activities and ensuring our initiatives are based on cutting-edge research is crucial. With their support, we can accelerate the development and commercialization of sustainable solutions, especially through our flagship Mother Vegetable project.' 
          }, 
          logo: '/images/nus_logo.png' 
        },
        { 
          name: { JP: 'マラヤ大学', EN: 'Universiti Malaya' }, 
          type: { JP: '共同研究', EN: 'Joint Research' }, 
          description: { 
            JP: 'マレーシアの最高学府であるマラヤ大学と研究開発分野で連携しています。同大学の優れた学術的知見と科学技術の専門性により、私たちの技術革新が大きく前進しています。この産学連携を通じて、持続可能な発展と社会実装を目指した研究開発を共同で進めており、Mother Vegetableプロジェクトの科学的基盤を強化しています。', 
            EN: 'We collaborate in R&D with Universiti Malaya, Malaysia\'s premier institution. Their academic excellence and scientific expertise significantly advance our technological innovation. Through this industry-academia collaboration, we jointly pursue R&D aimed at sustainable development and social implementation, strengthening the scientific foundation of the Mother Vegetable project.' 
          }, 
          logo: '/images/malaya_logo.png' 
        }
      ]
    },
    {
      id: 'industry',
      title: { JP: '産業パートナー', EN: 'Industrial Partners' },
      isOpen: true,
      partners: [
        { 
          name: { JP: 'Algae International Berhad', EN: 'Algae International Berhad' }, 
          type: { JP: '技術開発パートナー', EN: 'Technology Development Partner' }, 
          description: { 
            JP: '2006年から微細藻類技術開発に専念し、2008年に業界を変革する画期的な特許[WO2008105649A1]を取得。藻類バイオマス生産コストの劇的な削減を達成し、気候制御された透明な建物内での多層栽培システムを通じて、藻類と野菜の統合生産を可能にしました。', 
            EN: 'Dedicated to microalgae technology development since 2006, obtained groundbreaking patent [WO2008105649A1] that transformed the industry in 2008. Achieved dramatic reduction in algae biomass production costs and enabled integrated production of algae and vegetables through multi-layer cultivation systems in climate-controlled transparent buildings.' 
          }, 
          logo: '/images/algae_logo.jpg' 
        },
        { 
          name: { JP: 'Revoganix Inc.', EN: 'Revoganix Inc.' }, 
          type: { JP: '持続可能な農業アドバイザー', EN: 'Sustainable Agriculture Advisor' }, 
          description: { 
            JP: '持続可能な農業、水産養殖、微生物学における35年以上の専門知識を持ち、ASEAN事務局のチーフコンサルタントやスリランカ漁業大臣の公式アドバイザーを務めています。アジア全域での有機農業開発と革新的な水産養殖システムにおける豊富な経験により、貴重な地域的専門知識と政府関係を提供しています。', 
            EN: 'With over 35 years of expertise in sustainable agriculture, aquaculture, and microbiology, serving as Chief Consultant to the ASEAN Secretariat and Official Advisor to Sri Lanka\'s Minister of Fisheries. Extensive experience in organic farming development and innovative aquaculture systems across Asia provides valuable regional expertise and government relationships.' 
          }, 
          logo: '/images/revoganix_logo.png' 
        },
        { 
          name: { JP: 'Invest Selangor', EN: 'Invest Selangor' }, 
          type: { JP: '政府機関', EN: 'Government Agency' }, 
          description: { 
            JP: 'セランゴール州政府が提供する優遇支援エコシステムの一員として、効率的な行政プロセス、カスタマイズされたインセンティブパッケージ、業界特化型プログラム、ネットワークとインフラへのアクセスを提供し、マレーシアで最も経済的に活発な州の一つでのプロジェクト成功を促進することを目指しています。', 
            EN: 'Member of the preferential support ecosystem provided by the Selangor State Government, including efficient administrative processes, customized incentive packages, industry-specific programs, and access to networks and infrastructure, aiming to promote project success in one of Malaysia\'s most economically active states.' 
          }, 
          logo: '/images/invest_selangor_logo.png' 
        }
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t({
              JP: '私たちは、政府、国際機関、研究機関との強力なパートナーシップを通じて、持続可能な未来の実現に取り組んでいます。',
              EN: 'We are committed to realizing a sustainable future through strong partnerships with governments, international organizations, and research institutions.'
            })}
          </p>
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
                      <div className="w-32 h-32 mb-6 bg-white rounded-xl flex items-center justify-center p-4 shadow-lg">
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
