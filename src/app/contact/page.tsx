"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Rocket, CheckCircle2, Phone, Building2, User, Mail, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-foreground relative overflow-hidden flex flex-col">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] opacity-50 mix-blend-screen"></div>
      </div>

      <header className="relative z-10 p-6 md:p-8">
        <div className="container mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Copy */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col items-start text-left"
          >
            <div className="bg-primary/10 p-3 rounded-2xl border border-primary/20 mb-6">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Ready to launch <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">your restaurant?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-md leading-relaxed">
              Fill out the form and our onboarding experts will reach out to get your kitchen listed on Swiggy, Zomato, and Blinkit in record time.
            </p>

            <div className="space-y-6">
              {[
                "Direct help with FSSAI & GST documentation",
                "Menu optimization for higher conversions",
                "Dedicated launch manager for your brand"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-orange-600/50 rounded-[2.5rem] blur opacity-25"></div>
            
            <div className="relative bg-[#12121A]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              {isSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-20 text-center flex flex-col items-center"
                >
                  <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Launch Sequence Initiated!</h2>
                  <p className="text-muted-foreground text-lg mb-8">We&apos;ve received your details. A launch manager will contact you within 24 hours.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                    Submit another request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-muted-foreground ml-1">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-muted-foreground ml-1">Restaurant Name</label>
                      <div className="relative group">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input 
                          required
                          type="text" 
                          placeholder="The Spicy Kitchen"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground ml-1">WhatsApp Number</label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground ml-1">Email Address (Optional)</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground ml-1">Anything else? (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us about your kitchen or current listing status..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full h-16 rounded-2xl text-lg font-bold shadow-[0_0_20px_rgba(255,92,0,0.3)] hover:shadow-[0_0_40px_rgba(255,92,0,0.5)] transition-all duration-300 group">
                    Lift Off Now <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground font-medium">
                    By clicking &quot;Lift Off Now&quot;, you agree to our Terms and Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="relative z-10 p-8 text-center border-t border-white/5">
        <p className="text-sm text-muted-foreground font-medium">© 2026 ListMate. Lucknow&apos;s Premier Onboarding Partner.</p>
      </footer>
    </div>
  );
}
