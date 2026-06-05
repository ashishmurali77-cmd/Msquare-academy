
"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { 
  PlayCircle, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Download,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';

export default function LessonPlayerPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data for the current lesson and course
  const course = {
    title: "Stock Market Mastery",
    progress: 35,
    modules: [
      {
        id: "m1",
        title: "Module 1: Market Basics",
        lessons: [
          { id: "l1", title: "Introduction to Trading", duration: "10:24", completed: true },
          { id: "l2", title: "Types of Markets (NSE vs BSE)", duration: "15:45", completed: true },
          { id: "l3", title: "How to open Demat Account", duration: "12:10", completed: false },
        ]
      },
      {
        id: "m2",
        title: "Module 2: Technical Analysis",
        lessons: [
          { id: "l4", title: "Basics of Candlesticks", duration: "25:30", completed: false },
          { id: "l5", title: "Support and Resistance", duration: "20:15", completed: false },
        ]
      }
    ]
  };

  const currentLesson = {
    id: "l1",
    title: "Introduction to Trading",
    youtubeId: "vLnPwxZdW4Y", // Example YouTube ID
    description: "In this fundamental lesson, we explore the basics of the stock market, how it functions, and why it is essential for wealth creation in the long term.",
    pdfUrl: "/notes/lesson1.pdf",
    nextLessonId: "l2",
    prevLessonId: null
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-20 flex flex-col md:flex-row h-[calc(100vh-80px)] overflow-hidden">
        {/* Course Sidebar */}
        <aside className={`${sidebarOpen ? 'w-full md:w-80 lg:w-96' : 'w-0'} bg-muted/30 border-r border-border transition-all duration-300 flex flex-col overflow-hidden`}>
          <div className="p-6 border-b bg-card">
            <h2 className="font-headline font-bold text-xl mb-4 leading-tight">{course.title}</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <span>Course Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-6">
              {course.modules.map((module) => (
                <div key={module.id} className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary/60 px-2">{module.title}</h3>
                  <div className="space-y-1">
                    {module.lessons.map((lesson) => (
                      <Link 
                        key={lesson.id} 
                        href={`/courses/stock-market/lessons/${lesson.id}`}
                        className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors group ${lesson.id === currentLesson.id ? 'bg-primary text-primary-foreground font-bold shadow-lg' : 'hover:bg-muted'}`}
                      >
                        {lesson.completed ? (
                          <CheckCircle2 className={`w-5 h-5 ${lesson.id === currentLesson.id ? 'text-secondary' : 'text-green-500'}`} />
                        ) : (
                          <PlayCircle className={`w-5 h-5 ${lesson.id === currentLesson.id ? 'text-secondary' : 'text-muted-foreground group-hover:text-primary'}`} />
                        )}
                        <span className="flex-1 truncate">{lesson.title}</span>
                        <span className="text-[10px] opacity-60">{lesson.duration}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col bg-card overflow-hidden">
          {/* Header controls */}
          <div className="bg-background border-b px-6 h-14 flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="gap-2"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline">Course Content</span>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={!currentLesson.prevLessonId}>
                <ChevronLeft className="w-4 h-4 mr-1" /> Prev
              </Button>
              <Button className="bg-secondary text-white font-bold" size="sm" asChild>
                <Link href={`/courses/stock-market/lessons/${currentLesson.nextLessonId}`}>
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="max-w-5xl mx-auto p-6 lg:p-10 space-y-8">
              {/* YouTube Video Player Container */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl relative group">
                <iframe
                  src={`https://www.youtube.com/embed/${currentLesson.youtubeId}?rel=0&modestbranding=1&autoplay=1`}
                  title={currentLesson.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Lesson Details */}
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h1 className="text-3xl font-headline font-bold text-primary">{currentLesson.title}</h1>
                  <Button className="bg-green-600 hover:bg-green-700 text-white gap-2 font-bold px-6">
                    <CheckCircle2 className="w-4 h-4" /> Mark as Complete
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-10">
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="font-bold text-lg border-b pb-2">Lesson Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentLesson.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg border-b pb-2">Resources</h3>
                    <div className="p-4 rounded-xl border-2 border-dashed border-border bg-muted/10 space-y-4">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-primary mt-1" />
                        <div className="flex-1">
                          <p className="text-sm font-bold truncate">Study Notes - Lesson 1.pdf</p>
                          <p className="text-[10px] text-muted-foreground">PDF Document • 2.4 MB</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full gap-2 text-primary font-bold border-primary/20 hover:bg-primary/5">
                        <Download className="w-4 h-4" /> Download Notes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
