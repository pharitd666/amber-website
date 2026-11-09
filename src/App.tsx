import React, { useState, useEffect } from 'react';
import { 
  RollingServicesHero 
} from './components/RollingServicesHero.tsx';
import { 
  Sparkles, 
  ArrowUpRight, 
  ArrowRight, 
  Layers, 
  Calendar, 
  Palette, 
  Users, 
  CheckCircle2, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award,
  ChevronRight,
  Sliders,
  ExternalLink,
  Briefcase,
  Building2,
  Tag,
  Star,
  Download,
  Code2,
  Copy,
  Check
} from 'lucide-react';

interface ServiceDetail {
  id: number;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  servicePillar: string;
  highlight: string;
}

const SERVICES: ServiceDetail[] = [
  {
    id: 1,
    number: '01',
    title: 'Branding & Activation',
    tagline: 'Make your brand memorable on and off the stage',
    description: 'We craft comprehensive identity systems and high-energy brand activations that cut through the noise, leaving an indelible imprint on your target audience.',
    features: [
      'Brand Identity & Stage Visual Guidelines',
      'Experiential Product Launches',
      'Interactive Consumer Touchpoints',
      'Media & Influencer Event Kits'
    ],
    servicePillar: 'Pillar 01 / BRANDING',
    highlight: 'Comprehensive stage branding & experiential launches'
  },
  {
    id: 2,
    number: '02',
    title: 'Exhibitions & Showcases',
    tagline: 'Booths and displays designed to draw crowds',
    description: 'From modular trade show booths to interactive gallery pavilions, we design spatial structures that stop attendees in their tracks and spark genuine business dialogues.',
    features: [
      'Custom Expo Booth Design & Fabrication',
      'Art Installations & Showcase Walls',
      'Interactive Tech & Lighting Integrations',
      'On-site Rigging & Disassembly Logistics'
    ],
    servicePillar: 'Pillar 02 / EXHIBITIONS',
    highlight: 'Bespoke trade exhibition stands & crowd-pulling booths'
  },
  {
    id: 3,
    number: '03',
    title: 'Events Organizer & Planner',
    tagline: 'Full-service planning and seamless execution',
    description: 'End-to-end management for festivals, gala dinners, and stage shows. We orchestrate talent, lighting, sound engineering, run-downs, and crowd flow with clinical precision.',
    features: [
      'Concert & Festival Production',
      'Corporate Gala Dinners & Award Ceremonies',
      'Artist Booking & Talent Management',
      'Multi-camera Live Streaming & Audio Rigging'
    ],
    servicePillar: 'Pillar 03 / EVENTS ORGANIZER & PLANNER',
    highlight: 'Flawless festival stages, gala dinners & corporate celebrations'
  },
  {
    id: 4,
    number: '04',
    title: 'Meetings & Conferences (MICE)',
    tagline: 'Tailored for summits, incentives, and hybrid symposiums',
    description: 'Flawless conference infrastructure with state-of-the-art audiovisual systems, translation booths, VIP hospitality, and breakout session management.',
    features: [
      'National & International Summits',
      'Incentive Travel & Team Experiences',
      'Hybrid & Virtual Conference Platforms',
      'Speaker Hospitality & Precision Timelines'
    ],
    servicePillar: 'Pillar 04 / MEETINGS & CONFERENCES',
    highlight: 'High-stake international summits & corporate conferences'
  }
];

// Team Members (The Leaders)
const TEAM_MEMBERS = [
  {
    name: 'Ahmad FS',
    role: 'Founder & Executive Producer',
    image: '/assets/aistudio/Ahmad_FS_a37b308d.png',
  },
  {
    name: 'Saifudin S',
    role: 'Co-Founder & Operations Director',
    image: '/assets/aistudio/Saifudin_S_fe6d9fe6.png',
  },
  {
    name: 'Ali S',
    role: 'Creative & Stage Production Lead',
    image: '/assets/aistudio/Ali_S_5577ab3c.jpg',
  },
  {
    name: 'Reiza JP',
    role: 'Technical & Logistics Director',
    image: '/assets/aistudio/Reiza_JP_c499c0de.png',
  },
];

