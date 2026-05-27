"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { Trash2, ArrowRight, Activity, TerminalSquare } from 'lucide-react';
import { CartItem } from '@/types';
import { translatePlanTitle } from "@/lib/utils";

export default function CartPage() {
  const { items, total, removeFromCart, clearCart } = useCart();
  const locale = useLocale();
  const isEs = locale === 'es';

  const formatPrice = (price: number) => 
    new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);

  // Filtro de seguridad por si hay items corruptos (fantasmas sin ID)
  const validItems = items.filter(item => item && item.id);

  if (validItems.length === 0) {
    return (
      <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl border-l-4 border-[var(--text-main)] pl-8">
          <Activity className="w-16 h-16 text-[var(--accent-primary)] mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[var(--text-main)] uppercase tracking-tighter">
            {isEs ? 'Sistema en Espera' : 'System Standby'}
          </h1>
          <p className="text-xl text-[var(--text-main)]/60 mb-10 font-mono">
            {isEs 
              ? '> 0 protocolos estratégicos detectados en la terminal.' 
              : '> 0 strategic protocols detected in terminal.'}
          </p>
          <Link href={`/${locale}/services`} className="inline-flex items-center gap-3 bg-[var(--text-main)] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[var(--accent-primary)] transition-colors">
            <TerminalSquare className="w-5 h-5" />
            {isEs ? 'Inicializar Protocolos' : 'Initialize Protocols'}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 text-[var(--text-main)]">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* ENCABEZADO TÉCNICO DE LA TERMINAL */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-4 border-[var(--text-main)] pb-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-main)] tracking-tighter uppercase">
              {isEs ? 'Terminal de Inversión' : 'Investment Terminal'}
            </h1>
            <p className="font-mono text-[var(--accent-primary)] mt-2 font-bold tracking-widest text-sm">
              {isEs ? 'ESTADO: LISTOS_PARA_DESPLIEGUE':'[ STATUS: READY_FOR_DEPLOYMENT ]'}
            </p>
          </div>
          {/* Botón para matar el bug del item fantasma */}
          <button 
            onClick={clearCart}
            className="mt-6 md:mt-0 text-xs font-mono font-bold text-[var(--text-main)]/40 hover:text-red-600 uppercase underline underline-offset-4 transition-colors"
          >
            {isEs ? 'Purgar Sistema Completo' : 'Purge Entire System'}
          </button>
        </div>

        {/* LISTA DE ITEMS (Ancho completo, estilo factura técnica) */}
        <div className="bg-white border-2 border-[var(--text-main)] mb-12 shadow-[8px_8px_0px_0px_var(--text-main)]">
          <div className="hidden md:flex border-b-2 border-[var(--text-main)] bg-[var(--bg-secondary)] font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-main)]/60 p-4">
            <div className="w-1/2">{isEs ? 'Protocolo' : 'Protocol'}</div>
            <div className="w-1/6 text-center">{isEs ? 'CANTIDAD' : 'QTY'}</div>
            <div className="w-1/4 text-right">{isEs ? 'INVERSIÓN' : 'INVESTMENT'}</div>
            <div className="w-1/12"></div>
          </div>

          <div className="divide-y-2 divide-[var(--text-main)]/10">
            {validItems.map((item: CartItem) => {
              const itemPrice = item.custom_price !== null 
                ? Number(item.custom_price) 
                : Number(item.vx_plans?.price || 0);
              
              return (
                <div key={item.id} className="flex flex-col md:flex-row items-center p-4 hover:bg-[var(--text-main)] hover:text-white transition-colors group">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <h3 className="font-bold uppercase tracking-tight text-lg">
                      {item.vx_plans?.title
                        ? translatePlanTitle(item.vx_plans.title, isEs)
                        : (isEs ? 'Desarrollo a Medida' : 'Custom Development')}
                    </h3> 
                    <span className="inline-block text-[10px] font-mono opacity-50 uppercase mt-1">
                      Folio: {item.quote_id || item.plan_id || 'SYS_DEFAULT'}
                    </span>
                  </div>

                  <div className="w-full md:w-1/6 md:text-center font-mono font-bold">
                    <span className="md:hidden opacity-50 mr-2 text-xs">QTY:</span> 
                    {item.quantity}
                  </div>

                  <div className="w-full md:w-1/4 md:text-right font-bold text-xl">
                    <span className="md:hidden opacity-50 mr-2 text-xs">VAL:</span>
                    {formatPrice(itemPrice * item.quantity)}
                  </div>

                  <div className="w-full md:w-1/12 flex md:justify-end mt-4 md:mt-0">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[var(--accent-primary)] md:text-[var(--text-main)]/30 group-hover:text-[var(--accent-primary)] hover:scale-110 transition-all"
                      title={isEs ? 'Eliminar' : 'Remove'}
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RESUMEN Y CHECKOUT AL FONDO (Ancho completo) */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end border-t-2 border-[var(--text-main)] pt-8">
          <div className="w-full md:w-1/2 space-y-4">
            <Link href={`/${locale}/services`} className="text-sm font-bold font-mono text-[var(--text-main)]/50 hover:text-[var(--accent-primary)] uppercase tracking-widest transition-colors flex items-center gap-2">
              + {isEs ? 'Añadir más directivas' : 'Add more directives'}
            </Link>
          </div>

          <div className="w-full md:w-1/2 bg-white border-2 border-[var(--text-main)] p-8 shadow-[8px_8px_0px_0px_var(--accent-primary)]">
            <div className="space-y-2 mb-6 font-mono text-sm border-b-2 border-dashed border-[var(--text-main)]/20 pb-6">
              <div className="flex justify-between text-[var(--text-main)]/70">
                <span>[ SUBTOTAL ]</span>
                <span className="font-bold text-[var(--text-main)]">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-[var(--text-main)]/70">
                <span>[ {isEs ? 'IVA_16%' : 'TAX_16%'} ]</span>
                <span className="font-bold text-[var(--text-main)]">{formatPrice(total * 0.16)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-bold uppercase tracking-widest">{isEs ? 'Requerimiento Total' : 'Total Requirement'}</span>
              <span className="text-3xl font-bold text-[var(--text-main)] tracking-tighter">{formatPrice(total * 1.16)}</span>
            </div>
            
            <Link 
              href={`/${locale}/checkout`} 
              className="flex items-center justify-between w-full bg-[var(--text-main)] text-white p-6 font-bold uppercase tracking-widest hover:bg-[var(--accent-primary)] transition-colors group"
            >
              <span>{isEs ? 'Autorizar Despliegue' : 'Authorize Deployment'}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}