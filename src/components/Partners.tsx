import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Partners() {
  const { t } = useLanguage();

  const partnerCategories = [
    {
      id: 'international',
      title: { JP: '政府・公的機関・地域パートナー', EN: 'Government, Public & Regional Partners' },
      isOpen: true,
      partners: [
        { 
          name: { JP: 'BioNexus ステータス企業', EN: 'BioNexus Status Company' }, 
          type: { JP: 'マレーシア政府認可', EN: 'Malaysian Government Certified' },
          description: {
            JP: 'マレーシア政府の特別クラス・バイオテクノロジー企業として認定されており、バイオテクノロジー商業化の進歩のための実質的な財政的インセンティブ、税制優遇、制度的サポートへのアクセスを享受しています。',
            EN: 'Certified as a special class biotechnology company by the Malaysian government, enjoying access to substantial financial incentives, tax breaks, and institutional support for the advancement of biotechnology commercialization.'
          },
          logo: '/bionexus_logo.png'
        },
        { 
          name: { JP: 'ASEAN', EN: 'ASEAN' }, 
          type: { JP: '東南アジア諸国連合', EN: 'Association of Southeast Asian Nations' },
          description: {
            JP: '持続可能な水産養殖および農業セクターにおけるパートナーシップからの公式支援により、東南アジア全10カ国にわたる地域に責任を有し、実際に実行可能な政策とシステムというASEANの共通ビジョンに貢献しています。',
            EN: 'With official support from partnerships in the sustainable aquaculture and agriculture sectors, we are responsible for the region spanning all 10 Southeast Asian countries, contributing to ASEAN\'s shared vision of practical and actionable policies and systems.'
          },
          logo: '/asean_logo.png'
        },
        { 
          name: { JP: 'ANGKASA', EN: 'ANGKASA' }, 
          type: { JP: 'マレーシア政府機関', EN: 'Malaysian Government Agency' },
          description: {
            JP: '16,000以上の協同組合と730万人の組合員を代表する協同組合開発庁の組合員として、1,596億収益455億を超える価値を有しており、マレーシアの中核経済活動における第一セクターとして技術革新を果たしています。',
            EN: 'As a member of the Cooperative Development Agency representing over 16,000 cooperatives and 7.3 million members, with a value exceeding 159.6 billion in revenue and 45.5 billion, we are achieving technological innovation as a primary sector in Malaysia\'s core economic activities.'
          },
          logo: '/images/angkasa_logo.png'
        },
        { 
          name: { JP: 'Invest Selangor', EN: 'Invest Selangor' }, 
          type: { JP: '政府機関', EN: 'Government Agency' }, 
          description: { 
            JP: 'セランゴール州政府が提供する優遇支援エコシステムの一員として、効率的な行政プロセス、カスタマイズされたインセンティブパッケージ、業界特化型プログラム、ネットワークとインフラへのアクセスを提供し、マレーシアで最も経済的に活発な州の一つでのプロジェクト成功を促進することを目指しています。', 
            EN: 'Member of the preferential support ecosystem provided by the Selangor State Government, including efficient administrative processes, customized incentive packages, industry-specific programs, and access to networks and infrastructure, aiming to promote project success in one of Malaysia\'s most economically active states.'
          }, 
          logo: '/images/invest_selangor_logo.png' 
        },
        { 
          name: { JP: 'NEGERI PAHANG', EN: 'NEGERI PAHANG' }, 
          type: { JP: 'パハン州政府', EN: 'Pahang State Government' }, 
          description: { 
            JP: 'マレーシア・パハン州の投資・産業・科学・技術・革新委員会の委員長より、Mother Vegetableへの投資提案に対する支援を受けています。特に技術と近代的な農業手法を用いて収量、効率、生産性を向上させることで、パハン州の農業セクターの経済発展を強化することを目指しています。執行委員会は、土地、資本、ネットワークを調整することで、大規模な持続可能な農業イニシアチブを加速させる触媒的な役割を果たしています。このパートナーシップは、民間セクターの投資とマレーシアの国家食料安全保障目標との整合性を強化します。', 
            EN: 'The Chairman of the Investment, Industry, Science, Technology and Innovation Committee of Pahang State, Malaysia has given us support for the proposed investment in Mother Vegetable to enhance economic development of Pahang\'s agricultural sector, particularly through the use of technology and modern farming methods to increase yields, efficiency and productivity. The Executive Committee plays a catalytic role in accelerating large-scale sustainable agriculture initiatives by coordinating land, capital and networks. This partnership strengthens the alignment between private sector investment and Malaysia\'s national food security objectives.' 
          }, 
          logo: '/images/pahang_logo.jpg' 
        },
        { 
          name: { JP: 'YTAA', EN: 'YTAA' }, 
          type: { JP: 'Yayasan Tengku Abdul Aziz Sultan Abu Bakar', EN: 'Yayasan Tengku Abdul Aziz Sultan Abu Bakar' }, 
          description: { 
            JP: 'YTAAは社会的インパクトのためのチャネルとして機能し、サブスクリプション負担の軽減、教育イニシアチブ、ヘルスケアプログラム、マイクロファイナンスプロジェクトへの直接的な資金提供を確保し、地域教育、ホリスティックヘルス、持続可能性におけるエンジニアリングプロジェクトで協力しています。', 
            EN: 'YTAA functions as a channel for social impact, ensuring direct funding for subscription burden reduction, educational initiatives, healthcare programs and microfinance projects, collaborating on engineering projects in regional education, holistic health and sustainability.' 
          }, 
          logo: '/images/ytaa_logo.png' 
        }
      ]
    },
    {
      id: 'academic',
      title: { JP: '学術・研究機関', EN: 'Academic & Research Institutions' },
      isOpen: false,
      partners: [
        { 
          name: { JP: 'ノッティンガム大学', EN: 'University of Nottingham' }, 
          type: { JP: '共同研究', EN: 'Joint Research' }, 
          description: { 
            JP: '大学構内における3エーカーの施設をMother Vegetable事業に提供する戦略的協力体制を構築し、研究開発の発展のため尊敬されるバイオテクノロジーチームによるサポートを受けています。', 
            EN: 'We have established a strategic cooperation system that provides 3 acres of facilities within the university campus for the Mother Vegetable business, supported by a respected biotechnology team for the advancement of research and development.' 
          }, 
          logo: '/images/nottingham_logo.png' 
        },
        { 
          name: { JP: 'シンガポール国立大学', EN: 'National University of Singapore' }, 
          type: { JP: '共同研究', EN: 'Joint Research' }, 
          description: { 
            JP: '農業や水産養殖、生物的防除剤、製品開発の分野において、科学的専門知識と革新を提供するパートナーシップを結んでいます。私たちの活動の基盤となる科学を強化し、イニシアチブが最先端の研究に基づいていることを確保することが重要です。彼らの支援を受けて、特に私たちの主力プロジェクトであるMother Vegetableプロジェクトを通じて、持続可能なソリューションの開発と商業化を加速することが可能になります。', 
            EN: 'We partner to provide scientific expertise and innovation in agriculture, aquaculture, biocontrol agents, and product development. Strengthening the science behind our activities and ensuring our initiatives are based on cutting-edge research is crucial. With their support, we can accelerate the development and commercialization of sustainable solutions, especially through our flagship Mother Vegetable project.' 
          }, 
          logo: '/images/nus_logo.png' 
        },
        { 
          name: { JP: 'マラヤ大学', EN: 'Universiti Malaya' }, 
          type: { JP: '共同研究', EN: 'Joint Research' }, 
          description: { 
            JP: 'マレーシアの最高学府であるマラヤ大学と研究開発分野で連携しています。同大学の優れた学術的知見と科学技術の専門性により、私たちの技術革新が大きく前進しています。この産学連携を通じて、持続可能な発展と社会実装を目指した研究開発を共同で進めており、Mother Vegetableプロジェクトの科学的基盤を強化しています。', 
            EN: 'We collaborate in R&D with Universiti Malaya, Malaysia\'s premier institution. Their academic excellence and scientific expertise significantly advance our technological innovation. Through this industry-academia collaboration, we jointly pursue R&D aimed at sustainable development and social implementation, strengthening the scientific foundation of the Mother Vegetable project.' 
          }, 
          logo: '/images/malaya_logo.png' 
        },
        { 
          name: { JP: 'マレーシア科学大学', EN: 'Universiti Sains Malaysia' }, 
          type: { JP: '共同研究', EN: 'Joint Research' }, 
          description: { 
            JP: '微細藻類研究の分野で国際的に高い評価を受けているマレーシア科学大学と共同研究を実施しています。同大学の専門知識と研究施設を活用し、微細藻類の可能性を最大限に引き出す技術開発を進めています。持続可能な社会の実現に向けて、基礎研究から応用開発まで幅広い分野で協力関係を構築しています。', 
            EN: 'We are conducting joint research with Universiti Sains Malaysia, which is internationally renowned in the field of microalgae research. Utilizing the university\'s expertise and research facilities, we are developing technologies to maximize the potential of microalgae. We are building cooperative relationships in a wide range of fields, from basic research to applied development, towards the realization of a sustainable society.' 
          }, 
          logo: '/images/usm_logo.png' 
        },
        { 
          name: { JP: 'マレーシア国民大学', EN: 'Universiti Kebangsaan Malaysia' }, 
          type: { JP: '共同研究', EN: 'Joint Research' }, 
          description: { 
            JP: 'Mother Vegetableプロジェクトの革新性と持続可能性に高い関心を示していただき、全面的な支援を受けています。現在、大学キャンパス内にMother Vegetable施設を設置する計画が進行中で、教育・研究・社会実装を一体化した新しいモデルの構築を目指しています。科学技術の発展と社会課題の解決に向けて、包括的な産学連携を推進しています。', 
            EN: 'They have shown great interest in the innovation and sustainability of the Mother Vegetable project and are providing full support. Plans are currently underway to establish a Mother Vegetable facility within the university campus, aiming to build a new model that integrates education, research, and social implementation. We are promoting comprehensive industry-academia collaboration for the development of science and technology and the solution of social issues.' 
          }, 
          logo: '/images/ukm_logo.png' 
        },
        { 
          name: { JP: 'マヒドン大学', EN: 'Mahidol University' }, 
          type: { JP: '共同研究', EN: 'Joint Research' }, 
          description: { 
            JP: 'タイを代表する研究大学と共同で、家畜飼料における生物的防除剤（BCA）の革新的な応用研究を実施しています。畜産分野における成長促進と疾病耐性向上を目的とした実証実験を進めており、東南アジア地域の畜産業の持続可能な発展に貢献しています。', 
            EN: 'In collaboration with Thailand\'s leading research university, we are conducting innovative applied research on biological control agents (BCA) in livestock feed. We are proceeding with demonstration experiments aimed at promoting growth and improving disease resistance in the livestock sector, contributing to the sustainable development of the livestock industry in Southeast Asia.' 
          }, 
          logo: '/images/mahidol_logo.png' 
        },
        { 
          name: { JP: '明治大学', EN: 'Meiji University' }, 
          type: { JP: 'スポンサーシップ協力', EN: 'Sponsorship Cooperation' }, 
          description: { 
            JP: '体育会競技者に対してMother Vegetable関連製品を提供するスポンサーシップ協力により、持続可能な栄養ソリューションを通じたスポーツパフォーマンスの支援を実施しています。', 
            EN: 'Through sponsorship cooperation providing Mother Vegetable related products to athletic association competitors, we are implementing support for sports performance through sustainable nutrition solutions.' 
          }, 
          logo: '/images/meiji_logo.png' 
        }
      ]
    },
    {
      id: 'jichitai',
      title: { JP: '行政・地方自治体', EN: 'Administration & Local Governments' },
      isOpen: false,
      partners: [
        {
          name: { JP: '食品産業・商品・地域開発省（M-FICoRD）サラワク州', EN: 'Ministry of Food Industry, Commodity and Regional Development (M-FICoRD) Sarawak' },
          type: { JP: '政府機関', EN: 'Government Agency' },
          description: {
            JP: '包括的な技術分析提案：サラワク州パダンアイ貯水池におけるテイラピア育成システム。地域の水資源を活用した持続可能な養殖モデルの確立と地域経済の活性化を目指しています。',
            EN: 'Comprehensive technical analysis proposal: Tilapia farming system at Padang Ai Reservoir in Sarawak. Aiming to establish sustainable aquaculture models utilizing regional water resources and revitalize the local economy.'
          },
          logo: '/m-ficord.jpeg'
        },
        {
          name: { JP: '河津町（日本）', EN: 'Kawazu Town (Japan)' },
          type: { JP: '地方自治体', EN: 'Local Government' },
          description: {
            JP: '日本におけるMother Vegetableを核とした包括的な事業提携による海洋産業の振興。',
            EN: 'Promotion of marine industry through comprehensive business partnerships centered on Mother Vegetable in Japan.'
          },
          logo: '/kawazu-town.jpeg'
        },
        {
          name: { JP: '静岡県（日本）', EN: 'Shizuoka Prefecture (Japan)' },
          type: { JP: '都道府県', EN: 'Prefecture' },
          description: {
            JP: '海洋産業発展および持続可能技術実装のための包括的な県レベル支援システムを提供しています。',
            EN: 'Providing comprehensive prefectural-level support systems for marine industry development and sustainable technology implementation.'
          },
          logo: '/shizuoka-prefecture.jpeg'
        },
        {
          name: { JP: '東京都板橋区（日本）', EN: 'Itabashi Ward, Tokyo (Japan)' },
          type: { JP: '特別区', EN: 'Special Ward' },
          description: {
            JP: '海洋産業発展および持続可能技術実装のための包括的な県レベル支援システムを提供しています。',
            EN: 'Providing comprehensive ward-level support systems for marine industry development and sustainable technology implementation.'
          },
          logo: '/itabashi-ward.jpeg'
        }
      ]
    },{
      id: 'other',
      title: { JP: '国際機関', EN: 'International Organizations' },
      isOpen: false,
      partners: [
        {
          name: { JP: '東アジア経済研究所（ERIA）', EN: 'Economic Research Institute for ASEAN and East Asia (ERIA)' },
          type: { JP: '研究機関', EN: 'Research Institution' },
          description: {
            JP: 'ASEAN持続可能農業に関する地域ガイドライン実施のための実践的行動計画および持続可能な農業食料システムに関する予備調査研究において協力しています。',
            EN: 'Collaborating on practical action plans for implementing regional guidelines on ASEAN sustainable agriculture and preliminary research on sustainable agri-food systems.'
          },
          logo: '/eria.jpeg'
        },
        {
          name: { JP: '日本-ASEAN統合基金', EN: 'Japan-ASEAN Integration Fund' },
          type: { JP: '国際基金', EN: 'International Fund' },
          description: {
            JP: '水産養殖および畜産セクターにおける抗菌剤耐性（AMR）対策としての生物的防除剤（BCA）応用に関する実証プロジェクトへの支援を提供しています。',
            EN: 'Providing support for demonstration projects on the application of biological control agents (BCA) as countermeasures against antimicrobial resistance (AMR) in aquaculture and livestock sectors.'
          },
          logo: '/jaif.jpeg'
        }
      ]
    },{
      id: 'other2',
      title: { JP: 'その他の提携組織・プロジェクト', EN: 'Other Partner Organizations & Projects' },
      isOpen: false,
      partners: [
        {
          name: { JP: 'Revoganix（レヴォガニクス）', EN: 'Revoganix' },
          type: { JP: 'ASEANパネル企業', EN: 'ASEAN Panel Company' },
          description: {
            JP: 'ASEANパネル企業として認められており、ASEAN持続可能な農業・水産養殖アカデミーの設立や地域のBCA（生物的防除剤）生産イニシアチブなど、ASEANから直接授与された複数の影響力の大きいプロジェクトを任されています。ASEAN以外では、Revoganixはサラワク州のコンサルタントを務め、タイ中央政府の水産養殖セクターと緊密に協力するなど、他の戦略的関与も行っています。この実績のある実績により、RevoganixはMother VegetableプロジェクトでASEANを支援し、提携できることを誇りに思い、地域全体のコミュニティに利益をもたらす農業と水産養殖のための堅牢で持続可能なモデルを構築するために、その専門知識とリーダーシップを貢献しています。',
            EN: 'Recognized as an ASEAN panel company, entrusted with multiple high-impact projects directly awarded by ASEAN, including establishing the ASEAN Sustainable Agriculture and Aquaculture Academy and regional BCA production initiatives. Beyond ASEAN, Revoganix serves as a consultant to Sarawak State and works closely with Thailand\'s central government aquaculture sector. With this proven track record, Revoganix is proud to support and partner with ASEAN in the Mother Vegetable project, contributing its expertise and leadership to build robust and sustainable models for agriculture and aquaculture that benefit communities across the region.'
          },
          logo: '/revoganix.jpeg'
        },
        {
          name: { JP: 'バイオエコノミーコーポレーション', EN: 'Bioeconomy Corporation' },
          type: { JP: 'プロジェクトパートナー', EN: 'Project Partner' },
          description: {
            JP: '農業廃棄物をクリーンな食品に変えるプロジェクトエンゲージメント。持続可能なバイオエコノミーの推進と廃棄物の有効活用を通じた循環型経済の実現に取り組んでいます。',
            EN: 'Project engagement in transforming agricultural waste into clean food. Working towards realizing a circular economy through promoting sustainable bioeconomy and effective utilization of waste.'
          },
          logo: '/bioeconomy.jpeg'
        },
        {
          name: { JP: 'テマセクポリテクニック・水産養殖イノベーションセンター', EN: 'Temasek Polytechnic Aquaculture Innovation Centre' },
          type: { JP: '研究機関', EN: 'Research Institution' },
          description: {
            JP: 'ティラピア飼料における生物的防除剤（BCA）の革新的な応用：オープンポンドタンク水産養殖における成長と耐病性の向上。最新の養殖技術と天然由来の防除剤を組み合わせた革新的な養殖システムの開発を推進しています。',
            EN: 'Innovative application of biological control agents (BCA) in tilapia feed: Enhancing growth and disease resistance in open pond tank aquaculture. Promoting the development of innovative aquaculture systems combining cutting-edge farming technology with naturally-derived control agents.'
          },
          logo: '/temasek.jpeg'
        },
        {
          name: { JP: 'Cropabl（マレーシア）', EN: 'Cropabl (Malaysia)' },
          type: { JP: 'グリーンファーミングパートナー', EN: 'Green Farming Partner' },
          description: {
            JP: '20年以上にわたって非侵襲的かつ無化学物質の農業に取り組んできたパイオニア的企業であり、食料安全保障と持続可能な農業実践を推進するために政府機関との強力なパートナーシップを築いてきました。確立されたグリーンファーミング技術を活用し、現在はマレーシアのMOTHER VEGETABLEを支援し、モジュール型農業ソリューションの開発に協力しています。この取り組みの一環として、MOTHER VEGETABLEと緊密に連携し、ペラ州タンジョン・マリムにおいて10エーカー規模の旗艦プロジェクトを実施し、食料安全保障と環境保全に関する国家目標に沿った持続可能な食料生産のモデルを創出します',
            EN: 'A pioneering company with over 20 years of commitment to non-invasive and chemical-free farming, building strong partnerships with government agencies to promote food security and sustainable agricultural practices. Leveraging established green farming technology, now supporting Malaysia\'s MOTHER VEGETABLE and collaborating on modular agricultural solutions development. As part of this initiative, working closely with MOTHER VEGETABLE to implement a 10-acre flagship project in Tanjung Malim, Perak, creating a sustainable food production model aligned with national goals for food security and environmental conservation.'
          },
          logo: '/cropabl.jpeg'
        },
        {
          name: { JP: 'Sabah Invest', EN: 'Sabah Invest' },
          type: { JP: '投資機関', EN: 'Investment Agency' },
          description: {
            JP: 'サバ州政府とのパートナーシップのもとでMOTHER VEGETABLEプロジェクトの実施を強力に支援する意向を示しています。この取り組みは、輸入食品への依存度が高いサバを、自給自足が可能で輸出余剰を生み出せる州へと変革することを目指しています。MOTHER VEGETABLEの先進的な持続可能農業技術を採用することで、このプロジェクトは食料安全保障を強化し、外部のサプライチェーンへの依存を減らし、サバを農業・食品生産の地域的リーダーへと押し上げます。この変革は、地域のレジリエンスを高めるだけでなく、輸出市場の開拓を通じて新たな経済的機会を創出し、州の長期的な繁栄と持続可能性に貢献します。',
            EN: 'Expressing strong intention to support the implementation of the MOTHER VEGETABLE project in partnership with the Sabah State Government. This initiative aims to transform Sabah from high dependency on imported food to a self-sufficient state capable of generating export surplus. By adopting MOTHER VEGETABLE\' advanced sustainable farming technology, this project will strengthen food security, reduce dependence on external supply chains, and position Sabah as a regional leader in agriculture and food production. This transformation will not only enhance local resilience but also create new economic opportunities through export market development, contributing to the state\'s long-term prosperity and sustainability.'
          },
          logo: '/sabah-invest.jpeg'
        },
        {
          name: { JP: 'Healcom Foundation', EN: 'Healcom Foundation' },
          type: { JP: '財団', EN: 'Foundation' },
          description: {
            JP: 'MOTHER VEGETABLEの取り組みに賛同し、地域社会に最高品質で健康的かつ持続可能に栽培された食品を届ける可能性を高く評価しています。財団はその広範な会員ネットワークを通じて、認知度向上の推進、生産活動の支援、販売チャネルの強化に積極的に関与します。MOTHER VEGETABLEと提携することで、Healcom Foundationは公衆衛生と栄養改善という自身の使命を推進するだけでなく、地域産の無化学食品の持続可能な市場を創出し、消費者と地域社会全体に利益をもたらします。',
            EN: 'Supporting the MOTHER VEGETABLE initiative and highly valuing its potential to deliver the highest quality, healthy, and sustainably grown food to local communities. Through its extensive member network, the foundation actively engages in raising awareness, supporting production activities, and strengthening sales channels. By partnering with MOTHER VEGETABLE, Healcom Foundation not only advances its own mission of public health and nutrition improvement but also creates a sustainable market for locally-produced chemical-free food, benefiting consumers and communities as a whole.'
          },
          logo: '/healcom.jpeg'
        },
        {
          name: { JP: '黒井漁業協同組合', EN: 'Kuroi Fishery Cooperative' },
          type: { JP: '漁業協同組合', EN: 'Fishery Cooperative' },
          description: {
            JP: '日本の下関市に位置する漁協組合：磯焼けによる空ウニの大量発生や養殖に対して課題を持っており、MOTHER VEGETABLEを活用することで局所的な磯焼け解決や効率的な養殖を進めている。',
            EN: 'Fishery cooperative located in Shimonoseki City, Japan: Facing challenges with mass occurrence of empty sea urchins due to rocky shore denudation and aquaculture, advancing local rocky shore denudation solutions and efficient aquaculture using MOTHER VEGETABLE.'
          },
          logo: '/kuroi-fishery-DSW6ddl8.jpeg'
        },
        {
          name: { JP: '日本PTA', EN: 'Japan PTA' },
          type: { JP: '教育団体', EN: 'Educational Organization' },
          description: {
            JP: '日本では、小学生の保護者600万人がPTAに登録されています。保護者と教師の会プロジェクト：全国の選ばれた小学校でオリンピック選手とのイベントを開催し、子供たちがマザーベジタブルを体験し、栄養について学びます。これらのプログラムは、将来の研究者を育成し、学校給食の基準の改善を促すため、PTAから高く評価されています。',
            EN: 'In Japan, 6 million parents of elementary school students are registered with the PTA. Parent-Teacher Association Project: Hosting events with Olympic athletes at selected elementary schools nationwide, where children experience Mother Vegetable and learn about nutrition. These programs are highly valued by the PTA for nurturing future researchers and promoting improvements in school meal standards.'
          },
          logo: '/pta.jpeg'
        },
        {
          name: { JP: 'LEON', EN: 'LEON' },
          type: { JP: 'メディア・不動産', EN: 'Media & Real Estate' },
          description: {
            JP: 'アパレル雑誌LEONの不動産部門：20年以上の歴史を持つ日本の紳士向けアパレル雑誌で、40代から50代の富裕層をターゲットとし、月間約1,000万ページビューを誇ります。プロジェクト：彼らは日本全国に高級宿泊施設を建設する計画で、そこには家族がマザーベジタブルを体験し、地元の収穫物で作られた食事を楽しめるMother Vegetable施設が併設されます。',
            EN: 'Real estate division of apparel magazine LEON: A Japanese men\'s apparel magazine with over 20 years of history, targeting affluent individuals in their 40s and 50s, boasting approximately 10 million monthly page views. Project: They plan to build luxury accommodation facilities across Japan, featuring Mother Vegetable facilities where families can experience Mother Vegetable and enjoy meals made with local harvests.'
          },
          logo: '/leon.jpeg'
        },
        {
          name: { JP: '九州電工', EN: 'Kyushu Denko' },
          type: { JP: '電力会社', EN: 'Power Company' },
          description: {
            JP: '日本の大手電力会社：藻場（海藻の群落）を造成することで、魚貝類の住処としての機能や水質浄化、さらにはCO₂固定機能を活かした藻場再生の実用化研究に2001年度から取り組んでいます。MOTHER VEGETABLEを活用したバイオマスにより生産性の向上を検討している。',
            EN: 'Major Japanese power company: Since 2001, engaged in practical research on seaweed bed restoration utilizing functions as habitat for fish and shellfish, water purification, and CO₂ fixation through creating seaweed beds. Exploring productivity improvements through biomass utilizing MOTHER VEGETABLE.'
          },
          logo: '/Kyushudenko.jpeg'
        },
        {
          name: { JP: '全国姉妹漁業振興協議会株式会社', EN: 'National Sister Fisheries Promotion Council Inc.' },
          type: { JP: '漁業振興', EN: 'Fisheries Promotion' },
          description: {
            JP: '河津町との連携による海洋事業開発とMother Vegetable事業の推進。全国の漁業組合の連絡窓口を実施。',
            EN: 'Promoting marine business development and Mother Vegetable business through collaboration with Kawazu Town. Implementing communication channels for fishery associations nationwide.'
          },
          logo: '/sfc.jpeg'
        }
      ]
    }
  ];

  const [categories, setCategories] = useState(partnerCategories);

  const toggleCategory = (id: string) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, isOpen: !cat.isOpen } : cat
    ));
  };

  return (
    <section id="partners" className="py-24 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            {t({ JP: 'パートナーシップ', EN: 'Partnership' })}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t({
              JP: '私たちは、政府、国際機関、研究機関との強力なパートナーシップを通じて、持続可能な未来の実現に取り組んでいます。',
              EN: 'We are committed to realizing a sustainable future through strong partnerships with governments, international organizations, and research institutions.'
            })}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {categories.map((category) => (
            <div key={category.id} className="overflow-hidden">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-center gap-4 p-4 text-center hover:opacity-80 transition-opacity mb-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#3b82f6]">
                  {t(category.title)}
                </h3>
                {category.isOpen ? (
                  <ChevronUp className="w-6 h-6 text-[#3b82f6]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              <div 
                className={cn(
                  "transition-all duration-500 ease-in-out overflow-hidden",
                  category.isOpen ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {category.partners.map((partner, index) => (
                    <div 
                      key={index}
                      className="bg-[#0f172a] border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center hover:border-[#3b82f6]/50 transition-colors h-full"
                    >
                      <div className="w-32 h-32 mb-6 bg-white rounded-xl flex items-center justify-center p-4 shadow-lg">
                        {partner.logo ? (
                          <img src={partner.logo} alt={t(partner.name)} className="w-full h-full object-contain" />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-gray-200"></div>
                        )}
                      </div>
                      
                      <h4 className="text-white font-bold text-lg mb-2">{t(partner.name)}</h4>
                      <p className="text-[#3b82f6] text-sm font-medium mb-6">{t(partner.type)}</p>
                      
                      {partner.description.JP && (
                        <p className="text-gray-400 text-sm leading-relaxed text-justify">
                          {t(partner.description)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
