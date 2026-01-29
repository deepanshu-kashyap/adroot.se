import React from 'react';
import { 
  ArrowRight, BarChart3, Target, Share2, Search, 
  Linkedin, Zap, TrendingUp, Users, CheckCircle2, 
  Globe, MousePointer2, Mail, Instagram, ShieldCheck, Rocket
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter text-white italic">ADROOT<span className="text-blue-500">.SE</span></div>
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#philosophy" className="hover:text-blue-400 transition-colors">Philosophy</a>
            <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
            <a href="#team" className="hover:text-blue-400 transition-colors">Team</a>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-500 transition-all glow-blue">
            Book a Growth Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Performance-First Growth Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-8">
              We scale brands with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">profit</span>, not promises.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
              Adroot AB is a performance-first digital growth partner for ecommerce companies in Sweden and Europe. We focus on margins, not just clicks.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="bg-white text-black px-10 py-4 rounded-full flex items-center gap-3 font-bold hover:scale-105 transition-all shadow-xl">
                Book a growth call <ArrowRight size={18} />
              </button>
              <button className="border border-white/10 px-10 py-4 rounded-full font-bold hover:bg-white/5 transition-all text-white">
                Our Methodology
              </button>
            </div>
          </div>

          {/* Aesthetic Performance Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="glass p-10 rounded-[2rem] relative">
              <div className="flex justify-between items-center mb-10">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 italic font-black">ADROOT STATS</div>
                <div className="text-green-400 flex items-center gap-1 font-bold text-sm">
                  <TrendingUp size={16} /> +80% YoY
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Google Ads</div>
                  <div className="text-3xl font-black text-white italic">10+ ROAS</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Meta Ads</div>
                  <div className="text-3xl font-black text-white italic">20+ ROAS</div>
                </div>
              </div>
              <div className="mt-10 pt-10 border-t border-white/5 text-xs text-slate-500 italic">
                Trusted by Swedish ecommerce brands to deliver profitable scale year after year.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto border-l border-blue-500/30 pl-8 md:pl-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Strategy That Actually Gets Used</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <p className="text-xl text-slate-400 leading-relaxed italic">
              "Strategy shouldn’t live in a slide deck. We work hands-on with founders and CMOs to define where to compete and how to scale without breaking the business."
            </p>
            <ul className="space-y-6">
              {[
                "Market entry strategy (Nordics & EU)",
                "Offer and pricing architecture",
                "Messaging frameworks that convert",
                "Scalable content systems"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-semibold">
                  <CheckCircle2 size={20} className="text-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-4">
            {[
              { title: 'Performance', icon: <BarChart3 />, desc: 'Most ad accounts fail because they scale before fixing structure. We fix the structure first.' },
              { title: 'Strategy', icon: <Target />, desc: 'We help brands answer: Who are we really for? Why should customers choose us?' },
              { title: 'Social Content', icon: <Share2 />, desc: 'Content is not an art project. It’s a growth lever build to support paid performance.' },
              { title: 'AI Search', icon: <Search />, desc: 'Ranking on Google is no longer enough. We win visibility on ChatGPT and Gemini.' }
            ].map((s, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed italic">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Workflow / Process Section */}
      <section id="process" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Simple. Disciplined. Effective.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01. Diagnose', text: 'We audit your growth engine: channels, data, margins, and bottlenecks.' },
              { step: '02. Build', text: 'We redesign structure, messaging, creatives, and performance strategy.' },
              { step: '03. Scale', text: 'We grow only what is profitable and fix what breaks along the way.' }
            ].map((item, i) => (
              <div key={i} className="p-12 glass rounded-[3rem] border-white/5">
                <div className="text-5xl font-black text-white/5 mb-6">{item.step.split('.')[0]}</div>
                <h3 className="text-2xl font-bold text-white mb-4 italic">{item.step.split('.')[1]}</h3>
                <p className="text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Photo */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">People Behind the Results</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Yash Kumar', role: 'Founder & CEO', bio: '8+ years experience, €10M+ managed ad spend.', image: '/yash.jpeg' },
              { name: 'Kjartan Monstad', role: 'Content Director', bio: 'Connecting brand, creative, and conversion systems.', image: '/kjartan.jpeg' },
              { name: 'Ceren Kartal', role: 'Creative Director', bio: 'Designing visual systems that convert while strengthening identity.' }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 bg-slate-800 rounded-full mx-auto mb-8 border-4 border-white/5 group-hover:border-blue-500/50 transition-all overflow-hidden relative">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm max-w-xs mx-auto mb-6">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <Linkedin size={18} className="text-slate-600 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
          <div className="col-span-1">
            <div className="text-2xl font-black text-white italic mb-6">ADROOT<span className="text-blue-500">.SE</span></div>
            <p className="text-sm text-slate-500 leading-relaxed italic mb-8">
              If you’re serious about growth and tired of guesswork, let’s talk.
            </p>
            <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-slate-200 transition-all">
              Book a growth call
            </button>
          </div>
          <div className="grid grid-cols-2 col-span-2 gap-10">
            <div className="space-y-4 text-sm">
              <div className="font-bold text-white uppercase text-[10px] tracking-widest">Solutions</div>
              <div className="flex flex-col gap-2 italic">
                <a href="#" className="hover:text-white">Performance Marketing</a>
                <a href="#" className="hover:text-white">Strategy & Branding</a>
                <a href="#" className="hover:text-white">Social & Content</a>
                <a href="#" className="hover:text-white">SEO & GEO</a>
              </div>
            </div>
            <div className="space-y-4 text-sm">
              <div className="font-bold text-white uppercase text-[10px] tracking-widest">Company</div>
              <div className="flex flex-col gap-2 italic">
                <a href="#" className="hover:text-white">About Us</a>
                <a href="#" className="hover:text-white">Case Studies</a>
                <a href="#" className="hover:text-white">Contact</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-[10px] uppercase font-bold tracking-[0.3em] text-slate-600 text-center">
          © 2026 Adroot AB. Built for Profit. Delivered with Discipline.
        </div>
      </footer>
    </main>
  );
}