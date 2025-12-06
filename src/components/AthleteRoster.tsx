import { useLanguage } from '@/contexts/LanguageContext';

export default function AthleteRoster() {
  const { t } = useLanguage();

  const athletes = [
    {
      name: { JP: "田中 健太", EN: "Kenta Tanaka" },
      sport: { JP: "陸上競技", EN: "Track & Field" },
      title: { JP: "プロスプリンター", EN: "Pro Sprinter" },
      description: {
        JP: "マザーベジタブルの栄養補給により、激しいトレーニング後の回復速度が劇的に向上しました。シーズンを通して最高のパフォーマンスを維持できています。",
        EN: "Mother Vegetable's nutrition has dramatically improved my recovery speed after intense training. I can maintain peak performance throughout the season."
      },
      image: "/images/athlete-jp-m.png",
      achievement: { JP: "日本選手権 優勝", EN: "National Champion" }
    },
    {
      name: { JP: "佐藤 美咲", EN: "Misaki Sato" },
      sport: { JP: "水泳", EN: "Swimming" },
      title: { JP: "オリンピック競泳選手", EN: "Olympic Swimmer" },
      description: {
        JP: "腸内環境の改善が免疫力向上に直結し、体調を崩すことなくトレーニングに集中できています。アスリートとしての寿命が延びたと感じています。",
        EN: "Improving my gut health directly boosted my immunity, allowing me to focus on training without getting sick. I feel my athletic career has been extended."
      },
      image: "/images/athlete-jp-f.png",
      achievement: { JP: "アジア大会 金メダリスト", EN: "Asian Games Gold Medalist" }
    },
    {
      name: { JP: "マーカス・ジョンソン", EN: "Marcus Johnson" },
      sport: { JP: "バスケットボール", EN: "Basketball" },
      title: { JP: "プロバスケットボール選手", EN: "Pro Basketball Player" },
      description: {
        JP: "試合中のスタミナと集中力が格段に上がりました。マザーベジタブルは私のキャリアにとって欠かせないパートナーです。",
        EN: "My stamina and focus during games have improved significantly. Mother Vegetable is an indispensable partner for my career."
      },
      image: "/images/athlete-intl-m1.png",
      achievement: { JP: "リーグMVP", EN: "League MVP" }
    },
    {
      name: { JP: "エマ・ウィリアムズ", EN: "Emma Williams" },
      sport: { JP: "テニス", EN: "Tennis" },
      title: { JP: "プロテニスプレーヤー", EN: "Pro Tennis Player" },
      description: {
        JP: "世界中を転戦する中で、安定した栄養摂取ができるのは大きな強みです。コンディションの波がなくなりました。",
        EN: "Being able to get consistent nutrition while traveling around the world is a huge advantage. My condition has become much more stable."
      },
      image: "/images/athlete-intl-f1.png",
      achievement: { JP: "グランドスラム ベスト8", EN: "Grand Slam Quarterfinalist" }
    },
    {
      name: { JP: "カルロス・ロドリゲス", EN: "Carlos Rodriguez" },
      sport: { JP: "サッカー", EN: "Soccer" },
      title: { JP: "ミッドフィールダー", EN: "Midfielder" },
      description: {
        JP: "故郷に工場を作るという夢をサポートしてもらえることに感謝しています。プレーで恩返しをしたいです。",
        EN: "I am grateful for the support in realizing my dream of building a factory in my hometown. I want to give back through my play."
      },
      image: "/images/athlete-intl-m2.png",
      achievement: { JP: "代表チーム キャプテン", EN: "National Team Captain" }
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
              <div className="relative h-80 overflow-hidden bg-gray-700">
                <img
                  src={athlete.image}
                  alt={t(athlete.name)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
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
