import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { AddToCartButton } from './AddToCartButton';
import { ArrowRight } from 'lucide-react';

export default async function ServicesCatalogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const supabase = await createClient();

  const { data: plans } = await supabase
    .from('vx_plans')
    .select('*')
    .eq('is_active', true)
    .order('price', { ascending: true });

  const standardPlans = plans?.filter(plan => 
    !plan.title.toLowerCase().includes('personalizado') && 
    !plan.title.toLowerCase().includes('custom')
  ) || [];

  const customPlan = plans?.find(plan => 
    plan.title.toLowerCase().includes('personalizado') || 
    plan.title.toLowerCase().includes('custom')
  );

  const formatPrice = (p: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(p);

  return (
    <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 text-[var(--text-main)]">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        <div className="mb-16 border-l-4 border-[var(--accent-primary)] pl-6">
          <span className="text-[var(--accent-primary)] font-mono uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            [ INFRAESTRUCTURA DISPONIBLE ]
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
            {isEs ? 'Catálogo de Protocolos' : 'Protocol Catalog'}
          </h1>
          <p className="text-[var(--text-main)]/60 font-mono text-sm max-w-2xl">
            {isEs ? '> Sistemas estandarizados listos para ser desplegados en tu entorno comercial.' : '> Standardized systems ready to be deployed in your commercial environment.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardPlans.map((plan) => (
            <div 
              key={plan.id} 
              className="bg-white border-2 border-[var(--text-main)] shadow-[6px_6px_0px_0px_var(--text-main)] flex flex-col relative group transition-all duration-300 hover:shadow-[12px_12px_0px_0px_var(--accent-primary)] hover:-translate-y-1"
            >
              <div className="p-6 md:p-8 flex-1">
                <div className="text-[10px] font-mono font-bold text-[var(--text-main)]/40 mb-4 tracking-widest uppercase">ID: {plan.id.split('-')[0]}</div>
                <h3 className="text-xl font-bold tracking-tight uppercase mb-4 leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                  {plan.title}
                </h3>
                <p className="text-[var(--text-main)]/70 font-medium text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>
              </div>

              <div className="p-6 bg-[var(--bg-secondary)] border-t-2 border-[var(--text-main)] flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold block tracking-tighter">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-[10px] text-[var(--text-main)]/50 font-bold uppercase tracking-widest font-mono">
                    MXN + IVA
                  </span>
                </div>
                <AddToCartButton planId={plan.id} />
              </div>
            </div>
          ))}
        </div>

        {customPlan && (
          <div className="mt-24 bg-[var(--text-main)] text-white border-2 border-[var(--text-main)] p-8 md:p-12 shadow-[12px_12px_0px_0px_var(--accent-primary)] flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
            
            <div className="mb-8 md:mb-0 max-w-2xl relative z-10">
              <span className="text-[var(--accent-primary)] font-mono uppercase tracking-[0.2em] text-xs font-bold block mb-4">
                [ INFRAESTRUCTURA A MEDIDA ]
              </span>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
                {customPlan.title}
              </h3>
              <p className="text-white/70 font-mono text-sm leading-relaxed">
                {customPlan.description}
              </p>
            </div>

            <div className="w-full md:w-auto relative z-10 flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/contact`} className="bg-white text-[var(--text-main)] px-8 py-4 font-bold tracking-widest uppercase text-xs hover:bg-[var(--accent-primary)] hover:text-white transition-colors text-center border-2 border-white hover:border-[var(--accent-primary)]">
                {isEs ? 'Solicitar Análisis' : 'Request Analysis'}
              </Link>
              <Link href={`/${locale}/pricing`} className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-[var(--text-main)] transition-colors text-center">
                {isEs ? 'Folio' : 'Reference ID'}
              </Link>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}