import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Leaf, Zap, Globe, Activity, HeartPulse, Users, Factory, Coins } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-display font-bold text-xl tracking-wider text-white">
              MOTHER<span className="text-primary">VEGETABLE</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-tech text-lg tracking-wide">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
            <a href="#support" className="hover:text-primary transition-colors">Support</a>
            <a href="#factory" className="hover:text-primary transition-colors">Factory</a>
            <Button variant="default" className="bg-primary text-black hover:bg-primary/90 font-bold">
              Join Foundation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Earth */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] max-w-[1200px] max-h-[1200px] animate-spin-slow opacity-80">
            <img 
              src="/images/hero-earth.png" 
              alt="Mother Earth" 
              className="w-full h-full object-contain drop-shadow-[0_0_100px_rgba(57,255,20,0.3)]"
            />
          </div>
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/30 via-transparent to-background"></div>

        {/* Content */}
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-tech tracking-widest text-sm font-bold uppercase">The Future of Athlete Nutrition</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-lg">
              MOTHER VEGETABLE<br />
              <span className="text-primary drop-shadow-[0_0_30px_rgba(57,255,20,0.6)]">ATHLETE FOUNDATION</span>
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Empowering athletes through 3.5 billion years of nature's wisdom, 
              sustainable financial support, and entrepreneurial growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] transition-all">
                Become a Supported Athlete
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                Explore Our Mission
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Mother Vegetable */}
      <section id="about" className="py-24 relative bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                <span className="text-primary">3.5 Billion Years</span><br />
                Of Evolution
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We cultivate "Mother Vegetable," the Earth's first plant life form. 
                Grown in our advanced climate-controlled factories, it generates oxygen 
                and absorbs CO2 24 hours a day, 365 days a year.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-display font-bold text-primary mb-1">700x</div>
                  <div className="text-sm text-gray-400">CO2 Reduction vs Natural Cedar</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-display font-bold text-primary mb-1">48</div>
                  <div className="text-sm text-gray-400">Essential Nutrients</div>
                </div>
              </div>
              <ul className="space-y-3">
                {["Amino Acids & Vitamins", "Minerals & Omega-3/6", "Phycocyanin & Chlorophyll", "Complete Protein Source"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="text-primary h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <img 
                src="/images/nutrient-structure.png" 
                alt="Nutrient Structure" 
                className="relative z-10 w-full rounded-3xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Athlete Benefits */}
      <section id="benefits" className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Why Athletes Need This</h2>
            <p className="text-xl text-gray-300">
              It's not just about muscle. It's about the foundation of your health that allows you to train consistently without interruption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="h-10 w-10 text-primary" />,
                title: "Continuous Training",
                desc: "Improved gut health and immunity means fewer sick days and missed training sessions. Consistency is the key to performance."
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Efficient Recovery",
                desc: "48 essential nutrients work together to reduce inflammation and speed up recovery between intense workouts."
              },
              {
                icon: <HeartPulse className="h-10 w-10 text-primary" />,
                title: "Holistic Health",
                desc: "We don't just target muscles. We optimize your entire biological system, from cellular regeneration to sleep quality."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="bg-card/50 border-white/10 backdrop-blur-md hover:border-primary/50 transition-all duration-300 h-full group">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support System */}
      <section id="support" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pillar 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-card border border-white/10 rounded-3xl p-10 h-full overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Leaf className="h-40 w-40" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-2 text-primary">Pillar 01</h3>
                <h4 className="font-display text-4xl font-bold mb-6">Professional Nutrition</h4>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Receive a continuous supply of our professional-grade "Achieve" product. 
                  Designed specifically for athletes to ensure you never run out of the fuel your body needs.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Medical-grade quality assurance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Tailored for high-performance needs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Full sponsorship of nutritional needs</span>
                  </li>
                </ul>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black w-full">
                  Learn About Achieve
                </Button>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-card border border-white/10 rounded-3xl p-10 h-full overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Coins className="h-40 w-40" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-2 text-blue-400">Pillar 02</h3>
                <h4 className="font-display text-4xl font-bold mb-6">Financial Support Ecosystem</h4>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  We don't just give you money; we give you a business. 
                  Through MVP Coin and the Small Earth Factory initiative, you can build sustainable wealth.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span>MVP Coin sponsorship allocation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span>Establish a factory in your hometown</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span>Profit sharing from factory revenue</span>
                  </li>
                </ul>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black w-full">
                  Explore Financial Model
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Earth Factory */}
      <section id="factory" className="py-24 relative bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/images/factory-interior.png" alt="Factory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Small Earth Factory</h2>
            <p className="text-xl text-gray-300">
              Build a legacy in your community. A sustainable business that heals the planet while supporting your athletic career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md">
              <Globe className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold mb-2">Environmental Impact</h3>
              <p className="text-gray-400">Absorbs 2,800 tons of CO2 per year. Equivalent to a forest 700x its size.</p>
            </div>
            <div className="p-8 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md">
              <Factory className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold mb-2">Local Economy</h3>
              <p className="text-gray-400">Create jobs and sustainable industry in your hometown or region.</p>
            </div>
            <div className="p-8 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md">
              <Coins className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="font-display text-2xl font-bold mb-2">Revenue Stream</h3>
              <p className="text-gray-400">Earn from carbon credits (~$72k/year) and product sales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Ready to Join the Movement?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We are looking for athletes who want to perform at their peak and build a sustainable future for themselves and the planet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-xl px-12 py-8 rounded-full shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:shadow-[0_0_50px_rgba(57,255,20,0.7)] transition-all w-full sm:w-auto">
              Apply for Sponsorship
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold text-xl px-12 py-8 rounded-full w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="font-display font-bold text-xl tracking-wider text-white">
                  MOTHER<span className="text-primary">VEGETABLE</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-md">
                The world's only project that aims to restore the Earth and all life, centered around two one-of-a-kind businesses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Foundation</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Athletes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Small Earth Factory</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">MVP Coin</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Connect</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Apply Now</a></li>
                <li><a href="https://mothervegetable.org" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">Main Website <ArrowRight className="h-4 w-4" /></a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© 2025 MOTHER VEGETABLE PROJECT. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
