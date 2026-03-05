import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Brain, MapPin } from 'lucide-react';

export default function RebornProgram() {
    const { t } = useLanguage();

    const programs = [
        {
            icon: <Users className="w-8 h-8" />,
            title: { JP: 'アスリートとの直接交流', EN: 'Direct Interaction with Athletes' },
            duration: { JP: '所要時間 30分〜1時間', EN: 'Duration: 30min - 1hour' },
            items: [
                { JP: '体育館：レジェンドアスリートの競技でミニゲーム', EN: 'Gymnasium: Mini-games with legend athletes' },
                { JP: '給食：ランチタイムに栄養とスポーツについて共に語る', EN: 'Lunch: Talking about nutrition and sports together' },
                { JP: '部活：フィジカル＆メンタルコントロールの伝授', EN: 'Club Activities: Teaching physical & mental control' },
            ]
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: { JP: 'メンタルトーク', EN: 'Mental Talk' },
            duration: { JP: 'Q&A方式のセッション', EN: 'Q&A Format Session' },
            items: [
                { JP: '世界を制したアスリートのメンタル管理術', EN: 'Mental management techniques from world champions' },
                { JP: '子ども〜社会人まで実践できる内容', EN: 'Practical content for children to adults' },
                { JP: '目標の立て方、壁の乗り越え方', EN: 'How to set goals and overcome obstacles' },
                { JP: '体を決勝の状態にするための食事やこだわり', EN: 'Diet and practices to reach peak performance' }
            ]
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: { JP: '訪問場所', EN: 'Visit Locations' },
            duration: { JP: '幅広い分野への訪問', EN: 'Visits across diverse fields' },
            items: [
                { JP: '教育：小学校・中学校・育英養護施設', EN: 'Education: Elementary, middle schools, foster care' },
                { JP: '福祉：病院・高齢者施設・障害福祉施設', EN: 'Welfare: Hospitals, elderly care, disability facilities' },
                { JP: '社会：官公庁・民間企業・スポーツイベント', EN: 'Society: Government, companies, sports events' },
            ]
        }
    ];

    return (
        <section id="program" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4ade80]/3 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#4ade80] text-sm font-semibold tracking-[0.2em] uppercase">
                        {t({ JP: 'REBORN プログラム', EN: 'REBORN Program' })}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
                        {t({ JP: '活動内容', EN: 'Activities' })}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {t({
                            JP: 'レジェンドアスリートが世界にREBORNプロジェクトを伝達する。世界の消滅を感動にかえ、次世代に希望を届けます。',
                            EN: 'Legend athletes convey the REBORN Project to the world. Transforming the world\'s challenges into inspiration, delivering hope to the next generation.'
                        })}
                    </p>
                </div>

                {/* Program Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {programs.map((program, idx) => (
                        <div
                            key={idx}
                            className="group bg-gradient-to-b from-gray-900/80 to-gray-950 border border-gray-800/50 rounded-2xl p-8 hover:border-[#4ade80]/40 transition-all duration-500 flex flex-col"
                        >
                            {/* Icon */}
                            <div className="mb-6 text-[#4ade80] group-hover:scale-110 transition-transform duration-300">
                                {program.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2">
                                {t(program.title)}
                            </h3>
                            <p className="text-[#4ade80]/70 text-sm font-medium mb-6">
                                {t(program.duration)}
                            </p>

                            {/* Items */}
                            <ul className="space-y-3 flex-grow">
                                {program.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] mt-2 flex-shrink-0"></div>
                                        <span>{t(item)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
