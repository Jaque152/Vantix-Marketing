"use client";

import { useLocale } from 'next-intl';
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { CheckCircle, Loader2, CreditCard, ShieldAlert, Lock } from "lucide-react";
import { processCheckout } from "@/actions/checkout";
import { CartItem, CheckoutPayload } from "@/types";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const locale = useLocale();
  const isEs = locale === 'es';
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [contactInfo, setContactInfo] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [billingInfo, setBillingInfo] = useState({ pais: "México", direccion: "", localidad: "", estado: "", codigo_postal: "" });
  const [cardInfo, setCardInfo] = useState({ number: "", name: "", expiry: "", cvv: "" });

  useEffect(() => {
    // Recupera datos si vienes del cotizador
    const savedData = sessionStorage.getItem("nc_temp_contact");
    if (savedData) {
      const { firstName, lastName, email } = JSON.parse(savedData);
      setContactInfo(prev => ({ ...prev, firstName, lastName, email }));
      sessionStorage.removeItem("nc_temp_contact"); 
    }
  }, []);

  const formatPrice = (price: number) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMsg("");
    
    const payload: CheckoutPayload = { locale, contactInfo, billingInfo, cardInfo, items, total };
    const res = await processCheckout(payload);

    if (res.success) {
      clearCart();
      setShowSuccess(true);
      window.scrollTo(0, 0);
    } else {
      setErrorMsg(res.message || (isEs ? "Error de procesamiento en la pasarela." : "Gateway processing error."));
      setIsProcessing(false);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    if (val.length > 2) val = `${val.slice(0, 2)}/${val.slice(2)}`;
    setCardInfo({ ...cardInfo, expiry: val });
  };

  // Clases CSS base para inputs y labels técnicos
  const labelClass = "block font-mono text-[10px] font-bold text-[var(--text-main)]/60 mb-2 uppercase tracking-widest";
  const labelDarkClass = "block font-mono text-[10px] font-bold text-white/60 mb-2 uppercase tracking-widest";
  const inputClass = "h-12 bg-white border-2 border-[var(--text-main)] focus-visible:outline-none focus-visible:border-[var(--accent-primary)] px-4 text-[var(--text-main)] font-mono text-sm placeholder:text-[var(--text-main)]/20 w-full transition-colors rounded-none";
  const darkInputClass = "h-12 bg-transparent border-2 border-white/30 focus-visible:outline-none focus-visible:border-[var(--accent-primary)] px-4 text-white font-mono text-sm placeholder:text-white/30 w-full transition-colors rounded-none";
  if (showSuccess) {
    return (
      <main className="min-h-screen bg-[var(--bg-main)] flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center bg-white border-4 border-[var(--text-main)] p-12 shadow-[12px_12px_0px_0px_var(--accent-primary)]">
          <CheckCircle className="w-16 h-16 text-[var(--accent-primary)] mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4 text-[var(--text-main)] tracking-tighter uppercase">
            {isEs ? 'Transacción Aprobada' : 'Transaction Approved'}
          </h1>
          <p className="text-[var(--text-main)]/70 mb-8 font-mono text-sm">
            {isEs 
              ? '> OctanoPayments ha procesado el pago. Protocolos enviados a tu correo.' 
              : '> OctanoPayments has processed the payment. Protocols sent to your email.'}
          </p>
          <Link href={`/${locale}/`} className="block w-full bg-[var(--text-main)] text-white py-4 font-bold tracking-widest uppercase text-sm hover:bg-[var(--accent-primary)] transition-colors">
            {isEs ? 'Cerrar Terminal' : 'Close Terminal'}
          </Link>
        </div>
      </main>
    );
  }

  const subtotal = total;
  const tax = total * 0.16;
  const grandTotal = total * 1.16;

  return (
    <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 text-[var(--text-main)]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-12 border-b-4 border-[var(--accent-primary)] pb-4 inline-block">
          <h1 className="text-4xl font-bold text-[var(--text-main)] tracking-tighter uppercase">
            {isEs ? 'Terminal de Inversión' : 'Investment Terminal'}
          </h1>
        </div>
        
        {errorMsg && (
          <div className="bg-[var(--text-main)] text-white border-l-4 border-[var(--accent-primary)] p-4 mb-8 font-mono text-sm font-bold flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[var(--accent-primary)]" />
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-8">
            
            {/* SECCIÓN 01: FACTURACIÓN */}
            <div className="bg-white border-2 border-[var(--text-main)] p-8 shadow-[6px_6px_0px_0px_var(--text-main)]">
              <h2 className="text-sm font-bold mb-8 uppercase tracking-widest text-[var(--text-main)] font-mono border-b-2 border-[var(--text-main)]/10 pb-4">
                [ 01. {isEs ? 'Coordenadas de Facturación' : 'Billing Coordinates'} ]
              </h2>
              
              {/* Información de Contacto */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className={labelClass}>{isEs ? 'Nombre(s) *' : 'First Name *'}</label>
                  <input required value={contactInfo.firstName} onChange={(e)=>setContactInfo({...contactInfo, firstName:e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{isEs ? 'Apellidos *' : 'Last Name *'}</label>
                  <input required value={contactInfo.lastName} onChange={(e)=>setContactInfo({...contactInfo, lastName:e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{isEs ? 'Correo Electrónico *' : 'Email Address *'}</label>
                  <input type="email" required value={contactInfo.email} onChange={(e)=>setContactInfo({...contactInfo, email:e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{isEs ? 'Teléfono *' : 'Phone Number *'}</label>
                  <input type="tel" required value={contactInfo.phone} onChange={(e)=>setContactInfo({...contactInfo, phone:e.target.value})} className={inputClass} />
                </div>
              </div>

              {/* Información Geográfica */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t-2 border-dashed border-[var(--text-main)]/10">
                <div className="sm:col-span-2">
                  <label className={labelClass}>{isEs ? 'País / Región *' : 'Country / Region *'}</label>
                  <input required value={billingInfo.pais} disabled className={inputClass + " bg-[var(--bg-main)] opacity-70 cursor-not-allowed"} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>{isEs ? 'Dirección (Calle y número) *' : 'Street Address *'}</label>
                  <input required value={billingInfo.direccion} onChange={(e)=>setBillingInfo({...billingInfo, direccion:e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{isEs ? 'Localidad / Ciudad *' : 'City / Locality *'}</label>
                  <input required value={billingInfo.localidad} onChange={(e)=>setBillingInfo({...billingInfo, localidad:e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{isEs ? 'Región / Estado *' : 'State / Province *'}</label>
                  <input required value={billingInfo.estado} onChange={(e)=>setBillingInfo({...billingInfo, estado:e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{isEs ? 'Código Postal *' : 'Zip / Postal Code *'}</label>
                  <input required value={billingInfo.codigo_postal} onChange={(e)=>setBillingInfo({...billingInfo, codigo_postal:e.target.value})} className={inputClass} />
                </div>
              </div>
            </div>

            {/* SECCIÓN 02: PAGO SEGURO OCTANO */}
            <div className="bg-[var(--text-main)] text-white p-8 border-2 border-[var(--text-main)] shadow-[6px_6px_0px_0px_var(--accent-primary)]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b-2 border-white/10 pb-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white font-mono">
                  [ 02. {isEs ? 'Procesador: OctanoApi' : 'Processor: OctanoApi'} ]
                </h2>
                <div className="flex items-center gap-2 mt-4 sm:mt-0 opacity-80">
                  <img src="/logo-octano-2.png" alt="Octano" className="h-6 opacity-60 mix-blend-multiply" />
                </div>
                

              </div>
              
              <div className="grid gap-6 max-w-lg">
                <div>
                  <label className={labelDarkClass}>{isEs ? 'Número de Tarjeta *' : 'Card Number *'}</label>
                  <div className="relative">
                    <input placeholder="0000 0000 0000 0000" required maxLength={19} value={cardInfo.number} onChange={(e)=>setCardInfo({...cardInfo, number: e.target.value.replace(/\D/g, '')})} className={darkInputClass + " font-mono text-lg tracking-widest pl-12"} />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  </div>
                </div>

                <div>
                  <label className={labelDarkClass}>{isEs ? 'Nombre del Titular *' : 'Cardholder Name *'}</label>
                  <input placeholder="JOHN DOE" required value={cardInfo.name} onChange={(e)=>setCardInfo({...cardInfo, name: e.target.value.toUpperCase()})} className={darkInputClass + " uppercase"} />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className={labelDarkClass}>{isEs ? 'Vencimiento *' : 'Expiry Date *'}</label>
                    <input placeholder="MM/AA" required maxLength={5} value={cardInfo.expiry} onChange={handleExpiryChange} className={darkInputClass + " text-center font-mono"} />
                  </div>
                  <div>
                    <label className={labelDarkClass}>{isEs ? 'CVC / CVV *' : 'Security Code *'}</label>
                    <input placeholder="***" type="password" required maxLength={4} value={cardInfo.cvv} onChange={(e)=>setCardInfo({...cardInfo, cvv: e.target.value.replace(/\D/g, '')})} className={darkInputClass + " text-center tracking-widest text-lg"} />
                  </div>
                </div>
                
                <div className="mt-4 flex items-start gap-3 bg-white/5 p-4 border border-white/10 text-[11px] font-mono text-white/60 leading-relaxed">
                  <ShieldAlert className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                  <p>
                    {isEs 
                      ? 'Transacción protegida por OctanoPayments. Los datos de su tarjeta son tokenizados localmente y encriptados bajo protocolos AES-256 antes de la transmisión.' 
                      : 'Transaction protected by OctanoPayments. Your card data is tokenized locally and encrypted under AES-256 protocols before transmission.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
            
          {/* BARRA LATERAL: RESUMEN DE LA ORDEN */}
          <div className="lg:col-span-4 bg-white border-2 border-[var(--text-main)] p-8 sticky top-32 shadow-[8px_8px_0px_0px_var(--text-main)]">
            <h2 className="text-lg font-bold mb-6 border-b-2 border-[var(--text-main)] pb-4 uppercase tracking-tighter">
              {isEs ? 'Protocolos a Desplegar' : 'Protocols to Deploy'}
            </h2>
            
            <div className="space-y-4 mb-8">
              {items.map((item: CartItem, idx: number) => {
                const itemPrice = item.custom_price !== null 
                  ? Number(item.custom_price) 
                  : Number(item.vx_plans?.price || 0);

                return (
                  <div key={idx} className="flex justify-between text-xs font-mono items-start text-[var(--text-main)]">
                    <span className="flex-1 pr-4 leading-relaxed">
                      <span className="text-[var(--accent-primary)] font-bold mr-2">{item.quantity}x</span>
                      {item.vx_plans?.title || (isEs ? 'Desarrollo a Medida' : 'Custom Development')}
                    </span>
                    <span className="font-bold whitespace-nowrap mt-0.5">
                      {formatPrice(itemPrice * item.quantity)}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="border-t-2 border-dashed border-[var(--text-main)]/20 pt-6 mb-8 font-mono text-sm">
              <div className="flex justify-between items-center mb-3 text-[var(--text-main)]/70">
                <span>[ SUBTOTAL ]</span>
                <span className="font-bold text-[var(--text-main)]">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between items-center mb-5 text-[var(--text-main)]/70">
                <span>[ {isEs ? 'IVA_16%' : 'TAX_16%'} ]</span>
                <span className="font-bold text-[var(--text-main)]">{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between items-center text-xl bg-[var(--text-main)] text-white p-4">
                <span className="uppercase tracking-widest">{isEs ? 'TOTAL' : 'TOTAL'}</span>
                <span className="text-[var(--accent-primary)] font-bold">{formatPrice(grandTotal)}</span>
              </div>
            </div>
            
            <button type="submit" disabled={isProcessing} className="w-full bg-[var(--accent-primary)] hover:bg-red-700 text-white font-bold h-14 tracking-widest uppercase text-sm transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
              {isProcessing ? <Loader2 className="animate-spin w-5 h-5" /> : (isEs ? 'PROCESAR TRANSACCIÓN' : 'PROCESS TRANSACTION')}
            </button>
            <div className="text-center mt-4">
              <span className="text-[10px] font-mono text-[var(--text-main)]/40 uppercase tracking-widest">
                POWERED BY OCTANO API
              </span>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}