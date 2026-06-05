
"use client";

import { Navbar } from '@/components/Navbar';
import { PremiumBanner } from '@/components/PremiumBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  BookOpen, 
  Calendar, 
  Award, 
  Clock, 
  ChevronRight,
  Video,
  FileText,
  BrainCircuit
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function StudentDashboard() {
  const courses = [
    {
      id: 'c1',
      title: 'Complete Stock Market Mastery',
      progress: 35,
      totalLessons: 24,
      completedLessons: 8,
      thumbnail: 'https://picsum.photos/seed/trading-1/400/250'
    },
    {
      id: 'c2',
      title: 'Advanced Options Trading',
      progress: 0,
      totalLessons: 18,
      completedLessons: 0,
      thumbnail: 'https://picsum.photos/seed/trading-2/400/250'
    }
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      <div className="pt-24 pb-8">
        <PremiumBanner />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-headline font-bold text-primary">Welcome back, Arjun!</h1>
            <p className="text-muted-foreground">Continue your journey to financial freedom.</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-secondary text-white font-bold h-12 px-6" asChild>
              <Link href="/dashboard/ai-mentor">
                <BrainCircuit className="w-4 h-4 mr-2" /> AI Personal Mentor
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Progress */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Play className="w-5 h-5 text-secondary" /> Continue Learning
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden border-border/50 hover:shadow-xl transition-all group">
                    <div className="aspect-video relative overflow-hidden">
                      <Image 
                        src={course.thumbnail} 
                        fill 
                        alt={course.title} 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                           <Play className="w-6 h-6 fill-current" />
                         </div>
                      </div>
                    </div>
                    <CardHeader className="p-5">
                      <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      <CardDescription>{course.completedLessons}/{course.totalLessons} Lessons Completed</CardDescription>
                    </CardHeader>
                    <CardContent className="p-5 pt-0 space-y-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-1.5" />
                      </div>
                      <Button className="w-full bg-primary text-white h-10 rounded-lg font-bold" asChild>
                        <Link href={`/courses/stock-market/lessons/l1`}>Resume Class</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary" /> Offline Class Bookings
              </h2>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold">Beginner Trading Masterclass</p>
                        <p className="text-xs text-muted-foreground">Next Session: Tomorrow, 10:00 AM • Palakkad Center</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Batch Details</Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <Card className="premium-gradient text-white border-none shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" /> Learning Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <Clock className="w-5 h-5 text-secondary/70" />
                     <span className="text-sm">Total Study Time</span>
                   </div>
                   <span className="font-bold">12h 45m</span>
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <Video className="w-5 h-5 text-secondary/70" />
                     <span className="text-sm">Videos Watched</span>
                   </div>
                   <span className="font-bold">28</span>
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <FileText className="w-5 h-5 text-secondary/70" />
                     <span className="text-sm">Notes Downloaded</span>
                   </div>
                   <span className="font-bold">15</span>
                </div>
                <div className="pt-4 border-t border-white/10">
                   <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Current Rank</p>
                        <p className="text-lg font-bold">Pro Trader</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-white/40" />
                   </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Announcements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-lg text-xs leading-relaxed">
                   <strong>Live Session:</strong> Join the Q&A session with Ashvin on Friday at 8 PM via Zoom. Link sent to registered emails.
                </div>
                <div className="p-3 bg-muted rounded-lg text-xs leading-relaxed">
                   <strong>New Material:</strong> "Options Greek Cheat Sheet" PDF has been added to Module 4.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
