import React, { useState } from 'react';
import { Sparkles, Play, Pause, Zap, Eye, RotateCw } from 'lucide-react';

export type BlinkMode = 'neon' | 'stage-sync' | 'strobe' | 'gentle';

interface CurvedOrbitStageProps {
  onSelectService?: (id: number) => void;
  activeServiceId?: number | null;
}

export const CurvedOrbitStage: React.FC<CurvedOrbitStageProps> = ({
  onSelectService,
  activeServiceId,
}) => {
  const [blinkMode, setBlinkMode] = useState<BlinkMode>('neon');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [glowIntensity, setGlowIntensity] = useState<'normal' | 'high' | 'ultra'>('high');
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);

  // Return appropriate CSS class for blinking based on mode and ring index
  const getBlinkClass = (ringIndex: 1 | 2 | 3 | 4) => {
    switch (blinkMode) {
      case 'stage-sync':
        return 'blink-stage-sync';
      case 'strobe':
        return 'blink-strobe';
      case 'gentle':
        return 'animate-pulse';
      case 'neon':
      default:
        return `blink-neon-${ringIndex}`;
    }
  };

  const getGlowFilter = () => {
    switch (glowIntensity) {
      case 'ultra':
        return 'drop-shadow(0 0 16px rgba(255,179,0,0.9)) drop-shadow(0 0 35px rgba(255,179,0,0.6))';
      case 'normal':
        return 'drop-shadow(0 0 6px rgba(255,179,0,0.6))';
      case 'high':
      default:
        return 'drop-shadow(0 0 10px rgba(255,179,0,0.85)) drop-shadow(0 0 20px rgba(255,179,0,0.4))';
    }
  };

  const orbits = [
    {
      id: 1,
      title: '1. Branding & Brand Activation',
      tag: '01 BRANDING',
      radius: 265,
      // Text wrapped repeatedly to complete circular contour
      text: '✦ 1. BRANDING & ACTIVATION ✦ IDENTITY ✦ VISUAL STRATEGY ✦ BRAND LAUNCH ✦ CREATIVE IDENTITY ✦ ',
      color: '#FFB300',
      dash: '6 6',
      duration: '45s',
      direction: 'normal',
      description: 'Solid identity concepts and launch activations that make your brand stand out.',
    },
    {
      id: 2,
      title: '2. Exhibitions & Showcases',
      tag: '02 EXHIBITIONS',
      radius: 210,
      text: '✦ 2. EXHIBITIONS & BOOTHS ✦ TRADE SHOWS ✦ EXPO ✦ ART SHOWCASE ✦ MODULAR STAGES ✦ ',
      color: '#FFCA28',
      dash: '8 4',
      duration: '36s',
      direction: 'reverse',
      description: 'Custom booths, displays, and high-impact experiential environments.',
    },
    {
      id: 3,
      title: '3. Events Organizer & Planner',
      tag: '03 EVENT PLANNER',
      radius: 155,
      text: '✦ 3. EVENT ORGANIZER & PLANNER ✦ GALA DINNER ✦ CONCERT STAGE ✦ FESTIVAL ✦ ',
      color: '#FFE082',
      dash: '4 4',
      duration: '30s',
      direction: 'normal',
      description: 'Full-service planning and seamless execution for memorable moments.',
    },
    {
      id: 4,
      title: '4. Meetings, Incentives & Conferences',
      tag: '04 CONFERENCES (MICE)',
      radius: 100,
      text: '✦ 4. MEETINGS, INCENTIVES & CONFERENCES ✦ MICE ✦ CORPORATE ✦ ',
      color: '#FFA000',
      dash: 'solid',
      duration: '22s',
      direction: 'reverse',
      description: 'Professional conference logistics, audiovisual rigging, and speaker stages.',
    },
  ];

  return (
    <div className="relative mx-auto flex flex-col items-center">
      {/* Outer ambient glow backlight */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div 
          className="h-[32rem] w-[32rem] rounded-full opacity-35 blur-3xl transition-all duration-700"
          style={{
            background: glowIntensity === 'ultra' 
              ? 'radial-gradient(circle, rgba(255,179,0,0.5) 0%, rgba(255,140,0,0.2) 50%, transparent 75%)'
              : 'radial-gradient(circle, rgba(255,179,0,0.3) 0%, rgba(255,140,0,0.12) 50%, transparent 70%)'
          }}
        />
      </div>

      {/* Interactive Orbit Display */}
      <div className="relative h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] md:h-[520px] md:w-[520px] lg:h-[550px] lg:w-[550px]">
        {/* SVG Orbit Canvas */}
        <svg
          viewBox="0 0 600 600"
          className="h-full w-full select-none"
          style={{ filter: getGlowFilter() }}
        >
          <defs>
            {/* Circular paths for textPath following the exact curved orbit thread */}
            {/* Radius 265: Top is 300,35 */}
            <path
              id="orbit-path-1"
              d="M 300,35 A 265,265 0 1,1 300,565 A 265,265 0 1,1 300,35"
              fill="none"
            />
            {/* Radius 210: Top is 300,90 */}
            <path
              id="orbit-path-2"
              d="M 300,90 A 210,210 0 1,1 300,510 A 210,210 0 1,1 300,90"
              fill="none"
            />
            {/* Radius 155: Top is 300,145 */}
            <path
              id="orbit-path-3"
              d="M 300,145 A 155,155 0 1,1 300,455 A 155,155 0 1,1 300,145"
              fill="none"
            />
            {/* Radius 100: Top is 300,200 */}
            <path
              id="orbit-path-4"
              d="M 300,200 A 100,100 0 1,1 300,400 A 100,100 0 1,1 300,200"
              fill="none"
            />

            {/* Linear and radial gradients */}
            <radialGradient id="centerCoreGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="60%" stopColor="#FFB300" />
              <stop offset="100%" stopColor="#FF8F00" />
            </radialGradient>

            <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background subtle reference circles */}
          <circle cx="300" cy="300" r="285" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx="300" cy="300" r="45" fill="none" stroke="rgba(255,179,0,0.15)" strokeWidth="1" />

          {/* Orbit Rings Group */}
          {orbits.map((orbit, index) => {
            const isHovered = hoveredRing === orbit.id;
            const isSelected = activeServiceId === orbit.id;
            const blinkClass = getBlinkClass((index + 1) as 1 | 2 | 3 | 4);

            return (
              <g
                key={orbit.id}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredRing(orbit.id)}
                onMouseLeave={() => setHoveredRing(null)}
                onClick={() => onSelectService && onSelectService(orbit.id)}
              >
                {/* 1. Orbit Physical Thread (Benang Orbit) */}
                <circle
                  cx="300"
                  cy="300"
                  r={orbit.radius}
                  fill="none"
                  stroke={isHovered || isSelected ? '#FFFFFF' : orbit.color}
                  strokeWidth={isHovered || isSelected ? '2.5' : '1.5'}
                  strokeDasharray={orbit.dash === 'solid' ? undefined : orbit.dash}
                  strokeOpacity={isHovered || isSelected ? 0.95 : 0.4}
                  className={blinkClass}
                />

                {/* 2. Rotating container holding the curved text along the orbit thread */}
                <g
                  style={{
                    transformOrigin: '300px 300px',
                    animation: isRotating
                      ? `orbit-cw ${orbit.duration} linear infinite ${orbit.direction === 'reverse' ? 'reverse' : 'normal'}`
                      : 'none',
                  }}
                >
                  {/* Glowing Orbit Particle Beads / Bulbs (Lampu Benang Orbit) */}
                  <circle
                    cx={300}
                    cy={300 - orbit.radius}
                    r={isHovered ? 5.5 : 4}
                    fill="#FFFFFF"
                    stroke={orbit.color}
                    strokeWidth="2"
                    className={blinkClass}
                  />
                  <circle
                    cx={300}
                    cy={300 + orbit.radius}
                    r={3}
                    fill={orbit.color}
                    opacity="0.8"
                    className={blinkClass}
                  />
                  <circle
                    cx={300 + orbit.radius}
                    cy={300}
                    r={2.5}
                    fill="#FFFFFF"
                    opacity="0.7"
                    className={blinkClass}
                  />

                  {/* 3. CURVED TEXT FOLLOWING THE ORBIT THREAD (Mengikuti lekukan benang orbit) */}
                  <text
                    className={`font-mono text-[9.5px] font-bold tracking-[0.24em] uppercase transition-all duration-300 ${blinkClass}`}
                    fill={isHovered || isSelected ? '#FFFFFF' : orbit.color}
                    style={{
                      letterSpacing: '0.22em',
                      textShadow: isHovered 
                        ? '0 0 10px #FFFFFF, 0 0 20px #FFB300' 
                        : '0 0 8px rgba(255,179,0,0.8)',
                    }}
                  >
                    <textPath
                      href={`#orbit-path-${orbit.id}`}
                      startOffset="0%"
                      method="align"
                      spacing="auto"
                    >
                      {orbit.text}
                    </textPath>
                  </text>
                </g>
              </g>
            );
          })}

          {/* Central Sun / Stage Emblem Core */}
          <g
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            style={{ transformOrigin: '300px 300px' }}
          >
            {/* Core outer glow */}
            <circle
              cx="300"
              cy="300"
              r="62"
              fill="url(#centerCoreGradient)"
              className="animate-core-pulse"
            />
            {/* Inner ring */}
            <circle
              cx="300"
              cy="300"
              r="54"
              fill="#FFFFFF"
              stroke="#FFB300"
              strokeWidth="2.5"
              strokeDasharray="4 2"
              className={getBlinkClass(1)}
            />
            {/* Center Plate with official Amber Logo */}
            <circle
              cx="300"
              cy="300"
              r="47"
              fill="#FFFFFF"
              stroke="rgba(255,179,0,0.6)"
              strokeWidth="1.5"
            />
            {/* Official Logo inside core */}
            <image
              href="/assets/aistudio/amber_logo_88083054.png"
              x="255"
              y="272"
              width="90"
              height="56"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </svg>

        {/* Floating Tooltip when hovering an orbit */}
        {hoveredRing && (
          <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-amber-400/60 bg-[#0F0E0D]/95 px-4 py-1.5 text-center shadow-xl backdrop-blur-md transition-all animate-in fade-in zoom-in-95">
            <p className="text-xs font-bold text-amber-300">
              {orbits.find((o) => o.id === hoveredRing)?.title}
            </p>
          </div>
        )}
      </div>

      {/* Interactive Controls Bar for Orbit & Blinking Effect */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/15 bg-black/60 px-5 py-2.5 shadow-2xl backdrop-blur-md">
        {/* Blinking Mode Switcher */}
        <div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
          <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
          <span className="text-xs font-semibold text-white/60">Kedipan:</span>
          <div className="flex gap-1">
            <button
              onClick={() => setBlinkMode('neon')}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all ${
                blinkMode === 'neon'
                  ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(255,179,0,0.8)]'
                  : 'text-white/70 hover:text-white'
              }`}
              title="Efek berkedip realistis neon tabung panggung"
            >
              Neon Flicker
            </button>
            <button
              onClick={() => setBlinkMode('stage-sync')}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all ${
                blinkMode === 'stage-sync'
                  ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(255,179,0,0.8)]'
                  : 'text-white/70 hover:text-white'
              }`}
              title="Kedipan panggung sinkron serentak"
            >
              Pulse Sync
            </button>
            <button
              onClick={() => setBlinkMode('strobe')}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-all ${
                blinkMode === 'strobe'
                  ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(255,179,0,0.8)]'
                  : 'text-white/70 hover:text-white'
              }`}
              title="Kedipan cepat lampu strobo panggung"
            >
              Strobe Flash
            </button>
          </div>
        </div>

        {/* Orbit Rotation Toggle */}
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10"
          title={isRotating ? 'Hentikan putaran orbit' : 'Putar kembali orbit'}
        >
          {isRotating ? (
            <>
              <Pause className="h-3.5 w-3.5 text-amber-400" />
              <span>Jeda Putaran</span>
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5 text-emerald-400" />
              <span>Putar Orbit</span>
            </>
          )}
        </button>

        {/* Glow Power Level */}
        <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
          <Zap className="h-3.5 w-3.5 text-amber-400" />
          <span className="text-xs text-white/60">Glow:</span>
          {(['normal', 'high', 'ultra'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setGlowIntensity(lvl)}
              className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase transition ${
                glowIntensity === lvl
                  ? 'bg-amber-400/20 text-amber-300 ring-1 ring-amber-400'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-2 text-center text-xs text-white/50">
        ✨ Tulisan melengkung dinamis mengikuti alur benang orbit 1 s/d 4 dengan efek cahaya berkedip neon.
      </p>
    </div>
  );
};
