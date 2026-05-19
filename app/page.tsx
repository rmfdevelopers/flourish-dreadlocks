'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Scissors, 
  Sprout, 
  Sparkles, 
  Crown, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCheck, 
  ArrowRight, 
  Loader2, 
  ImageOff, 
  Instagram, 
  Menu, 
  X,
  Award,
  Users,
  CheckCircle,
  TrendingUp,
  Landmark
} from 'lucide-react';

// DESIGN DECISIONS:
// Layout Energy: bold
// Depth Treatment: glassmorphic
// Divider Style: D-STAT
// Typography Personality: oversized

// --- Types ---
interface Stat { number: string; label: string; icon?: string; }
interface Feature { title: string; description: string; icon: string; }
interface Product { name: string; description: string; price: string; image_url: string; }
interface Testimonial { name: string; text: string; role: string; }

// --- Hooks ---
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};

const useTypewriter = (text: string, speed = 55) => {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) { setDisplay(prev => prev + text.charAt(i)); i++; }
      else clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return display;
};

// --- Components ---
function SafeImage({ src, alt, fill, width, height, className, priority }: any) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-zinc-900 ${className}`}>
        <ImageOff size={28} className="text-white/20" />
      </div>
    );
  }
  return (
    <Image 
      src={src} 
      alt={alt} 
      fill={fill}
      width={!fill ? (width ?? 800) : undefined}
      height={!fill ? (height ?? 600) : undefined}
      className={className} 
      priority={priority}
      onError={() => setError(true)} 
    />
  );
}

const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-12 transition-transform duration-300">
      <span className="text-black font-black text-xl italic font-heading">F</span>
    </div>
    <span className="text-white font-black text-2xl tracking-tighter uppercase italic">Flourish</span>
  </div>
);

const IndustryIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Scissors': return <Scissors className={className} />;
    case 'Sprout': return <Sprout className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Crown': return <Crown className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function FlourishDreadlocks() {
  const brand = {
    name: "Flourish Dreadlocks",
    tagline: "The Crown You Never Take Off",
    description: "Lagos' premier destination for luxury dreadlock installations, instant micro locs, and professional scalp care. We blend artistry with hair health to create timeless loc transformations.",
    industry: "beauty",
    region: "nigeria"
  };

  const contact = {
    whatsapp: "+2348000000000",
    instagram: "flourishdreadlocks",
    email: "hello@flourishdreadlocks.com",
    address: "No. 2 College Road, Ogba Lagos"
  };

  const features: Feature[] = [
    { title: "Master Installation", description: "Expertly crafted locs tailored to your hair texture and lifestyle.", icon: "Scissors" },
    { title: "Scalp Health First", description: "Specialized treatments to ensure your natural hair thrives under your locs.", icon: "Sprout" },
    { title: "Premium Maintenance", description: "Precision retwisting and interlocking to keep your crown looking sharp.", icon: "Sparkles" },
    { title: "Luxury Studio", description: "A private, serene environment for your hair transformation journey.", icon: "Crown" }
  ];

  const products: Product[] = [
    { name: "Instant Micro Locs", description: "Full head installation using the interlocking method for a seamless, immediate loc look.", price: "₦150,000", image_url: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a" },
    { name: "Herbal Loc Growth Oil", description: "Our signature blend of essential oils designed to soothe the scalp and promote length retention.", price: "₦8,500", image_url: "https://images.unsplash.com/photo-1698593975667-54000a4b22b0" },
    { name: "Human Hair Loc Extensions", description: "Premium 100% human hair extensions for immediate length and volume.", price: "₦85,000", image_url: "https://images.unsplash.com/photo-1770048427720-df15cfc9dcbb" },
    { name: "Scalp Detox Treatment", description: "Deep cleansing ritual to remove buildup and revitalize hair follicles.", price: "₦12,500", image_url: "https://images.unsplash.com/photo-1590503347339-ccd768ad83d3" }
  ];

  const stats: Stat[] = [
    { number: "1,200", label: "Locs Installed" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Human Hair" }
  ];

  const testimonials: Testimonial[] = [
    { name: "Adesua K.", text: "The only place I trust with my micro locs in Lagos. The attention to detail is unmatched.", role: "Creative Director" },
    { name: "Obinna O.", text: "Their scalp treatment cured my itching immediately. Professional service and great vibe.", role: "Entrepreneur" },
    { name: "Yejide T.", text: "From consultation to installation, Flourish made me feel like royalty. My locs are thriving!", role: "Tech Lead" }
  ];

  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const typedText = useTypewriter(brand.tagline);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Section Refs
  const heroReveal = useScrollReveal(0.1);
  const featuresReveal = useScrollReveal(0.1);
  const galleryReveal = useScrollReveal(0.1);
  const productsReveal = useScrollReveal(0.1);
  const aboutReveal = useScrollReveal(0.1);
  const testimonialReveal = useScrollReveal(0.1);
  const contactReveal = useScrollReveal(0.1);

  // Form State
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <main className="bg-[#050801]">
      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${scrolled ? 'bg-[#050801]/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Gallery', 'Shop', 'About'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase">
                {link}
              </a>
            ))}
            <a href="#contact" className="bg-primary text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all">
              Book Consultation
            </a>
          </div>
          <button onClick={() => setNavOpen(true)} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-[60] bg-[#050801] transition-transform duration-500 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
            <Logo />
            <button onClick={() => setNavOpen(false)} className="text-white"><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8">
            {['Services', 'Gallery', 'Shop', 'About', 'Consultation'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setNavOpen(false)}
                className="text-4xl font-heading font-black text-white hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="mt-auto border-t border-white/10 pt-8">
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-4">Lagos, Nigeria</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/5 transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HERO-D: Oversized Typewriter + Raw Minimal */}
      <section id="home" className="min-h-screen flex flex-col justify-center bg-black px-6 overflow-hidden relative pt-20">
        <div className="absolute inset-0 opacity-30 grayscale mix-blend-screen pointer-events-none">
          <SafeImage src="https://images.unsplash.com/photo-1602471159270-a716fe37aac2" alt={brand.name} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <h1 className="font-heading text-[14vw] md:text-[9vw] font-black text-white leading-[0.85] tracking-tighter uppercase italic">
            {typedText}<span className="text-primary animate-pulse">_</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-white/10 pt-10">
            <div className="max-w-md">
              <p className="text-white/45 text-lg md:text-xl leading-relaxed mb-4">
                Elevate your crown with professional loc artistry in the heart of Ogba.
              </p>
              <div className="flex items-center gap-3 text-secondary text-sm font-mono tracking-widest">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                No stories, just clean lines and healthy hair.
              </div>
            </div>
            <a href="#contact" className="bg-primary text-black px-12 py-5 font-black text-xl
              shadow-[8px_8px_0px_rgba(255,255,255,0.1)]
              hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_rgba(255,255,255,0.1)]
              transition-all duration-200 shrink-0">
              Book My Session
            </a>
          </div>
        </div>
      </section>

      {/* D-STAT Divider */}
      <div className="bg-secondary py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 text-center">
          {stats.map((s, i) => (
            <div key={i} className="px-8 py-6 md:py-4">
              <p className="text-5xl font-black text-black tracking-tighter">{s.number}</p>
              <p className="text-black/60 text-sm mt-1 font-bold uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* F-ICON-GRID: Features */}
      <section id="services" ref={featuresReveal.ref} className="py-28 px-6 bg-[#0a0f02]">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="font-heading text-6xl font-black text-white mb-6">Our Expertise</h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto">Professional care for every stage of your loc journey.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div 
                key={i} 
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`p-8 rounded-3xl border border-white/5 bg-white/3 hover:bg-white/5 hover:border-primary/30 transition-all duration-500 group ${featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                  <IndustryIcon name={f.icon} className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-black text-white text-2xl leading-tight mb-4">{f.title}</h3>
                <p className="text-white/40 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STICKY TRANSFORMATION GALLERY */}
      <section id="gallery" ref={galleryReveal.ref} className="py-28 bg-[#050801] px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-6xl font-black text-white mb-20 text-center">Transformations</h2>
          <div className="space-y-6">
            {[
              { t: 'Before & After', d: 'Natural loc installation on 4C hair.', img: 'https://images.unsplash.com/photo-1633681926019-03bd9325ec20' },
              { t: 'The Loc Journey', d: 'Maintenance session for 2-year old micro locs.', img: 'https://images.unsplash.com/photo-1633681926053-9074b76e21a7' },
              { t: 'Signature Style', d: 'Instant locs with custom scalp treatment.', img: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6' }
            ].map((f, idx) => (
              <div key={idx} className="sticky group" style={{ top: `${100 + idx * 30}px` }}>
                <div className="bg-[#111] rounded-[2.5rem] p-4 border border-white/10 shadow-2xl transition-transform duration-500 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
                  <div className="w-full md:w-1/2 aspect-video md:aspect-square relative rounded-2xl overflow-hidden shrink-0">
                    <SafeImage src={f.img} alt={f.t} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className="p-6 md:p-10 flex-1">
                    <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Transformation 0{idx + 1}</span>
                    <h3 className="font-heading text-4xl font-black text-white mb-4 italic">{f.t}</h3>
                    <p className="text-white/50 text-lg leading-relaxed mb-8">{f.d}</p>
                    <a href="#contact" className="inline-flex items-center gap-3 text-secondary border-b border-secondary/20 pb-2 hover:border-secondary transition-all">
                      Start Your Transformation <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* P-ASYMMETRIC: Products */}
      <section id="shop" ref={productsReveal.ref} className="py-28 px-6 bg-[#0a0f02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="font-heading text-6xl font-black text-white leading-none">Shop Collection</h2>
              <p className="text-white/40 mt-4 text-xl">Premium products for the loc enthusiast.</p>
            </div>
            <p className="text-secondary font-mono text-sm tracking-widest uppercase md:text-right">Ships Lagos-Wide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 group relative rounded-3xl overflow-hidden h-[500px]">
              <SafeImage src={products[0].image_url} alt={products[0].name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <h3 className="font-heading text-4xl font-black text-white mb-2">{products[0].name}</h3>
                <p className="text-white/60 text-lg mb-6 max-w-sm">{products[0].description}</p>
                <div className="flex items-center gap-8">
                  <span className="text-primary font-black text-3xl">{products[0].price}</span>
                  <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-primary transition-colors">Enquire</a>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 grid grid-rows-2 gap-6">
              {products.slice(1, 3).map((p, i) => (
                <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/50">
                  <div className="flex h-full flex-col sm:flex-row">
                    <div className="relative w-full sm:w-1/2 min-h-[200px]">
                      <SafeImage src={p.image_url} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
                    </div>
                    <div className="p-8 flex flex-col justify-center w-full sm:w-1/2">
                      <h3 className="font-heading text-xl font-black text-white mb-2">{p.name}</h3>
                      <p className="text-primary font-black text-xl mb-4">{p.price}</p>
                      <a href="#contact" className="text-white/40 text-sm hover:text-white transition-colors underline underline-offset-4">Details</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT: V3 Horizontal Split */}
      <section id="about" ref={aboutReveal.ref} className="min-h-[80vh] grid md:grid-cols-2 items-stretch bg-[#050801] overflow-hidden">
        <div className={`flex flex-col justify-center px-8 md:px-20 py-24 transition-all duration-1000 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase mb-8 block">The Standard</span>
          <h2 className="font-heading text-6xl font-black text-white leading-[0.9] mb-8 uppercase italic">The Flourish Standard</h2>
          <p className="text-white/50 text-xl leading-relaxed mb-10">
            Founded on the principle that dreadlocks are more than just a hairstyle—they are a lifestyle. At Flourish, we specialize in micro locs and instant locs, providing a luxury experience that prioritizes hair health and client confidence.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
            <div>
              <div className="flex items-center gap-2 mb-2 text-primary">
                <Landmark size={18} />
                <span className="font-bold text-xs uppercase tracking-widest text-white/40">Heritage</span>
              </div>
              <p className="text-white text-lg font-bold">Lagos' Premier Loc Hub</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-primary">
                <TrendingUp size={18} />
                <span className="font-bold text-xs uppercase tracking-widest text-white/40">Philosophy</span>
              </div>
              <p className="text-white text-lg font-bold">Artistry Meets Health</p>
            </div>
          </div>
        </div>
        <div className={`relative min-h-[500px] md:min-h-full transition-all duration-1000 delay-300 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <SafeImage src="https://images.unsplash.com/photo-1706629503650-cade709d15e3" alt="Flourish Salon Interior" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050801] via-transparent to-transparent" />
        </div>
      </section>

      {/* T-MASONRY: Testimonials */}
      <section ref={testimonialReveal.ref} className="py-28 px-6 bg-[#0a0f02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="font-heading text-6xl font-black text-white mb-6">Client Love</h2>
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />)}
            </div>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`break-inside-avoid bg-zinc-900/50 p-10 rounded-[2rem] border border-white/5 relative overflow-hidden group transition-all duration-500 hover:border-primary/20 ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <p className="text-white/80 text-xl leading-relaxed italic mb-8 relative z-10">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-lg border border-primary/20">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-black text-white text-lg">{t.name}</p>
                      <p className="text-white/40 text-xs uppercase tracking-widest mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT-C4: Full-bleed Accent */}
      <section id="contact" ref={contactReveal.ref} className="py-32 px-6 bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`font-heading text-[10vw] md:text-[6vw] font-black text-black leading-none mb-12 transition-all duration-1000 ${contactReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              Ready to Start Your Journey?
            </h2>
            <div className="space-y-10 border-l-4 border-black/10 pl-8">
              <div>
                <p className="text-black/40 font-mono text-xs uppercase tracking-widest mb-2">Location</p>
                <p className="text-black text-2xl font-black">{contact.address}</p>
              </div>
              <div>
                <p className="text-black/40 font-mono text-xs uppercase tracking-widest mb-2">Talk to Us</p>
                <p className="text-black text-2xl font-black">{contact.whatsapp}</p>
                <p className="text-black/70 font-medium">{contact.email}</p>
              </div>
            </div>
          </div>
          <div className={`w-full relative z-10 transition-all duration-1000 delay-300 ${contactReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {sent ? (
              <div className="bg-black p-12 text-center animate-scaleIn rounded-[3rem] border border-white/10 shadow-3xl">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-8 border border-primary/40 mx-auto">
                  <CheckCheck size={40} className="text-primary" />
                </div>
                <h3 className="font-heading text-4xl font-black text-white mb-4">Request Sent</h3>
                <p className="text-white/60 text-lg">Your consultation is being processed. We'll message you on WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-black p-10 sm:p-14 rounded-[3rem] border border-white/10 shadow-3xl">
                <h3 className="font-heading text-3xl font-black text-white mb-8">Consultation Request</h3>
                <div className="space-y-4">
                  {(['name', 'email', 'phone'] as const).map(field => (
                    <div key={field}>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        placeholder={field.toUpperCase()}
                        value={form[field]}
                        onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                        required={field !== 'phone'}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/20 text-sm outline-none transition-all focus:border-primary focus:bg-white/10"
                      />
                    </div>
                  ))}
                  <textarea rows={4} placeholder="TELL US ABOUT YOUR HAIR GOALS"
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/20 text-sm outline-none resize-none transition-all focus:border-primary focus:bg-white/10"
                  />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full mt-8 bg-primary text-black py-5 rounded-2xl font-black text-lg hover:brightness-110 transition-all flex justify-center items-center gap-3 group">
                  {loading ? <Loader2 className="animate-spin" /> : <>Send Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <Logo />
              <p className="mt-8 text-white/40 text-lg max-w-sm leading-relaxed">
                Premium loc artistry for the modern Lagosian. Where health meets aesthetic excellence.
              </p>
              <div className="flex gap-4 mt-8">
                <a href={`https://instagram.com/${contact.instagram}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Services', 'Gallery', 'Shop', 'About'].map(link => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-primary transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Visit Us</h4>
              <p className="text-white/40 leading-relaxed">
                {contact.address}<br />
                Ogba, Lagos State
              </p>
              <p className="mt-4 text-white/40">{contact.whatsapp}</p>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 items-center">
            <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
              © {new Date().getFullYear()} FLOURISH DREADLOCKS. SHARP SERVICE, ALWAYS.
            </p>
            <div className="flex gap-8">
              <span className="text-white/20 text-xs font-mono uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Privacy</span>
              <span className="text-white/20 text-xs font-mono uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}