import { useLanguage } from '@/contexts/LanguageContext';

export default function AthleteRoster() {
  const { t } = useLanguage();

  const roster = [
    {
      name: { JP: '伊藤 友広', EN: 'Tomohiro Ito' },
      title: { JP: 'オリンピアン / プロスプリントコーチ', EN: 'Olympian / Professional Sprint Coach' },
      achievement: { JP: 'アテネオリンピック 4x400mリレー 日本代表', EN: 'Athens Olympic 4x400m Relay Japan Representative' },
      description: {
        JP: 'アテネオリンピック 4x400mリレー日本代表。第3走者として日本過去最高順位の4位入賞に貢献。現在はプロスプリントコーチとして、次世代のアスリート育成や、走りのメソッドを通じた教育活動に尽力している。',
        EN: 'Athens Olympian, 4x400m Relay Japan Representative. Contributed to Japan\'s highest-ever 4th place finish as the third runner. Currently dedicated to nurturing the next generation of athletes and educational activities through sprinting methods as a professional sprint coach.'
      },
      image: '/ito_tomohiro.jpg',
      imagePosition: 'center 20%',
      video: import.meta.env.BASE_URL + 'run.mov'
    },
    {
      name: { JP: '永原 和可那', EN: 'Wakana Nagahara' },
      title: { JP: '世界バドミントン選手権 2大会連続金メダリスト', EN: '2-Time World Badminton Champion' },
      achievement: { JP: '世界選手権 金メダリスト（2018, 2019）', EN: 'World Championship Gold Medalist (2018, 2019)' },
      description: {
        JP: '北海道十勝出身のバドミントン選手。世界バドミントン選手権大会女子ダブルスで2年連続金メダルを獲得（2018, 2019）。「ナガマツペア」として世界を舞台に活躍し、東京・パリと2大会連続でオリンピックに出場。地元十勝の誇りとして、スポーツを通じた地域貢献にも積極的。',
        EN: 'Badminton player from Tokachi, Hokkaido. Won gold medals in Women\'s Doubles at the BWF World Championships for two consecutive years (2018, 2019). Competed on the world stage as part of the "Naga-Matsu pair" and participated in two consecutive Olympics in Tokyo and Paris. Actively contributes to the community through sports as the pride of her hometown Tokachi.'
      },
      image: '/nagahara_wakana.webp',
      imagePosition: 'center 15%',
      video: import.meta.env.BASE_URL + 'mv.mp4'
    }
  ];

  return (
    <section id="athletes" className="py-24 bg-gradient-to-b from-black to-gray-950 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="text-[#4ade80] text-sm font-semibold tracking-[0.2em] uppercase">
            {t({ JP: 'レジェンドアスリート', EN: 'Legend Athletes' })}
          </span>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t({ JP: '世界のレジェンドアスリートと直接会える', EN: 'Meet World-Class Legend Athletes' })}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t({
              JP: '世界レベルの実績を有するレジェンドアスリートが、REBORNプロジェクトを通じて直接交流し、次世代の可能性を引き出します。',
              EN: 'Legendary athletes with world-class achievements directly engage through the REBORN Project, unlocking the potential of the next generation.'
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
          {roster.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black border border-gray-800/50 rounded-2xl overflow-hidden hover:border-[#4ade80]/40 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Area - with cinematic treatment */}
              <div className="aspect-[3/4] sm:aspect-[4/3] bg-black relative overflow-hidden">
                {/* Dark base for blending */}
                <div className="absolute inset-0 bg-black"></div>

                {/* Image with blend treatment */}
                <img
                  src={item.image}
                  alt={t(item.name)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    objectPosition: item.imagePosition,
                    filter: 'contrast(1.1) brightness(0.9)',
                  }}
                />

                {/* Multi-layer gradient overlay for cinematic feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-gray-900/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-900/30"></div>
                {/* Green accent glow from bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#4ade80]/5 to-transparent"></div>

                {/* Achievement Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-md border border-[#4ade80]/30 rounded-lg px-4 py-2.5 inline-block">
                    <span className="text-[#4ade80] text-xs md:text-sm font-bold tracking-wide">
                      {t(item.achievement)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="mb-4">
                  <p className="text-[#4ade80] text-xs font-bold tracking-wider uppercase mb-2">
                    {t(item.title)}
                  </p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#4ade80] transition-colors duration-300">
                    {t(item.name)}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                  {t(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
