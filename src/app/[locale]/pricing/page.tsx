"use client";

import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { processCustomPlan, CustomPlanFormData } from "@/actions/custom-plan";
import { Loader2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function CustomPricingPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const locale = useLocale();
  const isEs = locale === 'es';
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const [formData, setFormData] = useState<CustomPlanFormData>({
    nombre: "",
    apellidos: "",
    correo_electronico: "",
    id_cotizacion: "", 
    monto: 0, 
  });

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.monto <= 0) {
      setErrorMsg(isEs ? "El monto calculado debe ser mayor a cero." : "The calculated amount must be greater than zero.");
      return;
    }
    setIsSubmitting(true);
    setErrorMsg("");

    const res = await processCustomPlan(formData);

    if (res.success && res.planId && res.customPrice && res.quoteId) {
      sessionStorage.setItem("nc_temp_contact", JSON.stringify({
        firstName: formData.nombre, lastName: formData.apellidos, email: formData.correo_electronico
      }));

      const added = await addToCart(res.planId, 1, res.customPrice, res.quoteId);
      if (added) {
        router.push(`/${locale}/checkout`);
      } else {
        setErrorMsg(isEs ? "Error al sincronizar con el sistema." : "Error syncing with system.");
        setIsSubmitting(false);
      }
    } else {
      setErrorMsg(res.message || (isEs ? "Error al procesar el protocolo." : "Error processing protocol."));
      setIsSubmitting(false);
    }
  };

  const inputClass = "h-14 bg-white border-2 border-[var(--text-main)] focus-visible:outline-none focus-visible:border-[var(--accent-primary)] px-5 text-[var(--text-main)] font-mono text-sm placeholder:text-[var(--text-main)]/30 transition-colors w-full rounded-none";

  return (
    <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 text-[var(--text-main)]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 border-b-4 border-[var(--text-main)] pb-6">
          <span className="text-[var(--accent-primary)] font-mono uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            [ VALIDACIÓN DE REFERENCIA ]
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            {isEs ? 'Terminal de Cotización' : 'Quote Terminal'}
          </h1>
          <p className="text-[var(--text-main)]/60 font-mono mt-4 text-sm">
            {isEs ? '> Ingrese ID de referencia para habilitar el despliegue.' : '> Enter reference ID to enable deployment.'}
          </p>
        </div>

        {errorMsg && <div className="bg-red-50 border-l-4 border-red-600 text-red-900 p-4 mb-8 font-mono text-sm">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border-2 border-[var(--text-main)] shadow-[12px_12px_0px_0px_var(--text-main)] space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-mono text-xs font-bold text-[var(--text-main)]/50 mb-2 uppercase">{isEs ? 'Nombre' : 'First Name'}</label>
              <input required value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} className={inputClass} />
            </div>
            <div>
              <label className="block font-mono text-xs font-bold text-[var(--text-main)]/50 mb-2 uppercase">{isEs ? 'Apellidos' : 'Last Name'}</label>
              <input required value={formData.apellidos} onChange={(e) => setFormData({...formData, apellidos: e.target.value})} className={inputClass} />
            </div>
          </div>
          
          <div>
            <label className="block font-mono text-xs font-bold text-[var(--text-main)]/50 mb-2 uppercase">{isEs ? 'Correo Institucional' : 'Institutional Email'}</label>
            <input type="email" required value={formData.correo_electronico} onChange={(e) => setFormData({...formData, correo_electronico: e.target.value})} className={inputClass} />
          </div>

          <div className="bg-[var(--bg-secondary)] p-6 border-2 border-[var(--text-main)] border-dashed grid sm:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block font-mono text-xs font-bold text-[var(--text-main)] mb-2 uppercase">ID_REF (Ej. VX-1024)</label>
              <input required value={formData.id_cotizacion} onChange={(e) => setFormData({...formData, id_cotizacion: e.target.value.toUpperCase()})} className={`${inputClass} font-bold text-[var(--accent-primary)] tracking-widest`} />
            </div>
            <div>
              <label className="block font-mono text-xs font-bold text-[var(--text-main)] mb-2 uppercase">{isEs ? 'Inversión Acordada (MXN)' : 'Agreed Investment (MXN)'}</label>
              <input type="number" min="0" step="0.01" required value={formData.monto || ""} onChange={(e) => setFormData({...formData, monto: Number(e.target.value)})} className={`${inputClass} font-bold text-xl`} />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-[var(--text-main)] hover:bg-[var(--accent-primary)] text-white font-bold h-14 mt-8 tracking-widest uppercase text-sm transition-colors flex items-center justify-center disabled:opacity-50">
            {isSubmitting ? <Loader2 className="animate-spin w-5 h-5 mx-auto" /> : <span className="flex items-center gap-2">{isEs ? 'Validar e Inicializar' : 'Validate & Initialize'} <ArrowRight className="w-4 h-4 ml-2"/></span>}
          </button>
        </form>
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
                {isEs ? 'Validar ID_REF' : 'Validate REF_ID'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}