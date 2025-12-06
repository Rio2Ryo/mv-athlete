import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { useState, useEffect } from "react";

// Mock data for athletes (replacing the team members from the reference)
const athletes = [
  {
    name: "Alex Johnson",
    sport: "Triathlon",
    title: "Professional Triathlete",
    description: "Using Mother Vegetable products to maintain peak endurance and recovery during 30-hour training weeks. The continuous nutrient supply has eliminated my mid-season fatigue.",
    image: "/images/athlete-1.jpg",
    achievement: "Ironman World Championship Qualifier"
  },
  {
    name: "Sarah Williams",
    sport: "Swimming",
    title: "Olympic Swimmer",
    description: "Gut health is critical for swimmers. Since starting the Achieve program, my immunity has improved significantly, allowing me to train through the winter without illness.",
    image: "/images/athlete-2.jpg",
    achievement: "Gold Medalist, National Championships"
  },
  {
    name: "Michael Chen",
    sport: "Track & Field",
    title: "Sprinter",
    description: "The anti-inflammatory properties of the 48 nutrients help my muscles recover faster after explosive sprint sessions. I'm back on the track sooner than my competitors.",
    image: "/images/athlete-3.jpg",
    achievement: "Asian Games Finalist"
  },
  {
    name: "Elena Rodriguez",
    sport: "Tennis",
    title: "Pro Tennis Player",
    description: "Travel and stress used to wreck my digestion. Mother Vegetable restored my balance, and the MVP Coin sponsorship gives me the financial freedom to focus on my game.",
    image: "/images/athlete-4.jpg",
    achievement: "Top 100 WTA Ranking"
  },
  {
    name: "David Kim",
    sport: "Soccer",
    title: "Midfielder",
    description: "Establishing a Small Earth Factory in my hometown was a dream come true. I'm building a legacy for my community while fueling my career on the field.",
    image: "/images/athlete-5.jpg",
    achievement: "League MVP 2024"
  },
  {
    name: "Jessica Lee",
    sport: "Gymnastics",
    title: "Elite Gymnast",
    description: "Precision and focus are everything. The nutrient density of Mother Vegetable supports my mental clarity and physical stability during complex routines.",
    image: "/images/athlete-6.jpg",
    achievement: "World Cup Silver Medalist"
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#4ade80] selection:text-black">
      
      {/* Header - Mimicking the reference site */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo-green.png" alt="Logo" className="h-10 w-10" onError={(e) => e.currentTarget.src = "https://placehold.co/40x40/00FF41/000000?text=MV"} />
            <span className="font-bold text-xl tracking-wider text-white">MOTHER VEGETABLE</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-[#4ade80] transition-colors uppercase tracking-widest">About</a>
            <a href="#athletes" className="text-sm font-medium hover:text-[#4ade80] transition-colors uppercase tracking-widest">Athletes</a>
            <a href="#support" className="text-sm font-medium hover:text-[#4ade80] transition-colors uppercase tracking-widest">Support</a>
            <Button className="bg-[#4ade80] text-black hover:bg-[#22c55e] font-bold rounded-full px-6">
              JOIN US
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Exact replica of reference site structure */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-earth.png" 
            alt="Earth Regeneration" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 pt-20">
          <div className="mb-12">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img
                src="/images/logo-green.png"
                alt="Mother Vegetable Logo"
                className="w-32 h-32 md:w-40 md:h-40"
                onError={(e) => e.currentTarget.src = "https://placehold.co/160x160/00FF41/000000?text=MV"}
              />
            </div>

            <div className="inline-block">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#4ade80] via-[#22c55e] to-[#16a34a] drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
                MOTHER VEGETABLE<br/>ATHLETE FOUNDATION
              </h1>
            </div>

            <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-8 opacity-80"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-12 mt-16 px-4 space-y-4">
            <p className="text-lg md:text-2xl text-[#4ade80] leading-relaxed font-light">
              The vegetable from 3.5 billion years ago
            </p>
            <p className="text-2xl md:text-3xl text-[#4ade80] leading-relaxed font-medium">
              "Mother Vegetable"
            </p>
            <p className="text-lg md:text-2xl text-[#4ade80] leading-relaxed font-light">
              Earth's life force, for athletes.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section id="about" className="py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Two Only Ones
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              The MOTHER VEGETABLE ATHLETE FOUNDATION is the world's only project that aims to restore the Earth and all life, centered around two one-of-a-kind businesses.
            </p>
            <p className="text-gray-400 leading-relaxed">
              In this process, each facility purifies the atmosphere by absorbing CO2 and generating oxygen 24 hours a day, 365 days a year, while simultaneously contributing to improving the health of athletes through Mother Vegetable products and sustainable financial support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 p-10 rounded-2xl hover:border-[#4ade80]/50 transition-all duration-300">
              <div className="text-[#4ade80] text-6xl font-bold mb-6 opacity-20">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mother Vegetable Nutrition</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Food derived from a single life form that provides all 48 nutrients essential for humanity. Optimized for athlete recovery, gut health, and continuous performance.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-[#4ade80]" /> 48 Essential Nutrients</li>
                <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-[#4ade80]" /> Gut Health Optimization</li>
                <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-[#4ade80]" /> Continuous Recovery</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 p-10 rounded-2xl hover:border-[#4ade80]/50 transition-all duration-300">
              <div className="text-[#4ade80] text-6xl font-bold mb-6 opacity-20">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Small Earth Factory (SEF)</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Recreating a small Earth through CO2 absorption (700 times that of natural cedar). Revenue from carbon credits and product sales supports the athlete's career.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-[#4ade80]" /> Financial Sponsorship</li>
                <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-[#4ade80]" /> Factory Ownership</li>
                <li className="flex items-center gap-2"><Leaf className="h-4 w-4 text-[#4ade80]" /> Community Legacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Athletes Section - Replacing Team Members */}
      <section id="athletes" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Supported Athletes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Elite performers who have joined the Mother Vegetable ecosystem to power their bodies and secure their future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {athletes.map((athlete, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl overflow-hidden hover:border-[#4ade80]/50 transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => e.currentTarget.src = `https://placehold.co/600x400/111111/FFFFFF?text=${athlete.name.split(' ')[0]}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{athlete.name}</h3>
                    <p className="text-[#4ade80] font-medium">{athlete.title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] text-xs font-bold uppercase tracking-wider">
                    {athlete.sport}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    "{athlete.description}"
                  </p>
                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Achievement</p>
                    <p className="text-white font-medium">{athlete.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support / CTA Section */}
      <section id="support" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#4ade80]/5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Join the Foundation
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We offer professional nutrition, financial sponsorship through MVP Coin, and the opportunity to establish a Small Earth Factory in your hometown.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-[#4ade80] text-black hover:bg-[#22c55e] font-bold text-lg px-10 py-6 rounded-full shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] transition-all">
              Apply for Sponsorship
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg px-10 py-6 rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Exact replica */}
      <footer className="bg-black border-t border-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/logo-green.png" alt="Logo" className="h-8 w-8" onError={(e) => e.currentTarget.src = "https://placehold.co/32x32/00FF41/000000?text=MV"} />
              <span className="font-bold text-lg tracking-wider text-white">MOTHER VEGETABLE</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm mb-8">
              <span>Japan</span>
              <span>South Korea</span>
              <span>Hong Kong</span>
              <span>Malaysia</span>
              <span>Singapore</span>
              <span>Indonesia</span>
              <span>Thailand</span>
              <span>USA</span>
              <span>Brazil</span>
              <span>Peru</span>
            </div>
            
            <div className="flex gap-8 text-gray-400 text-sm">
              <a href="#" className="hover:text-[#4ade80] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#4ade80] transition-colors">Terms and Conditions</a>
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-xs">
            © 2025 MOTHER VEGETABLE PROJECT. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
