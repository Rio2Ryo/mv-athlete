import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      
      {/* Navigation - Mimicking the reference site's minimal top right nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-6 px-8">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-primary mb-1">
              <Leaf className="h-8 w-8" />
              <span className="font-bold text-xl tracking-wider">MOTHER<br/>VEGETABLE</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-primary hover:bg-transparent font-normal text-sm uppercase tracking-widest border border-transparent hover:border-primary rounded-none px-6 py-2 transition-all">
              Products
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary hover:bg-transparent font-normal text-sm uppercase tracking-widest border border-white hover:border-primary rounded-none px-4 py-2 transition-all">
              EN
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Exact replica of reference site structure */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Earth - Centered and large */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[80vh] h-[80vh] md:w-[90vh] md:h-[90vh] max-w-[1000px] max-h-[1000px] opacity-100">
            <img 
              src="/images/hero-earth.png" 
              alt="Mother Earth" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Center Logo Overlay */}
        <div className="absolute z-10 flex flex-col items-center justify-center">
          <Leaf className="h-24 w-24 md:h-32 md:w-32 text-primary mb-8 drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]" />
        </div>

        {/* Main Title - Centered over Earth */}
        <div className="absolute z-20 w-full text-center top-1/2 pt-24 md:pt-32 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight uppercase drop-shadow-lg">
            MOTHER VEGETABLE<br/>ATHLETE FOUNDATION
          </h1>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-12 z-20 text-center w-full px-4">
          <p className="text-primary/80 text-lg md:text-xl mb-2 tracking-wide">
            The vegetable from 3.5 billion years ago
          </p>
          <p className="text-white text-2xl md:text-3xl font-light tracking-wider">
            "Mother Vegetable"
          </p>
          <p className="text-gray-400 text-sm mt-4 tracking-widest uppercase">
            Earth's life force, for athletes.
          </p>
        </div>
      </section>

      {/* Two Only Ones Section - Mimicking the reference layout */}
      <section className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide">
            Two Only Ones
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-light">
            The <span className="text-primary font-normal">MOTHER VEGETABLE ATHLETE FOUNDATION</span> is<br/>
            the world's only project that aims to empower athletes and restore the Earth,<br/>
            centered around two one-of-a-kind support systems.
          </p>
          
          <p className="text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto">
            In this process, each facility purifies the atmosphere by absorbing CO2
            and generating oxygen 24 hours a day, 365 days a year,
            while simultaneously contributing to improving the health of athletes
            through Mother Vegetable products and sustainable financial support.
          </p>
          
          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Furthermore, by expanding these facilities around the world,
            it will develop into a global network of athlete-entrepreneurs.
          </p>
        </div>
      </section>

      {/* Section I: Mother Vegetable (Nutrition) */}
      <section className="py-24 bg-black border-t border-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-bold text-gray-800 mb-4">I</h3>
              <h4 className="text-3xl font-bold text-primary mb-6">Mother Vegetable<br/>Nutrition</h4>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 mb-8 leading-relaxed">
                By researching the evolutionary journey of Mother Vegetable, Earth's first vegetable, 
                we offer a professional-grade solution for athletes:
              </p>
              
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <h5 className="text-xl font-bold text-white mb-2">① Achieve (Professional)</h5>
                  <p className="text-gray-400">
                    Food derived from a single life form that provides all 48 nutrients essential for humanity.
                    Optimized for athlete recovery, gut health, and continuous performance.
                  </p>
                </div>
                
                <div className="border-l-2 border-gray-700 pl-6">
                  <h5 className="text-xl font-bold text-white mb-2">② Continuous Performance</h5>
                  <p className="text-gray-400">
                    Supports a healthy gut and immune system, ensuring athletes never miss a training session due to illness or fatigue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section II: Small Earth Factory (Support) */}
      <section className="py-24 bg-black border-t border-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h3 className="text-6xl font-bold text-gray-800 mb-4">II</h3>
              <h4 className="text-3xl font-bold text-primary mb-6">Small Earth Factory<br/>(SEF)</h4>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 mb-8 leading-relaxed">
                A revolutionary support system that allows athletes to build sustainable wealth while healing the planet:
              </p>
              
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <h5 className="text-xl font-bold text-white mb-2">① Financial Support</h5>
                  <p className="text-gray-400">
                    Athletes receive support through MVP Coin and profit sharing from Small Earth Factories established in their hometowns.
                  </p>
                </div>
                
                <div className="border-l-2 border-gray-700 pl-6">
                  <h5 className="text-xl font-bold text-white mb-2">② CO2 Offset Revenue</h5>
                  <p className="text-gray-400">
                    Recreating a small Earth through CO2 absorption (700 times that of natural cedar).
                    Revenue from carbon credits (~$72,240/year) supports the athlete's career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athlete Benefits Grid - Mimicking the "8 Industry Approaches" section */}
      <section className="py-24 bg-black border-t border-gray-900">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Athlete Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💪",
                title: "Continuous Training",
                subtitle: "Never Miss a Day",
                desc: "Improved gut health and immunity means consistent training without interruption."
              },
              {
                icon: "⚡",
                title: "Efficient Recovery",
                subtitle: "48 Essential Nutrients",
                desc: "Complete nutrition reduces inflammation and speeds up recovery between sessions."
              },
              {
                icon: "💰",
                title: "Financial Freedom",
                subtitle: "MVP Coin Support",
                desc: "Direct sponsorship and cryptocurrency allocation to fund your athletic journey."
              },
              {
                icon: "🏭",
                title: "Future Security",
                subtitle: "Factory Ownership",
                desc: "Establish a Small Earth Factory in your hometown for long-term sustainable income."
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 hover:bg-gray-900/30 transition-colors rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-primary text-sm font-bold uppercase tracking-widest mb-2">{i + 1}. {item.title}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.subtitle}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Minimalist style */}
      <section className="py-32 bg-black border-t border-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Join the Foundation</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            We are looking for athletes who want to perform at their peak and build a sustainable future.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-12 py-6 rounded-none uppercase tracking-widest">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-12 py-6 rounded-none uppercase tracking-widest">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Exact replica */}
      <footer className="bg-black border-t border-gray-900 py-12 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <p className="text-primary font-bold text-lg mb-4">Mother Vegetable Group</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
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
          </div>
          
          <div className="text-gray-600 text-xs uppercase tracking-widest">
            <span className="mx-2">Privacy Policy</span> | <span className="mx-2">Terms and Conditions</span>
          </div>
          
          <p className="text-gray-600 text-xs mt-6">
            © 2025 MOTHER VEGETABLE PROJECT. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
