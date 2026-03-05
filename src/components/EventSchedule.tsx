import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, PartyPopper } from 'lucide-react';

export default function EventSchedule() {
    const { t } = useLanguage();

    const day1 = [
        { time: '10:00', event: { JP: 'REBORN：病院や障害者の方の施設の意義訪問', EN: 'REBORN: Meaningful visits to hospitals and disability facilities' } },
        { time: '13:00', event: { JP: 'REBORN：小学校などスポーツ体験イベント', EN: 'REBORN: Sports experience events at elementary schools' } },
        { time: '18:00', event: { JP: 'MVAF レセプションパーティ', EN: 'MVAF Reception Party' }, highlight: true },
    ];

    const day2 = [
        { time: '09:30', event: { JP: 'スポーツ関連省庁 訪問（日本：文部科学省）', EN: 'Visit to Sports Ministry (Japan: MEXT)' } },
        { time: '11:00', event: { JP: '社会福祉関連省庁 訪問（日本：厚生労働省）', EN: 'Visit to Social Welfare Ministry (Japan: MHLW)' } },
        { time: '13:30', event: { JP: '農業畜産金融関連省庁 訪問（日本：農林水産省）', EN: 'Visit to Agriculture Ministry (Japan: MAFF)' } },
        { time: '15:30', event: { JP: '環境関連省庁 訪問（日本：環境省）', EN: 'Visit to Environment Ministry (Japan: MOE)' } },
        { time: '17:30', event: { JP: 'メディア取材対応', EN: 'Media coverage and interviews' } },
    ];

    const receptionItems = [
        { JP: 'MVAF表彰式', EN: 'MVAF Award Ceremony' },
        { JP: 'レジェンドアスリートの紹介', EN: 'Introduction of Legend Athletes' },
        { JP: '各アスリート専用Webページの紹介', EN: 'Introduction of Athlete Web Pages' },
        { JP: 'Mother Vegetableフードの試食会', EN: 'Mother Vegetable Food Tasting' },
        { JP: 'レジェンドアスリートとの交流（各テーブル5分ほど）', EN: 'Interaction with Legend Athletes (5 min per table)' },
        { JP: 'レジェンドアスリートオリジナルグッズの提供', EN: 'Legend Athlete Original Merchandise' },
    ];

    return (
        <section id="schedule" className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#4ade80] text-sm font-semibold tracking-[0.2em] uppercase">
                        {t({ JP: 'イベント', EN: 'Events' })}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
                        {t({ JP: 'スケジュール＆レセプション', EN: 'Schedule & Reception' })}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Timeline */}
                    <div className="space-y-6">
                        {/* Day 1 */}
                        <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800/50 rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="w-5 h-5 text-[#4ade80]" />
                                <h3 className="text-lg font-bold text-white">
                                    {t({ JP: 'Day 1：地域教育機関 / レセプションパーティ', EN: 'Day 1: Community Education / Reception Party' })}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {day1.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <span className="text-[#4ade80] font-mono text-sm font-bold min-w-[52px] pt-0.5">
                                            {item.time}
                                        </span>
                                        <div className="flex-1">
                                            <div className={`text-sm leading-relaxed ${item.highlight ? 'text-[#4ade80] font-semibold' : 'text-gray-300'}`}>
                                                {t(item.event)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Day 2 */}
                        <div className="bg-gradient-to-br from-gray-900/80 to-black border border-gray-800/50 rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="w-5 h-5 text-[#4ade80]" />
                                <h3 className="text-lg font-bold text-white">
                                    {t({ JP: 'Day 2：行政機関', EN: 'Day 2: Government Agencies' })}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {day2.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <span className="text-[#4ade80] font-mono text-sm font-bold min-w-[52px] pt-0.5">
                                            {item.time}
                                        </span>
                                        <div className="flex-1">
                                            <div className="text-gray-300 text-sm leading-relaxed">
                                                {t(item.event)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Reception Party */}
                    <div className="bg-gradient-to-br from-gray-900/80 to-black border border-[#4ade80]/20 rounded-2xl p-6 md:p-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <PartyPopper className="w-5 h-5 text-[#4ade80]" />
                            <h3 className="text-lg font-bold text-white">
                                {t({ JP: 'レセプションパーティの内容', EN: 'Reception Party Program' })}
                            </h3>
                        </div>

                        <ul className="space-y-4 flex-grow">
                            {receptionItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[#4ade80] text-xs font-bold">{i + 1}</span>
                                    </div>
                                    <span className="text-gray-300 text-sm leading-relaxed">
                                        {t(item)}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Note */}
                        <div className="mt-8 pt-6 border-t border-gray-800/50">
                            <p className="text-gray-500 text-xs leading-relaxed">
                                {t({
                                    JP: '※ スケジュールは一例です。訪問先や時間配分は国・地域によって調整されます。',
                                    EN: '* Schedule is an example. Visit locations and time allocation will be adjusted by country/region.'
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
