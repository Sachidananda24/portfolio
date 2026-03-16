/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Code, 
  Layout, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => (
  <motion.a 
    href="/"
    onClick={(e) => {
      e.preventDefault();
      window.location.reload();
    }}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`flex items-center gap-4 group cursor-pointer ${className}`}
  >
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Creative Frame */}
      <div className="absolute inset-0 border border-gold/30 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
      <div className="absolute inset-0 border border-gold/60 -rotate-45 group-hover:-rotate-0 transition-transform duration-500" />
      <span className="font-serif text-xl font-bold text-gold tracking-tighter relative z-10">SS</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-serif font-bold tracking-[0.1em] text-white group-hover:text-gold transition-colors">Sachidananda Sahoo</span>
      <span className="text-[9px] uppercase tracking-[0.3em] text-gold-muted -mt-0.5">Web Designer</span>
    </div>
  </motion.a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-luxury-gray border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-white/80 hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-gold uppercase tracking-[0.3em] text-xs mb-6 font-semibold"
          >
            Premium Web Design Services
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8">
            I Design <span className="inline-block px-4 py-2 bg-gold text-black -rotate-1 transform transition-transform hover:rotate-0">Bold & Luxury</span> Websites That Grow Your Business.
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
            Zero upfront payment. High-converting designs tailored for gyms, restaurants, and local businesses.
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-colors"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative group shadow-2xl shadow-gold/10">
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczMQuSKhvu1QHdrSMhQIE8QOUfTQbz8kvXnmRDAH6Alf1pwYlPnV5qz95aWIcHB1wxYDyw4N46uqnfWRyJpfaBauE_5M9SasIxLgmc3fovroTxkxtnRq_bObad3HXAqeWeK4E2z2Bal3pgLOgv_4g-w_=w609-h913-s-no-gm?authuser=0" 
              alt="Sachidananda Sahoo - Freelance Web Designer" 
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-luxury-gray/80 backdrop-blur-md border border-white/10 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold font-bold">Based in</p>
                  <p className="text-lg font-serif">Odisha, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold/30" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold/30" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-luxury-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-6">The Designer</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Crafting Digital Experiences with <span className="italic">Precision</span> & <span className="text-gold">Style</span>.
            </h3>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                I'm Sachidananda Sahoo, a freelance web designer dedicated to helping local and international businesses stand out with premium, high-converting websites.
              </p>
              <p>
                Specializing in gyms, restaurants, and local businesses, I combine clean code (HTML, CSS, JavaScript) with bold aesthetics to create websites that don't just look good—they perform.
              </p>
              <p className="text-white">
                My unique approach? <span className="text-gold font-bold">Zero upfront payment.</span> I believe in building trust through results.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'HTML5', icon: <Code className="w-6 h-6" /> },
              { label: 'CSS3', icon: <Layout className="w-6 h-6" /> },
              { label: 'JavaScript', icon: <Zap className="w-6 h-6" /> },
              { label: 'Responsive', icon: <Smartphone className="w-6 h-6" /> },
            ].map((skill, i) => (
              <div key={i} className="p-8 bg-luxury-gray border border-white/5 rounded-2xl hover:border-gold/30 transition-colors group">
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h4 className="font-bold tracking-widest uppercase text-xs">{skill.label}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Landing Page Design',
      desc: 'High-converting single-page websites designed to turn visitors into customers.',
      icon: <Layout className="w-10 h-10" />
    },
    {
      title: 'Website Redesign',
      desc: 'Transform your outdated site into a modern, luxury digital storefront.',
      icon: <Zap className="w-10 h-10" />
    },
    {
      title: 'Custom Business Websites',
      desc: 'Tailored solutions for gyms, restaurants, and local service providers.',
      icon: <Code className="w-10 h-10" />
    },
    {
      title: 'Conversion-Focused Design',
      desc: 'Strategic layouts and copy designed to maximize your business growth.',
      icon: <ArrowRight className="w-10 h-10" />
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-4">Services</h2>
          <h3 className="text-4xl md:text-5xl font-serif">What I Can Do For You</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-luxury-gray border border-white/5 rounded-3xl hover:bg-gold/5 hover:border-gold/20 transition-all group"
            >
              <div className="text-gold mb-8 group-hover:translate-y-[-4px] transition-transform">{s.icon}</div>
              <h4 className="text-xl font-serif mb-4">{s.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: 'Luxury Gym Website',
      category: 'Fitness & Wellness',
      desc: 'A bold, dark-themed website for a premium fitness club with integrated booking.',
      img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Modern Restaurant',
      category: 'Hospitality',
      desc: 'Elegant digital menu and reservation system for a high-end dining experience.',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Business Landing Page',
      category: 'Corporate',
      desc: 'Conversion-optimized landing page for a local service provider.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-luxury-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Selected Works</h3>
          </div>
          <p className="text-white/50 max-w-sm">
            A glimpse into the bold and luxury digital experiences I've crafted for my clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/5">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold text-black flex items-center justify-center">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <p className="text-gold text-xs uppercase tracking-widest font-bold mb-2">{p.category}</p>
              <h4 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">{p.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseMe = () => {
  const reasons = [
    'Zero Upfront Payment',
    'Creative & Flexible Pricing',
    'Bold Luxury Design',
    'Clean Code (HTML/CSS/JS)',
    'Direct Communication',
    'Conversion Focused'
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-6">The Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
              Why Work With <span className="text-gradient-gold italic">Me?</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-white/80 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-luxury-gray border border-gold/20 rounded-3xl relative"
          >
            <div className="absolute -top-4 -left-4 px-6 py-2 bg-gold text-black text-xs font-bold uppercase tracking-widest">
              Pricing Model
            </div>
            <h4 className="text-3xl font-serif mb-6">Flexible & Creative Pricing</h4>
            <p className="text-white/60 leading-relaxed mb-8">
              I don't believe in rigid, one-size-fits-all pricing. Every business is unique, and so is my approach to billing. We'll find a creative model that works for your budget and goals.
            </p>
            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
              <p className="text-gold font-bold uppercase tracking-widest text-xs mb-2">The Commitment</p>
              <p className="text-white italic">"I only get paid when you are 100% satisfied with the result. No risks, just results."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-6">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">Let's Build Something <span className="text-gold">Iconic</span>.</h3>
            <p className="text-white/60 text-lg mb-12">
              Ready to elevate your business with a luxury digital presence? Reach out today for a free consultation.
            </p>

            <div className="space-y-8">
              <a href="mailto:sahoosachidananda25@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-luxury-gray border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Email Me</p>
                  <p className="text-lg font-medium">sahoosachidananda25@gmail.com</p>
                </div>
              </a>
              
              <div className="flex gap-6">
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/_sachidananda/', label: 'Instagram' },
                  { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/sachidanandasahoo/', label: 'LinkedIn' },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-luxury-gray p-10 rounded-3xl border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option className="bg-luxury-gray">New Project</option>
                  <option className="bg-luxury-gray">Website Redesign</option>
                  <option className="bg-luxury-gray">Consultation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button className="w-full py-5 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
                Send Message
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <Logo className="scale-90 origin-left" />
        
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Sachidananda Sahoo. All rights reserved.
        </p>

        <div className="flex gap-8">
          <a href="#about" className="text-xs uppercase tracking-widest text-white/40 hover:text-gold transition-colors">About</a>
          <a href="#portfolio" className="text-xs uppercase tracking-widest text-white/40 hover:text-gold transition-colors">Work</a>
          <a href="#contact" className="text-xs uppercase tracking-widest text-white/40 hover:text-gold transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
