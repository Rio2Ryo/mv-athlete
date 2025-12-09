import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function TokenInfo() {
  const { t } = useLanguage();

  return (
    <section id="token" className="py-24 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Token Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-[#4ade80]/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="/mvt-coin.png" 
                alt="MVP Coin" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(74,222,128,0.3)]"
                onError={(e) => e.currentTarget.src = "https://placehold.co/400x400/000000/4ade80?text=MVP+Coin"}
              />
            </div>
          </div>

          {/* Token Details */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t({ JP: 'MVPトークン', EN: 'MVP Token' })}
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t({
                JP: 'アスリートの活動を支援し、スモールアースファクトリーの経済圏を循環する独自トークン。支援者はトークンを通じてアスリートを直接サポートし、工場の収益分配に参加できます。',
                EN: 'A unique token that supports athlete activities and circulates within the Small Earth Factory economy. Supporters can directly back athletes through the token and participate in factory profit sharing.'
              })}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500">{t({ JP: 'トークン名', EN: 'Token Name' })}</span>
                <span className="text-white font-bold">Mother Vegetable Power (MVP)</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500">{t({ JP: 'ネットワーク', EN: 'Network' })}</span>
                <span className="text-white font-bold">Ethereum / Polygon</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500">{t({ JP: '総発行枚数', EN: 'Total Supply' })}</span>
                <span className="text-white font-bold">1,000,000,000 MVP</span>
              </div>
            </div>

            <Button className="bg-[#4ade80] text-black hover:bg-[#22c55e] font-bold rounded-full px-8 py-6 w-full md:w-auto">
              {t({ JP: 'ホワイトペーパーを見る', EN: 'View Whitepaper' })}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
