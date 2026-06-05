
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { PremiumBanner } from '@/components/PremiumBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Users, 
  Search, 
  ShieldCheck, 
  Brain, 
  PhoneCall, 
  CheckCircle2, 
  Star,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function MentorshipPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      title: "One-to-One Guidance",
      description: "Receive personalized support based on your trading level and goals.",
      icon: Users
    },
    {
      title: "Daily & Weekly Doubt Clearing",
      description: "Get your questions answered through dedicated discussion sessions.",
      icon: Search
    },
    {
      title: "Trade Review Sessions",
      description: "Review your trades, mistakes, entries, exits, and risk management.",
      icon: TrendingUp
    },
    {
      title: "Risk Management Coaching",
      description: "Learn capital protection, position sizing, and sustainable trading practices.",
      icon: ShieldCheck
    },
    {
      title: "Trading Psychology Training",
      description: "Build discipline, patience, confidence, and emotional control.",
      icon: Brain
    },
    {
      title: "Direct Communication",
      description: "Connect through WhatsApp, phone calls, Zoom meetings, or offline sessions.",
      icon: PhoneCall
    }
  ];

  const benefits = [
    "Personalized Learning Path",
    "Direct Mentor Access",
    "Real Market Discussions",
    "Performance Tracking",
    "Accountability Support",
    "Practical Trading Guidance"
  ];

  const testimonials = [
    {
      text: "Mentorship helped me become more disciplined and confident in my trading decisions.",
      author: "Rahul M.",
      rating: 5
    },
    {
      text: "Personal guidance accelerated my learning much faster than studying alone.",
      author: "Sneha K.",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "We will get back to you soon on WhatsApp or Email.",
      });
    }, 1500);
  };

  // Prevent hydration mismatch by rendering a consistent initial state
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-8">
          <PremiumBanner />
        </div>
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-8">
        <PremiumBanner />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-border/50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold text-xs uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> Exclusive One-on-One Program
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary max-w-4xl mx-auto leading-tight">
            Personal Trading <span className="italic text-secondary">Mentorship</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn directly from an experienced trader with one-on-one guidance and personalized support designed to accelerate your growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary text-white font-bold h-14 px-8 rounded-xl shadow-lg" onClick={scrollToForm}>
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-bold">Comprehensive Support</h2>
            <p className="text-muted-foreground">Tailored guidance for every aspect of your trading career.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="glass border-border/50 hover:border-secondary/30 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-headline font-bold">Why Choose Personal Mentorship?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border bg-card/50">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="p-8 rounded-3xl premium-gradient text-white space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold uppercase tracking-widest">Monthly Program</span>
                <span className="bg-secondary/20 px-3 py-1 rounded-full text-xs font-bold">Limited Slots</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">₹5,000</span>
                <span className="text-white/60">/ month</span>
              </div>
              <p className="text-white/80">Continuous support, weekly reviews, and direct WhatsApp access included.</p>
            </div>
          </div>

          <div ref={formRef} className="scroll-mt-32">
            <Card className="shadow-2xl border-primary/10 overflow-hidden">
              <CardHeader className="bg-primary text-white text-center p-8">
                <Target className="w-10 h-10 mx-auto mb-4 text-secondary" />
                <CardTitle className="text-2xl font-headline">Apply for Mentorship</CardTitle>
                <CardDescription className="text-white/60">Fill the form below and the mentor will contact you directly.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input required placeholder="Your Name" className="h-12" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <Input required type="tel" placeholder="e.g., 7293106490" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input required type="email" placeholder="name@example.com" className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Trading Experience</Label>
                    <Input placeholder="e.g., Beginner, 6 months, 2 years" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label>Current Challenges</Label>
                    <Textarea placeholder="What are you struggling with most?" className="h-32 resize-none" />
                  </div>
                  <Button type="submit" className="w-full h-14 bg-secondary text-white font-bold text-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-secondary opacity-5 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold">Student Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-white/5 border-white/10 text-white p-8">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <Star key={idx} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-xl italic leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
                    {t.author.charAt(0)}
                  </div>
                  <span className="font-bold">{t.author}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
