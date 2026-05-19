'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Scissors, 
  Coffee, 
  Sparkles, 
  Heart, 
  Award, 
  Leaf, 
  Instagram, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCheck, 
  Loader2, 
  ArrowRight, 
  ImageOff,
  Menu,
  X
} from 'lucide-react';

// DESIGN DECISIONS:
// Layout Energy: editorial
// Depth Treatment: glassmorphic
// Divider Style: D-RULE
// Typography Personality: refined

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

// --- Components ---

function SafeImage({ src, alt, fill, width, height, className, priority, fallbackClassName }: {
  src: string; alt: string; fill?: boolean; width?: number; height?: number;
  className?: string; priority?: boolean; fallbackClassName?: string;
}) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-zinc-900 ${fallbackClassName ?? className ?? ''}`}>
        <ImageOff size={28} className="text-white/10" />
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

const Divider = ({ tagline }: { tagline: string }) => (
  <div className="py-16 flex items-center gap-8 px-8 max-w-6xl mx-auto overflow-hidden">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <span className="text-primary font-mono text-xs tracking-[0.4em] uppercase whitespace-nowrap opacity-70">
      {tagline}
    </span>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
  </div>
);

// --- Sections ---

export default function FlourishSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const brand = {
    name: "Flourish Dreadlocks",
    tagline: "The Art of Loc Transformation",
    description: "Lagos' premier destination for luxury loc installations, micro locs, and specialized hair care maintenance in a private, high-end studio setting.",
    industry: "beauty"
  };

  const contact = {
    instagram: "flourishdreadlocks",
    address: "No. 2 College Road, Ogba Lagos",
    email: "hello@flourishlocs.com",
    whatsapp: "0800-FLOURISH"
  };

  const products = [
    { name: "Micro Locs Installation", description: "Precision-crafted micro locs for a versatile, natural hair journey.", price: "₦150,000", url: "https://images.unsplash.com/photo-1762928289633-c1565bc92931?q=80&w=1080" },
    { name: "Luxury Loc Maintenance", description: "Deep cleansing, re-twisting, and scalp hydration for established locs.", price: "₦35,000", url: "https://images.unsplash.com/photo-1625536658395-2bd89a631e37?q=80&w=1080" },
    { name: "Scalp Therapy Treatment", description: "Signature herbal infusion to promote growth and soothe irritation.", price: "₦15,500", url: "https://images.unsplash.com/photo-1637524725461-bff1afdb946e?q=80&w=1080" },
    { name: "Botanical Loc Elixir", description: "Premium organic oil blend for daily shine and moisture retention.", price: "₦12,000", url: "https://images.unsplash.com/photo-1760445530319-c2f9f639828f?q=80&w=1080" }
  ];

  const features = [
    { title: "Consultation First", description: "Every journey begins with a detailed scalp and hair assessment.", icon: <Search size={24} /> },
    { title: "Master Locticians", description: "Expert hands trained in modern and traditional locking techniques.", icon: <Scissors size={24} /> },
    { title: "Private Studio", description: "Experience your transformation in a serene, exclusive environment.", icon: <Coffee size={24} /> },
    { title: "Premium Aftercare", description: "Bespoke product regimens to keep your locs flourishing at home.", icon: <Sparkles size={24} /> }
  ];

  const testimonials = [
    { name: "Chinyere Okafor", text: "The attention to detail during my micro loc installation was incredible. Best hair decision ever.", role: "Micro Loc Client" },
    { name: "Tobi Adekunle", text: "Cleanest maintenance I've had in Lagos. The scalp treatment is a game changer.", role: "Loc Maintenance Client" },
    { name: "Funmi Shittu", text: "Professional service and a beautiful environment. They truly understand loc health.", role: "Premium Client" }
  ];

  const stats = [
    { number: "1000+", label: "Locs Transformed", icon: <Heart size={20} /> },
    { number: "8", label: "Years Experience", icon: <Award size={20} /> },
    { number: "100%", label: "Organic Products", icon: <Leaf size={20} /> }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1757020929242-9e82c55593f4?q=80&w=1080",
    "https://images.unsplash.com/photo-1762928289633-c1565bc92931?q=80&w=1080",
    "https://images.unsplash.com/photo-1729398627793-3438cc482b5b?q=80&w=1080",
    "https://images.unsplash.com/photo-1521736233907-c1ab12e557bd?q=80&w=1080",
    "https://images.unsplash.com/photo-1611145367559-6089dfcdc781?q=80&w=1080",
    "https://images.unsplash.com/photo-1778331473048-5019a461a763?q=80&w=1080"
  ];

  // --- Animation Refs ---
  const heroReveal = useScrollReveal();
  const featureReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const productReveal = useScrollReveal();
  const galleryReveal = useScrollReveal();
  const testimonialReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  // --- Form Logic ---
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <main className="relative bg-accent">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-accent/95 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary flex items-center justify-center font-heading text-black font-black text-xl italic group-hover:bg-secondary transition-colors duration-500">F</div>
            <span className="font-heading text-xl font-bold tracking-tighter text-white">Flourish.</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Services', 'About', 'Gallery', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-white/70 text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">{link}</a>
            ))}
            <a href="#contact" className="bg-secondary text-black px-8 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all">Book Session</a>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Sidebar --- */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-accent border-l border-white/10 p-10 flex flex-col">
          <button onClick={() => setIsMenuOpen(false)} className="self-end text-white mb-12">
            <X size={32} />
          </button>
          <div className="flex flex-col gap-8">
            {['Services', 'About', 'Gallery', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-heading font-black text-white">{link}</a>
            ))}
          </div>
          <div className="mt-auto space-y-6">
            <div className="h-px bg-white/10 w-full" />
            <p className="text-white/40 text-sm leading-relaxed">{brand.address}</p>
            <div className="flex gap-4">
              <Instagram className="text-primary" />
              <Phone className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* --- HERO: HR-A --- */}
      <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-accent via-accent to-primary/10 px-6 overflow-hidden pt-20">
        <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 max-w-4xl max-h-[70vh] rounded-[4rem] overflow-hidden rotate-3">
          <SafeImage src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1080" alt={brand.name} fill className="object-cover" priority />
        </div>

        <div ref={heroReveal.ref} className={`relative z-10 text-center max-w-5xl transition-all duration-1000 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="font-heading text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
            Elevate Your <span className="text-primary italic">Loc</span> <br />Journey.
          </h1>
          <p className="text-white/50 mt-10 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            Expert micro locs and maintenance for the modern individual. <span className="text-white/80 font-medium">Lagos' finest</span> dreadlock specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a href="#contact" className="bg-primary text-black px-12 py-5 font-black text-lg
              hover:brightness-110 hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_40px_rgba(76,187,23,0.3)]">Book Consultation</a>
            <a href="#services" className="border border-white/20 text-white px-12 py-5 font-bold text-lg
              hover:bg-white/5 transition-all duration-300 rounded-full backdrop-blur-sm">Our Services</a>
          </div>
        </div>
      </section>

      {/* --- FEATURES: F-ICON-GRID --- */}
      <section ref={featureReveal.ref} className="py-32 px-6 bg-accent/40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className={`transition-all duration-700 ${featureReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="font-heading text-5xl md:text-7xl font-black text-white leading-none">The Flourish<br />Standard.</h2>
            </div>
            <p className="text-white/40 max-w-sm text-lg leading-relaxed">Why Lagos chooses us for premium loc care and a luxury salon experience.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div 
                key={i} 
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`p-10 rounded-[2.5rem] border border-white/5 bg-zinc-900/40 backdrop-blur-sm
                  hover:bg-primary/5 hover:border-primary/30 transition-all duration-500 group cursor-default
                  ${featureReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="mb-8 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-2xl leading-tight">{f.title}</h3>
                <p className="text-white/40 text-base mt-4 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider tagline={brand.tagline} />

      {/* --- ABOUT: V3 SPLIT --- */}
      <section id="about" ref={aboutReveal.ref} className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className={`relative transition-all duration-1000 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden z-10 shadow-2xl">
              <SafeImage src="https://images.unsplash.com/photo-1757020929242-9e82c55593f4?q=80&w=1080" alt="Studio" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-secondary/10 rounded-full blur-[80px] -z-10" />
            <div className="absolute top-10 -left-10 text-9xl font-heading font-black text-stroke opacity-10 pointer-events-none select-none">OGBA</div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <span className="text-primary font-mono text-sm tracking-[0.4em] uppercase mb-6 block">Our Sanctuary</span>
            <h2 className="font-heading text-5xl md:text-7xl font-black text-white leading-[0.95] mb-8">Crafting <br />Confidence.</h2>
            <p className="text-white/50 text-xl leading-relaxed mb-10">
              Located in the heart of Ogba, Flourish Dreadlocks is more than a salon—it is a sanctuary for hair health. We specialize in the meticulous installation of micro locs and the dedicated maintenance of all dreadlock types, using only the finest botanical treatments.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
              {stats.map((s, i) => (
                <div key={i} className={`transition-all duration-1000`} style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="text-primary mb-2">{s.icon}</div>
                  <p className="font-heading text-4xl font-black text-white">{s.number}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1 font-bold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS: P-EDITORIAL --- */}
      <section id="services" ref={productReveal.ref} className="py-32 px-6 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className={`font-heading text-6xl md:text-8xl font-black text-white transition-all duration-700 ${productReveal.isVisible ? 'opacity-100' : 'opacity-0'}`}>Our Services.</h2>
            <p className="text-white/30 text-xl mt-6 uppercase tracking-[0.3em]">Curated care for your crown</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <div 
                key={i} 
                className={`group relative h-[450px] md:h-[550px] rounded-[3rem] overflow-hidden transition-all duration-700 ease-out ${productReveal.isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <SafeImage src={p.url} alt={p.name} fill className="object-cover group-hover:scale-110 transition-all duration-[1.5s] opacity-60 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <span className="text-secondary font-black text-2xl mb-4 block">{p.price}</span>
                  <h3 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight mb-4">{p.name}</h3>
                  
                  <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 ease-in-out">
                    <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">{p.description}</p>
                  </div>

                  <a href="#contact" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black hover:bg-primary transition-colors">
                    Book Service <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY: MASONRY --- */}
      <section id="gallery" ref={galleryReveal.ref} className="py-32 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-heading text-5xl md:text-7xl font-black text-white">The Lookbook.</h2>
            <p className="text-primary text-sm font-mono tracking-widest uppercase mt-4">Real transformations from our Ogba studio</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, i) => (
              <div 
                key={i} 
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`break-inside-avoid group relative rounded-[2rem] overflow-hidden transition-all duration-700 ${galleryReveal.isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`}
              >
                <SafeImage src={src} alt={`Gallery ${i + 1}`} width={600} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: T-SPOTLIGHT --- */}
      <section ref={testimonialReveal.ref} className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-3 translate-y-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl font-black text-white mb-20">Client Love.</h2>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`relative py-12 px-10 rounded-[3rem] border border-white/5 bg-accent/40 backdrop-blur-xl transition-all duration-700 ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <span className="text-primary text-3xl font-black italic">"</span>
                </div>
                <p className="text-white/80 text-2xl md:text-3xl leading-relaxed font-light italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-10 flex items-center justify-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-black font-black text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white text-lg">{t.name}</p>
                    <p className="text-primary text-xs font-mono uppercase tracking-[0.2em] mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT: C2 GLASS --- */}
      <section id="contact" ref={contactReveal.ref} className="py-32 px-6 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-20 items-center">
          
          <div className={`transition-all duration-1000 ${contactReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {sent ? (
              <div className="flex flex-col items-center justify-center p-12 text-center animate-scaleIn bg-zinc-900 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-8 border border-primary/40 relative z-10">
                  <CheckCheck size={40} className="text-primary" />
                </div>
                <h3 className="font-heading text-4xl font-black text-white mb-4 relative z-10">Request Received</h3>
                <p className="text-white/50 max-w-sm text-lg relative z-10">We will reach out within 24 hours to confirm your studio session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-900/40 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="font-heading text-3xl md:text-5xl font-black text-white mb-10">Book a Session.</h3>
                  <div className="space-y-5">
                    {(['name', 'email', 'phone'] as const).map(field => (
                      <input
                        key={field}
                        type={field === 'email' ? 'email' : 'text'}
                        placeholder={field.toUpperCase()}
                        value={form[field]}
                        onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                        required={field !== 'phone'}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-white/30 text-sm outline-none transition-all duration-300 focus:bg-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    ))}
                    <textarea rows={4} placeholder="TELL US ABOUT YOUR HAIR GOALS"
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white placeholder-white/30 text-sm outline-none resize-none transition-all duration-300 focus:bg-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full mt-10 bg-primary text-black py-6 rounded-2xl font-black text-lg hover:brightness-110 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 flex justify-center items-center gap-3 group">
                    {loading ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>
                        REQUEST CONSULTATION <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className={`md:pl-12 transition-all duration-1000 delay-300 ${contactReveal.isVisible ? 'opacity-100 skew-y-0 translate-y-0' : 'opacity-0 skew-y-2 translate-y-8'}`}>
            <h2 className="font-heading text-6xl md:text-[6rem] font-black text-white mb-8 leading-[0.85] tracking-tighter">Start Your <br /><span className="text-primary italic">Transformation.</span></h2>
            <div className="space-y-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0"><MapPin size={24} /></div>
                <div>
                  <p className="text-white font-bold text-lg">Studio Location</p>
                  <p className="text-white/40 mt-1">{contact.address}</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0"><Instagram size={24} /></div>
                <div>
                  <p className="text-white font-bold text-lg">Follow the Journey</p>
                  <p className="text-white/40 mt-1">@flourishdreadlocks</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0"><Phone size={24} /></div>
                <div>
                  <p className="text-white font-bold text-lg">Direct Line</p>
                  <p className="text-white/40 mt-1">{contact.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-accent border-t border-white/5 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary flex items-center justify-center font-heading text-black font-black text-2xl italic">F</div>
                <span className="font-heading text-3xl font-bold tracking-tighter text-white">Flourish.</span>
              </div>
              <p className="text-white/40 text-lg max-w-sm leading-relaxed mb-8">
                The Art of Loc Transformation. Specialized care for the discerning individual in a private Lagos sanctuary.
              </p>
              <div className="flex gap-5">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all"><Instagram size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all"><Phone size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'Services', 'Gallery', 'Contact'].map(link => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-primary transition-colors text-lg">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Working Hours</h4>
              <ul className="space-y-4 text-white/40 text-lg">
                <li className="flex justify-between"><span>Mon - Sat</span> <span>9am - 7pm</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>By Appointment</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-sm">© {new Date().getFullYear()} Flourish Dreadlocks. Crafted with Mastery.</p>
            <div className="flex gap-8 text-white/20 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}