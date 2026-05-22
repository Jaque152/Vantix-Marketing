"use client";

import Image from 'next/image'; // Importación necesaria
import { motion } from "framer-motion";
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const isEs = locale === 'es';

  const switchLocale = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLocale; 
    router.push(segments.join('/'));
  };

  const footerLinks = {
    explorar: [
      { name: isEs ? "Inicio" : "Home", href: `/${locale}` },
      { name: isEs ? "Nosotros" : "About Us", href: `/${locale}/about` },
      { name: isEs ? "Soluciones" : "Solutions", href: `/${locale}/soluciones` },
      { name: isEs ? "Servicios" : "Services", href: `/${locale}/services` },
    ],
    empresa: [
      { name: isEs ? "Central de Datos" : "Data Center", href: `/${locale}/contact` },
      { name: isEs ? "Inversión" : "Pricing", href: `/${locale}/pricing` },
    ],
    legal: [
      { name: isEs ? "Privacidad" : "Privacy Policy", href: `/${locale}/legal/privacy` },
      { name: isEs ? "Términos" : "Terms of Service", href: `/${locale}/legal/terms-conditions` },
      { name: isEs ? "Cancelaciones" : "Cancellation Policy", href: `/${locale}/legal/cancellation` },
    ],
  };

  return (
    <footer className="relative bg-[#18181B] border-t-4 border-[var(--accent-primary)] font-sans">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Column  */}
          <div className="lg:col-span-2 space-y-6">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <Image 
                src="/logo-vantix.png" 
                alt="Vantix Marketing Logo"
                width={240}
                height={68}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 max-w-sm leading-relaxed font-medium">
              {isEs 
                ? 'Calibrando la aerodinámica de tu marca y estructurando datos para liderar el circuito digital con precisión milimétrica.'
                : 'Calibrating your brand\'s aerodynamics and structuring data to lead the digital circuit with pinpoint precision.'}
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{isEs ? 'Sistema' : 'System'}</h4>
            <ul className="space-y-4">
              {footerLinks.explorar.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-white/50 hover:text-white hover:translate-x-1 inline-block transition-transform text-sm">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}><Link href={link.href} className="text-white/50 hover:text-white hover:translate-x-1 inline-block transition-transform text-sm">{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Inferior */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-medium order-2 md:order-1 text-center md:text-left">
            © {new Date().getFullYear()} Vantix Marketing. {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 order-1 md:order-2">
            
            {/* SELECTOR DE IDIOMA TÉCNICO */}
            <div className="flex items-center gap-1 bg-black/50 p-1 rounded-sm border border-white/10">
              <Globe className="w-4 h-4 text-white/50 ml-2" />
              <button
                onClick={() => switchLocale('es')}
                className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                  locale === 'es' ? 'bg-[var(--accent-primary)] text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                  locale === 'en' ? 'bg-[var(--accent-primary)] text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}