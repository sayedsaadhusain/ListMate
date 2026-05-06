"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Star, TrendingUp, Users, Target, Rocket, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const caseStudies = [
  {
    name: "Biryani Blues (Gomti Nagar)",
    before: "Unlisted on Swiggy, 12 Zomato orders/day",
    after: "Live on 4 platforms, 150+ orders/day",
    growth: "+1150%",
    image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=800&auto=format&fit=crop",
    quote: "Antigravity handled everything. I just focus on the food now."
  },
  {
    name: "The Awadhi Kitchen",
    before: "Poor menu photos, 3.2 rating",
    after: "Pro photoshoot, 4.6 rating",
    growth: "+320% Revenue",
    image: "https://images.unsplash.com/photo-1589187151003-073a72827682?q=80&w=800&auto=format&fit=crop",
    quote: "Their review management strategy literally saved our business reputation."
  },
  {
    name: "Burger King (Local Franchise)",
    before: "Ad spend wasted with zero ROI",
    after: "Optimized CPC, 8x ROAS",
    growth: "8x Ad Returns",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop",
    quote: "Finally, someone who understands how delivery app algorithms actually work."
  }
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-foreground relative overflow-hidden flex flex-col">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] opacity-30 mix-blend-screen"></div>
      </div>

      <header className="relative z-10 p-6 md:p-8">
        <div className="container mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="font-heading font-bold text-xl tracking-tight">Antigravity</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-32 px-4 md:pt-32 md:pb-48">
          <div className="container mx-auto text-center max-w-5xl">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold text-primary uppercase tracking-[0.2em] mb-10 shadow-[0_0_20px_rgba(255,92,0,0.1)]">
                The Proof of Growth
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.95]">
                Real Results for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-yellow-500">Real Kitchens.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal opacity-90">
                We don&apos;t just get you listed. We optimize your digital presence to ensure you stay at the top of the feed and the heart of the order list.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="pb-40 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Restaurants Live", value: "50+", icon: <Users className="h-6 w-6" /> },
                { label: "Orders Managed", value: "250K+", icon: <Target className="h-6 w-6" /> },
                { label: "Avg. Revenue Lift", value: "240%", icon: <TrendingUp className="h-6 w-6" /> },
                { label: "Success Rate", value: "100%", icon: <Star className="h-6 w-6" /> }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl text-center flex flex-col items-center"
                >
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-32 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">Deep dives into how we transformed local Lucknow favorites into delivery powerhouses.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {caseStudies.map((study, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex flex-col rounded-[2.5rem] overflow-hidden border border-white/10 bg-card/50 hover:border-primary/50 transition-all duration-500"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image 
                      src={study.image} 
                      alt={study.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest mb-3">
                        {study.growth} Growth
                      </div>
                      <h3 className="text-2xl font-bold text-white">{study.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="space-y-4 mb-8">
                      <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                        <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Before Antigravity</p>
                        <p className="text-sm font-medium opacity-80">{study.before}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
                        <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">After Antigravity</p>
                        <p className="text-sm font-medium opacity-80">{study.after}</p>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5 italic text-muted-foreground text-sm">
                      &quot;{study.quote}&quot;
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-16 rounded-[3rem] bg-gradient-to-br from-primary/20 to-orange-600/5 border border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Rocket className="h-32 w-32 rotate-45" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Be our next success story.</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Join 50+ Lucknow restaurants that have already taken the leap into hyperspace. 
              </p>
              <Link 
                href="/contact" 
                className={cn(buttonVariants({ size: "lg" }), "rounded-full h-16 px-12 text-lg font-bold shadow-2xl hover:shadow-primary/40 transition-all")}
              >
                Start Your Launch Sequence <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 p-12 text-center border-t border-white/5">
        <p className="text-sm text-muted-foreground font-medium opacity-60">© 2026 Antigravity. Built in Lucknow for the boldest kitchens.</p>
      </footer>
    </div>
  );
}
