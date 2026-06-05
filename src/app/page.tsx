
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { PremiumBanner } from '@/components/PremiumBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  LineChart, 
  BookOpen, 
  MapPin, 
  Video, 
  FileText, 
  Calendar, 
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Mail,
  Phone
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="https://picsum.photos/seed/trading-hero/1920/1080"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            data-ai-hint="stock trading"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-20 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-secondary font-bold text-xs uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
                Palakkad's #1 Trading Academy
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
                Master the Markets <br />
                <span className="text-secondary italic">Hybrid Learning</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                Experience the best of both worlds. Join our offline classroom training in Palakkad or master trading from anywhere with our comprehensive online courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 h-14 rounded-xl text-lg shadow-lg" asChild>
                  <Link href="/offline-training">Book Offline Seat</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-14 rounded-xl text-lg" asChild>
                  <Link href="/courses">Explore Online</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
               <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
                 <Image 
                   src="https://picsum.photos/seed/trading-class/800/600" 
                   alt="Classroom Training" 
                   width={800} 
                   height={600} 
                   className="object-cover"
                   data-ai-hint="trading classroom"
                 />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                 <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                   <Users className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-2xl font-bold">5,000+</p>
                   <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Students Trained</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <PremiumBanner />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-headline font-bold text-primary">About MSquare Academy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by professional traders, MSquare Academy is dedicated to creating independent and disciplined traders in the Indian stock market. Our curriculum is designed for both beginners and advanced investors.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold">Certified Mentors</h4>
                  <p className="text-sm text-muted-foreground">Learn from experts with 10+ years experience.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-secondary/5 rounded-lg flex items-center justify-center text-secondary">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold">Practical Approach</h4>
                  <p className="text-sm text-muted-foreground">Real market charts and live demonstrations.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                 <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                   <Image src="https://picsum.photos/seed/ms-1/400/600" fill alt="Academy 1" className="object-cover" data-ai-hint="academy interior" />
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                   <Image src="https://picsum.photos/seed/ms-2/400/600" fill alt="Academy 2" className="object-cover" data-ai-hint="student learning" />
                 </div>
                 <div className="aspect-square rounded-2xl bg-secondary flex flex-col items-center justify-center text-white p-6 text-center">
                    <span className="text-4xl font-bold mb-1">94%</span>
                    <span className="text-xs uppercase font-bold tracking-widest">Success Rate</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offline vs Online Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">Choose Your Path</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Whether you prefer face-to-face interaction or self-paced learning, we have the perfect program for you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Offline Card */}
            <Card className="border-2 border-primary/5 hover:border-primary/20 transition-all overflow-hidden bg-white shadow-xl group">
              <CardHeader className="bg-primary text-primary-foreground p-8">
                <div className="flex justify-between items-start mb-4">
                  <MapPin className="w-10 h-10 text-secondary" />
                  <span className="bg-secondary/20 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">In-Person</span>
                </div>
                <CardTitle className="text-3xl font-headline font-bold mb-2">Offline Classroom</CardTitle>
                <CardDescription className="text-primary-foreground/70">Intensive 3-month training at our Palakkad center.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <ul className="space-y-4">
                  {['Personalized Mentorship', 'Live Market Sessions', 'Doubt Clearing', 'Strategy Backtesting'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl" asChild>
                  <Link href="/offline-training">View Upcoming Batches <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            {/* Online Card */}
            <Card className="border-2 border-secondary/5 hover:border-secondary/20 transition-all overflow-hidden bg-white shadow-xl">
              <CardHeader className="bg-secondary text-white p-8">
                <div className="flex justify-between items-start mb-4">
                  <Video className="w-10 h-10 text-primary" />
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Self-Paced</span>
                </div>
                <CardTitle className="text-3xl font-headline font-bold mb-2">Online Mastery</CardTitle>
                <CardDescription className="text-white/70">Learn trading from anywhere, anytime.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <ul className="space-y-4">
                  {['HD Video Lessons', 'Downloadable PDFs', 'Mobile Access', 'Lifetime Support'].map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 rounded-xl" asChild>
                  <Link href="/courses">Browse Online Courses <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary font-bold text-xl">
                M
              </div>
              <span className="font-headline font-bold text-2xl">MSQUARE ACADEMY</span>
            </Link>
            <p className="text-primary-foreground/60 max-w-md">
              Palakkad's leading stock market academy, dedicated to empowering individuals with the skills to trade independently and successfully.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all cursor-pointer font-bold text-xs">FB</a>
              <a href="https://instagram.com/_ashwin_2799" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all cursor-pointer font-bold text-xs">IG</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all cursor-pointer font-bold text-xs">YT</a>
              <a href="https://wa.me/917293106490" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all cursor-pointer font-bold text-xs">WA</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Programs</h4>
            <ul className="space-y-4 text-primary-foreground/60 text-sm">
              <li><Link href="/offline-training" className="hover:text-secondary transition-colors">Offline Classroom</Link></li>
              <li><Link href="/courses" className="hover:text-secondary transition-colors">Online Courses</Link></li>
              <li><Link href="/mentorship" className="hover:text-secondary transition-colors">One-on-One Mentorship</Link></li>
              <li><Link href="/workshops" className="hover:text-secondary transition-colors">Trading Workshops</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Connect</h4>
            <ul className="space-y-4 text-primary-foreground/60 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>Palakkad, Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span>ashwinsopanam90@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+91 72931 06490</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} MSquare Stock Market Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917293106490" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7c.9 0 1.77.17 2.6.48"/><path d="m15.5 10.5 4.5 4.5"/><path d="m15.5 15 4.5-4.5"/></svg>
      </a>
    </div>
  );
}
