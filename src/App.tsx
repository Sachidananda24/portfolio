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
  ChevronRight,
  Quote
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
      <span className="text-sm font-serif font-bold tracking-[0.1em] text-[#E5E7EB] group-hover:text-gold transition-colors">Sachidananda Sahoo</span>
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-deep/80 backdrop-blur-md border-b border-white/5">
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
              className="text-sm uppercase tracking-widest text-text-secondary hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-gold text-gold px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-colors"
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
            className="md:hidden bg-bg-secondary border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-[#E5E7EB]/80 hover:text-gold"
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
    <>
    <section className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-32 hero-glow overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      
      {/* Large Decorative Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden -z-10 opacity-[0.02]">
        <span className="text-[40vw] font-serif font-bold text-gold leading-none">SS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerVariants}
          >
            <motion.span 
              variants={sectionVariants}
              className="inline-block text-gold uppercase tracking-[0.4em] text-sm mb-8 font-bold"
            >
              Results-Driven Web Design
            </motion.span>
            <motion.h1 variants={sectionVariants} className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.95] mb-12 tracking-tighter text-text-primary">
              I Design Modern Websites That <span className="text-gold italic">Help Businesses Grow.</span>
            </motion.h1>
            <motion.p variants={sectionVariants} className="text-xl md:text-2xl text-text-secondary mb-14 max-w-xl leading-relaxed font-light">
              Fast, responsive, and conversion-focused designs with no upfront cost. Let's build your digital storefront.
            </motion.p>
            <motion.div variants={sectionVariants} className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                variants={buttonVariants}
                whileHover="hover"
                className="bg-gold text-black px-8 py-3 rounded-lg font-bold text-lg transition-all shadow-lg shadow-gold/10"
              >
                Start Your Project
              </motion.a>
              <motion.a 
                href="#portfolio" 
                variants={buttonVariants}
                whileHover="hover"
                className="border border-gold text-gold px-10 py-3 rounded-lg font-bold text-lg hover:bg-gold hover:text-black transition-all"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full -z-10" />
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative group shadow-2xl shadow-gold/10">
            <img 
              src="https://lh3.googleusercontent.com/pw/AP1GczMQuSKhvu1QHdrSMhQIE8QOUfTQbz8kvXnmRDAH6Alf1pwYlPnV5qz95aWIcHB1wxYDyw4N46uqnfWRyJpfaBauE_5M9SasIxLgmc3fovroTxkxtnRq_bObad3HXAqeWeK4E2z2Bal3pgLOgv_4g-w_=w609-h913-s-no-gm?authuser=0" 
              alt="Sachidananda Sahoo - Freelance Web Designer" 
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent opacity-60" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-bg-card/80 backdrop-blur-md border border-white/10 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold font-bold">Based in</p>
                  <p className="text-lg font-serif text-[#E5E7EB]">Odisha, India</p>
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
    <div className="glow-divider" />
    </>
  );
};

const About = () => {
  return (
    <>
    <section id="about" className="section-spacing section-glow-blue">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerVariants}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            variants={sectionVariants}
          >
            <h2 className="text-xs uppercase tracking-[0.6em] text-gold font-bold mb-8 opacity-80">About</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-10 leading-tight text-text-primary">
              Your Partner in Digital Growth
            </h3>
            <div className="space-y-8 text-text-secondary leading-relaxed text-lg font-light">
              <p>
                I help local and international businesses turn visitors into loyal customers with high-performance, conversion-focused websites.
              </p>
              <p>
                Whether you're a gym, restaurant, or service provider, I combine modern UI design with clean code to ensure your business thrives online.
              </p>
              <p className="text-text-primary">
                My commitment: <span className="text-gold font-bold">Fast delivery, mobile optimization, and no upfront cost.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'HTML5', icon: <Code className="w-6 h-6" /> },
              { label: 'CSS3', icon: <Layout className="w-6 h-6" /> },
              { label: 'JavaScript', icon: <Zap className="w-6 h-6" /> },
              { label: 'Responsive', icon: <Smartphone className="w-6 h-6" /> },
            ].map((skill, i) => (
              <motion.div 
                key={i}
                variants={cardVariants}
                whileHover="hover"
                className="p-8 luxury-card group"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h4 className="font-bold tracking-widest uppercase text-xs text-text-primary">{skill.label}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
    <div className="glow-divider" />
    </>
  );
};

const Services = () => {
  const services = [
    {
      title: 'High-Converting Landing Pages',
      desc: 'Designed strategically to turn your visitors into paying customers.',
      icon: <Layout className="w-8 h-8" />
    },
    {
      title: 'Modern Website Redesigns',
      desc: 'Transform your outdated site into a high-performance digital asset.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Custom Business Websites',
      desc: 'Tailored solutions for gyms, restaurants, and service providers.',
      icon: <Code className="w-8 h-8" />
    },
    {
      title: 'Strategic Design & Copy',
      desc: 'Layouts and content built to maximize your business revenue.',
      icon: <ArrowRight className="w-8 h-8" />
    }
  ];

  return (
    <>
    <section id="services" className="section-spacing section-glow-purple">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerVariants}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div variants={sectionVariants} className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.6em] text-gold font-bold mb-6 opacity-80">Services</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-text-primary">What I Can Do For You</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              className="p-10 luxury-card group"
            >
              <div className="text-gold mb-8 group-hover:translate-y-[-4px] transition-transform">{s.icon}</div>
              <h4 className="text-xl font-serif mb-4 text-text-primary">{s.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    <div className="glow-divider" />
    </>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: 'Luxury Gym Website',
      category: 'Fitness & Wellness',
      desc: 'Premium fitness club site. Solved the problem of low online sign-ups with a bold, integrated booking experience.',
      img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Modern Restaurant',
      category: 'Hospitality',
      desc: 'High-end hospitality site. Solved the problem of manual reservations with an elegant, automated booking system.',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Business Landing Page',
      category: 'Corporate',
      desc: 'Service provider landing page. Solved low lead generation with a conversion-optimized design.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <>
    <section id="portfolio" className="section-spacing bg-bg-primary">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerVariants}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div variants={sectionVariants} className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div>
            <h2 className="text-xs uppercase tracking-[0.6em] text-gold font-bold mb-6 opacity-80">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-text-primary">Selected Works</h3>
          </div>
          <p className="text-text-muted max-w-sm font-light">
            A glimpse into the bold and luxury digital experiences I've crafted for my clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/5">
                <motion.img 
                  variants={imageVariants}
                  whileHover="hover"
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold text-black flex items-center justify-center">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <p className="text-gold text-xs uppercase tracking-widest font-bold mb-2">{p.category}</p>
              <h4 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors text-text-primary">{p.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    <div className="glow-divider" />
    </>
  );
};

const WhyChooseMe = () => {
  const reasons = [
    'Fast Delivery: Get your business online quickly.',
    'Clean Modern Design: Build instant credibility.',
    'Easy Communication: No technical jargon.',
    'Client-Focused: Your goals are my priority.'
  ];

  return (
    <>
    <section className="section-spacing relative overflow-hidden bg-bg-secondary">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerVariants}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div variants={sectionVariants}>
            <h2 className="text-xs uppercase tracking-[0.6em] text-gold font-bold mb-8 opacity-80">Advantage</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-12 leading-tight text-text-primary">
              Why Work With <span className="text-gradient-gold italic">Me?</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i}
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-center gap-4 p-6 luxury-card"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-text-secondary font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            className="p-12 luxury-card relative border-gold/20"
          >
            <div className="absolute -top-4 -left-4 px-6 py-2 bg-gold text-black text-xs font-bold uppercase tracking-widest">
              Pricing Model
            </div>
            <h4 className="text-3xl font-serif mb-6 text-text-primary">Flexible & Creative Pricing</h4>
            <p className="text-text-muted leading-relaxed mb-8">
              I don't believe in rigid, one-size-fits-all pricing. Every business is unique, and so is my approach to billing. We'll find a creative model that works for your budget and goals.
            </p>
            <div className="p-6 bg-white/5 rounded-xl border border-white/5">
              <p className="text-gold font-bold uppercase tracking-widest text-xs mb-2">The Commitment</p>
              <p className="text-text-primary italic">"I only get paid when you are 100% satisfied with the result. No risks, just results."</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
    <div className="glow-divider" />
    </>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Gym Owner",
      text: "Sachidananda transformed our online presence. The new site is fast, bold, and our member sign-ups have increased by 40% since launch.",
      avatar: "AR"
    },
    {
      name: "Sarah Jenkins",
      role: "Restaurant Founder",
      text: "The luxury feel of our website now matches our dining experience perfectly. Professional, responsive, and very easy to work with.",
      avatar: "SJ"
    },
    {
      name: "David Chen",
      role: "Tech Startup CEO",
      text: "Incredible attention to detail. He understood our vision immediately and delivered a high-converting landing page ahead of schedule.",
      avatar: "DC"
    }
  ];

  return (
    <>
    <section id="testimonials" className="section-spacing section-glow-blue">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerVariants}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div variants={sectionVariants} className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.6em] text-gold font-bold mb-6 opacity-80">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-text-primary mb-4">What Clients Say</h3>
          <p className="text-text-muted max-w-md mx-auto font-light">Feedback from people I’ve worked with</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover="hover"
              className="luxury-card p-8 flex flex-col relative group"
            >
              <Quote className="absolute top-6 right-8 w-8 h-8 text-gold/10 group-hover:text-gold/20 transition-colors" />
              
              <p className="text-text-secondary leading-relaxed mb-8 italic relative z-10">
                "{t.text}"
              </p>

              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-deep border border-white/10 flex items-center justify-center text-gold font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">{t.name}</h4>
                  <p className="text-xs text-text-muted uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
    <div className="glow-divider" />
    </>
  );
};

const Contact = () => {
  return (
    <>
    <section id="contact" className="section-spacing bg-bg-secondary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerVariants}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Branding & Info */}
          <motion.div variants={sectionVariants} className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-gold to-blue-500 rounded-full blur-sm opacity-50" />
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 relative">
                    <img 
                      src="https://lh3.googleusercontent.com/pw/AP1GczMQuSKhvu1QHdrSMhQIE8QOUfTQbz8kvXnmRDAH6Alf1pwYlPnV5qz95aWIcHB1wxYDyw4N46uqnfWRyJpfaBauE_5M9SasIxLgmc3fovroTxkxtnRq_bObad3HXAqeWeK4E2z2Bal3pgLOgv_4g-w_=w609-h913-s-no-gm?authuser=0" 
                      alt="Sachidananda Sahoo" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <div className="w-2 h-2 rounded-full bg-green-500 pulse-green" />
                    <span className="text-[10px] uppercase tracking-widest text-green-500 font-bold">Available for freelance work</span>
                  </div>
                  <h2 className="text-xs uppercase tracking-[0.6em] text-gold font-bold opacity-80">Contact</h2>
                </div>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif leading-tight text-text-primary">
                Have a project in mind? <span className="text-gold italic">Let's talk.</span>
              </h3>
              
              <p className="text-text-secondary text-lg font-light leading-relaxed max-w-md">
                Ready to elevate your business with a high-performance digital presence? Reach out today for a free consultation.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a 
                whileHover={{ y: -5 }}
                href="mailto:sahoosachidananda25@gmail.com" 
                className="block mt-10 p-8 bg-bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl group hover:border-gold/30 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted mb-1 font-bold">Direct Email</p>
                    <p className="text-xl font-medium text-text-primary group-hover:text-gold transition-colors">sahoosachidananda25@gmail.com</p>
                  </div>
                </div>
              </motion.a>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/_sachidananda/', label: 'Instagram' },
                  { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/sachidanandasahoo/', label: 'LinkedIn' },
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -3, boxShadow: "0 0 20px rgba(212, 175, 55, 0.15)" }}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 rounded-xl bg-bg-card/40 border border-white/5 text-text-secondary hover:text-gold hover:border-gold/30 transition-all font-bold text-sm tracking-widest uppercase"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            variants={sectionVariants}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-[60px] -z-10" />
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 pt-7 focus:outline-none focus:border-gold focus:bg-white/10 transition-all text-text-primary placeholder-transparent"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-6 top-2 text-[10px] text-gold uppercase tracking-widest font-bold transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-bold"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 pt-7 focus:outline-none focus:border-gold focus:bg-white/10 transition-all text-text-primary placeholder-transparent"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-6 top-2 text-[10px] text-gold uppercase tracking-widest font-bold transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-bold"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <select 
                  id="subject"
                  className="peer w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 pt-7 focus:outline-none focus:border-gold focus:bg-white/10 transition-all text-text-primary appearance-none"
                >
                  <option className="bg-bg-card">New Project Inquiry</option>
                  <option className="bg-bg-card">Website Redesign</option>
                  <option className="bg-bg-card">Consultation Call</option>
                  <option className="bg-bg-card">Other</option>
                </select>
                <label 
                  htmlFor="subject"
                  className="absolute left-6 top-2 text-[10px] text-gold uppercase tracking-widest font-bold"
                >
                  What are you looking for?
                </label>
                <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-text-muted pointer-events-none" />
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  rows={4}
                  placeholder=" "
                  className="peer w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 pt-7 focus:outline-none focus:border-gold focus:bg-white/10 transition-all text-text-primary placeholder-transparent resize-none"
                />
                <label 
                  htmlFor="message"
                  className="absolute left-6 top-2 text-[10px] text-gold uppercase tracking-widest font-bold transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold peer-focus:font-bold"
                >
                  Tell me about your vision...
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold text-black py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-gold-muted transition-all shadow-xl shadow-gold/10"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
    <div className="glow-divider" />
    </>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg-deep">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <Logo className="scale-90 origin-left" />
        
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Sachidananda Sahoo. All rights reserved.
        </p>

        <div className="flex gap-8">
          <a href="#about" className="text-xs uppercase tracking-widest text-text-muted hover:text-gold transition-colors">About</a>
          <a href="#portfolio" className="text-xs uppercase tracking-widest text-text-muted hover:text-gold transition-colors">Work</a>
          <a href="#contact" className="text-xs uppercase tracking-widest text-text-muted hover:text-gold transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

const staggerVariants = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 15px rgba(250, 204, 21, 0.5)" }
};

const cardVariants = {
  hover: { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }
};

const imageVariants = {
  hover: { scale: 1.03 }
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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
