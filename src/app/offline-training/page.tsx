
"use client";

import { Navbar } from '@/components/Navbar';
import { PremiumBanner } from '@/components/PremiumBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Calendar, Users, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function OfflineTrainingPage() {
  const batches = [
    {
      id: 'b1',
      courseName: 'Beginner Trading Masterclass',
      startDate: 'Oct 01, 2023',
      duration: '3 Months',
      timing: '10:00 AM - 12:30 PM',
      location: 'Palakkad Center',
      totalSeats: 15,
      occupiedSeats: 12,
      price: 10000,
      isFull: false,
    },
    {
      id: 'b2',
      courseName: 'Advanced Price Action Mastery',
      startDate: 'Oct 15, 2023',
      duration: '3 Months',
      timing: '02:00 PM - 04:30 PM',
      location: 'Palakkad Center',
      totalSeats: 12,
      occupiedSeats: 12,
      price: 15000,
      isFull: true,
    },
    {
      id: 'b3',
      courseName: 'Options Strategies & Greeks',
      startDate: 'Nov 01, 2023',
      duration: '2 Months',
      timing: '06:00 PM - 08:30 PM',
      location: 'Online Hybrid (Evening)',
      totalSeats: 20,
      occupiedSeats: 5,
      price: 12000,
      isFull: false,
    }
  ];

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      <div className="pt-24 pb-8">
        <PremiumBanner />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">Offline Training Programs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Join our physical classroom sessions in Palakkad for intensive, hands-on training with professional mentors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {batches.map((batch) => (
            <Card key={batch.id} className={`overflow-hidden border-2 transition-all ${batch.isFull ? 'border-muted opacity-80' : 'border-primary/5 hover:border-primary/20 shadow-xl'}`}>
              <CardHeader className={`${batch.isFull ? 'bg-muted' : 'bg-primary'} text-white p-6`}>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={batch.isFull ? "outline" : "secondary"} className="bg-white/10 text-white border-white/20">
                    {batch.duration}
                  </Badge>
                  {batch.isFull && <Badge variant="destructive">Batch Full</Badge>}
                </div>
                <CardTitle className="text-2xl font-headline font-bold leading-tight">{batch.courseName}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span>Starts {batch.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{batch.timing}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{batch.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-secondary" />
                    <span>{batch.totalSeats - batch.occupiedSeats} Seats Left</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{formatINR(batch.price)}</span>
                    <span className="text-xs text-muted-foreground pb-1">One-time payment</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  className={`w-full h-12 rounded-xl font-bold ${batch.isFull ? 'bg-muted text-muted-foreground cursor-not-allowed' : 'bg-secondary hover:bg-secondary/90 text-white'}`}
                  disabled={batch.isFull}
                  asChild={!batch.isFull}
                >
                  {batch.isFull ? (
                    <span className="flex items-center gap-2">Waitlist Open <AlertTriangle className="w-4 h-4" /></span>
                  ) : (
                    <Link href={`/register?batch=${batch.id}`}>Book Your Seat <ChevronRight className="ml-1 w-4 h-4" /></Link>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mt-24 p-12 rounded-3xl premium-gradient text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-6">Why In-Person Training?</h2>
              <div className="space-y-4">
                {[
                  'Real-time doubt clearing face-to-face',
                  'Exclusive community of local traders',
                  'Live market practical sessions in group',
                  'Physical study materials & notes provided',
                  'Lifelong mentorship and center access'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
               <h3 className="text-xl font-bold mb-4">Need Help Choosing?</h3>
               <p className="text-white/70 mb-6">Our academic counselors are available to guide you based on your current knowledge and financial goals.</p>
               <div className="flex flex-col gap-3">
                 <Button className="bg-white text-primary hover:bg-white/90 font-bold" asChild>
                   <Link href="tel:7293106490">Call Advisor</Link>
                 </Button>
                 <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                   <Link href="/contact">Schedule a Visit</Link>
                 </Button>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
