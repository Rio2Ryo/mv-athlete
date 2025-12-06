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
            {t({ JP: 'アスリートへの約束', EN: 'Promise to Athletes' })}
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              {t({
                JP: 'マザーベジタブルアスリートファンデーションは、アスリートの「現在」と「未来」の両方を支援します。',
                EN: 'The Mother Vegetable Athlete Foundation supports both the "present" and "future" of athletes.'
              })}
            </p>
            <p>
              {t({
                JP: '現役時代のパフォーマンス向上から、引退後のセカンドキャリア、そして故郷への貢献まで。私たちはアスリートと共に歩み続けます。',
                EN: 'From improving performance during their active career to supporting their second career after retirement and contributing to their hometowns. We walk together with athletes.'
              })}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {/* Card 1 */}
          <div className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-[#4ade80]/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-bold text-[#4ade80]">01</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
              {t({ JP: '究極のコンディショニング', EN: 'Ultimate Conditioning' })}
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
              {t({
                JP: '35億年前の生命力を持つ「マザーベジタブル」をプロ用・アスリート用として提供。48種類の必須栄養素が、日々の激しいトレーニングからの回復と、試合での最高のパフォーマンスを支えます。',
                EN: 'Providing "Mother Vegetable" with 3.5 billion years of vitality for professional use. 48 essential nutrients support recovery from intense daily training and peak performance in matches.'
              })}
            </p>
            
            <ul className="space-y-4 relative z-10">
              {[
                { JP: 'プロ専用製品の提供', EN: 'Exclusive Pro Products' },
                { JP: '圧倒的な回復力', EN: 'Overwhelming Recovery' },
                { JP: '怪我に強い体づくり', EN: 'Injury-Resistant Body' }
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
              {t({ JP: '持続可能な未来への支援', EN: 'Support for a Sustainable Future' })}
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
              {t({
                JP: '活動資金の支援に加え、故郷やゆかりの地に「Small Earth Factory (SEF)」を設立する権利を提供。工場の収益の一部がアスリートに還元され、引退後の安定した収入源と地域貢献を実現します。',
                EN: 'In addition to funding activities, we offer the right to establish a "Small Earth Factory (SEF)" in your hometown. A portion of the factory\'s profits is returned to the athlete, ensuring a stable income source after retirement and community contribution.'
              })}
            </p>
            
            <ul className="space-y-4 relative z-10">
              {[
                { JP: '活動資金の提供', EN: 'Activity Funding' },
                { JP: 'SEFオーナー権', EN: 'SEF Ownership' },
                { JP: '地域への利益還元', EN: 'Community Profit Sharing' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carbon Neutral Athlete Section */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {t({ JP: 'カーボンニュートラル・アスリート', EN: 'Carbon Neutral Athlete' })}
                </h3>
                <p className="text-[#4ade80] font-bold text-lg">
                  {t({ JP: '呼吸するたびに、地球を救う。', EN: 'Save the Earth with every breath.' })}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="/images/certification_badge_v3.png" 
                  alt="Carbon Neutral Athlete Certified" 
                  className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]"
                />
                <span className="text-[#4ade80] font-bold tracking-wider text-xs mt-2">CERTIFIED BADGE</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  {t({
                    JP: '人間は安静時でも1時間あたり約15〜20リットルのCO2を排出します。激しい運動を行うアスリートの場合、その排出量は安静時の数倍から10倍以上に増加し、1時間あたり100リットルを超えることもあります。',
                    EN: 'Humans exhale about 15-20 liters of CO2 per hour even at rest. For athletes engaging in intense exercise, this emission can increase significantly, potentially exceeding 100 liters per hour.'
                  })}
                </p>
                <p>
                  {t({
                    JP: 'また、スタジアムで熱狂する観客も、応援と共に多くのCO2を排出しています。私たちは、この「避けられない排出」を「価値ある貢献」に変えます。',
                    EN: 'Spectators cheering in stadiums also emit large amounts of CO2. We turn this "unavoidable emission" into a "valuable contribution".'
                  })}
                </p>
                <p>
                  {t({
                    JP: 'アスリートが「Small Earth Factory (SEF)」を持つことで、自身の排出するCO2を吸収・還元し、カーボンクレジットを生み出します。パフォーマンスの向上が、そのまま地球環境への貢献となる新しいモデルです。',
                    EN: 'By owning a "Small Earth Factory (SEF)", athletes absorb and offset their CO2 emissions, creating carbon credits. It is a new model where improving performance directly contributes to the global environment.'
                  })}
                </p>
              </div>

              <div className="bg-black/50 rounded-2xl p-8 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-6 text-center">
                  {t({ JP: 'CO2排出と吸収のサイクル', EN: 'Cycle of CO2 Emission & Absorption' })}
                </h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{t({ JP: '安静時の呼吸', EN: 'Resting Breath' })}</span>
                    <span className="text-white font-mono text-xl">~15-20 L/h</span>
                  </div>
                  <div className="w-full h-px bg-gray-800"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{t({ JP: 'アスリートの活動', EN: 'Athlete Activity' })}</span>
                    <span className="text-[#4ade80] font-mono text-xl font-bold">100+ L/h</span>
                  </div>
                  <div className="w-full h-px bg-gray-800"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{t({ JP: 'スタジアムの熱狂', EN: 'Stadium Excitement' })}</span>
                    <span className="text-[#4ade80] font-mono text-xl font-bold">Massive Emission</span>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-[#4ade80]/30 text-center">
                    <p className="text-sm text-gray-400 mb-2">{t({ JP: 'Small Earth Factory (SEF) による吸収', EN: 'Absorption by Small Earth Factory (SEF)' })}</p>
                    <div className="text-3xl font-bold text-[#4ade80]">CARBON OFFSET</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
