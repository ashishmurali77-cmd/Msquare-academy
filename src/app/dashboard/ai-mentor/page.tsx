
"use client";

import React, { useState } from 'react';
import { aiPersonalMentor, AIPersonalMentorOutput } from '@/ai/flows/ai-personal-mentor';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BrainCircuit, Loader2, Sparkles, CheckCircle, Lightbulb, Trophy, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { PremiumBanner } from '@/components/PremiumBanner';

export default function AIMentorPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIPersonalMentorOutput | null>(null);

  // Mock student data for demonstration
  const mockStudentData = {
    studentName: "Arjun S",
    courseOutline: ["Basics", "Technical Analysis", "Price Action", "Options", "Risk Management"],
    completedLessons: ["Basics", "Technical Analysis"],
    quizScores: {
      "Basics": 85,
      "Technical Analysis": 45,
    },
    currentChapter: "Options Trading Basics"
  };

  const generateReport = async () => {
    setLoading(true);
    try {
      const output = await aiPersonalMentor(mockStudentData);
      setResult(output);
    } catch (error) {
      console.error("AI Mentor failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-8">
        <PremiumBanner />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-headline font-bold mb-2 flex items-center gap-3">
              <BrainCircuit className="text-primary w-10 h-10" /> AI Personal Mentor
            </h1>
            <p className="text-muted-foreground">Get a personalized learning path and mock exams tailored to your performance.</p>
          </div>
          <Button 
            onClick={generateReport} 
            disabled={loading}
            size="lg"
            className="gold-gradient text-background font-bold px-8 h-12"
          >
            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
            Analyze My Progress
          </Button>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-6">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
            <p className="text-xl font-headline italic">Analyzing your quiz scores and learning history...</p>
          </div>
        )}

        {result && (
          <div className="space-y-10 animate-in fade-in duration-1000">
            {/* Summaries */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-green-500 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Your Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{result.summaryOfStrengths}</p>
                </CardContent>
              </Card>

              <Card className="glass border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-red-500 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{result.summaryOfWeaknesses}</p>
                </CardContent>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" /> Personalized Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {result.studyRecommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="w-8 h-8 rounded-full gold-gradient text-background flex items-center justify-center font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-lg">{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Mock Exam Preview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
                <Trophy className="text-primary w-8 h-8" /> Tailored Mock Exam
              </h2>
              <div className="grid gap-6">
                {result.mockExam.map((q, i) => (
                  <Card key={i} className="glass border-border/50">
                    <CardHeader>
                      <CardDescription className="uppercase tracking-widest text-xs font-bold text-primary">{q.topic}</CardDescription>
                      <CardTitle className="text-xl leading-snug">Q{i+1}: {q.question}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {q.options && (
                        <div className="grid gap-2">
                          {q.options.map((opt, idx) => (
                            <div key={idx} className="p-3 rounded-lg border border-border bg-background/50 hover:border-primary transition-colors cursor-pointer">
                              {opt}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mt-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                        <p className="text-sm font-bold text-green-500 mb-1">Correct Answer:</p>
                        <p className="mb-2">{q.correctAnswer}</p>
                        {q.explanation && (
                          <>
                            <p className="text-xs font-bold text-muted-foreground uppercase mt-4 mb-1">Mentor Explanation:</p>
                            <p className="text-sm text-muted-foreground italic">{q.explanation}</p>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
