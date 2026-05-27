"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { submitContact } from "@/actions/contact";
import { ContactFormData } from "@/lib/mail";
import { CheckCircle, Loader2, Send, MapPin, Phone, Terminal } from "lucide-react";

export default function ContactPage() {
  const locale = useLocale();
  const isEs = locale === 'es';
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState<ContactFormData>({
    nombre_completo: "",
    empresa_negocio: "",
    telefono: "",
    correo_electronico: "",
    asunto: "",
    mensaje: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const res = await submitContact(formData, locale);

    if (res.success) {
      setFormData({ nombre_completo: "", empresa_negocio: "", telefono: "", correo_electronico: "", asunto: "", mensaje: "" });
      setShowSuccess(true);
      window.scrollTo(0, 0);
    } else {
      setErrorMsg(res.message || (isEs ? "Error de transmisión." : "Transmission error."));
    }
    setIsSubmitting(false);
  };

  const inputClass = "h-14 bg-white border-2 border-[var(--text-main)] focus-visible:outline-none focus-visible:border-[var(--accent-primary)] px-5 text-[var(--text-main)] font-mono text-sm placeholder:text-[var(--text-main)]/30 transition-colors w-full rounded-none";

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-[var(--bg-main)] flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center bg-white border-4 border-[var(--text-main)] p-12 shadow-[12px_12px_0px_0px_var(--accent-primary)]">
          <CheckCircle className="w-16 h-16 text-[var(--accent-primary)] mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4 text-[var(--text-main)] tracking-tighter uppercase">
            {isEs ? 'Señal Transmitida' : 'Signal Transmitted'}
          </h1>
          <p className="text-[var(--text-main)]/70 mb-8 font-mono text-sm">
            {isEs 
              ? '> Datos recibidos en la central. Un ingeniero de crecimiento se pondrá en contacto en breve.' 
              : '> Data received at headquarters. A growth engineer will contact you shortly.'}
          </p>
          <Link href={`/${locale}/`} className="block w-full bg-[var(--text-main)] text-white py-4 font-bold tracking-widest uppercase text-sm hover:bg-[var(--accent-primary)] transition-colors">
            {isEs ? 'Cerrar Terminal' : 'Close Terminal'}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 text-[var(--text-main)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12 border-l-4 border-[var(--accent-primary)] pl-6">
          <span className="text-[var(--accent-primary)] font-mono uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            {isEs? '[ SEC.03 — COMUNICACIÓN ]':'[ SEC.03 — COMMUNICATION ]'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-main)] tracking-tighter uppercase">
            {isEs ? 'Centro de Comando' : 'Command Center'}
          </h1>
          <p className="text-[var(--text-main)]/60 font-mono mt-4">
            {isEs ? '> Establecer conexión segura con el equipo de ingeniería.' : '> Establish secure connection with the engineering team.'}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border-2 border-[var(--text-main)] p-6 shadow-[6px_6px_0px_0px_var(--text-main)] hover:shadow-[6px_6px_0px_0px_var(--accent-primary)] transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
              <h3 className="font-bold text-lg mb-2 uppercase tracking-tight">{isEs ? 'Sede Central' : 'Headquarters'}</h3>
              <p className="text-[var(--text-main)]/70 font-mono text-xs leading-relaxed">
                CALLE RÍO GUADIANA NO.23 PISO 2<br />
                COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC<br />
                C.P. 06500 CIUDAD DE MÉXICO
              </p>
            </div>
            <div className="bg-white border-2 border-[var(--text-main)] p-6 shadow-[6px_6px_0px_0px_var(--text-main)] hover:shadow-[6px_6px_0px_0px_var(--accent-primary)] transition-shadow">
              <Phone className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
              <h3 className="font-bold text-lg mb-2 uppercase tracking-tight">{isEs ? 'Telemetría Directa' : 'Direct Telemetry'}</h3>
              <a href="tel:+5215557055800" className="text-[var(--text-main)]/70 font-mono text-sm hover:text-[var(--accent-primary)] transition-colors">
                +52 1 55 5705 5800
              </a>
            </div>
            <div className="bg-white border-2 border-[var(--text-main)] p-6 shadow-[6px_6px_0px_0px_var(--text-main)] hover:shadow-[6px_6px_0px_0px_var(--accent-primary)] transition-shadow">
              <Terminal className="w-8 h-8 text-[var(--accent-primary)] mb-4" />
              <h3 className="font-bold text-lg mb-2 uppercase tracking-tight">{isEs ? 'Canal Digital' : 'Digital Channel'}</h3>
              <a href="mailto: informacion@vantixmkt.com" className="text-[var(--text-main)]/70 font-mono text-sm hover:text-[var(--accent-primary)] transition-colors">
                informacion@vantixmkt.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            {errorMsg && <div className="bg-red-50 border-l-4 border-red-600 text-red-900 p-4 mb-8 font-mono text-sm">{errorMsg}</div>}

            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border-2 border-[var(--text-main)] shadow-[12px_12px_0px_0px_var(--text-main)] space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input placeholder={isEs ? "Nombre Completo *" : "Full Name *"} required value={formData.nombre_completo} onChange={(e)=>setFormData({...formData, nombre_completo:e.target.value})} className={inputClass} />
                <input placeholder={isEs ? "Empresa / Negocio *" : "Company / Business *"} required value={formData.empresa_negocio} onChange={(e)=>setFormData({...formData, empresa_negocio:e.target.value})} className={inputClass} />
                <input placeholder={isEs ? "Teléfono *" : "Phone Number *"} required type="tel" value={formData.telefono} onChange={(e)=>setFormData({...formData, telefono:e.target.value})} className={inputClass} />
                <input placeholder={isEs ? "Correo Electrónico *" : "Email Address *"} required type="email" value={formData.correo_electronico} onChange={(e)=>setFormData({...formData, correo_electronico:e.target.value})} className={inputClass} />
              </div>
              <input placeholder={isEs ? "Asunto *" : "Subject *"} required value={formData.asunto} onChange={(e)=>setFormData({...formData, asunto:e.target.value})} className={inputClass} />
              <textarea 
                placeholder={isEs ? "Detalles del requerimiento... *" : "Requirement details... *"} 
                required 
                value={formData.mensaje} 
                onChange={(e)=>setFormData({...formData, mensaje:e.target.value})} 
                className="w-full min-h-[150px] bg-white border-2 border-[var(--text-main)] focus-visible:outline-none focus-visible:border-[var(--accent-primary)] p-5 text-[var(--text-main)] font-mono text-sm placeholder:text-[var(--text-main)]/30 transition-colors resize-y rounded-none" 
              />
              <button type="submit" disabled={isSubmitting} className="w-full bg-[var(--text-main)] hover:bg-[var(--accent-primary)] text-white font-bold h-14 tracking-widest uppercase text-sm transition-colors flex items-center justify-center">
                {isSubmitting ? <Loader2 className="animate-spin w-5 h-5 mx-auto" /> : <span className="flex items-center gap-3"><Send className="w-4 h-4"/> {isEs ? 'Transmitir Datos' : 'Transmit Data'}</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}