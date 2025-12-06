import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectOverview() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            {t({ JP: 'Two Only Ones', EN: 'Two Only Ones' })}
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              {t({
                JP: 'マザーベジタブルプロジェクトは、2つの唯一無二の事業を軸に、地球とすべての生命の再生を目指す世界で唯一のプロジェクトです。',
                EN: 'The MOTHER VEGETABLE PROJECT is the world\'s only project that aims to restore the Earth and all life, centered around two one-of-a-kind businesses.'
              })}
            </p>
            <p>
              {t({
                JP: 'その過程で、各施設は24時間365日CO2を吸収し酸素を生成することで大気を浄化し、同時にマザーベジタブル製品と持続可能な経済的支援を通じて人々の健康に貢献します。',
                EN: 'In this process, each facility purifies the atmosphere by absorbing CO2 and generating oxygen 24 hours a day, 365 days a year, while simultaneously contributing to improving people\'s health through Mother Vegetable products and sustainable financial support.'
              })}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-[#4ade80]/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-bold text-[#4ade80]">01</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
              {t({ JP: 'マザーベジタブル（栄養）', EN: 'Mother Vegetable (Nutrition)' })}
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
              {t({
                JP: '人類に必要な48種類の栄養素をすべて提供する、単一の生命体由来の食品。健康、免疫力、そして持続的なパフォーマンスのために最適化されています。',
                EN: 'Food derived from a single life form that provides all 48 nutrients essential for humanity. Optimized for health, immunity, and continuous performance.'
              })}
            </p>
            
            <ul className="space-y-4 relative z-10">
              {[
                { JP: '48種類の必須栄養素', EN: '48 Essential Nutrients' },
                { JP: '腸内環境の最適化', EN: 'Gut Health Optimization' },
                { JP: '持続的な回復力', EN: 'Continuous Recovery' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-[#4ade80]/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-bold text-[#4ade80]">02</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
              {t({ JP: 'スモールアースファクトリー (SEF)', EN: 'Small Earth Factory (SEF)' })}
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
              {t({
                JP: 'CO2吸収（天然杉の700倍）を通じて小さな地球を再現。カーボンクレジットと製品販売からの収益が、持続可能な未来を支えます。',
                EN: 'Recreating a small Earth through CO2 absorption (700 times that of natural cedar). Revenue from carbon credits and product sales supports a sustainable future.'
              })}
            </p>
            
            <ul className="space-y-4 relative z-10">
              {[
                { JP: '経済的支援', EN: 'Financial Support' },
                { JP: '工場の所有権', EN: 'Factory Ownership' },
                { JP: '地域への貢献', EN: 'Community Legacy' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
