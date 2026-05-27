import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { AddToCartButton } from './AddToCartButton';
import { translatePlanTitle, translatePlanDescription } from '@/lib/utils';
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
            {isEs? '[ INFRAESTRUCTURA DISPONIBLE ]': '[ AVAILABLE INFRASTRUCTURE ]'}
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
                  {translatePlanTitle(plan.title, isEs)}
                </h3>
                <p className="text-[var(--text-main)]/70 font-medium text-sm leading-relaxed mb-6">
                  {translatePlanDescription(plan.description, isEs)}
                </p>
              </div>

              <div className="p-6 bg-[var(--bg-secondary)] border-t-2 border-[var(--text-main)] flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold block tracking-tighter">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-[10px] text-[var(--text-main)]/50 font-bold uppercase tracking-widest font-mono">
                    {isEs ? 'MXN + IVA' : 'MXN + TAX'}
                  </span>
                </div>
                <AddToCartButton planId={plan.id} />
              </div>
            </div>
          ))}
        </div>

        {customPlan && (
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-[var(--text-main)] shadow-[6px_6px_0px_0px_var(--text-main)] flex flex-col relative group transition-all duration-300 hover:shadow-[12px_12px_0px_0px_var(--accent-primary)] hover:-translate-y-1">
              <div className="p-6 md:p-8 flex-1">
                <div className="text-[10px] font-mono font-bold text-[var(--text-main)]/40 mb-4 tracking-widest uppercase">
                  ID: CUSTOM
                </div>

                <h3 className="text-xl font-bold tracking-tight uppercase mb-4 leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                  {translatePlanTitle(customPlan.title, isEs)}
                </h3>

                <p className="text-[var(--text-main)]/70 font-medium text-sm leading-relaxed mb-6">
                  {translatePlanDescription(customPlan.description, isEs)}
                </p>
              </div>

              <div className="p-6 bg-[var(--bg-secondary)] border-t-2 border-[var(--text-main)] flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold block tracking-tighter">
                    {isEs ? 'A cotizar' : 'Custom Quote'}
                  </span>
                  <span className="text-[10px] text-[var(--text-main)]/50 font-bold uppercase tracking-widest font-mono">
                    {isEs ? 'MXN + IVA' : 'MXN + TAX'}
                  </span>
                </div>

                <Link
                  href={`/${locale}/pricing`}
                  className="bg-[var(--text-main)] text-white px-5 py-3 font-bold tracking-widest uppercase text-xs hover:bg-[var(--accent-primary)] transition-colors"
                >
                  {isEs ? 'Añadir' : 'Add'}
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}