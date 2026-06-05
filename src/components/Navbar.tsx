
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, User, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Offline Classes', href: '/offline-training' },
    { name: 'Online Courses', href: '/courses' },
    { name: 'Mentorship', href: '/mentorship' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-xl tracking-tighter text-primary leading-none">
                  MSQUARE
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Academy
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-border mx-2" />
            
            <Link href="/admin/dashboard" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Admin Dashboard
            </Link>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full px-4 border-primary/20" asChild>
                <Link href="/login?role=admin">Admin Login</Link>
              </Button>
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6" asChild>
                <Link href="/login" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Student Portal
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block text-lg font-medium py-2 border-b border-border/50" 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/admin/dashboard" 
              className="block text-sm font-bold text-muted-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              Admin Dashboard
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="w-full" asChild onClick={() => setIsOpen(false)}>
                <Link href="/login?role=admin">Admin Login</Link>
              </Button>
              <Button className="w-full bg-primary text-primary-foreground font-bold" asChild onClick={() => setIsOpen(false)}>
                <Link href="/login">Student Login</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
