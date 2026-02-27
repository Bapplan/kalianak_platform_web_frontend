import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, MapPin, ChefHat, Flame, Clock, Heart, Users } from 'lucide-react';
import ParallaxSection from './components/ParallaxSection';
import FadeIn from './components/FadeIn';
import StaffSlider from './components/StaffSlider';
import {
  HERO_CONTENT,
  ABOUT_CONTENT,
  EXPERIENCE_CONTENT,
  TIMELINE_EVENTS,
  GRILL_CONTENT,
  STAFF_CONTENT,
  SOCIAL_CONTENT,
  FOOTER_CONTENT
} from './constants';

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-white/5 p-3 md:p-4 rounded-full hover:bg-ember-600 hover:scale-110 transition-all duration-300 backdrop-blur-sm group border border-white/10"
  >
    <div className="text-white/70 group-hover:text-white transition-colors">
      {children}
    </div>
  </a>
);

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-white overflow-x-hidden bg-charcoal">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-charcoal/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-xl md:text-2xl font-bold tracking-widest uppercase text-white">
            IBK<span className="text-ember-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase opacity-90">
            <a href="#about" className="hover:text-ember-500 transition-colors">Cerita</a>
            <a href="#timeline" className="hover:text-ember-500 transition-colors">Sejarah</a>
            <a href="#grill" className="hover:text-ember-500 transition-colors">Dapur</a>
            <a href="#staff" className="hover:text-ember-500 transition-colors">Keluarga</a>
            <a href="#location" className="hover:text-ember-500 transition-colors">Kontak</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <ParallaxSection
          id="hero"
          imageUrl="https://s3.ikanbakarkalianak.store/kalianak-media/web_frontend/images/index/index_bg.png"
          overlayImageUrl="https://s3.ikanbakarkalianak.store/kalianak-media/web_frontend/images/index/index_overlay.png"
          speed={0.5}
          overlayOpacity="bg-black/30"
          isOverlayFrame={true}
          overlaySize="cover" 
          overlayBlendMode="normal"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center pt-20">
          <FadeIn>
            <div className="mb-6 flex justify-center">
              <Flame className="w-16 h-16 text-ember-500 animate-pulse" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6 leading-none shadow-black drop-shadow-lg text-white text-center">
              {HERO_CONTENT.title}
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="h-1 w-24 bg-ember-600 mb-8 mx-auto rounded-full shadow-lg"></div>
            <p className="text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-gray-100 drop-shadow-md text-center">
              {HERO_CONTENT.subtitle}
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </div>
      </ParallaxSection>

      {/* 2. ABOUT US SECTION - Single Viewport Design */}
      <section id="about" className="min-h-screen md:h-screen flex items-center bg-[#500302] text-white relative z-20 shadow-2xl -mt-1 overflow-hidden">
        <div className="container mx-auto px-6 py-12 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            <FadeIn className="order-2 md:order-1">
              <div className="relative group max-w-md md:max-w-full mx-auto">
                <div className="absolute -inset-2 border border-ember-900/50 transform translate-x-1 translate-y-1 z-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                <img
                  src="https://s3.ikanbakarkalianak.store/kalianak-media/web_frontend/images/about/about.png"
                  alt="Ibu cooking" 
                  className="relative z-10 w-full aspect-square md:aspect-auto md:h-[65vh] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border-2 border-[#500000]"
                />
              </div>
            </FadeIn>

            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
              <FadeIn delay={200}>
                <div className="flex items-center space-x-3 mb-2">
                  <ChefHat className="text-ember-300 w-5 h-5" />
                  <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-ember-200 font-semibold">Tentang Kami</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
                  {ABOUT_CONTENT.title}
                </h2>
              </FadeIn>
              
              <div className="space-y-3 md:space-y-4 text-white/90 text-sm md:text-base lg:text-lg leading-relaxed font-light">
                {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                  <FadeIn key={idx} delay={300 + (idx * 100)}>
                    <p>{p}</p>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={600}>
                <div className="pt-4 md:pt-6 border-t border-white/20">
                  <p className="font-serif text-xl md:text-2xl italic text-ember-300">"Dari hati, untuk rasa."</p>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SIGNATURE EXPERIENCE */}
      <ParallaxSection 
        imageUrl="https://s3.ikanbakarkalianak.store/kalianak-media/web_frontend/images/section_3/section_3_bg.jpeg"
        overlayOpacity="bg-[#4a0000]/70 backdrop-blur-[1px]"
        heightClass="min-h-[90vh]"
        speed={0.4}
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <FadeIn>
            <Heart className="w-12 h-12 text-ember-500 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
            <h2 className="font-serif text-4xl md:text-7xl font-bold mb-8 text-white uppercase tracking-tight">{EXPERIENCE_CONTENT.title}</h2>
          </FadeIn>
          <div className="space-y-8 text-2xl md:text-5xl font-serif text-amber-50 leading-tight italic drop-shadow-xl">
            {EXPERIENCE_CONTENT.paragraphs.map((p, idx) => (
               <FadeIn key={idx} delay={200 + (idx * 100)}>
                 <p className="last:mb-0">{p}</p>
               </FadeIn>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* 4. LEGACY TIMELINE */}
      <section id="timeline" className="py-24 bg-gradient-to-b from-charcoal to-black relative z-20 shadow-2xl">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-sm text-ember-500 font-bold block mb-2">Sejak 1998</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Perjalanan Kami</h2>
          </FadeIn>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-1/2"></div>
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2"></div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-charcoal border-2 border-ember-500 rounded-full transform -translate-x-[7px] md:-translate-x-1/2 z-10 group-hover:bg-ember-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <FadeIn delay={index * 150}>
                    <div className={`p-6 md:p-8 ${index % 2 === 0 ? 'md:mr-12 md:text-right' : 'md:ml-12 md:text-left'}`}>
                      <div className="text-ember-500 font-bold text-xl mb-1 flex items-center gap-2 md:block">
                        <Clock className="w-4 h-4 md:hidden" />
                        {event.year}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed">{event.description}</p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE GRILL */}
      <ParallaxSection 
        id="grill"
        imageUrl="https://s3.ikanbakarkalianak.store/kalianak-media/web_frontend/images/section_5/section_5_bg.jpeg"
        overlayOpacity="bg-gradient-to-t from-black via-black/60 to-transparent"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn className="text-left md:order-1">
             <div className="inline-block bg-ember-600/20 px-4 py-2 rounded-full border border-ember-600/30 mb-6 backdrop-blur-sm">
               <span className="text-ember-500 font-bold uppercase tracking-widest text-xs">The Soul of Cooking</span>
             </div>
             <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-none drop-shadow-lg">{GRILL_CONTENT.title}</h2>
             <div className="space-y-6 text-gray-200 text-lg md:text-xl font-light drop-shadow-md">
               {GRILL_CONTENT.paragraphs.map((p, i) => (
                 <p key={i}>{p}</p>
               ))}
             </div>
          </FadeIn>
          <div className="md:order-2 flex justify-center items-center">
             <div className="relative w-64 h-64 md:w-96 md:h-96">
               <div className="absolute inset-0 border-4 border-ember-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute inset-4 border-2 border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <Flame className="w-24 h-24 text-ember-600 drop-shadow-[0_0_25px_rgba(220,38,38,1)] animate-pulse" />
               </div>
             </div>
          </div>
        </div>
      </ParallaxSection>

      {/* 5b. STAFF SECTION */}
      <ParallaxSection 
        id="staff"
        imageUrl="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop" 
        speed={-0.3} 
        overlayOpacity="bg-black/90 backdrop-blur-md"
        heightClass="min-h-screen"
      >
        <div className="w-screen max-w-full">
          <div className="container mx-auto px-6 mb-4 md:mb-10">
            <FadeIn className="text-center">
              <h2 className="font-serif text-5xl md:text-9xl font-bold mb-2 text-white uppercase tracking-tighter leading-none">{STAFF_CONTENT.title}</h2>
              <p className="text-gray-400 text-sm md:text-2xl font-light max-w-3xl mx-auto">{STAFF_CONTENT.subtitle}</p>
            </FadeIn>
          </div>
          <div className="w-full">
            <FadeIn delay={300}>
              <StaffSlider members={STAFF_CONTENT.members} />
            </FadeIn>
          </div>
        </div>
      </ParallaxSection>

      {/* 6 & 7. FOOTER */}
      <section 
        id="location" 
        className="h-screen min-h-[100dvh] bg-black flex flex-col justify-around py-8 relative z-20 border-t border-white/5"
      >
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <span className="uppercase tracking-[0.3em] text-ember-500 font-bold text-[10px] md:text-sm block mb-2">Let's Connect</span>
            <h2 className="font-serif text-3xl md:text-7xl lg:text-9xl font-bold mb-4 text-white leading-tight">Follow the Flavor</h2>
            <a 
              href={`https://instagram.com/${SOCIAL_CONTENT.handle.replace('@', '')}`} 
              className="inline-block text-xl md:text-4xl font-bold text-white hover:text-ember-500 transition-all mb-4 border-b border-white/10 hover:border-ember-500 pb-1"
            >
              {SOCIAL_CONTENT.handle}
            </a>
          </FadeIn>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 text-center items-start max-w-6xl mx-auto border-y border-white/5 py-6 md:py-12">
            <FadeIn delay={100}>
              <div className="flex flex-col items-center">
                <MapPin className="mb-2 md:mb-4 text-ember-500 w-5 h-5 md:w-8 md:h-8" />
                <h3 className="uppercase tracking-widest text-[9px] font-bold text-white/40 mb-1">Lokasi</h3>
                <p className="text-gray-300 text-[10px] md:text-base leading-snug">{FOOTER_CONTENT.address}</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-col items-center">
                <Clock className="mb-2 md:mb-4 text-ember-500 w-5 h-5 md:w-8 md:h-8" />
                <h3 className="uppercase tracking-widest text-[9px] font-bold text-white/40 mb-1">Waktu</h3>
                <div className="text-gray-300 text-[10px] md:text-base">
                  <p className="font-bold text-white">Senin - Minggu</p>
                  <p>10:00 - 22:00 WIB</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="flex flex-col items-center">
                <Users className="mb-2 md:mb-4 text-ember-500 w-5 h-5 md:w-8 md:h-8" />
                <h3 className="uppercase tracking-widest text-[9px] font-bold text-white/40 mb-1">Kontak</h3>
                <div className="text-gray-300 text-[10px] md:text-base">
                  <p className="font-bold text-white">WhatsApp</p>
                  <p className="text-ember-500 font-mono">+62 812 3456 7890</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center">
          <FadeIn delay={400}>
            <div className="flex justify-center gap-4 md:gap-8 mb-4 md:mb-10">
               <SocialIcon href="#"><Facebook size={20} /></SocialIcon>
               <SocialIcon href="#"><Twitter size={20} /></SocialIcon>
               <SocialIcon href="#"><Instagram size={20} /></SocialIcon>
               <SocialIcon href="#"><div className="font-bold text-sm md:text-lg px-1">Tk</div></SocialIcon>
            </div>
            <div className="font-serif text-2xl md:text-4xl font-bold tracking-[0.2em] uppercase text-white mb-2">
              IBK<span className="text-ember-500">.</span>
            </div>
            <p className="text-[8px] md:text-xs text-gray-700 uppercase tracking-widest">
              {FOOTER_CONTENT.copyright}
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

export default App;