// Client Logos
const CLIENTS = [
  {
    name: 'MyRepublic',
    logo: '/assets/aistudio/my_republic_45baa0c0.png',
  },
  {
    name: 'Bank Mandiri',
    logo: '/assets/aistudio/mandiri_9a69ac15.png',
  },
  {
    name: 'Schneider Electric',
    logo: '/assets/aistudio/schneider_electric_f4135843.png',
  },
  {
    name: 'KAI (Kereta Api Indonesia)',
    logo: '/assets/aistudio/kai_db0a2907.png',
  },
  {
    name: 'Kahf',
    logo: '/assets/aistudio/Kahf_fb166aba.png',
  },
  {
    name: 'Ella Skin Care',
    logo: '/assets/aistudio/ella_skin_care_fde4cb69.png',
  },
  {
    name: 'PT HM Sampoerna Tbk',
    logo: '/assets/aistudio/sampoerna_0da0c226.png',
  },
  {
    name: 'Motul',
    logo: '/assets/aistudio/motul_94144148.png',
  },
];

// 2026 Works Portfolio
const WORKS_2026 = [
  {
    id: 1,
    title: 'Part of Launching Compass x Tame Impala Tokopedia, Malang',
    category: 'Brand Launch & Collab',
    location: 'Malang',
    brand: 'Compass x Tame Impala x Tokopedia',
  },
  {
    id: 2,
    title: 'Part of Motul Virtual Event',
    category: 'Virtual Event & Streaming',
    location: 'National Virtual',
    brand: 'Motul',
  },
  {
    id: 3,
    title: 'Launching Virtual Bio Def - Paragon',
    category: 'Product Launch',
    location: 'Virtual Stage',
    brand: 'Paragon Technology',
  },
  {
    id: 4,
    title: 'Press Confrence Wardah - Paragon, Virtual Event',
    category: 'Press Conference',
    location: 'Virtual Event',
    brand: 'Wardah (Paragon)',
  },
  {
    id: 5,
    title: 'Live Shopping Tokopedia, Pasar Besar Malang',
    category: 'Live Activation',
    location: 'Pasar Besar Malang',
    brand: 'Tokopedia',
  },
  {
    id: 6,
    title: 'Gathering Kahf, Surabaya',
    category: 'Corporate Gathering',
    location: 'Surabaya',
    brand: 'Kahf',
  },
  {
    id: 7,
    title: 'Branding Gate Slamat Hari raya Idul Fitri St. Kota Baru - Malang',
    category: 'Spatial & City Branding',
    location: 'Stasiun Kota Baru Malang',
    brand: 'KAI / City Gate',
  },
  {
    id: 8,
    title: 'Launching Produk Unilever Distributor Malang Selatan',
    category: 'Product Launch',
    location: 'Malang Selatan',
    brand: 'Unilever',
  },
  {
    id: 9,
    title: 'Lauching Samsat Digital Lw. Panjang, Bapenda Provinsi Jawa Barat',
    category: 'Government & Digital Launch',
    location: 'Lw. Panjang, Jawa Barat',
    brand: 'Bapenda Prov. Jawa Barat',
  },
  {
    id: 10,
    title: 'Pemasangan Shopsign Produk Sampoerna',
    category: 'Retail & POSM Branding',
    location: 'Regional Distribution',
    brand: 'PT HM Sampoerna Tbk',
  },
  {
    id: 11,
    title: 'Pemasangan Sunblind Produk Sampoerna',
    category: 'Retail & POSM Branding',
    location: 'Regional Distribution',
    brand: 'PT HM Sampoerna Tbk',
  },
  {
    id: 12,
    title: 'Team Building Bidang Pemasaran Schnider Electric Provinsi Jawa Timur',
    category: 'Corporate Team Building',
    location: 'Jawa Timur',
    brand: 'Schneider Electric',
  },
  {
    id: 13,
    title: 'Event santan sasa dengan DIKA BJ Team Kota Malang',
    category: 'Consumer Activation & Culinary Event',
    location: 'Kota Malang',
    brand: 'Sasa x DIKA BJ Team',
  },
];

