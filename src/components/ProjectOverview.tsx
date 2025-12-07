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

        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-3xl p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute top-0 right-0 p-8 opacity-30 group-hover:opacity-50 transition-opacity">
              <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#4ade80] to-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px rgba(74, 222, 128, 0.3)' }}>01</span>
            </div>
            
            <div className="relative z-10">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {t({ JP: '究極のコンディショニング', EN: 'Ultimate Conditioning' })}
                </h3>
                <p className="text-[#4ade80] font-bold text-lg">
                  {t({ JP: '35億年の生命力が、あなたの力を覚醒させる。', EN: '3.5 billion years of vitality awakens your power.' })}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    {t({
                      JP: '35億年前の生命力を持つ「マザーベジタブル」をプロ用・アスリート用として提供。48種類の必須栄養素が、日々の激しいトレーニングからの回復と、試合での最高のパフォーマンスを支えます。',
                      EN: 'Providing "Mother Vegetable" with 3.5 billion years of vitality for professional use. 48 essential nutrients support recovery from intense daily training and peak performance in matches.'
                    })}
                  </p>
                  <ul className="space-y-4 mt-6">
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
                <div className="hidden md:block rounded-2xl overflow-hidden">
                   <img
                     src="/001.jpg"
                     alt="Mother Vegetable Product"
                     className="w-full h-full object-cover rounded-2xl"
                   />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-3xl p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute top-0 right-0 p-8 opacity-30 group-hover:opacity-50 transition-opacity">
              <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#4ade80] to-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px rgba(74, 222, 128, 0.3)' }}>02</span>
            </div>
            
            <div className="relative z-10">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {t({ JP: '持続可能な未来への支援', EN: 'Support for a Sustainable Future' })}
                </h3>
                <p className="text-[#4ade80] font-bold text-lg">
                  {t({ JP: '引退後も輝く、新たなステージを共に。', EN: 'Shining after retirement, together on a new stage.' })}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    {t({
                      JP: '活動資金の支援に加え、故郷やゆかりの地に「Small Earth Factory (SEF)」を設立する権利を提供。工場の収益の一部がアスリートに還元され、引退後の安定した収入源と地域貢献を実現します。',
                      EN: 'In addition to funding activities, we offer the right to establish a "Small Earth Factory (SEF)" in your hometown. A portion of the factory\'s profits is returned to the athlete, ensuring a stable income source after retirement and community contribution.'
                    })}
                  </p>
                  <ul className="space-y-4 mt-6">
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
                <div className="hidden md:block rounded-2xl overflow-hidden">
                   <img
                     src="/002.jpg"
                     alt="Small Earth Factory"
                     className="w-full h-full object-cover rounded-2xl"
                   />
                </div>
              </div>
            </div>
          </div>

          {/* Carbon Neutral Athlete Section (03) */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/30 rounded-3xl p-8 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute top-0 right-0 p-8 opacity-30 group-hover:opacity-50 transition-opacity">
              <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#4ade80] to-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px rgba(74, 222, 128, 0.3)' }}>03</span>
            </div>
            
            <div className="relative z-10">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {t({ JP: 'カーボンニュートラル・アスリート', EN: 'Carbon Neutral Athlete' })}
                </h3>
                <p className="text-[#4ade80] font-bold text-lg">
                  {t({ JP: '呼吸するたびに、地球を汚さない。', EN: 'Not polluting the earth with every breath.' })}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    {t({
                      JP: 'アスリートが活動することで排出されるCO2を、ただ排出するだけでなく、自らの手でオフセットする。「Small Earth Factory (SEF)」を持つことで、呼吸による負荷を吸収し、実質的な環境負荷をゼロに近づける。地球を救うという大げさなことではなく、まずは自分が出したものを自分で還す、責任あるアスリートの新しいスタンダード。',
                      EN: 'A new standard for responsible athletes: not just emitting CO2 through activities, but offsetting it with their own hands. By owning a "Small Earth Factory (SEF)", they absorb the burden of their breath and bring their environmental impact close to net zero. It\'s not about saving the earth, but about returning what you emit.'
                    })}
                  </p>
                  <ul className="space-y-4 mt-6">
                    {[
                      { JP: '排出CO2の自己吸収・オフセット', EN: 'Self-Absorption & Offset of Emitted CO2' },
                      { JP: '環境負荷実質ゼロへの責任', EN: 'Responsibility for Net Zero Impact' },
                      { JP: '熱狂をクリーンエネルギーへ', EN: 'Turning Enthusiasm into Clean Energy' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
                        <span>{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block rounded-2xl overflow-hidden">
                   <img
                     src="/003.jpg"
                     alt="Carbon Neutral Athlete"
                     className="w-full h-full object-cover rounded-2xl"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
