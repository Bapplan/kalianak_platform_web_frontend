import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  id?: string;
  imageUrl: string;
  overlayImageUrl?: string;
  children: React.ReactNode;
  overlayOpacity?: string; // e.g., 'bg-black/40'
  heightClass?: string;
  contentAlignment?: 'center' | 'left' | 'right';
  speed?: number; // Background speed factor
  overlaySpeed?: number; // Overlay image speed factor
  overlayBlendMode?: string; // CSS mix-blend-mode
  overlaySize?: string; // CSS background-size
  overlayPosition?: string; // CSS background-position
  isOverlayFrame?: boolean; // If true, overlay fits 100% of section and doesn't parallax (frame effect)
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  id, 
  imageUrl, 
  overlayImageUrl,
  children, 
  overlayOpacity = 'bg-black/40',
  heightClass = 'min-h-screen',
  contentAlignment = 'center',
  speed = 0.5,
  overlaySpeed = 0.2,
  overlayBlendMode = 'normal',
  overlaySize = 'cover',
  overlayPosition = 'center',
  isOverlayFrame = false
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate parallax only when section is near or in viewport
      if (rect.bottom >= -100 && rect.top <= windowHeight + 100) {
        // Main Background Parallax
        if (bgRef.current) {
          const yOffset = rect.top * speed;
          bgRef.current.style.transform = `translate3d(0, ${yOffset}px, 0)`;
        }

        // Overlay Image Parallax (Only if not a static frame)
        if (overlayRef.current && !isOverlayFrame) {
          const yOverlayOffset = rect.top * overlaySpeed;
          overlayRef.current.style.transform = `translate3d(0, ${yOverlayOffset}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, overlaySpeed, isOverlayFrame]);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden w-full`}
    >
      {/* Layer 1: Main Parallax Background */}
      <div 
        ref={bgRef}
        className="absolute left-0 w-full h-[150%] -top-[25%] z-0 pointer-events-none"
        style={{ 
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />

      {/* Layer 2: Overlay Image (Frame or Parallax) */}
      {overlayImageUrl && (
        <div 
          ref={overlayRef}
          className={`absolute left-0 w-full pointer-events-none z-[5] ${
            isOverlayFrame 
              ? 'h-full top-0' 
              : 'h-[150%] -top-[25%]'
          }`}
          style={{ 
            backgroundImage: `url('${overlayImageUrl}')`,
            backgroundSize: overlaySize,
            backgroundPosition: overlayPosition,
            backgroundRepeat: 'no-repeat',
            mixBlendMode: overlayBlendMode as any,
            willChange: isOverlayFrame ? 'auto' : 'transform',
          }}
        />
      )}

      {/* Layer 3: Dark Tint Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity} z-10 transition-opacity duration-700 pointer-events-none`} />
      
      {/* Layer 4: Content */}
      <div className={`relative z-20 container mx-auto px-6 py-24 ${contentAlignment === 'left' ? 'text-left' : contentAlignment === 'right' ? 'text-right' : 'text-center'}`}>
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;