import { useState, useEffect } from "react";
import {
  Star, Car, HeartPulse, Umbrella, Home, Shield, Tag, Search,
  CheckCircle, MapPin, Phone, MessageCircle, Heart, ChevronRight,
  FileText, BarChart3, Users, Handshake, Menu, X, ArrowRight,
  Award, Clock, TrendingUp, Building2, Quote, Zap, Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoIcon from "@/assets/logo-icon.png";
import heroVideo from "@/assets/Fondo-Vadillo.mp4";
import {
  ShieldIllustration,
  SavingsIllustration,
  BuildingIllustration,
  BrokerProfile,
} from "@/components/Illustrations";

/* ─────────────── Constants ─────────────── */
const PHONE = "51997239181";
const WA = (msg: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

// Mensajes personalizados por contexto
const WHATSAPP = WA("¡Hola Fabio! Quisiera recibir asesoría gratuita sobre seguros. ¿Podría ayudarme?");
const WA_HERO = WA("¡Hola Fabio! Vi tu web y me interesa conocer mis opciones de seguros. ¿Podemos hablar?");
const WA_VEHICULAR = WA("¡Hola Fabio! Me interesa cotizar un seguro vehicular / SOAT. ¿Cuáles son las opciones disponibles?");
const WA_SALUD = WA("¡Hola Fabio! Quisiera información sobre planes de salud / EPS para mí o mi familia. ¿Puedes ayudarme?");
const WA_VIDA = WA("¡Hola Fabio! Me interesa cotizar un seguro de vida. ¿Qué opciones tienes disponibles?");
const WA_HOGAR = WA("¡Hola Fabio! Quisiera cotizar un seguro de hogar. ¿Cuáles son las coberturas que manejas?");
const WA_INMOBILIARIA = WA("¡Hola Fabio! Me interesa el servicio de inmobiliaria. ¿Podemos coordinar una consulta?");
const WA_CONTACTO = WA("¡Hola Fabio! Me comunico desde tu web. Quisiera recibir más información sobre tus servicios.");

// Mapa de mensajes por servicio para los botones individuales
const WA_SERVICIOS: Record<string, string> = {
  "Vehicular / SOAT": WA_VEHICULAR,
  "Salud / EPS": WA_SALUD,
  "Seguro de Vida": WA_VIDA,
  "Seguro de Hogar": WA_HOGAR,
};


const LINKEDIN = "https://www.linkedin.com/in/fabio-vadillo-87a4631b";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Seguros", href: "#seguros" },
  { label: "Inmobiliaria", href: "#inmobiliaria" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  { icon: Car, title: "Vehicular / SOAT", desc: "Protección total para tu vehículo con Rímac, Pacífico y Mapfre al mejor precio del mercado.", color: "from-blue-500 to-blue-700", bg: "bg-blue-50", border: "hover:border-blue-200", tag: "Más cotizado" },
  { icon: HeartPulse, title: "Salud / EPS", desc: "Planes de salud integrales para personas, familias y empresas en Lima, Perú.", color: "from-rose-500 to-rose-700", bg: "bg-rose-50", border: "hover:border-rose-200", tag: "" },
  { icon: Umbrella, title: "Seguro de Vida", desc: "Garantiza el futuro económico de tus seres queridos ante cualquier eventualidad.", color: "from-violet-500 to-violet-700", bg: "bg-violet-50", border: "hover:border-violet-200", tag: "" },
  { icon: Home, title: "Seguro de Hogar", desc: "Cobertura completa contra todo riesgo para proteger tu patrimonio e inmueble.", color: "from-emerald-500 to-emerald-700", bg: "bg-emerald-50", border: "hover:border-emerald-200", tag: "" },
];

const ABOUT_FEATURES = [
  { icon: Award, label: "Corredor Certificado", sublabel: "SBS Nro. 4503" },
  { icon: Clock, label: "Atención 24/7", sublabel: "Siempre disponible" },
  { icon: TrendingUp, label: "Sin costo extra", sublabel: "Comisión pagada por la aseguradora" },
  { icon: Shield, label: "100% Independiente", sublabel: "Trabajamos para ti, no para ellas" },
];

const STATS = [
  { value: "20+", label: "Años de experiencia" },
  { value: "+500", label: "Familias protegidas" },
  { value: "4", label: "Aseguradoras líderes" },
  { value: "24/7", label: "Soporte disponible" },
];

const WHY_BROKER = [
  { icon: Shield, title: "Defendemos tus intereses", desc: "En caso de siniestro, peleamos por ti frente a la aseguradora para garantizar tu indemnización justa.", badge: "Tu aliado" },
  { icon: Tag, title: "Mismo precio, más valor", desc: "Pagas exactamente lo mismo que en la aseguradora, pero con soporte VIP y asesoría personalizada 24/7.", badge: "Sin recargo" },
  { icon: Search, title: "Comparamos por ti", desc: "Analizamos todas las opciones — Rímac, Pacífico, Mapfre — para encontrar la póliza perfecta para tu caso.", badge: "Mercado completo" },
];

const TESTIMONIALS = [
  { name: "Carlos Mendoza", role: "Empresario, Miraflores", text: "Increíble servicio. Me ayudaron a elegir la mejor EPS para mi familia sin papeleos interminables ni letras chicas. Proceso súper ágil.", img: "https://i.pravatar.cc/150?u=carlos" },
  { name: "Lucía Ramírez", role: "Arquitecta, San Isidro", text: "Tuve un choque y Fabio se encargó de absolutamente todo con la aseguradora. No tuve que preocuparme de nada. ¡Gracias de verdad!", img: "https://i.pravatar.cc/150?u=lucia" },
  { name: "Diego Fernández", role: "Médico, La Molina", text: "Me ahorraron un 20% en mi seguro de hogar comparando opciones que yo nunca habría conocido. Totalmente recomendable.", img: "https://i.pravatar.cc/150?u=diego" },
];

const FAQS = [
  { q: "¿Tiene algún costo extra contratar a través de Fabio Vadillo?", a: "No. El costo del seguro es exactamente el mismo que si fueras directamente a la aseguradora. La comisión la paga la compañía de seguros, no tú." },
  { q: "¿Qué pasa si tengo un accidente o emergencia de madrugada?", a: "Cuentas con soporte 24/7 vía WhatsApp. Te guío en todo el proceso para que no pierdas tiempo valioso en un momento crítico." },
  { q: "¿Puedo trasladar mi seguro actual con ustedes?", a: "Sí, puedes trasladar tu póliza vigente sin perder beneficios ni antigüedad. Nos encargamos del proceso completo ante la aseguradora." },
  { q: "¿Es necesario ir a una oficina para contratar?", a: "No. Todo el proceso puede realizarse 100% de forma digital y remota, desde cualquier lugar de Lima o el Perú." },
  { q: "¿Es necesario ser cliente de un banco para el desgravamen?", a: "No necesariamente. Te asesoro sobre las opciones disponibles según tu crédito hipotecario vigente y tu situación particular." },
];

const INMOBILIARIA_FEATURES = [
  { icon: FileText, title: "Soporte Completo", desc: "Te acompañamos en cada etapa del proceso de venta o alquiler." },
  { icon: BarChart3, title: "Informes Detallados", desc: "Reportes completos de prospectos y análisis de mercado." },
  { icon: Users, title: "Análisis de Zona", desc: "Estudio de competencia y precios reales en tu zona." },
  { icon: Handshake, title: "Cierre Exitoso", desc: "Concreta tu operación con solvencia y respaldo profesional." },
];

/* ─────────────── Component ─────────────── */
export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════
          FLOATING WHATSAPP BUTTON
      ══════════════════════════════════════ */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Fabio Vadillo - Broker de Seguros Lima por WhatsApp"
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full p-4 sm:px-5 sm:py-3.5 shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 font-bold text-sm"
      >
        <MessageCircle className="h-6 w-6 sm:h-5 sm:w-5 flex-shrink-0" />
        <span className="hidden sm:inline">Cotizar Gratis</span>
      </a>

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/96 backdrop-blur-md shadow-lg shadow-navy/5 py-3" : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <a href="#inicio" aria-label="Vadillo Broker — Inicio" className="flex items-center gap-3 group">
            <img src={logoIcon} alt="Logo Vadillo Broker" className="w-10 h-10 object-contain" loading="eager" />
            <div className="leading-tight">
              <span className={`block text-base font-extrabold tracking-tight transition-colors ${scrolled ? "text-navy" : "text-white"}`}>
                VADILLO BROKER
              </span>
              <span className="block text-[10px] font-bold text-teal tracking-widest uppercase">
                Corredor SBS N4503
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Menú principal" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(0, 4).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-semibold transition-colors hover:text-teal ${scrolled ? "text-navy/70" : "text-white/80"}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              asChild
              className="rounded-full bg-teal hover:bg-teal/90 text-navy font-extrabold px-6 shadow-md shadow-teal/20 transition-all hover:scale-105"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-1.5" /> WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-navy hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav aria-label="Menú móvil" className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-5 space-y-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center gap-2 py-3 text-navy font-semibold hover:text-teal border-b border-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <ChevronRight className="h-4 w-4 text-teal" />
                {l.label}
              </a>
            ))}
            <div className="pt-3">
              <Button className="w-full rounded-full bg-teal text-navy font-extrabold" asChild>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" /> Cotizar por WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <main>
        <style>{`
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <section
          id="inicio"
          aria-labelledby="hero-heading"
          className="relative min-h-screen flex items-center bg-[#07192C] overflow-hidden"
        >
          {/* Layered backgrounds - Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-lighten"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Profesional subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020B16] via-[#0A1F35]/90 to-[#103154]/70 z-0" />

          <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none overflow-hidden">
            <svg
              className="absolute w-full h-full top-0 left-0 origin-center animate-[spin_60s_linear_infinite]"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="fluid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E8BAA" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#7DD8E8" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#0D2A48" stopOpacity="0" />
                </linearGradient>
                <filter id="fluid-blur">
                  <feGaussianBlur stdDeviation="60" />
                </filter>
              </defs>
              <g filter="url(#fluid-blur)">
                <circle cx="500" cy="300" r="280" fill="url(#fluid-grad)" className="animate-[pulse_10s_ease-in-out_infinite_alternate]" />
                <circle cx="200" cy="600" r="200" fill="url(#fluid-grad)" className="animate-[pulse_12s_ease-in-out_infinite_alternate-reverse]" style={{ animationDelay: '2s' }} />
                <circle cx="800" cy="700" r="250" fill="url(#fluid-grad)" className="animate-[pulse_14s_ease-in-out_infinite_alternate]" style={{ animationDelay: '5s' }} />
                <circle cx="500" cy="800" r="150" fill="url(#fluid-grad)" className="animate-[pulse_8s_ease-in-out_infinite_alternate-reverse]" style={{ animationDelay: '1s' }} />
              </g>
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-28 md:pb-32 grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            {/* Left content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-white/90 text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-6 md:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(20,184,166,0.8)] animate-pulse" />
                Corredor SBS Nro. 4503 — Desde 2017
              </div>

              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-tight mb-5 md:mb-6 tracking-tight">
                Tu seguro ideal,<br />
                <span className="text-teal font-extrabold relative inline-block">
                  al mejor precio
                  <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-teal/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span><br />
                del mercado
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-normal">
                <strong className="text-white font-medium">Fabio Vadillo</strong>, Corredor de Seguros certificado SBS en <strong className="text-white font-medium">Lima, Perú</strong>. Más de 20 años comparando <strong className="text-white font-medium">Rímac, Pacífico y Mapfre</strong> para encontrar el seguro vehicular, de salud, vida o hogar perfecto para ti — sin costo adicional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-14">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto rounded-full bg-teal hover:bg-teal-hover text-navy font-bold text-base px-8 h-14 shadow-lg shadow-teal/20 transition-all hover:scale-105"
                >
                  <a href={WA_HERO} target="_blank" rel="noopener noreferrer">
                    Asesoría Gratuita <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-medium text-base px-8 h-14 bg-white/5 backdrop-blur-sm transition-all"
                >
                  <a href="#seguros">Ver Seguros</a>
                </Button>
              </div>

              {/* Hero stats */}
              <div className="grid grid-cols-3 border-t border-white/10 pt-6 md:pt-8 mt-2 divide-x divide-white/10">
                {[
                  { value: "+500", label: "Familias protegidas" },
                  { value: "20+", label: "Años de experiencia" },
                  { value: "04", label: "Aseguradoras top" },
                ].map((s, i) => (
                  <div key={s.label} className={i !== 0 ? "pl-3 md:pl-10" : "pr-3 md:pr-10"}>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-none mb-1 md:mb-1.5 tracking-tight">{s.value}</div>
                    <div className="text-slate-400 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Shield illustration */}
            <div className="hidden lg:flex justify-center items-center relative z-10 w-full h-[550px]">
              <ShieldIllustration className="w-full max-w-[500px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)] relative z-10" />

              {/* Floating badge — stars */}
              <div className="absolute top-[40%] -right-10 lg:-right-16 bg-white rounded-2xl px-5 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 animate-[bounce_3.5s_infinite]">
                <div className="flex gap-1 mb-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold drop-shadow-sm" />
                  ))}
                </div>
                <div className="text-navy text-sm font-black">+500 clientes</div>
              </div>

              {/* Floating badge — 24/7 */}
              <div className="absolute top-[65%] -left-10 lg:-left-16 bg-[#64D6E8] rounded-2xl px-5 py-3.5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 animate-[bounce_4s_infinite_1s]">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-navy" />
                  <div>
                    <div className="text-navy font-black text-sm leading-tight">Respuesta</div>
                    <div className="text-navy/80 text-xs font-bold">en menos de 1 hora</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fluid wave divider */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
            <svg
              className="relative block w-full h-[60px] md:h-[120px]"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,192,106.77,236.4,97.23,281.3,73.1,321.39,56.44Z"
                fill="#ffffff"
              ></path>
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TRUST BAR — Aseguradoras
        ══════════════════════════════════════ */}
        <section aria-label="Aseguradoras con las que trabajamos" className="py-10 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] sm:text-[11px] font-extrabold tracking-widest text-[#94A3B8] uppercase mb-6">
              Comparamos las mejores aseguradoras del Perú para ti
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-14 pb-4">
              {[
                { name: "RÍMAC", domain: "rimac.com" },
                { name: "PACÍFICO", domain: "pacifico.com.pe" },
                { name: "MAPFRE", domain: "mapfre.com" },
                { name: "LA POSITIVA", domain: "lapositiva.com.pe" },
                { name: "SANITAS", domain: "sanitasperu.com" },
              ].map(({ name, domain }) => (
                <div key={name} className="flex items-center gap-2 group cursor-default">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white overflow-hidden shadow-sm border border-gray-100 group-hover:border-teal/30 group-hover:shadow-md transition-all duration-300 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 flex-shrink-0">
                    <img
                      src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=64`}
                      alt={`Seguro ${name} en Lima Perú — Vadillo Broker`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-[#94A3B8] group-hover:text-navy transition-colors duration-300 tracking-wide">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            NOSOTROS — About
        ══════════════════════════════════════ */}
        <section id="nosotros" aria-labelledby="nosotros-heading" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — Profile illustration */}
            <div className="flex justify-center">
              <BrokerProfile className="w-full max-w-xs drop-shadow-xl" />
            </div>

            {/* Right — Content */}
            <div>
              <span className="inline-flex items-center gap-2 bg-teal/10 text-teal-dark text-[11px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <Award className="h-3.5 w-3.5 text-teal" />
                Sobre Nosotros
              </span>
              <h2 id="nosotros-heading" className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight">
                20 años construyendo <span className="text-teal">confianza</span>
              </h2>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Soy <strong className="text-navy">Fabio Vadillo</strong>, Administrador de Empresas con amplia trayectoria en Banca, Seguros y AFP. Trabajé en{" "}
                <strong className="text-navy">BCP, Prima AFP, Mapfre y Rímac</strong> hasta 2017, año en el que me establecí como Broker Independiente en Lima.
              </p>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Hoy represento a más de <strong className="text-navy">500 familias y empresas en Lima</strong> — Miraflores, San Isidro, Surco y más — defendiendo sus intereses y encontrando siempre la mejor póliza en el mercado peruano de seguros.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                {[
                  { icon: Award, label: "Corredor Certificado", sublabel: "SBS Nro. 4503", colorClass: "bg-[#1E8BAA]", borderClass: "border-[#1E8BAA]/20 hover:border-[#1E8BAA]/60 hover:bg-[#1E8BAA]/5" },
                  { icon: Clock, label: "Atención 24/7", sublabel: "Siempre disponible", colorClass: "bg-[#2563EB]", borderClass: "border-[#2563EB]/20 hover:border-[#2563EB]/60 hover:bg-[#2563EB]/5" },
                  { icon: TrendingUp, label: "Sin costo extra", sublabel: "Cobramos a la aseguradora", colorClass: "bg-[#059669]", borderClass: "border-[#059669]/20 hover:border-[#059669]/60 hover:bg-[#059669]/5" },
                  { icon: Shield, label: "100% Independiente", sublabel: "Trabajamos para ti", colorClass: "bg-[#7C3AED]", borderClass: "border-[#7C3AED]/20 hover:border-[#7C3AED]/60 hover:bg-[#7C3AED]/5" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 p-4 rounded-xl sm:rounded-2xl bg-white border-2 shadow-sm transition-all duration-300 hover:-translate-y-1 ${item.borderClass}`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.colorClass} shadow-md flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="font-extrabold text-[#0D2A48] text-[14px] sm:text-[15px] leading-tight mb-0.5">{item.label}</div>
                      <div className="text-gray-500 text-[11px] sm:text-xs font-semibold">{item.sublabel}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                {[
                  { name: "PACÍFICO", color: "text-[#00529A] bg-[#00529A]/10 border-[#00529A]/20" },
                  { name: "RÍMAC", color: "text-[#E3000F] bg-[#E3000F]/10 border-[#E3000F]/20" },
                  { name: "MAPFRE", color: "text-[#D31145] bg-[#D31145]/10 border-[#D31145]/20" },
                  { name: "LA POSITIVA", color: "text-[#F57C00] bg-[#F57C00]/10 border-[#F57C00]/20" },
                ].map((brand) => (
                  <span key={brand.name} className={`font-black text-[10px] sm:text-xs tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border shadow-sm ${brand.color}`}>
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY BROKER
        ══════════════════════════════════════ */}
        <section aria-labelledby="broker-heading" className="py-16 md:py-24 bg-[#07192C] relative overflow-hidden">
          {/* Subtle gradient overlay identical to Hero */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020B16] via-[#0A1F35]/90 to-[#103154]/70 z-0" />
          <div className="absolute inset-0 dot-pattern opacity-30 mix-blend-overlay" />

          {/* Sutil glow light for depth */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-white/90 text-[11px] font-bold tracking-widest uppercase mb-8">
                <Shield className="h-3.5 w-3.5 text-teal" />
                ¿Por qué un Broker?
              </div>
              <h2 id="broker-heading" className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white mb-6 leading-tight tracking-tight">
                Broker vs. Ir directo<br className="hidden md:block" /> a la aseguradora
              </h2>
              <p className="text-slate-300 text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                Contratando a través de Fabio Vadillo obtienes ventajas que ninguna aseguradora te ofrecerá directamente.
              </p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8">
              {[
                {
                  icon: Shield,
                  title: "Defendemos tus intereses",
                  desc: "En caso de siniestro, peleamos por ti frente a la aseguradora para garantizar tu indemnización justa.",
                  colorClass: "bg-[#2563EB]"
                },
                {
                  icon: Tag,
                  title: "Mismo precio, más valor",
                  desc: "Pagas exactamente lo mismo que en la aseguradora, pero con soporte VIP y asesoría personalizada 24/7.",
                  colorClass: "bg-[#059669]"
                },
                {
                  icon: Search,
                  title: "Comparamos por ti",
                  desc: "Analizamos todas las opciones (Rímac, Pacífico, Mapfre) para encontrar la póliza perfecta para tu caso.",
                  colorClass: "bg-[#7C3AED]"
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl shadow-black/20 text-left flex flex-row md:flex-col items-center md:items-start gap-4 hover:bg-white/10 transition-colors"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${item.colorClass} shadow-lg flex-shrink-0 flex items-center justify-center`}>
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg md:text-xl text-white md:mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-slate-300 text-[13px] md:text-sm leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SEGUROS — Services
        ══════════════════════════════════════ */}
        <section id="seguros" aria-labelledby="seguros-heading" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-teal/10 text-teal-dark text-[11px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                <Zap className="h-3.5 w-3.5 text-teal" />
                Nuestros Servicios
              </span>
              <h2 id="seguros-heading" className="text-4xl md:text-5xl font-extrabold text-navy mb-4">
                Cotiza tu seguro en <span className="text-teal">1 minuto</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Sin papeleos ni letras chicas. Solo la mejor cobertura al precio justo.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {SERVICES.map((item) => (
                <article
                  key={item.title}
                  className={`relative border-none bg-slate-50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden rounded-2xl flex flex-row sm:flex-col`}
                >
                  {item.tag && (
                    <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gold text-[#07192C] text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full z-10">
                      {item.tag}
                    </span>
                  )}
                  <div className={`${item.bg} p-5 sm:p-8 flex-1 flex flex-col sm:block justify-center`}>
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl lg:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 sm:mb-5 shadow-sm`}>
                      <item.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[16px] sm:text-lg text-navy mb-1 sm:mb-2 leading-tight">{item.title}</h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 bg-slate-50 flex flex-col items-center justify-center border-l sm:border-l-0 sm:border-t border-slate-200/50 min-w-[100px] sm:min-w-0">
                    <a
                      href={WA_SERVICIOS[item.title] || WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row items-center gap-1.5 text-[11px] sm:text-sm font-extrabold text-[#1E8BAA] hover:text-navy text-center"
                      aria-label={`Cotizar ${item.title}`}
                    >
                      Cotizar
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-navy hover:bg-navy-mid text-white font-extrabold px-10 h-14 shadow-lg shadow-navy/20 transition-all hover:scale-105"
              >
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Cotizar Todos los Seguros
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            DESGRAVAMEN
        ══════════════════════════════════════ */}
        <section aria-labelledby="desgravamen-heading" className="py-16 md:py-24 bg-[#07192C] relative overflow-hidden">
          {/* Profesional subtle gradient overlay identical to Hero */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020B16] via-[#0A1F35]/90 to-[#103154]/70 z-0" />
          <div className="absolute inset-0 dot-pattern opacity-30 mix-blend-overlay" />

          {/* Sutil glow light for depth */}
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — Text content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-white/90 text-[11px] font-bold tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(20,184,166,0.8)] animate-pulse" />
                Servicio Exclusivo
              </div>

              <h2 id="desgravamen-heading" className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Recupera el <span className="text-teal relative inline-block">desgravamen
                  <svg className="absolute w-full h-2 -bottom-0.5 left-0 text-teal/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span> de tu crédito hipotecario
              </h2>

              <p className="text-slate-300 text-lg mb-10 leading-relaxed font-normal">
                ¿Sabías que puedes contratar tu propio seguro de vida y <strong className="text-white font-medium">ahorrar miles de soles</strong> en tu crédito hipotecario? Te asesoro en el proceso de endoso ante tu banco.
              </p>

              {/* Glassmorphism List Box */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 mb-10 shadow-xl shadow-black/20">
                <div className="space-y-5">
                  {[
                    "Ahorro real en tus cuotas mensuales desde el primer mes.",
                    "Cobertura superior a la póliza que impone el banco.",
                    "Asesoría legal y técnica completa sin costo adicional.",
                    "Proceso 100% gestionado por nosotros de inicio a fin.",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30 group-hover:bg-emerald-500/30 transition-colors">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-400" strokeWidth={3} />
                      </div>
                      <span className="text-slate-200 text-sm leading-relaxed font-medium group-hover:text-white transition-colors">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto rounded-full bg-teal hover:bg-teal-hover text-navy font-bold px-8 h-14 shadow-lg shadow-teal/20 transition-all hover:scale-105"
              >
                <a href={WA_CONTACTO} target="_blank" rel="noopener noreferrer">
                  Consultar Ahora <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Right — Savings illustration */}
            <div className="flex justify-center items-center">
              <SavingsIllustration className="w-full max-w-[420px] drop-shadow-2xl" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            INMOBILIARIA
        ══════════════════════════════════════ */}
        <section id="inmobiliaria" aria-labelledby="inmobiliaria-heading" className="py-16 md:py-24 bg-[#FAFDFF] relative overflow-hidden">
          {/* Subtle background blob */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-[#1E8BAA] text-white text-[11px] font-extrabold tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-md">
                <Building2 className="h-4 w-4" />
                Bienes Raíces
              </span>
              <h2 id="inmobiliaria-heading" className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#07192C] mb-6 leading-tight tracking-tight">
                Asesoría Inmobiliaria <span className="text-[#1E8BAA]">Profesional</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                Desde la redacción de tu anuncio hasta el cierre de la venta o alquiler. No permitas que tu inmueble sea solo uno más del stock.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-12">
              {/* Left — Features with Premium UI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                {[
                  { title: "Soporte Completo", desc: "Acompañamiento 100%.", icon: FileText, colorClass: "bg-[#2563EB]", borderClass: "border-[#2563EB]/20" },
                  { title: "Informes Listos", desc: "Datos de mercado exactos.", icon: BarChart3, colorClass: "bg-[#7C3AED]", borderClass: "border-[#7C3AED]/20" },
                  { title: "Competencia", desc: "Precios ajustados y reales.", icon: MapPin, colorClass: "bg-[#059669]", borderClass: "border-[#059669]/20" },
                  { title: "Cierre Exitoso", desc: "Contrato limpio y seguro.", icon: Handshake, colorClass: "bg-[#E11D48]", borderClass: "border-[#E11D48]/20" }
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform ${item.borderClass}`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl text-white ${item.colorClass} shadow-md flex items-center justify-center`}>
                      <item.icon className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#07192C] text-[15px] sm:text-[17px] leading-tight mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-[12px] sm:text-[13px] font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right — Building illustration */}
              <div className="flex justify-center items-center relative">
                {/* Illustration Backdrop Glow */}
                <div className="absolute inset-0 bg-[#07192C]/5 rounded-full blur-[80px] pointer-events-none transform scale-150 z-0" />
                <BuildingIllustration className="w-full max-w-[460px] drop-shadow-2xl relative z-10" />
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="text-center bg-white border border-slate-100 rounded-[32px] p-8 sm:p-14 shadow-xl shadow-slate-200/50 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2563EB] via-[#1E8BAA] to-[#059669]" />
              <p className="text-2xl sm:text-3xl font-bold text-[#07192C] mb-8 tracking-tight">¡Seamos socios en tu <span className="text-[#1E8BAA]">éxito inmobiliario!</span></p>
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto rounded-full bg-[#1E8BAA] hover:bg-[#166E88] text-white font-bold text-base px-10 h-16 shadow-lg shadow-[#1E8BAA]/30 transition-all hover:scale-105"
              >
                <a href={WA_INMOBILIARIA} target="_blank" rel="noopener noreferrer">
                  <Building2 className="mr-3 h-6 w-6" /> Hablar con un Asesor
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════ */}
        <section aria-labelledby="testimonios-heading" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-teal/10 text-teal-dark text-[11px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                Testimonios
              </span>
              <h2 id="testimonios-heading" className="text-4xl md:text-5xl font-extrabold text-navy mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-gray-400">Más de 500 familias confían en nosotros en Lima, Perú.</p>
            </div>

            {/* Mobile Auto-Scrolling Marquee */}
            <div className="sm:hidden -mx-6 flex overflow-hidden w-[100vw]">
              <div className="flex w-max animate-scroll gap-6 px-6">
                {/* Doblar el array para crear un efecto infinito (seamless) */}
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
                  <Card key={`${t.name}-${index}`} className="w-[80vw] flex-shrink-0 border-0 shadow-sm transition-all duration-300 flex flex-col justify-between">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <p className="text-[#07192C]/80 italic mb-6">"{t.text}"</p>
                      <div className="flex items-center gap-4">
                        <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border border-white/20" loading="lazy" />
                        <div>
                          <h4 className="font-bold text-[#07192C] text-[15px]">{t.name}</h4>
                          <span className="text-slate-500 text-[11px]">{t.role}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <Card key={t.name} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <Quote className="h-7 w-7 text-teal/25 mb-3" />
                    <blockquote>
                      <p className="text-gray-500 text-sm mb-6 leading-relaxed italic">"{t.text}"</p>
                    </blockquote>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                      <div className="w-11 h-11 rounded-full overflow-hidden border border-gray-100 shadow-sm flex-shrink-0 bg-gray-50">
                        <img
                          src={`https://i.pravatar.cc/150?u=${encodeURIComponent(t.name)}`}
                          alt={`Foto de ${t.name}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="font-extrabold text-navy text-sm">{t.name}</div>
                        <div className="text-gray-400 text-xs">{t.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FAQ
        ══════════════════════════════════════ */}
        <section aria-labelledby="faq-heading" className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-[#1E8BAA]/10 text-[#145F78] text-[11px] font-extrabold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
                Preguntas Frecuentes
              </span>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-[#07192C] mb-6 tracking-tight leading-tight">
                Resolvemos tus dudas
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white border-2 border-slate-100 rounded-[24px] px-6 sm:px-8 shadow-sm hover:shadow-xl hover:border-[#1E8BAA]/30 transition-all duration-300 group overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold text-[#07192C] py-6 hover:no-underline text-base md:text-lg group-data-[state=open]:text-[#1E8BAA] transition-colors flex gap-4">
                    <div className="flex-1 pr-4">{item.q}</div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 pb-8 leading-relaxed text-[15px] font-medium border-t border-slate-50 pt-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12 bg-[#FAFDFF] rounded-[24px] p-6 sm:p-8 border border-slate-100 shadow-sm">
              <p className="text-[#07192C] font-bold text-lg mb-4">¿Te quedó alguna otra duda?</p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-md shadow-[#2563EB]/20"
              >
                <MessageCircle className="h-5 w-5" /> Escríbenos directamente
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CONTACTO
        ══════════════════════════════════════ */}
        <section id="contacto" aria-labelledby="contacto-heading" className="py-16 md:py-24 bg-[#FAFDFF] relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E8BAA]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 bg-[#1E8BAA]/10 text-[#145F78] text-[11px] font-extrabold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
                <Phone className="h-3.5 w-3.5 text-[#1E8BAA]" />
                Contacto Directo
              </span>
              <h2 id="contacto-heading" className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#07192C] mb-6 leading-tight tracking-tight">
                Hablemos hoy mismo
              </h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                Recibe asesoría profesional, honesta y sin compromiso en todo el Perú.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 mb-12">
              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {[
                  {
                    icon: Phone,
                    title: "Llámanos",
                    lines: ["997 239 181", "995 431 138"],
                    href: "tel:+51997239181",
                    cta: "Llamar ahora",
                    colorClass: "bg-[#2563EB]"
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp",
                    lines: ["997 239 181", "Atención rápida"],
                    href: WHATSAPP,
                    cta: "Abrir WhatsApp",
                    colorClass: "bg-[#059669]"
                  }
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-sm flex items-center gap-5 hover:-translate-y-1 transition-transform"
                    aria-label={item.cta}
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.colorClass} shadow-md flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-[#07192C] text-lg leading-tight mb-1">{item.title}</h3>
                      <div className="text-slate-500 text-[13px] font-medium hidden sm:block">
                        {item.lines.join(" • ")}
                      </div>
                      <div className="text-[#1E8BAA] text-xs font-bold mt-1 uppercase tracking-wide">
                        {item.cta} &rarr;
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Right Column: Google Maps Iframe */}
              <div className="lg:col-span-3 bg-white rounded-[32px] border-2 border-slate-100 shadow-sm p-3 sm:p-4 relative overflow-hidden group flex flex-col min-h-[400px] hover:shadow-2xl hover:border-[#7C3AED]/30 transition-all duration-500">
                <div className="absolute top-8 left-8 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 hidden sm:flex">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center shadow-md">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#07192C] text-sm leading-tight">Visítanos en la Oficina</h3>
                    <p className="text-slate-500 text-xs font-medium">Calle Eleazar Blanco 326, Pueblo Libre</p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6963283256958!2d-77.06583999999999!3d-12.064414999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c924bcada191%3A0xe53a3db183aa639!2sC.%20Eleazar%20Blanco%20326%2C%20Pueblo%20Libre%2015084!5e0!3m2!1ses-419!2spe!4v1709581834273!5m2!1ses-419!2spe"
                  width="100%"
                  height="100%"
                  className="rounded-[24px] flex-1 min-h-[400px] border-0 filter opacity-90 transition-all duration-700 group-hover:opacity-100 grayscale-[10%]"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oficina Vadillo Broker - Google Maps"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-full p-6 sm:p-8 border-2 border-slate-100 shadow-sm text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 hover:border-[#1E8BAA]/20 transition-colors">
              <span className="bg-[#07192C] text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">Web Oficial</span>
              <a
                href="https://www.vadillobroker.com"
                className="text-[#07192C] font-extrabold text-lg sm:text-xl hover:text-[#1E8BAA] transition-colors tracking-tight"
              >
                www.vadillobroker.com
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA FINAL
        ══════════════════════════════════════ */}
        <section aria-labelledby="cta-heading" className="py-20 md:py-28 bg-[#1E8BAA] relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-40 mix-blend-overlay" />

          {/* Decorative glowing orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/10 blur-[100px] -translate-y-1/2 translate-x-1/3 z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#07192C]/10 blur-[80px] translate-y-1/2 -translate-x-1/4 z-0" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="w-20 h-20 rounded-[24px] bg-white shadow-xl shadow-black/10 flex items-center justify-center mx-auto mb-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <Heart className="h-10 w-10 text-[#2563EB] fill-[#2563EB]/20" strokeWidth={2.5} />
            </div>
            <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#07192C] mb-6 leading-tight tracking-tight">
              ¿Listo para proteger<br />
              <span className="text-white drop-shadow-sm">lo que más amas?</span>
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed font-semibold">
              No dejes para mañana la protección que tu familia necesita hoy. Empieza con una asesoría gratuita, honesta y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto rounded-full bg-[#07192C] hover:bg-[#0A2644] text-white font-extrabold text-base px-10 h-16 shadow-xl shadow-black/20 transition-all hover:scale-105"
              >
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6" /> Cotización Gratuita
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-[#1E8BAA] hover:border-white font-extrabold text-base px-10 h-16 bg-transparent transition-all"
              >
                <a href="tel:+51997239181">
                  <Phone className="mr-3 h-6 w-6" /> Llamar Ahora
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer role="contentinfo" className="bg-[#07192C] relative overflow-hidden py-20 px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            {/* Brand - Span 4 columns */}
            <div className="md:col-span-5">
              <a href="#inicio" className="flex items-center gap-4 mb-6 w-fit group">
                <div className="bg-white/5 p-2 rounded-xl group-hover:bg-white/10 transition-colors">
                  <img src={logoIcon} alt="Vadillo Broker" className="w-10 h-10 object-contain drop-shadow-md" loading="lazy" />
                </div>
                <div>
                  <div className="text-white font-extrabold tracking-tight text-lg">VADILLO BROKER</div>
                  <div className="text-[#1E8BAA] text-[10px] tracking-widest font-bold uppercase">Corredor SBS N4503</div>
                </div>
              </a>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                Corredor de seguros independiente con más de dos décadas de experiencia acompañando familias y empresas en el mercado peruano.
              </p>
              {/* Review stars */}
              <div className="flex items-center gap-3 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#FCD34D] text-[#FCD34D]" />
                  ))}
                </div>
                <span className="text-white/70 text-xs font-semibold">+500 familias</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-8">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300 group"
                  aria-label="LinkedIn de Fabio Vadillo"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 group"
                  aria-label="WhatsApp de Fabio Vadillo"
                >
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Services - Span 3 columns */}
            <div className="md:col-span-3">
              <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-8 h-1 bg-[#1E8BAA] rounded-full inline-block"></span> Servicios
              </h3>
              <ul className="space-y-3.5 text-slate-400 text-sm font-medium" aria-label="Lista de servicios">
                {[
                  "Seguro Vehicular / SOAT",
                  "Seguro de Salud / EPS",
                  "Seguro de Vida",
                  "Seguro de Hogar",
                  "Desgravamen Hipotecario",
                  "Asesoría Inmobiliaria Lima",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-[#1E8BAA] group-hover:translate-x-1 transition-transform" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Span 4 columns */}
            <div className="md:col-span-4">
              <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-8 h-1 bg-[#1E8BAA] rounded-full inline-block"></span> Contacto
              </h3>
              <address className="not-italic space-y-4 text-slate-400 text-sm font-medium">
                <a href="tel:+51997239181" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1E8BAA] transition-colors">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  997 239 181
                </a>
                <a href="tel:+51995431138" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1E8BAA] transition-colors">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  995 431 138
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="leading-relaxed">Calle Eleazar Blanco 326<br />Pueblo Libre, Lima — Perú</span>
                </div>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#22c55e] border-t border-white/5 pt-4 mt-4 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-[#22c55e]/10 flex items-center justify-center group-hover:bg-[#22c55e] transition-colors">
                    <MessageCircle className="h-4 w-4 text-[#22c55e] group-hover:text-white transition-colors" />
                  </div>
                  WhatsApp 24/7 (Respuesta rápida)
                </a>
              </address>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-[13px] text-center md:text-left font-medium">
              © {new Date().getFullYear()} Fabio Vadillo — Broker de Seguros &amp; Asesoría Inmobiliaria. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
              <Shield className="h-4 w-4 text-[#1E8BAA]" />
              <p className="text-slate-400 text-[13px] font-medium">
                Corredor autorizado <strong className="text-white">SBS Perú N4503</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
