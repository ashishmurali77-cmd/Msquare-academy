
"use client";

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Video, 
  FileText, 
  Users, 
  Calendar, 
  Plus, 
  Trash2, 
  Edit, 
  TrendingUp,
  CreditCard,
  Youtube,
  Layout,
  Layers,
  CheckCircle2,
  BrainCircuit,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { extractYouTubeId } from '@/lib/youtube';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

export default function AdminDashboard() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [extractedId, setExtractedId] = useState<string | null>(null);

  const handleYoutubeUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setYoutubeUrl(url);
    setExtractedId(extractYouTubeId(url));
  };

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const openWhatsApp = (phone: string) => {
    window.open(`https://wa.me/91${phone.replace(/\D/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      <div className="pt-24 max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold text-primary">Admin Control Panel</h1>
            <p className="text-muted-foreground">Comprehensive management for MSquare Academy.</p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-secondary text-white gap-2 h-11 px-6 shadow-lg shadow-secondary/20">
              <Plus className="w-4 h-4" /> Quick New Module
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total Revenue', value: '₹4.2 Lakh', icon: CreditCard, color: 'text-blue-500' },
            { label: 'Active Students', value: '154', icon: Users, color: 'text-green-500' },
            { label: 'Offline Bookings', value: '12', icon: Calendar, color: 'text-orange-500' },
            { label: 'Course Sales', value: '28', icon: TrendingUp, color: 'text-purple-500' },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm overflow-hidden group">
              <CardContent className="p-6 flex items-center justify-between relative">
                <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                   <stat.icon className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-muted ${stat.color} relative z-10`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-xl border border-border flex w-full md:w-fit overflow-x-auto">
            <TabsTrigger value="courses" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white gap-2">
              <Layout className="w-4 h-4" /> Courses & Content
            </TabsTrigger>
            <TabsTrigger value="offline" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white gap-2">
              <Calendar className="w-4 h-4" /> Offline Batches
            </TabsTrigger>
            <TabsTrigger value="mentorship" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white gap-2">
              <BrainCircuit className="w-4 h-4" /> Mentorship Apps
            </TabsTrigger>
            <TabsTrigger value="students" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white gap-2">
              <Users className="w-4 h-4" /> Students
            </TabsTrigger>
            <TabsTrigger value="payments" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white gap-2">
              <CreditCard className="w-4 h-4" /> Payments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between border-b pb-6">
                    <div>
                      <CardTitle>Course & Module Inventory</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">Structure your online curriculum.</p>
                    </div>
                    <Button variant="outline" className="gap-2 border-primary/20">
                      <Plus className="w-4 h-4" /> New Course
                    </Button>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {[
                        { title: 'Stock Market Mastery', lessons: 12, modules: 4, students: 58, id: 1 },
                        { title: 'Advanced Price Action', lessons: 8, modules: 2, students: 42, id: 2 },
                      ].map((course) => (
                        <div key={course.id} className="p-6 hover:bg-muted/5 transition-colors">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                                {course.title.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-bold">{course.title}</h4>
                                <p className="text-xs text-muted-foreground">{course.students} Enrolled Students</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm" className="h-8 gap-1"><Layers className="w-3 h-3" /> Modules</Button>
                              <Button variant="ghost" size="sm" className="h-8 gap-1"><Edit className="w-3 h-3" /> Edit</Button>
                            </div>
                          </div>
                          <div className="pl-16 space-y-2">
                             <div className="flex items-center justify-between p-2 rounded-lg border bg-muted/30 text-xs">
                               <span className="font-medium">Module 1: Market Fundamentals</span>
                               <span className="text-muted-foreground">3 Lessons</span>
                             </div>
                             <div className="flex items-center justify-between p-2 rounded-lg border bg-muted/30 text-xs">
                               <span className="font-medium">Module 2: Technical Charting</span>
                               <span className="text-muted-foreground">5 Lessons</span>
                             </div>
                             <Button variant="ghost" size="sm" className="text-primary hover:text-primary text-[10px] h-6 font-bold uppercase tracking-widest">+ Add Module</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20 shadow-lg ring-1 ring-primary/5">
                  <CardHeader className="bg-primary/5 rounded-t-lg">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Plus className="w-5 h-5 text-primary" /> 
                      Add New Lesson
                    </CardTitle>
                    <CardDescription>Link YouTube videos & PDF materials.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-2">
                      <Label>Target Course & Module</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Select defaultValue="c1">
                          <SelectTrigger>
                            <SelectValue placeholder="Course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="c1">Stock Market Mastery</SelectItem>
                            <SelectItem value="c2">Price Action</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select defaultValue="m1">
                          <SelectTrigger>
                            <SelectValue placeholder="Module" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="m1">Module 1</SelectItem>
                            <SelectItem value="m2">Module 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Lesson Title</Label>
                      <Input placeholder="e.g., Intro to Candlestick Patterns" />
                    </div>

                    <div className="space-y-2">
                      <Label>YouTube URL (Unlisted)</Label>
                      <div className="relative">
                        <Youtube className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input 
                          className="pl-10 focus:ring-red-500 border-red-500/20" 
                          placeholder="https://youtube.com/watch?v=..." 
                          value={youtubeUrl}
                          onChange={handleYoutubeUrlChange}
                        />
                      </div>
                      {extractedId && (
                        <div className="flex items-center gap-2 mt-1 px-2 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                          <CheckCircle2 className="w-3 h-3 text-green-600" />
                          <p className="text-[10px] text-green-700 font-bold">Extracted ID: {extractedId}</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Lesson Description</Label>
                      <Textarea placeholder="What will students learn?" className="h-20 resize-none" />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <FileText className="w-4 h-4" /> PDF Notes URL
                      </Label>
                      <Input placeholder="Drive or S3 Link" />
                    </div>

                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 shadow-md">
                      Publish Lesson
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mentorship">
             <Card>
               <CardHeader>
                 <CardTitle>Mentorship Applications</CardTitle>
                 <CardDescription>Review and manage 1-on-1 mentorship requests.</CardDescription>
               </CardHeader>
               <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Experience</TableHead>
                        <TableHead>Challenges</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                       {[
                         { id: '1', name: 'Arjun S', phone: '7293106490', email: 'arjun@example.com', exp: '6 months', challenge: 'Consistent entries', status: 'pending', date: 'Sep 25, 2023' },
                         { id: '2', name: 'Meera K', phone: '9447530378', email: 'meera@gmail.com', exp: 'Beginner', challenge: 'Fear of loss', status: 'accepted', date: 'Sep 24, 2023' },
                       ].map((app) => (
                         <TableRow key={app.id}>
                           <TableCell>
                             <div className="flex flex-col">
                               <span className="font-bold">{app.name}</span>
                               <span className="text-[10px] text-muted-foreground">{app.email}</span>
                             </div>
                           </TableCell>
                           <TableCell>{app.exp}</TableCell>
                           <TableCell className="max-w-[200px] truncate" title={app.challenge}>{app.challenge}</TableCell>
                           <TableCell>
                             <Badge variant={app.status === 'accepted' ? 'secondary' : 'outline'} className="capitalize">
                               {app.status}
                             </Badge>
                           </TableCell>
                           <TableCell className="text-xs text-muted-foreground">{app.date}</TableCell>
                           <TableCell className="text-right">
                             <div className="flex justify-end gap-2">
                               <Button variant="outline" size="icon" onClick={() => openWhatsApp(app.phone)} className="border-green-500/30 text-green-600 hover:bg-green-50">
                                 <MessageCircle className="w-4 h-4" />
                               </Button>
                               <Button variant="ghost" size="sm" className="text-primary font-bold">Manage</Button>
                             </div>
                           </TableCell>
                         </TableRow>
                       ))}
                    </TableBody>
                  </Table>
               </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="offline">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Upcoming Offline Batches</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <Table>
                     <TableHeader>
                       <TableRow>
                         <TableHead>Course</TableHead>
                         <TableHead>Start Date</TableHead>
                         <TableHead>Timing</TableHead>
                         <TableHead>Seats</TableHead>
                         <TableHead>Status</TableHead>
                         <TableHead></TableHead>
                       </TableRow>
                     </TableHeader>
                     <TableBody>
                        {[
                          { course: 'Beginner Mastery', date: '01 Oct 2023', time: '10 AM', seats: '12/15', status: 'Almost Full' },
                          { course: 'Price Action', date: '15 Oct 2023', time: '2 PM', seats: '12/12', status: 'Full' },
                        ].map((b, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{b.course}</TableCell>
                            <TableCell>{b.date}</TableCell>
                            <TableCell>{b.time}</TableCell>
                            <TableCell>{b.seats}</TableCell>
                            <TableCell>
                              <Badge variant={b.status === 'Full' ? 'destructive' : 'secondary'}>{b.status}</Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">Edit</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                     </TableBody>
                   </Table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Create New Batch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="space-y-2">
                     <Label>Course Name</Label>
                     <Input />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <Label>Start Date</Label>
                       <Input type="date" />
                     </div>
                     <div className="space-y-2">
                       <Label>Total Seats</Label>
                       <Input type="number" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <Label>Class Timing</Label>
                     <Input placeholder="e.g., 10:00 AM - 12:30 PM" />
                   </div>
                   <Button className="w-full bg-primary text-white font-bold h-12">Create Batch</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students">
             <Card>
               <CardHeader className="flex flex-row items-center justify-between">
                 <div>
                   <CardTitle>Registered Students</CardTitle>
                   <CardDescription>View all online and offline learners.</CardDescription>
                 </div>
                 <div className="flex gap-2">
                   <Input placeholder="Search students..." className="w-64" />
                 </div>
               </CardHeader>
               <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Courses</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                       {[
                         { name: 'Arjun S', email: 'arjun@example.com', role: 'Student', count: 2, joined: 'Sep 12, 2023' },
                         { name: 'Meera K', email: 'meera@gmail.com', role: 'Student', count: 1, joined: 'Sep 15, 2023' },
                       ].map((s, i) => (
                         <TableRow key={i}>
                           <TableCell className="font-bold">{s.name}</TableCell>
                           <TableCell className="text-muted-foreground">{s.email}</TableCell>
                           <TableCell><Badge variant="outline">{s.role}</Badge></TableCell>
                           <TableCell>{s.count} Courses</TableCell>
                           <TableCell>{s.joined}</TableCell>
                           <TableCell>
                             <Button variant="ghost" size="icon"><Edit className="w-4 h-4" /></Button>
                           </TableCell>
                         </TableRow>
                       ))}
                    </TableBody>
                  </Table>
               </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="payments">
             <Card>
               <CardHeader>
                 <CardTitle>Recent Transactions</CardTitle>
                 <CardDescription>Track online sales and offline batch reservations.</CardDescription>
               </CardHeader>
               <CardContent className="p-0">
                 <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Transaction ID</TableHead>
                        <TableHead>Student</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                       {[
                         { tid: 'TXN-9485', student: 'Arjun S', amount: formatINR(10000), method: 'UPI (GPay)', status: 'Success', date: 'Sep 24, 2023' },
                         { tid: 'TXN-9321', student: 'Meera K', amount: formatINR(1500), method: 'Razorpay', status: 'Success', date: 'Sep 22, 2023' },
                         { tid: 'TXN-9112', student: 'Rahul V', amount: formatINR(5000), method: 'Bank Transfer', status: 'Pending', date: 'Sep 20, 2023' },
                       ].map((p, i) => (
                         <TableRow key={i}>
                           <TableCell className="font-mono text-xs">{p.tid}</TableCell>
                           <TableCell className="font-bold">{p.student}</TableCell>
                           <TableCell className="font-bold text-primary">{p.amount}</TableCell>
                           <TableCell>{p.method}</TableCell>
                           <TableCell>
                             <Badge className={p.status === 'Success' ? 'bg-green-500' : 'bg-orange-500'}>{p.status}</Badge>
                           </TableCell>
                           <TableCell className="text-muted-foreground">{p.date}</TableCell>
                         </TableRow>
                       ))}
                    </TableBody>
                  </Table>
               </CardContent>
             </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
