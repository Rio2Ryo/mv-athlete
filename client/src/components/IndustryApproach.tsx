import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Zap, Heart, Globe, Shield, Award, Users, TrendingUp } from 'lucide-react';

export default function IndustryApproach() {
  const { t } = useLanguage();

  const approaches = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: { JP: '完全栄養', EN: 'Complete Nutrition' },
      desc: { JP: '48種類の必須栄養素をバランスよく含有', EN: 'Contains all 48 essential nutrients in balance' }
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: { JP: 'エネルギー', EN: 'Energy Boost' },
      desc: { JP: '持続的なエネルギー供給と疲労回復', EN: 'Sustained energy supply and fatigue recovery' }
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: { JP: '健康維持', EN: 'Health Maintenance' },
      desc: { JP: '免疫力の向上と生活習慣病の予防', EN: 'Improved immunity and prevention of lifestyle diseases' }
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: { JP: '環境再生', EN: 'Eco Regeneration' },
      desc: { JP: 'CO2削減と酸素生成による環境貢献', EN: 'Environmental contribution through CO2 reduction' }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: { JP: '安全性', EN: 'Safety' },
      desc: { JP: '農薬不使用・徹底した品質管理', EN: 'Pesticide-free and strict quality control' }
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: { JP: '高品質', EN: 'High Quality' },
      desc: { JP: '特許技術による安定した生産体制', EN: 'Stable production system using patented technology' }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: { JP: 'コミュニティ', EN: 'Community' },
      desc: { JP: '健康意識の高いグローバルネットワーク', EN: 'Global network of health-conscious individuals' }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: { JP: '経済性', EN: 'Economy' },
      desc: { JP: '持続可能なビジネスモデルの構築', EN: 'Building a sustainable business model' }
    }
  ];

  return (
    <section id="industry" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t({ JP: '8つのアプローチ', EN: '8 Approaches' })}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t({
              JP: 'マザーベジタブルは、多角的なアプローチで人々の健康と地球環境の改善に取り組みます。',
              EN: 'Mother Vegetable tackles human health and global environmental improvement through a multifaceted approach.'
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {approaches.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-xl hover:bg-gray-800/50 hover:border-[#4ade80]/30 transition-all duration-300 group"
            >
              <div className="mb-4 text-[#4ade80] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t(item.title)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(item.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
