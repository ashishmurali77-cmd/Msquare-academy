
import { Navbar } from '@/components/Navbar';
import { PremiumBanner } from '@/components/PremiumBanner';
import { Button } from '@/components/ui/button';
import { CheckCircle2, IndianRupee, Clock, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function CoursePage() {
  const curriculum = [
    "Stock Market Basics", "NSE & BSE Introduction", "Demat and Trading Account Setup",
    "Candlestick Pattern Analysis", "Support & Resistance Concepts", "Trend Analysis",
    "Volume Analysis", "Chart Reading Techniques", "Intraday Trading Strategies",
    "Swing Trading Methods", "Options Trading Basics", "Option Buying & Option Selling",
    "Risk Management Techniques", "Trading Psychology & Discipline", "Live Market Practical Sessions",
    "Strategy Backtesting", "Trade Planning & Execution"
  ];

  const features = [
    "Offline Classroom Training", "Beginner Friendly Approach", "Practical Chart Analysis",
    "Real Market Examples", "Doubt Clearing Sessions", "Study Materials Provided",
    "Personal Guidance", "Certificate Of Completion"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12">
        <PremiumBanner />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">Complete Stock Market <span className="text-primary">Mastery</span></h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our comprehensive 3-month course takes you from a complete novice to a confident, disciplined trader. 
                We focus heavily on practical chart analysis and live market demonstrations to ensure you're ready for the real world.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-headline font-bold mb-8 flex items-center gap-3">
                <BookOpen className="text-primary w-8 h-8" /> What You Will Learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {curriculum.map((item, i) => (
                  <div key={i} className="glass p-4 rounded-xl border border-primary/5 flex items-start gap-3 hover:border-primary/20 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-headline font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary w-8 h-8" /> Course Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((item, i) => (
                  <div key={i} className="glass p-4 rounded-xl border border-secondary/20 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass p-8 rounded-3xl border border-primary/30 sticky top-32">
              <div className="gold-gradient text-background px-4 py-1 rounded-full text-xs font-bold uppercase inline-block mb-4">
                Limited Batch Enrollment
              </div>
              <h3 className="text-3xl font-bold mb-6">Course Investment</h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-bold gold-text-gradient">₹10,000</span>
                <span className="text-muted-foreground pb-2 text-sm">Full Course Fee</span>
              </div>

              <div className="space-y-6 mb-10 text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">3 Months Duration</p>
                    <p className="text-muted-foreground text-xs">Offline + Online Support</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">Palakkad, Kerala</p>
                    <p className="text-muted-foreground text-xs">Offline Learning Center</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">Easy Installments</p>
                    <p className="text-muted-foreground text-xs">Flexible payment options</p>
                  </div>
                </div>
              </div>

              <Button className="w-full h-14 gold-gradient text-background font-bold text-lg mb-4" asChild>
                <Link href="/register">Reserve Your Seat</Link>
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Next batch starts on the 1st of next month. Limited seats (only 15 students per batch).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
