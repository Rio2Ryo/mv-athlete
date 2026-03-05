import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectOverview() {
  const { t } = useLanguage();

  const pillars = [
    {
      number: '01',
      title: { JP: 'Mother Vegetable', EN: 'Mother Vegetable' },
      subtitle: { JP: '35億年の生命力が、あなたの力を覚醒させる。', EN: '3.5 billion years of vitality awakens your power.' },
      description: {
        JP: '人間が35億年前の地球のはじまりの植物を取り込む。さらには、フードセキュリティー対策（食糧危機問題）を目指す。48種類の必須栄養素が、日々の激しいトレーニングからの回復と、試合での最高のパフォーマンスを支えます。',
        EN: 'Incorporating the primordial plant from 3.5 billion years ago. Addressing food security challenges. 48 essential nutrients support recovery from intense daily training and peak performance in competition.'
      },
      points: [
        { JP: 'プロ専用製品の提供', EN: 'Exclusive Pro Products' },
        { JP: '圧倒的な回復力', EN: 'Overwhelming Recovery' },
        { JP: '怪我に強い体づくり', EN: 'Injury-Resistant Body' },
        { JP: 'フードセキュリティー対策', EN: 'Food Security Solutions' }
      ],
      image: '/001.jpg',
    },
    {
      number: '02',
      title: { JP: 'Small Earth Factory (SEF)', EN: 'Small Earth Factory (SEF)' },
      subtitle: { JP: '引退後も輝く、新たなステージを共に。', EN: 'Shining after retirement, together on a new stage.' },
      description: {
        JP: 'Mother Vegetableを用い、高品質なタンパク質や昆虫、肉を生産する。さらには地球のCO2を削減し、温暖化問題を解決する地への手段。活動資金の支援に加え、故郷やゆかりの地にSEFを設立する権利を提供。工場の収益の一部がアスリートに還元され、引退後の安定した収入源と地域貢献を実現します。',
        EN: 'Producing high-quality protein, insects, and meat using Mother Vegetable. A means to reduce Earth\'s CO2 and solve global warming. In addition to funding, we offer the right to establish an SEF in your hometown. A portion of factory profits returns to athletes, ensuring stable post-retirement income and community contribution.'
      },
      points: [
        { JP: '活動資金の提供', EN: 'Activity Funding' },
        { JP: 'SEFオーナー権', EN: 'SEF Ownership' },
        { JP: '地域への利益還元', EN: 'Community Profit Sharing' },
        { JP: 'CO2削減・温暖化対策', EN: 'CO2 Reduction & Climate Action' }
      ],
      image: '/002.jpg',
    },
    {
      number: '03',
      title: { JP: 'カーボンニュートラル・アスリート', EN: 'Carbon Neutral Athlete' },
      subtitle: { JP: '呼吸するたびに、地球を汚さない。', EN: 'Not polluting the earth with every breath.' },
      description: {
        JP: 'アスリートが活動することで排出されるCO2を、ただ排出するだけでなく、自らの手でオフセットする。SEFを持つことで、呼吸による負荷を吸収し、実質的な環境負荷をゼロに近づける。まずは自分が出したものを自分で還す、責任あるアスリートの新しいスタンダード。',
        EN: 'Not just emitting CO2 through activities, but offsetting it with their own hands. By owning an SEF, they absorb the burden of breathing and bring their environmental impact close to net zero. A new standard for responsible athletes: returning what you emit.'
      },
      points: [
        { JP: '排出CO2の自己吸収・オフセット', EN: 'Self-Absorption & Offset of CO2' },
        { JP: '環境負荷実質ゼロへの責任', EN: 'Responsibility for Net Zero Impact' },
        { JP: '熱狂をクリーンエネルギーへ', EN: 'Turning Enthusiasm into Clean Energy' }
      ],
      image: '/003.jpg',
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-[#4ade80] text-sm font-semibold tracking-[0.2em] uppercase">
            {t({ JP: 'REBORNの3つの柱', EN: 'Three Pillars of REBORN' })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8">
            {t({ JP: 'アスリートへの約束', EN: 'Promise to Athletes' })}
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-gray-300 leading-relaxed">
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

        {/* Pillar Cards */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-[#4ade80]/20 rounded-3xl p-8 md:p-16 overflow-hidden hover:border-[#4ade80]/50 transition-all duration-500"
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-[#4ade80]/10 transition-all duration-500"></div>

              {/* Number */}
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <span
                  className="text-8xl md:text-9xl font-black text-transparent"
                  style={{ WebkitTextStroke: '1px rgba(74, 222, 128, 0.4)' }}
                >
                  {pillar.number}
                </span>
              </div>

              <div className="relative z-10">
                <div className="mb-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
                    {t(pillar.title)}
                  </h3>
                  <p className="text-[#4ade80] font-semibold text-base md:text-lg">
                    {t(pillar.subtitle)}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {t(pillar.description)}
                    </p>
                    <ul className="space-y-3 mt-6">
                      {pillar.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] flex-shrink-0"></div>
                          <span>{t(point)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:block rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={pillar.image}
                      alt={t(pillar.title)}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
