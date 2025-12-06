import { useLanguage } from '@/contexts/LanguageContext';

export default function AthleteRoster() {
  const { t } = useLanguage();

  const athletes = [
    {
      name: { JP: "アレックス・ジョンソン", EN: "Alex Johnson" },
      sport: { JP: "トライアスロン", EN: "Triathlon" },
      title: { JP: "プロトライアスリート", EN: "Professional Triathlete" },
      description: {
        JP: "マザーベジタブル製品を使用することで、週30時間のトレーニング中も最高の持久力と回復力を維持できています。継続的な栄養補給により、シーズン中盤の疲労が解消されました。",
        EN: "Using Mother Vegetable products to maintain peak endurance and recovery during 30-hour training weeks. The continuous nutrient supply has eliminated my mid-season fatigue."
      },
      image: "/images/athlete-1.jpg", // Placeholder, will use fallback
      achievement: { JP: "アイアンマン世界選手権出場", EN: "Ironman World Championship Qualifier" }
    },
    {
      name: { JP: "サラ・ウィリアムズ", EN: "Sarah Williams" },
      sport: { JP: "水泳", EN: "Swimming" },
      title: { JP: "オリンピック競泳選手", EN: "Olympic Swimmer" },
      description: {
        JP: "水泳選手にとって腸内環境は極めて重要です。Achieveプログラムを開始して以来、免疫力が大幅に向上し、冬場でも体調を崩すことなくトレーニングを継続できています。",
        EN: "Gut health is critical for swimmers. Since starting the Achieve program, my immunity has improved significantly, allowing me to train through the winter without illness."
      },
      image: "/images/athlete-2.jpg",
      achievement: { JP: "全国選手権 金メダリスト", EN: "Gold Medalist, National Championships" }
    },
    {
      name: { JP: "マイケル・チェン", EN: "Michael Chen" },
      sport: { JP: "陸上競技", EN: "Track & Field" },
      title: { JP: "短距離走者", EN: "Sprinter" },
      description: {
        JP: "48種類の栄養素が持つ抗炎症作用により、爆発的なスプリントセッション後の筋肉の回復が早まりました。ライバルよりも早くトラックに戻ることができます。",
        EN: "The anti-inflammatory properties of the 48 nutrients help my muscles recover faster after explosive sprint sessions. I'm back on the track sooner than my competitors."
      },
      image: "/images/athlete-3.jpg",
      achievement: { JP: "アジア大会 ファイナリスト", EN: "Asian Games Finalist" }
    },
    {
      name: { JP: "エレナ・ロドリゲス", EN: "Elena Rodriguez" },
      sport: { JP: "テニス", EN: "Tennis" },
      title: { JP: "プロテニスプレーヤー", EN: "Pro Tennis Player" },
      description: {
        JP: "移動とストレスで消化器系がボロボロでしたが、マザーベジタブルがバランスを取り戻してくれました。MVPコインのスポンサーシップにより、経済的な自由を得てプレーに集中できています。",
        EN: "Travel and stress used to wreck my digestion. Mother Vegetable restored my balance, and the MVP Coin sponsorship gives me the financial freedom to focus on my game."
      },
      image: "/images/athlete-4.jpg",
      achievement: { JP: "WTAランキング トップ100", EN: "Top 100 WTA Ranking" }
    },
    {
      name: { JP: "デビッド・キム", EN: "David Kim" },
      sport: { JP: "サッカー", EN: "Soccer" },
      title: { JP: "ミッドフィールダー", EN: "Midfielder" },
      description: {
        JP: "故郷にスモールアースファクトリーを設立することは夢でした。フィールドでのキャリアを支えながら、地域社会にレガシーを築いています。",
        EN: "Establishing a Small Earth Factory in my hometown was a dream come true. I'm building a legacy for my community while fueling my career on the field."
      },
      image: "/images/athlete-5.jpg",
      achievement: { JP: "2024年リーグMVP", EN: "League MVP 2024" }
    },
    {
      name: { JP: "ジェシカ・リー", EN: "Jessica Lee" },
      sport: { JP: "体操", EN: "Gymnastics" },
      title: { JP: "エリート体操選手", EN: "Elite Gymnast" },
      description: {
        JP: "正確さと集中力がすべてです。マザーベジタブルの栄養密度は、複雑なルーチン中の精神的な明晰さと身体的な安定性を支えてくれます。",
        EN: "Precision and focus are everything. The nutrient density of Mother Vegetable supports my mental clarity and physical stability during complex routines."
      },
      image: "/images/athlete-6.jpg",
      achievement: { JP: "ワールドカップ 銀メダリスト", EN: "World Cup Silver Medalist" }
    }
  ];

  return (
    <section id="team" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t({ JP: '支援アスリート', EN: 'Supported Athletes' })}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t({
              JP: 'マザーベジタブルのエコシステムに参加し、肉体を強化し未来を切り拓くエリートアスリートたち。',
              EN: 'Elite performers who have joined the Mother Vegetable ecosystem to power their bodies and secure their future.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {athletes.map((athlete, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl overflow-hidden hover:border-[#4ade80]/50 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-700">
                <img
                  src={athlete.image}
                  alt={t(athlete.name)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => e.currentTarget.src = `https://placehold.co/600x400/111111/FFFFFF?text=${t(athlete.name).split(' ')[0]}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{t(athlete.name)}</h3>
                  <p className="text-[#4ade80] font-medium">{t(athlete.title)}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] text-xs font-bold uppercase tracking-wider">
                  {t(athlete.sport)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  "{t(athlete.description)}"
                </p>
                <div className="pt-4 border-t border-gray-700/50">
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    {t({ JP: '主な実績', EN: 'Achievement' })}
                  </p>
                  <p className="text-white font-medium">{t(athlete.achievement)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
