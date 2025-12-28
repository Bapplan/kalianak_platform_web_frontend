import React, { useState, useEffect, useRef, useCallback } from 'react';

interface StaffMember {
  name: string;
  bio: string;
  image: string;
}

interface StaffSliderProps {
  members: StaffMember[];
}

const StaffSlider: React.FC<StaffSliderProps> = ({ members }) => {
  // Triple the array for seamless infinite looping
  const extendedMembers = [...members, ...members, ...members];
  const [currentIndex, setCurrentIndex] = useState(members.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  // Requirement: Show 3 cards at a time
  const cardsToShow = 3;

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Handle seamless reset when reaching bounds
  useEffect(() => {
    if (currentIndex >= members.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(members.length);
      }, 700);
      return () => clearTimeout(timer);
    }
    if (currentIndex < members.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(members.length * 2 - 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, members.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 3500);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) {
      setIsPaused(false);
      return;
    }
    const distance = touchStart.current - touchEnd.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    touchStart.current = null;
    touchEnd.current = null;
    setIsPaused(false);
  };

  // Translation percentage based on the belt width
  const offset = (currentIndex / extendedMembers.length) * 100;

  return (
    <div 
      className="relative w-full overflow-hidden py-10 min-h-[450px] md:min-h-[600px] flex flex-col justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'}`}
        style={{ 
          transform: `translateX(-${offset}%)`,
          width: `${(extendedMembers.length / cardsToShow) * 100}%`
        }}
      >
        {extendedMembers.map((member, idx) => (
          <div 
            key={idx} 
            className="px-2 md:px-8 flex-shrink-0 flex flex-col items-center justify-center"
            style={{ width: `${100 / extendedMembers.length}%` }}
          >
            <div className="flex flex-col items-center text-center group w-full max-w-xs mx-auto">
              <div className="relative mb-6 md:mb-10 w-full flex justify-center">
                <div className="absolute inset-0 bg-ember-600 rounded-full scale-0 group-hover:scale-110 transition-transform duration-700 opacity-20 blur-xl"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-64 md:h-64 object-cover rounded-full border-4 border-white/10 group-hover:border-ember-500 transition-all duration-700 shadow-2xl relative z-10"
                />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight">{member.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-lg font-light leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Indicators */}
      <div className="flex justify-center mt-12 md:mt-20 space-x-3">
        {members.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(idx + members.length);
            }}
            className={`h-1 rounded-full transition-all duration-500 ${
              (currentIndex % members.length) === idx ? 'bg-ember-500 w-16' : 'bg-white/10 w-4'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StaffSlider;