export default function App() {
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceDetail | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [activeWorkFilter, setActiveWorkFilter] = useState<string>('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Branding & Activation',
    message: ''
  });

  const [showGitHubModal, setShowGitHubModal] = useState<boolean>(false);
  const [copiedCmd, setCopiedCmd] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('amber-contact-email');
    if (saved) {
      setContactSubmitted(true);
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    localStorage.setItem('amber-contact-email', formData.email);
    setContactSubmitted(true);
  };

  const handleSelectService = (id: number) => {
    setActiveServiceId(id);
    const service = SERVICES.find((s) => s.id === id);
    if (service) {
      setSelectedServiceModal(service);
    }
  };

  const copyGitCommands = () => {
    const cmds = `git init\ngit add .\ngit commit -m "Update Amber Event Production website"\ngit branch -M main\ngit remote add origin https://github.com/USERNAME/REPO-NAME.git\ngit push -u origin main --force`;
    navigator.clipboard.writeText(cmds);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const filteredWorks = activeWorkFilter === 'All' 
    ? WORKS_2026 
    : WORKS_2026.filter(w => w.category.toLowerCase().includes(activeWorkFilter.toLowerCase()) || w.brand.toLowerCase().includes(activeWorkFilter.toLowerCase()));

  return (
    <div className="min-h-screen paper-texture text-[#18181B] selection:bg-amber-400 selection:text-black">
      {/* Top Banner Notice with Direct Download Button */}
      <div className="bg-[#121110] px-4 py-2.5 text-center text-xs text-white/90 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <strong className="text-amber-400 font-semibold">We make a...</strong> Branding · Exhibitions · Events · Conferences
          </span>

          {/* Direct ZIP download button right on the page */}
          <div className="flex items-center gap-2">
            <a
              href="/amber-event-production.zip"
              download="amber-event-production.zip"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#FFB300] px-3.5 py-1 text-xs font-bold text-black shadow-md transition hover:bg-[#FFA000] hover:scale-105"
            >
              <Download className="h-3.5 w-3.5 text-black" />
              <span>Download Source Code (.ZIP)</span>
            </a>

            <button
              onClick={() => setShowGitHubModal(true)}
              className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/80 transition hover:bg-white/20 hover:text-white"
            >
              <Code2 className="h-3.5 w-3.5 text-amber-300" />
              <span>Panduan GitHub</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="/" className="flex items-center gap-3 transition-transform hover:opacity-95" aria-label="Amber Event Production home">
          {/* Official Logo Image */}
          <img
            src="/assets/aistudio/amber_logo_88083054.png"
            alt="Amber Event Production Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <a href="#services-hero" className="transition hover:text-[#FFB300] text-[#18181B]/80 hover:scale-105">
            We make a...
          </a>
          <a href="#our-team" className="transition hover:text-[#FFB300] text-[#18181B]/80 hover:scale-105">
            Our Team's
          </a>
          <a href="#our-works" className="transition hover:text-[#FFB300] text-[#18181B]/80 hover:scale-105">
            Our Works
          </a>
          <a href="#our-clients" className="transition hover:text-[#FFB300] text-[#18181B]/80 hover:scale-105">
            Our Client's
          </a>
          <a href="#services" className="transition hover:text-[#FFB300] text-[#18181B]/80 hover:scale-105">
            Services
          </a>
          <a href="#contact" className="transition hover:text-[#FFB300] text-[#18181B]/80 hover:scale-105">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="/amber-event-production.zip"
            download="amber-event-production.zip"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-amber-400/80 bg-amber-50 px-3.5 py-2 text-xs font-bold text-neutral-900 transition hover:bg-[#FFB300] hover:text-black hover:scale-105 shadow-sm"
            title="Download seluruh kode zip proyek"
          >
            <Download className="h-3.5 w-3.5 text-amber-600" />
            <span>Download ZIP</span>
          </a>

          <a
            href="#contact"
            className="rounded-full border-2 border-[#18181B]/15 bg-white/90 px-5 py-2.5 text-sm font-bold shadow-sm transition hover:border-[#FFB300] hover:bg-[#FFB300] hover:text-black hover:shadow-lg inline-flex items-center gap-2"
          >
            <span>Work with us</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero Section with Clean White Background & Rolling Services */}
      <main>
        <section id="services-hero" className="mx-3 sm:mx-6 lg:mx-10 my-4">
          <div className="mx-auto max-w-7xl">
            {/* The Rolling Services Hero on Clean White Background */}
            <RollingServicesHero onSelectService={handleSelectService} />

            {/* Amber Event Production Story & Value Proposition Banner */}
            <div className="mt-4 rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-600 mb-3">
                  <span className="h-2 w-2 rounded-full bg-[#FFB300]" />
                  <span>About PT Amber Event Production</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-[#18181B] leading-tight">
                  Founded in mid-2026 in the dynamic city of Malang, Indonesia
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
                  Our name reflects the spirit with which we face every challenge in today's business world. Through solid concepts, timelines, visuals, and flexible budgets tailored to each client's needs, we deliver solutions for every occasion with maximum execution.
                </p>
              </div>

              <div className="flex flex-wrap lg:flex-col items-center lg:items-end gap-3 shrink-0">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Ready for National & Regional Production</span>
                </div>
                <a
                  href="#contact"
                  className="rounded-full bg-[#18181B] text-white px-6 py-3 text-xs font-bold transition hover:bg-[#FFB300] hover:text-black hover:scale-105 inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Konsultasi Event Gratis</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: OUR TEAM'S (THE LEADERS) */}
        <section id="our-team" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-[var(--radius)] border border-neutral-200/80 bg-white p-8 sm:p-12 shadow-sm">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFB300]">
                The Leaders
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mt-1 text-[#18181B]">
                Our Team's
              </h2>
              <p className="mt-3 text-sm text-neutral-600">
                Dedikasi dan keahlian di balik setiap panggung spektakuler PT Amber Event Production di Malang dan seluruh Indonesia.
              </p>
            </div>

            {/* 4 Photos side-by-side from left to right */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {TEAM_MEMBERS.map((member, index) => (
                <div 
                  key={index} 
                  className="group flex flex-col items-center text-center rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB300] hover:bg-white hover:shadow-lg"
                >
                  {/* Photo container - compact and balanced size */}
                  <div className="relative w-full aspect-[3/4] max-h-56 sm:max-h-64 overflow-hidden rounded-xl bg-neutral-200/60 border border-neutral-200 shadow-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Name below photo */}
                  <div className="mt-4 w-full">
                    <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#18181B] group-hover:text-[#FFA000] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-neutral-500 mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: OUR WORKS (Placed directly below The Leader / Our Team) */}
        <section id="our-works" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-[var(--radius)] bg-[#121110] text-white p-8 sm:p-14 border border-amber-500/20 shadow-xl relative overflow-hidden">
            {/* Background glowing stage elements */}
            <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-400/10 blur-[100px]" />
            <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-3">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  Track Record · 2026
                </div>
                <h2 className="font-heading text-4xl sm:text-6xl uppercase font-extrabold leading-tight">
                  Our Works
                </h2>
                <p className="text-neutral-400 text-sm mt-2 max-w-xl">
                  Portofolio eksekusi event berskala regional hingga nasional oleh PT Amber Event Production sepanjang tahun 2026.
                </p>
              </div>

              {/* Year Badge */}
              <div className="flex items-center gap-3">
                <span className="font-heading text-5xl sm:text-6xl font-extrabold text-[#FFB300] tracking-tight">
                  2026
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest leading-tight">
                  Annual<br />Portfolio
                </span>
              </div>
            </div>

            {/* Works List / Interactive Grid */}
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
              {WORKS_2026.map((work, idx) => (
                <div
                  key={work.id}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,179,0,0.15)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-block rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 border border-amber-400/30">
                        {work.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-500">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h4 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      • {work.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1 text-neutral-300">
                      <MapPin className="h-3 w-3 text-amber-400" />
                      {work.location}
                    </span>
                    <span className="font-semibold text-amber-400/90 truncate max-w-[130px]">
                      {work.brand}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom summary highlight banner */}
            <div className="mt-10 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-amber-400 animate-ping shrink-0" />
                <p className="text-xs sm:text-sm text-neutral-200">
                  <strong className="text-amber-400 font-semibold">13+ Event Sukses di 2026:</strong> Mulai dari peluncuran produk kolaborasi Tokopedia x Compass, press conference Paragon (Bio Def & Wardah), hingga pengerjaan branding Sampoerna & KAI.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 rounded-full bg-[#FFB300] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#FFA000] hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Mulai Kerjasama</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: OUR CLIENT'S */}
        <section id="our-clients" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-[var(--radius)] border border-neutral-200/80 bg-white p-8 sm:p-12 shadow-sm">
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFB300]">
                Trusted Partnerships
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mt-1 text-[#18181B]">
                Our Client's
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Dipercaya oleh berbagai brand nasional dan multinasional terkemuka untuk menghadirkan produksi panggung dan aktivasi terbaik.
              </p>
            </div>

            {/* Client logos - sized appropriately and arranged neatly */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {CLIENTS.map((client, index) => (
                <div
                  key={index}
                  className="group relative flex h-20 sm:h-24 items-center justify-center rounded-xl border border-neutral-200/90 bg-neutral-50/70 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFB300] hover:bg-white hover:shadow-md"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 sm:max-h-11 max-w-[105px] sm:max-w-[120px] object-contain transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Client category pill strip */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-500 font-medium">
              <span className="font-bold text-neutral-800">Sektor:</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">FMCG & Beauty</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">Banking & FinTech</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">Energy & Electrical</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">Telecommunication</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">Automotive & Lubricant</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1">Transportation & Gov</span>
            </div>
          </div>
        </section>

        {/* 4 Core Pillars Section */}
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="rounded-[var(--radius)] border border-neutral-200/80 bg-white p-8 sm:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-black/5">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFB300]">
                  We make a...
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl uppercase mt-1 font-bold">
                  4 Layanan Spesialisasi Utama
                </h2>
              </div>
              <p className="max-w-md text-sm text-neutral-600">
                Solusi menyeluruh dari konsep, panggung, teknologi, hingga manajemen audiens untuk menghasilkan dampak maksimal.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceModal(service)}
                  className="group relative cursor-pointer rounded-2xl border border-neutral-200 bg-neutral-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB300] hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-[#FFB300] font-heading">
                      {service.number}
                    </span>
                    <span className="h-3 w-3 rounded-full bg-amber-400 group-hover:animate-ping" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase mb-2 group-hover:text-[#FFA000] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-4 line-clamp-2">
                    {service.tagline}
                  </p>
                  <div className="pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs font-bold text-neutral-700">
                    <span className="text-[11px] text-[#FFB300] font-mono">{service.servicePillar}</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#FFB300]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do / Services Cards */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-[#FFB300]">
                What we do
              </p>
              <h2 className="font-heading max-w-2xl text-5xl uppercase leading-[0.95] sm:text-7xl font-extrabold">
                Built for every <span className="text-neutral-400">moment that matters.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-neutral-600">
              Concept, timeline, visuals, and budget — all meticulously calibrated to light up your stage and brand.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1: Primary Amber Card */}
            <article className="rounded-[var(--radius)] bg-[#FFB300] p-8 text-[#0F0E0D] shadow-lg md:mt-10 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="mb-16 flex items-center justify-between">
                  <span className="text-4xl font-mono">◌</span>
                  <span className="text-xs font-extrabold uppercase tracking-widest bg-black/10 px-3 py-1 rounded-full">
                    01
                  </span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl uppercase leading-none font-extrabold">
                  Branding &<br />Activation
                </h3>
                <p className="mt-6 text-sm leading-6 font-medium text-black/80">
                  A clear identity and activation plan that makes your brand memorable on and off the stage. We formulate brand narratives that capture hearts.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Service Pillar 01</span>
                <button
                  onClick={() => setSelectedServiceModal(SERVICES[0])}
                  className="rounded-full bg-black text-amber-300 px-4 py-2 text-xs font-bold hover:bg-neutral-900 transition"
                >
                  View Details
                </button>
              </div>
            </article>

            {/* Card 2 */}
            <article className="rounded-[var(--radius)] border border-black/10 bg-white p-8 shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:border-[#FFB300] hover:shadow-xl">
              <div>
                <div className="mb-16 flex items-center justify-between">
                  <span className="text-4xl text-[#FFB300]">↗</span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    02
                  </span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl uppercase leading-none font-extrabold">
                  Exhibitions &<br />Showcases
                </h3>
                <p className="mt-6 text-sm leading-6 text-neutral-600">
                  Booths, displays, and experiences designed to draw crowds and start conversations. Built with sturdy modular craftsmanship and show-stopping aesthetics.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">Service Pillar 02</span>
                <button
                  onClick={() => setSelectedServiceModal(SERVICES[1])}
                  className="rounded-full bg-[#FFB300] text-black px-4 py-2 text-xs font-bold hover:bg-[#FFA000] transition"
                >
                  View Details
                </button>
              </div>
            </article>

            {/* Card 3 */}
            <article className="rounded-[var(--radius)] border border-black/10 bg-white p-8 shadow-sm md:mt-20 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:border-[#FFB300] hover:shadow-xl">
              <div>
                <div className="mb-16 flex items-center justify-between">
                  <span className="text-4xl text-[#FFB300]">✦</span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    03 & 04
                  </span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl uppercase leading-none font-extrabold">
                  Events, Meetings<br />& Conferences
                </h3>
                <p className="mt-6 text-sm leading-6 text-neutral-600">
                  Full-service planning and execution — from intimate meetings and MICE symposiums to large-scale concert festivals and stage productions.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">Service Pillars 03 & 04</span>
                <button
                  onClick={() => setSelectedServiceModal(SERVICES[2])}
                  className="rounded-full bg-[#FFB300] text-black px-4 py-2 text-xs font-bold hover:bg-[#FFA000] transition"
                >
                  View Details
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* Execution Pillars Section */}
        <section id="pillars" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-[var(--radius)] bg-[#121110] text-white p-8 sm:p-14 border border-amber-500/20 relative overflow-hidden">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFB300]">
                The Amber Method
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mt-2 leading-tight">
                Our Four Pillars of Execution
              </h2>
              <p className="text-neutral-400 text-sm mt-3">
                How PT Amber Event Production turns visionary briefs into world-class stage realities in Malang and across Indonesia.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-heading font-extrabold mb-4">
                  01
                </div>
                <h4 className="font-heading text-xl uppercase font-bold text-white mb-2">
                  Solid Concept
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Every project begins with a creative anchor that resonates emotionally with attendees and aligns with your business goals.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-heading font-extrabold mb-4">
                  02
                </div>
                <h4 className="font-heading text-xl uppercase font-bold text-white mb-2">
                  Rigid Timeline
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Milestone-driven production schedules. We manage vendor sequencing, rehearsals, and setup down to the exact minute.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-heading font-extrabold mb-4">
                  03
                </div>
                <h4 className="font-heading text-xl uppercase font-bold text-white mb-2">
                  Stunning Visuals
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  State-of-the-art stage lighting, LED screens, 3D spatial renders, and amber glow accents that create unforgettable photo moments.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-heading font-extrabold mb-4">
                  04
                </div>
                <h4 className="font-heading text-xl uppercase font-bold text-white mb-2">
                  Flexible Budget
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Tailored modular options that optimize resources for maximum on-stage impact without unexpected surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="mx-3 sm:mx-6 mb-8 overflow-hidden rounded-[var(--radius)] bg-[#FFB300] text-[#0F0E0D] lg:mx-10 shadow-xl">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-16 lg:py-24">
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] opacity-75">
                Get in touch with Amber
              </p>
              <h2 className="font-heading text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.88] font-extrabold">
                Let's light up<br />your next stage.
              </h2>
              <div className="mt-8 space-y-3 text-sm font-medium">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Malang, East Java, Indonesia</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@amberevent.pro · info@amberevent.id</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+62 856-8088-959 (WhatsApp Official)</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <p className="mb-6 max-w-md text-base leading-7 opacity-85 font-medium">
                Ready to make your next event unforgettable? Send us your brief and we'll respond within 24 hours with a tailored concept and quotation.
              </p>

              {contactSubmitted ? (
                <div className="rounded-2xl bg-black/10 p-6 border border-black/15 text-center animate-in fade-in">
                  <CheckCircle2 className="h-10 w-10 text-black mx-auto mb-3" />
                  <h4 className="font-heading text-2xl font-bold uppercase">Message Received!</h4>
                  <p className="text-sm mt-1 opacity-80">
                    Thank you! Our event producer will contact you soon.
                  </p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="mt-4 text-xs font-bold underline hover:opacity-75"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your name or company"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="min-w-0 rounded-full border-2 border-transparent bg-white/90 px-5 py-3.5 text-black outline-none placeholder:text-neutral-500 focus:border-black text-sm font-semibold"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="min-w-0 rounded-full border-2 border-transparent bg-white/90 px-5 py-3.5 text-black outline-none placeholder:text-neutral-500 focus:border-black text-sm font-semibold"
                    />
                  </div>

                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="rounded-full border-2 border-transparent bg-white/90 px-5 py-3.5 text-black outline-none focus:border-black text-sm font-semibold"
                  >
                    <option value="Branding & Activation">1. Branding & Activation</option>
                    <option value="Exhibitions & Showcases">2. Exhibitions & Showcases</option>
                    <option value="Events Organizer & Planner">3. Events Organizer & Planner</option>
                    <option value="Meetings & Conferences (MICE)">4. Meetings, Incentives & Conferences</option>
                    <option value="Full Stage Production">All-in Stage Production</option>
                  </select>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Event date / estimated scope"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="flex-1 rounded-full border-2 border-transparent bg-white/90 px-5 py-3.5 text-black outline-none placeholder:text-neutral-500 focus:border-black text-sm font-semibold"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-[#0F0E0D] px-7 py-3.5 font-extrabold text-white transition hover:scale-105 hover:bg-neutral-900 inline-flex items-center gap-2 text-sm"
                    >
                      <span>Send</span>
                      <Send className="h-4 w-4 text-amber-400" />
                    </button>
                  </div>
                </form>
              )}

              <p className="mt-4 text-xs opacity-70">
                Prefer direct chat? WhatsApp our team directly at <a href="https://wa.me/08568088959" target="_blank" rel="noopener noreferrer" className="underline font-bold">08568088959</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with updated official logo and links */}
      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-10 border-t border-neutral-200">
        <div className="flex items-center gap-3">
          {/* Logo in footer */}
          <img
            src="/assets/aistudio/amber_logo_88083054.png"
            alt="Amber Event Production Logo"
            className="h-9 w-auto object-contain bg-white/95 p-1 rounded-lg border border-neutral-200 shadow-sm"
          />
          <div>
            <p className="font-bold text-neutral-900">PT Amber Event Production</p>
            <p className="text-xs">Malang, Indonesia · Est. 2026</p>
          </div>
        </div>

        {/* Social Media Links from original template */}
        <div className="flex flex-wrap items-center gap-6 font-semibold text-neutral-700">
          <a
            href="https://id.linkedin.com/in/amber-event-production-741372424"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-[#FFB300]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://instagram.com/amber.event.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-[#FFB300]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Instagram</span>
          </a>

          <a
            href="https://t.me/amber_event"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-[#FFB300]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span>Telegram</span>
          </a>

          <a
            href="https://wa.me/08568088959"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-[#FFB300]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        <span className="text-xs">© 2026 PT Amber Event Production. All rights reserved.</span>
      </footer>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#141312] text-white p-8 border border-amber-500/40 shadow-2xl">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute right-5 top-5 h-8 w-8 rounded-full bg-white/10 text-white/80 hover:bg-white/20 grid place-items-center text-sm font-bold"
            >
              ✕
            </button>

            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 text-amber-300 px-3 py-1 text-xs font-mono font-bold mb-4">
              <span>{selectedServiceModal.servicePillar}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-extrabold text-[#FFB300] font-heading">
                {selectedServiceModal.number}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white">
                {selectedServiceModal.title}
              </h3>
            </div>

            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              {selectedServiceModal.description}
            </p>

            <div className="mt-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                Key Deliverables & Execution Scope:
              </h5>
              <div className="grid sm:grid-cols-2 gap-2">
                {selectedServiceModal.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setSelectedServiceModal(null)}
                className="rounded-full bg-[#FFB300] text-black px-6 py-3 font-bold text-xs hover:bg-[#FFA000] transition flex items-center gap-2"
              >
                <span>Request Quotation for {selectedServiceModal.title}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="text-xs text-white/60 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Download / GitHub Helper Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href="/amber-event-production.zip"
          download="amber-event-production.zip"
          className="flex items-center gap-2 rounded-full bg-[#18181B] text-white px-5 py-3 text-xs font-extrabold shadow-2xl transition hover:bg-[#FFB300] hover:text-black hover:scale-105 border border-white/20"
        >
          <Download className="h-4 w-4 text-amber-400" />
          <span>Download ZIP Web</span>
        </a>

        <button
          onClick={() => setShowGitHubModal(true)}
          className="h-11 w-11 rounded-full bg-white text-neutral-800 shadow-xl border border-neutral-200 grid place-items-center hover:bg-neutral-50 transition hover:scale-105"
          title="Panduan GitHub"
        >
          <Code2 className="h-5 w-5 text-neutral-700" />
        </button>
      </div>

      {/* GitHub Setup Helper Modal */}
      {showGitHubModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#141312] text-white p-7 sm:p-9 border border-amber-500/40 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowGitHubModal(false)}
              className="absolute right-5 top-5 h-8 w-8 rounded-full bg-white/10 text-white/80 hover:bg-white/20 grid place-items-center text-sm font-bold"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-2">
              <Download className="h-4 w-4" />
              <span>CARA DOWNLOAD & PUSH KE GITHUB</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white">
              Unduh & Terapkan ke GitHub
            </h3>

            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Karena tombol export AI Studio mungkin tersembunyi atau tidak tampil di browser Anda, kami telah menyiapkan paket file <strong className="text-amber-400">.ZIP lengkap</strong> yang bisa langsung Anda unduh dengan satu klik di bawah ini:
            </p>

            {/* Step 1: Download ZIP button */}
            <div className="mt-6 p-5 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase font-mono">Langkah 1: Unduh File</span>
                <p className="text-sm font-bold text-white mt-0.5">
                  Paket Komplit: Semua Gambar, Logo, & Kode Proyek (.ZIP)
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">Ukuran ~15.8 MB (siap pakai di komputer Anda)</p>
              </div>

              <a
                href="/amber-event-production.zip"
                download="amber-event-production.zip"
                className="shrink-0 rounded-full bg-[#FFB300] text-black px-6 py-3 font-extrabold text-xs hover:bg-[#FFA000] hover:scale-105 transition flex items-center gap-2 shadow-lg"
              >
                <Download className="h-4 w-4" />
                <span>Download .ZIP Sekarang</span>
              </a>
            </div>

            {/* Step 2: Push to GitHub */}
            <div className="mt-6">
              <span className="text-xs font-bold text-amber-400 uppercase font-mono">Langkah 2: Ekstrak & Push ke GitHub</span>
              <p className="text-xs text-neutral-300 mt-1">
                Ekstrak file ZIP di komputer Anda, lalu jalankan perintah terminal berikut di dalam foldernya:
              </p>

              <div className="mt-2 relative rounded-xl bg-black/80 border border-white/10 p-4 font-mono text-xs text-neutral-200">
                <button
                  onClick={copyGitCommands}
                  className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90 hover:bg-white/20 transition"
                >
                  {copiedCmd ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Salin Perintah</span>
                    </>
                  )}
                </button>
                <pre className="overflow-x-auto pr-24 leading-relaxed">
{`git init
git add .
git commit -m "Update web Amber Event Production"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-ANDA.git
git push -u origin main --force`}
                </pre>
              </div>
            </div>

            {/* Step 3: Deploy to Vercel/Hosting */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 leading-relaxed">
              <strong className="text-white block mb-1">Langkah 3: Buka Vercel untuk Langsung Online (Gratis)</strong>
              Buka <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-bold">vercel.com</a>, login pakai GitHub, klik <em>Add New Project</em>, dan pilih repo Anda. Website Amber Event Production Anda langsung aktif dan online dalam 1 menit!
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowGitHubModal(false)}
                className="rounded-full bg-white/10 text-white px-5 py-2 text-xs font-bold hover:bg-white/20 transition"
              >
                Tutup Panduan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
