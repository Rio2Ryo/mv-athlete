import { useLanguage } from '@/contexts/LanguageContext';

export default function AthleteRoster() {
  const { t } = useLanguage();

  const roster = [
    {
      name: { JP: '伊藤 友広', EN: 'Tomohiro Ito' },
      title: { JP: 'オリンピアン / プロスプリントコーチ', EN: 'Olympian / Professional Sprint Coach' },
      description: {
        JP: 'アテネオリンピック 4x400mリレー日本代表。第3走者として日本過去最高順位の4位入賞に貢献。現在はプロスプリントコーチとして、次世代のアスリート育成や、走りのメソッドを通じた教育活動に尽力している。',
        EN: 'Athens Olympian, 4x400m Relay Japan Representative. Contributed to Japan\'s highest-ever 4th place finish as the third runner. Currently dedicated to nurturing the next generation of athletes and educational activities through sprinting methods as a professional sprint coach.'
      },
      image: '/avatar_ito_track.png'
    },
    {
      name: { JP: '永原 和可那', EN: 'Wakana Nagahara' },
      title: { JP: '世界バドミントン選手権 2大会連続金メダリスト', EN: '2-Time World Badminton Champion' },
      description: {
        JP: '北海道十勝出身のバドミントン選手。世界バドミントン選手権大会女子ダブルスで2年連続金メダルを獲得（2018, 2019）。「ナガマツペア」として世界を舞台に活躍し、東京・パリと2大会連続でオリンピックに出場。地元十勝の誇りとして、スポーツを通じた地域貢献にも積極的。',
        EN: 'Badminton player from Tokachi, Hokkaido. Won gold medals in Women\'s Doubles at the BWF World Championships for two consecutive years (2018, 2019). Competed on the world stage as part of the "Naga-Matsu pair" and participated in two consecutive Olympics in Tokyo and Paris. Actively contributes to the community through sports as the pride of her hometown Tokachi.'
      },
      image: '/avatar_nagahara_badminton.png'
    },
    {
      name: { JP: 'KNOCK OUT', EN: 'KNOCK OUT' },
      title: { JP: 'キックボクシング団体', EN: 'Professional Kickboxing Organization' },
      description: {
        JP: '「撃つ・蹴る・斬る」をコンセプトに、立ち技格闘技の最強を決めるリング。キックボクシングの新たな可能性を切り拓き、選手たちの熱い戦いを通じて観客に感動と興奮を届ける。環境への配慮とスポーツの発展を両立させるパートナーとして参画。',
        EN: 'A ring to decide the strongest in striking martial arts with the concept of "Strike, Kick, Slash". Opening up new possibilities for kickboxing and delivering emotion and excitement to the audience through the heated battles of the fighters. Participating as a partner to balance environmental consideration and the development of sports.'
      },
      image: '/avatar_knockout_kickboxers.png',
      logo: '/knockout_logo_official.jpg'
    }
  ];

  return (
    <section id="athletes" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t({ JP: '支援アスリート・団体', EN: 'Supported Athletes & Organizations' })}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t({
              JP: '私たちは、世界で挑戦するトップアスリートや、スポーツの発展に尽力する団体を全力でサポートしています。',
              EN: 'We fully support top athletes challenging the world and organizations dedicated to the development of sports.'
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {roster.map((item, index) => (
            <div key={index} className="bg-[#0f172a] border border-gray-800 rounded-xl overflow-hidden hover:border-[#4ade80]/50 transition-all duration-300 flex flex-col h-full group">
              <div className="aspect-[4/3] bg-gray-800 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={t(item.name)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90"></div>
                {item.logo && (
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full p-1 shadow-lg z-10">
                    <img 
                      src={item.logo} 
                      alt={`${t(item.name)} Logo`}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-grow text-center relative z-10">
                <div className="mb-4">
                  <p className="text-[#4ade80] text-xs font-bold tracking-wider uppercase mb-2">{t(item.title)}</p>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#4ade80] transition-colors">
                    {t(item.name)}
                  </h3>
                </div>
                
                <p className="text-gray-400 leading-relaxed text-sm text-justify">
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
