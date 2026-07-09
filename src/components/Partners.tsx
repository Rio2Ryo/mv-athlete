import { useLanguage } from '@/contexts/LanguageContext';

export default function Partners() {
  const { t, language } = useLanguage();

  /* =========================================================================
   * 旧 Partnership セクション（非表示 / hidden）
   * 復元する場合は以下のデータと下部の旧レンダリングを有効化してください。
   * -------------------------------------------------------------------------
   * const partnerCategories = [
   *   {
   *     id: 'international',
   *     title: { JP: '政府・公的機関・地域パートナー', EN: 'Government, Public & Regional Partners' },
   *     isOpen: true,
   *     partners: [ ... ]
   *   },
   *   { id: 'academic', title: { JP: '学術・研究機関', EN: 'Academic & Research Institutions' }, ... },
   *   { id: 'jichitai', title: { JP: '行政・地方自治体', EN: 'Administration & Local Governments' }, ... },
   *   { id: 'other', title: { JP: '国際機関', EN: 'International Organizations' }, ... },
   *   { id: 'other2', title: { JP: 'その他の提携組織・プロジェクト', EN: 'Other Partner Organizations & Projects' }, ... },
   * ];
   * ※旧データの全文は git 履歴（コミット a52f7ba 時点の本ファイル）に保存されています。
   * ========================================================================= */

  // Mother Vegetable Group Companies セクション（mazavege_chan より複製）
  return (
    <section id="partners" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {language === 'EN' ? (
              <>
                Mother Vegetable
                <br className="md:hidden" />
                <span className="hidden md:inline"> </span>
                Group Companies
              </>
            ) : (
              t({ JP: 'マザーベジタブルグループ', EN: 'Mother Vegetable Group Companies' })
            )}
          </h2>
        </div>

        {/* Group Companies - Kirin HD Style */}
        <div className="mb-16">
          <h3 className="text-sm md:text-xl font-bold text-white text-center mb-8">
            {t({ JP: '日本・マレーシア・シンガポール・米国を拠点に事業を展開するグローバル企業グループ。', EN: 'A global corporate group operating across Japan, Malaysia, Singapore, and the United States.' })}
          </h3>
          <div className="max-w-4xl mx-auto bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col gap-10">
              {/* Japan */}
              <div>
                <h5 className="text-lg md:text-xl font-bold text-white mb-4">{t({ JP: '日本', EN: 'Japan' })}</h5>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-300 text-sm md:text-base">
                    {t({ JP: '株式会社マザーベジタブル', EN: 'Mother Vegetable Co., Ltd.' })}
                  </li>
                  <li className="text-gray-300 text-sm md:text-base">
                    {t({ JP: '株式会社マザーベジタブルラボ', EN: 'Mother Vegetable Lab Co., Ltd.' })}
                  </li>
                  <li className="text-gray-300 text-sm md:text-base">
                    {t({ JP: '全国姉妹漁協推進協議会株式会社', EN: 'National Sister Fisheries Promotion Council Co., Ltd.' })}
                  </li>
                </ul>
              </div>
              {/* Malaysia */}
              <div>
                <h5 className="text-lg md:text-xl font-bold text-white mb-4">{t({ JP: 'マレーシア', EN: 'Malaysia' })}</h5>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-300 text-sm md:text-base">
                    {t({ JP: 'マザーベジタブルパートナーズ Sdn. Bhd.', EN: 'Mother Vegetable Partners Sdn. Bhd.' })}
                  </li>
                  <li className="text-gray-300 text-sm md:text-base">
                    {t({ JP: 'アルジー・インターナショナル Berhad', EN: 'Algae International Berhad' })}
                  </li>
                  <li className="text-gray-300 text-sm md:text-base">
                    {t({ JP: 'レヴォガニクス Sdn. Bhd.', EN: 'Revoganix Sdn. Bhd.' })}
                  </li>
                  <li className="text-gray-300 text-sm md:text-base">
                    {t({ JP: 'AICOロボティクス Sdn. Bhd.', EN: 'AICO Robotics Sdn. Bhd.' })}
                  </li>
                </ul>
              </div>
              {/* Singapore */}
              <div>
                <h5 className="text-lg md:text-xl font-bold text-white mb-4">{t({ JP: 'シンガポール', EN: 'Singapore' })}</h5>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-300 text-sm md:text-base">
                    {t({ JP: 'マザーベジタブル Pte. Ltd.', EN: 'Mother Vegetable Pte. Ltd.' })}
                  </li>
                </ul>
              </div>
              {/* USA */}
              <div>
                <h5 className="text-lg md:text-xl font-bold text-white mb-4">{t({ JP: 'アメリカ', EN: 'USA' })}</h5>
                <ul className="space-y-2 ml-6">
                  <li className="text-gray-300 text-sm md:text-base">
                    {t({ JP: 'フィナンシャル・サービシズ・アソシエイツ Inc.', EN: 'Financial Services Associates Inc.' })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
