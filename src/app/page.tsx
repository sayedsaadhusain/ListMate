"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle2, Rocket, FileText, TrendingUp, Clock, Phone, ChevronRight, Star, Users, Zap, Shield, Plus, Minus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const InteractiveGrid = dynamic(() => import("@/components/interactive-bg").then(m => m.InteractiveGrid), { ssr: false });
const AmbientGlow = dynamic(() => import("@/components/interactive-bg").then(m => m.AmbientGlow), { ssr: false });
const AnimatedCounter = dynamic(() => import("@/components/animated-counter").then(m => m.AnimatedCounter), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const faqData = [
  {
    q: "How long does it take to get listed on Swiggy or Zomato?",
    a: "On average, 5-7 business days from the day you submit your documents. Some platforms approve in as little as 3 days if all documents are in order. We'll give you a realistic timeline during our initial consultation."
  },
  {
    q: "What documents do I need to get started?",
    a: "You'll need your FSSAI license (or application receipt), GST certificate, PAN card, a cancelled cheque, and your menu. If you're missing the FSSAI license, we can guide you through the application process as well."
  },
  {
    q: "Do I need to give you my Swiggy/Zomato login credentials?",
    a: "No. We create fresh accounts on your behalf using your business details and documents. You'll receive full access credentials once the account is live. We never ask for existing passwords."
  },
  {
    q: "Will you take a commission on my orders?",
    a: "Absolutely not. We charge flat fees — either a one-time setup fee or a monthly retainer. We never take a percentage of your orders or revenue. What you earn is entirely yours."
  },
  {
    q: "Can you help if I'm already listed but not getting orders?",
    a: "Yes — that's exactly what our Growth and Full Stack plans are built for. We'll audit your existing listings, optimize your menu structure, improve your photos and descriptions, and set up promotional campaigns to boost visibility."
  },
  {
    q: "What if my FSSAI license application is still in progress?",
    a: "You can start the process with your FSSAI application receipt number. Most platforms accept applications-in-progress for initial setup. We'll track your license status and update the listing once it's issued."
  },
  {
    q: "Do you only work in Lucknow?",
    a: "Currently, yes. Our deep knowledge of the Lucknow food market — locality-level demand patterns, competitor pricing, and customer preferences — is what makes us more effective than generic agencies. We plan to expand to other UP cities soon."
  },
  {
    q: "What happens after I'm live? Do I manage it myself?",
    a: "With the Launchpad plan, you manage it after go-live. With our Growth and Full Stack plans, we handle ongoing menu updates, review responses, promotional campaigns, and monthly performance reporting — so you can stay focused on your kitchen."
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 border-t border-border/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold mb-3 tracking-wide">FAQ</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Common questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything restaurant owners ask us before signing up.
          </p>
        </motion.div>

        <div className="divide-y divide-border/50">
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
              >
                <span className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                  {item.q}
                </span>
                <span className="shrink-0 mt-0.5 text-muted-foreground">
                  {openIndex === i ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? "300px" : "0px",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="pb-6 text-sm text-muted-foreground leading-relaxed pr-12">
                  {item.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Magnetic Button ─── */
function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  }, [x, y]);

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20 relative">
      {/* Interactive dot grid background */}
      <InteractiveGrid />
      <div className="fixed inset-0 z-[-1] bg-background" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="bg-primary rounded-lg p-1.5">
              <Rocket className="h-4 w-4 text-foreground" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-foreground">ListMate</span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="#process" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Process</Link>
            <Link href="#why-us" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Why Us</Link>
            <Link href="#pricing" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/results" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors">Results</Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">Log in</Link>
            <Link 
              href="/contact" 
              className={cn(buttonVariants({ variant: "default", size: "sm" }), "rounded-lg text-[13px] font-semibold h-9 px-4")}
            >
              Get Listed
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <motion.section 
          ref={heroRef}
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
          className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6"
        >
          {/* Ambient gradient glow behind hero text */}
          <AmbientGlow />

          <div className="container mx-auto max-w-6xl relative">
            <div className="max-w-3xl">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                {/* Eyebrow — no pulsing dots, just a clean label */}
                <motion.p variants={fadeUp} className="text-primary text-sm font-semibold mb-6 tracking-wide">
                  Restaurant growth platform for Lucknow
                </motion.p>

                {/* Headline — no gradient text, just confident typography */}
                <motion.h1 variants={fadeUp} className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight leading-[1.05] text-foreground mb-6">
                  Get your kitchen live on{" "}
                  <span className="text-primary">every platform</span>{" "}
                  in under a week
                </motion.h1>

                {/* Description — specific, not fluffy */}
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                  We manage the entire Swiggy, Zomato, and Blinkit onboarding—FSSAI compliance, 
                  menu optimization, photo standards, and account verification—so you never 
                  touch a partner portal.
                </motion.p>

                {/* CTA row — single primary action, secondary as text link */}
                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 mb-16">
                  <MagneticButton 
                    href="/contact" 
                    className={cn(buttonVariants({ size: "lg" }), "rounded-lg text-sm h-12 px-7 font-semibold group relative overflow-hidden")}
                  >
                    <span className="relative z-10 flex items-center">
                      Start onboarding — free consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-orange-400 to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
                  </MagneticButton>
                  <Link 
                    href="tel:+919876543210"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground/70 transition-colors group"
                  >
                    <Phone className="h-4 w-4 group-hover:animate-pulse" />
                    Or call us directly
                  </Link>
                </motion.div>

                {/* Social proof — feels real, not manufactured */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span>4.9 from 50+ restaurants</span>
                  </div>
                  <div className="h-4 w-px bg-border/50 hidden sm:block" />
                  <span>Avg. time to go live: <strong className="text-foreground/70">5 days</strong></span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ─── TRUST BAR — clean horizontal line of platform names ─── */}
        <section className="border-y border-border/50 py-8 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="flex flex-wrap items-center justify-between gap-y-6">
              <p className="text-[11px] font-semibold text-muted-foreground/50 uppercase tracking-[0.2em] shrink-0">
                We list you on
              </p>
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                {[
                  { name: "Swiggy", color: "#FC8019" },
                  { name: "Zomato", color: "#E23744" },
                  { name: "Blinkit", color: "#F8C400" },
                  { name: "Magicpin", color: "#9B59B6" },
                  { name: "Instamart", color: "#00AA3C" },
                ].map((p) => (
                  <span 
                    key={p.name}
                    className="text-lg font-bold tracking-tight opacity-40 hover:opacity-90 transition-opacity duration-300 cursor-default"
                    style={{ color: p.color }}
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── METRICS BAR ─── */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/60">
              {[
                { value: "50+", label: "Restaurants onboarded" },
                { value: "5", label: "Days avg. to go live" },
                { value: "₹2.4Cr", label: "Revenue driven this quarter" },
                { value: "98%", label: "Client retention rate" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  className="bg-background p-8 lg:p-10 text-center group hover:bg-muted/30 transition-colors duration-300"
                >
                  <AnimatedCounter value={stat.value} className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-2 block" />
                  <p className="text-xs text-muted-foreground/60 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS — How It Works ─── */}
        <section id="process" className="py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-primary text-sm font-semibold mb-3 tracking-wide">Process</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Three steps. One week. You&apos;re live.
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                No partner portal access needed from your side. We handle the bureaucracy end-to-end.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/60">
              {[
                {
                  step: "01",
                  icon: <FileText className="h-5 w-5" />,
                  title: "Submit documents",
                  desc: "Share your FSSAI license, GST certificate, menu, and a few photos. Takes 10 minutes through our secure portal.",
                  detail: "We verify everything before submission to avoid rejection delays."
                },
                {
                  step: "02",
                  icon: <Zap className="h-5 w-5" />,
                  title: "We build your presence",
                  desc: "Our team creates optimized accounts, structures your menu for maximum conversion, and handles all platform approvals.",
                  detail: "Menu engineering based on 50+ restaurant data points."
                },
                {
                  step: "03",
                  icon: <TrendingUp className="h-5 w-5" />,
                  title: "Go live and grow",
                  desc: "Your restaurant goes live with professional positioning. We monitor initial performance and make adjustments.",
                  detail: "First orders typically start within 24 hours of going live."
                }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30, rotateX: 5 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 150 }}
                  className="bg-background p-8 lg:p-10 group hover:bg-muted/20 transition-colors duration-300 relative overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-foreground/10 text-5xl font-bold font-heading group-hover:text-primary/20 transition-colors duration-500">{step.step}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-primary mb-4">
                      {step.icon}
                      <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{step.desc}</p>
                    <p className="text-[13px] text-primary/70 font-medium flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 mt-0.5 shrink-0 transition-transform group-hover:translate-x-1" />
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY US — not generic features, but real differentiators ─── */}
        <section id="why-us" className="py-24 px-4 sm:px-6 border-y border-border/50">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-primary text-sm font-semibold mb-3 tracking-wide">Why ListMate</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Not another agency. A growth partner.
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                We&apos;re ex-restaurant operators. We know what converts because we&apos;ve run the same kitchens you do.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="h-5 w-5 text-primary" />,
                  title: "Zero platform access needed",
                  desc: "You never need to log into Swiggy or Zomato. We own the ops layer so you own the kitchen."
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-primary" />,
                  title: "Menu engineering that converts",
                  desc: "We structure your menu based on data from 50+ restaurants—pricing, placement, naming, and photos that sell."
                },
                {
                  icon: <Clock className="h-5 w-5 text-primary" />,
                  title: "5-day average go-live",
                  desc: "While most agencies take 2-3 weeks, our streamlined process gets you taking orders in under a week."
                },
                {
                  icon: <Users className="h-5 w-5 text-primary" />,
                  title: "Dedicated account manager",
                  desc: "One point of contact who knows your restaurant, your market, and your competition."
                },
                {
                  icon: <Star className="h-5 w-5 text-primary" />,
                  title: "Review management",
                  desc: "We monitor and respond to reviews across all platforms, maintaining your reputation 24/7."
                },
                {
                  icon: <Zap className="h-5 w-5 text-primary" />,
                  title: "Lucknow market expertise",
                  desc: "Hyper-local knowledge of what works in Hazratganj, Gomti Nagar, Aminabad, and beyond."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-xl border border-border/60 bg-muted/30 hover:bg-border/30 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
                    <h3 className="font-heading text-base font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground/60 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="pricing" className="py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-primary text-sm font-semibold mb-3 tracking-wide">Pricing</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Predictable pricing. No commissions.
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                We don&apos;t take a cut of your orders. Flat fees, clear scope.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Launchpad */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border border-border/60 bg-muted/30 flex flex-col"
              >
                <p className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest mb-6">Launchpad</p>
                <div className="mb-1 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold font-heading text-foreground">₹2,500</span>
                  <span className="text-sm text-muted-foreground/60">/ platform</span>
                </div>
                <p className="text-sm text-muted-foreground/50 mb-8">One-time setup fee</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {["Account creation & verification", "FSSAI & document handling", "Menu upload & pricing setup", "Photo requirement guidelines", "Live in 5-7 business days"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-lg h-11 text-sm font-semibold border-border/70 bg-transparent hover:bg-border/30")}>
                  Get started
                </Link>
              </motion.div>

              {/* Growth — featured */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-xl border border-primary/30 bg-primary/[0.04] flex flex-col relative"
              >
                <div className="absolute -top-3 left-6 bg-primary text-foreground text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                  Recommended
                </div>
                <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest mb-6">Growth</p>
                <div className="mb-1 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold font-heading text-foreground">₹3,500</span>
                  <span className="text-sm text-muted-foreground/60">/ month</span>
                </div>
                <p className="text-sm text-muted-foreground/50 mb-8">Ongoing management</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {["Up to 2 platforms included", "Unlimited menu updates", "Review management & replies", "Monthly performance report", "Platform-specific optimization"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-primary/60 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-lg h-11 text-sm font-semibold")}>
                  Start growing
                </Link>
              </motion.div>

              {/* Full Stack */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-xl border border-border/60 bg-muted/30 flex flex-col"
              >
                <p className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest mb-6">Full Stack</p>
                <div className="mb-1 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold font-heading text-foreground">₹8,000</span>
                  <span className="text-sm text-muted-foreground/60">/ month</span>
                </div>
                <p className="text-sm text-muted-foreground/50 mb-8">Complete management</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {["All platforms included", "Everything in Growth", "In-app ad management", "Competitor pricing analysis", "Promotional campaign setup"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-lg h-11 text-sm font-semibold border-border/70 bg-transparent hover:bg-border/30")}>
                  Talk to us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <FAQSection />

        {/* ─── CTA ─── */}
        <section className="py-24 px-4 sm:px-6 border-t border-border/50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto max-w-3xl text-center"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Ready to stop losing orders?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
              Every day you&apos;re not listed is revenue going to your competition. Let&apos;s fix that this week.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className={cn(buttonVariants({ size: "lg" }), "rounded-lg text-sm h-12 px-8 font-semibold")}
              >
                Book a free consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/results" 
                className="text-sm text-muted-foreground hover:text-foreground/70 transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/30"
              >
                See client results first
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer — minimal, confident */}
      <footer className="py-10 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-primary rounded-lg p-1.5">
              <Rocket className="h-3.5 w-3.5 text-foreground" />
            </div>
            <span className="font-heading font-bold text-sm text-foreground/70">ListMate</span>
          </div>
          <p className="text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} ListMate. Lucknow, India.
          </p>
          <div className="flex gap-6">
            <Link href="/results" className="text-xs text-muted-foreground/40 hover:text-muted-foreground transition-colors">Results</Link>
            <Link href="/contact" className="text-xs text-muted-foreground/40 hover:text-muted-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
