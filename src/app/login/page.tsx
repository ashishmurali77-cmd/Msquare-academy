
"use client";

import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Suspense } from 'react';

function LoginForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');
  const isAdmin = role === 'admin';

  return (
    <Card className="glass border-primary/20 shadow-2xl relative z-10">
      <CardHeader className="text-center space-y-4">
        <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center text-background shadow-xl ${isAdmin ? 'bg-secondary' : 'gold-gradient'}`}>
          {isAdmin ? <ShieldCheck className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
        </div>
        <div className="space-y-1">
          <CardTitle className="text-3xl font-headline font-bold">
            {isAdmin ? 'Admin Portal' : 'Student Login'}
          </CardTitle>
          <CardDescription>
            {isAdmin ? 'Access academy management tools' : 'Enter your credentials to access your dashboard'}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input id="email" type="email" placeholder="name@example.com" className="pl-10 h-12 glass border-border/50" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" size="sm" className="text-xs text-primary hover:underline">Forgot password?</Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input id="password" type="password" className="pl-10 h-12 glass border-border/50" />
          </div>
        </div>
        <Button className={`w-full h-12 text-background font-bold text-lg ${isAdmin ? 'bg-secondary hover:bg-secondary/90' : 'gold-gradient'}`} asChild>
          <Link href={isAdmin ? "/admin/dashboard" : "/dashboard"}>
            {isAdmin ? 'Login to Dashboard' : 'Sign In'} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </CardContent>
      <CardFooter className="justify-center border-t border-border/50 mt-4 pt-6">
        <p className="text-sm text-muted-foreground">
          {isAdmin ? (
            <Link href="/login" className="text-primary hover:underline">Switch to Student Login</Link>
          ) : (
            <>Don't have an account? <Link href="/register" className="text-primary font-bold hover:underline">Enroll Now</Link></>
          )}
        </p>
      </CardFooter>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4 pt-32 pb-20">
        <div className="w-full max-w-md relative">
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          
          <Suspense fallback={<div className="h-96 w-full flex items-center justify-center bg-card rounded-lg border shadow">Loading...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
