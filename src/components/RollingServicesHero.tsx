import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Pause, 
  Layers, 
  ChevronDown, 
  CheckCircle2, 
  Compass, 
  Award 
} from 'lucide-react';

interface ServiceItem {
  id: number;
  label: string;
  tagline: string;
  category: string;
  badge: string;
  color: string;
  accentBg: string;
}

const ROLLING_SERVICES: ServiceItem[] = [
  {
    id: 1,
    label: 'BRANDING',
    tagline: 'Brand identity, stage visual guidelines & experiential product launches that captivate audiences.',
    category: 'Brand Activation',
    badge: '01 / CORE',
    color: '#FFB300',
    accentBg: 'rgba(255, 179, 0, 0.12)',
  },
  {
    id: 2,
    label: 'EXHIBITIONS',
    tagline: 'Custom trade show booths, interactive showcase walls, and crowd-pulling modular pavilions.',
    category: 'Spatial Design',
    badge: '02 / EXHIBIT',
    color: '#FFA000',
    accentBg: 'rgba(255, 160, 0, 0.12)',
  },
  {
    id: 3,
    label: 'EVENTS ORGANIZER & PLANNER',
    tagline: 'Concert stages, corporate gala dinners, festivals, and end-to-end technical production.',
    category: 'Stage & Production',
    badge: '03 / PRODUCTION',
    color: '#E65100',
    accentBg: 'rgba(230, 81, 0, 0.12)',
  },
  {
    id: 4,
    label: 'MEETINGS, INCENTIVES & CONFERENCES',
    tagline: 'High-stakes summits, MICE symposiums, hybrid streaming, and VIP delegate logistics.',
    category: 'MICE & Corporate',
    badge: '04 / CONFERENCES',
    color: '#FF8F00',
    accentBg: 'rgba(255, 143, 0, 0.12)',
  },
];

interface RollingServicesHeroProps {
  onSelectService?: (id: number) => void;
}

export const RollingServicesHero: React.FC<RollingServicesHeroProps> = ({ onSelectService }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-roll cycle every 2.8 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROLLING_SERVICES.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentService = ROLLING_SERVICES[currentIndex];

  const handleManualSelect = (index: number) => {
    setCurrentIndex(index);
    if (onSelectService) {
      onSelectService(ROLLING_SERVICES[index].id);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[var(--radius)] bg-white border border-neutral-200/90 shadow-sm transition-all duration-300">
      {/* Background subtle clean watermark & lighting */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        {/* Top agency kicker badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-[#FFB300] animate-pulse" />
            <span>PT Amber Event Production · Malang</span>
          </div>

          {/* Pause / Play rolling controls */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-600 transition hover:bg-neutral-100 hover:text-black"
            title={isPaused ? 'Resume rolling' : 'Pause rolling'}
          >
            {isPaused ? (
              <>
                <Play className="h-3 w-3 text-emerald-600 fill-emerald-600" />
                <span>Resume Rolling</span>
              </>
            ) : (
              <>
                <Pause className="h-3 w-3 text-amber-600 fill-amber-600" />
                <span>Pause Rolling</span>
              </>
            )}
          </button>
        </div>

        {/* 1. TULISAN TIDAK BERGERAK (STATIC TEXT) */}
        <div className="mb-2 sm:mb-3">
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#18181B] flex items-center gap-2">
            <span>We make a...</span>
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FFB300]" />
          </h2>
        </div>

        {/* 2. TULISAN BERGERAK DENGAN EFEK ROLLING (DYNAMIC ROLLING TEXT) */}
        {/* Viewport container with perspective for 3D rolling slot effect */}
        <div className="relative h-24 sm:h-28 md:h-32 lg:h-36 w-full overflow-hidden flex items-center" style={{ perspective: 1000 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ y: 70, opacity: 0, rotateX: -45, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
              exit={{ y: -70, opacity: 0, rotateX: 45, filter: 'blur(4px)' }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-0 flex h-full w-full items-center"
            >
              <h1 
                className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight select-none"
                style={{ 
                  color: currentService.color,
                  textShadow: '0 2px 20px rgba(255, 179, 0, 0.25)',
                }}
              >
                {currentService.label}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic sub-caption synchronized with current rolling item */}
        <div className="mt-4 min-h-[50px] max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed"
            >
              {currentService.tagline}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 3. ROLLING PROGRESS & INTERACTIVE CHIPS */}
        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Quick Clickable Selector for all 4 services */}
          <div className="flex flex-wrap items-center gap-2">
            {ROLLING_SERVICES.map((service, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={service.id}
                  onClick={() => handleManualSelect(index)}
                  className={`group flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#18181B] text-white shadow-md scale-105'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
                  }`}
                >
                  <span 
                    className={`h-2 w-2 rounded-full transition-colors ${
                      isActive ? 'bg-[#FFB300] animate-ping' : 'bg-neutral-400'
                    }`} 
                  />
                  <span>{service.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Rolling indicator dots & index tracker */}
          <div className="flex items-center gap-3 text-xs font-mono font-bold text-neutral-500">
            <span>0{currentIndex + 1} / 04</span>
            <div className="flex gap-1.5">
              {ROLLING_SERVICES.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === currentIndex
                      ? 'w-6 bg-[#FFB300]'
                      : 'w-2 bg-neutral-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#FFB300] px-7 py-3.5 font-extrabold text-[#0F0E0D] shadow-[0_4px_16px_rgba(255,179,0,0.3)] transition hover:-translate-y-0.5 hover:bg-[#FFA000] hover:shadow-[0_6px_20px_rgba(255,179,0,0.45)]"
          >
            <span>Start a project with {currentService.label.split(' ')[0]}</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#our-works"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#18181B] transition hover:bg-neutral-50 hover:border-neutral-400"
          >
            <span>Explore 2026 Works</span>
          </a>
        </div>
      </div>
    </div>
  );
};
