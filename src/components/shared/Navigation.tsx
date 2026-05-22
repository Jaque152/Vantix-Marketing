"use client";

import Image from 'next/image'; // Importación necesaria
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from "@/hooks/use-cart";
// Activity icon removed from imports
import { ShoppingBag, Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const locale = useLocale();
  const pathname = usePathname();
  const isEs = locale === 'es';
  const { items, setIsOpen: openCart } = useCart();

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Navegación clara e intuitiva enfocada en UX
  const navLinks = [
    { name: isEs ? "Inicio" : "Home", href: `/${locale}` },
    { name: isEs ? "Nosotros" : "About Us", href: `/${locale}/about` },
    { name: isEs ? "Soluciones" : "Solutions", href: `/${locale}/soluciones` },
    { name: isEs ? "Servicios" : "Services", href: `/${locale}/services` }, 
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar con bordes rectos y estilo dashboard */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-[var(--card-border)] shadow-sm" : "bg-transparent"
      }`}>
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <Link href={`/${locale}`} className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Vantix Marketing Logo"
              width={240} 
              height={80}  
              className="h-10 w-auto" 
              priority 
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isActive 
                      ? "text-[var(--accent-primary)] border-b-2 border-[var(--accent-primary)] pb-1" 
                      : "text-[var(--text-main)]/60 hover:text-[var(--text-main)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            {/* BOTÓN DEL CARRITO LIMPIO (SIN DIBUJO) */}
            <button
              onClick={() => openCart(true)}
              className="relative p-2 rounded-sm hover:bg-[var(--bg-secondary)] transition-colors text-[var(--text-main)] flex items-center border border-transparent hover:border-[var(--card-border)]"
            >
              {/* Activity icon was here - ELIMINADO */}
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--accent-primary)] text-white text-[10px] font-bold flex items-center justify-center rounded-sm">
                  {cartCount}
                </span>
              )}
            </button>
            
            <Link 
              href={`/${locale}/contact`}
              className="hidden md:flex items-center justify-center bg-[var(--accent-primary)] text-white px-6 py-2.5 rounded-sm text-sm font-bold tracking-wide uppercase hover:bg-red-700 transition-colors"
            >
              {isEs ? 'Iniciar Proyecto' : 'Start Project'}
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-[var(--text-main)]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY - Clean Light Mode */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          >
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 p-2">
              <X className="w-8 h-8 text-[var(--text-main)]" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold uppercase tracking-tight text-[var(--text-main)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href={`/${locale}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-[var(--accent-primary)] text-white px-8 py-4 rounded-sm text-lg font-bold uppercase tracking-wide w-full max-w-xs text-center"
              >
                {isEs ? 'Iniciar Proyecto' : 'Start Project'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}