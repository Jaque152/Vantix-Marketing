"use client";

import { useLocale } from "next-intl";

export default function About() {
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[var(--bg-main)] min-h-screen">
      {/* Grid de fondo técnico */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--card-border)_1px,transparent_1px),linear-gradient(90deg,var(--card-border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* BLOQUE 1: EL MANIFIESTO (Bloque de texto enorme, sin columnas) */}
        <div className="mb-32">
          <div className="inline-block bg-[var(--text-main)] text-white px-4 py-1 mb-8 font-mono text-xs uppercase tracking-[0.2em]">
            [ INITIALIZING_CORE_SYSTEMS ]
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-main)] leading-[0.9] tracking-tighter uppercase mb-12">
            {isEs? 'No somos una agencia':'We are not an agency.'} <br/>
            <br/>
            <span className="text-transparent stroke-text opacity-50" style={{ WebkitTextStroke: '2px var(--text-main)' }}>
              {isEs ? 'Somos Ingeniería de Crecimiento.' : 'We are Growth Engineering.'}
            </span>
          </h2>

          <div className="max-w-4xl text-xl sm:text-3xl text-[var(--text-main)] font-medium leading-tight text-justify border-l-8 border-[var(--accent-primary)] pl-8 py-2">
            {isEs 
              ? 'Rechazamos las plantillas prefabricadas y la creatividad sin propósito. Entendemos tu marca como un sistema complejo: calibramos la aerodinámica visual, estructuramos la telemetría de tus datos y construimos motores de adquisición diseñados específicamente para romper los límites de velocidad de tu mercado.' 
              : 'We reject prefabricated templates and purposeless creativity. We understand your brand as a complex system: we calibrate visual aerodynamics, structure your data telemetry, and build acquisition engines designed specifically to break your market\'s speed limits.'}
          </div>
        </div>

        {/* BLOQUE 2: PIPELINE HORIZONTAL (Rompiendo la lista vertical clásica) */}
        <div className="w-full">
          <h3 className="text-2xl font-bold text-[var(--text-main)] uppercase tracking-widest mb-12 border-b-4 border-[var(--text-main)] pb-4 inline-block">
            {isEs ? 'Pipeline de Ejecución' : 'Execution Pipeline'}
          </h3>

          <div className="grid md:grid-cols-4 gap-0 border-2 border-[var(--text-main)] bg-white shadow-[12px_12px_0px_0px_var(--text-main)]">
            
            {/* Paso 1 */}
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--text-main)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors group">
              <span className="block text-5xl font-bold opacity-20 mb-6 font-mono group-hover:opacity-100">01</span>
              <h4 className="text-lg font-bold uppercase tracking-tight mb-4">{isEs ? 'Diagnóstico' : 'Diagnostics'}</h4>
              <p className="text-sm font-medium opacity-80 leading-relaxed">
                {isEs 
                  ? 'Extracción de telemetría inicial. Mapeamos tu infraestructura actual para encontrar los cuellos de botella comerciales.' 
                  : 'Initial telemetry extraction. We map your current infrastructure to find commercial bottlenecks.'}
              </p>
            </div>

            {/* Paso 2 */}
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--text-main)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors group">
              <span className="block text-5xl font-bold opacity-20 mb-6 font-mono group-hover:opacity-100">02</span>
              <h4 className="text-lg font-bold uppercase tracking-tight mb-4">{isEs ? 'Ingeniería' : 'Engineering'}</h4>
              <p className="text-sm font-medium opacity-80 leading-relaxed">
                {isEs 
                  ? 'Diseño del chasis. Ensamblamos los sistemas visuales y técnicos necesarios para soportar el alto rendimiento.' 
                  : 'Chassis design. We assemble the visual and technical systems needed to support high performance.'}
              </p>
            </div>

            {/* Paso 3 */}
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--text-main)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors group">
              <span className="block text-5xl font-bold opacity-20 mb-6 font-mono group-hover:opacity-100">03</span>
              <h4 className="text-lg font-bold uppercase tracking-tight mb-4">{isEs ? 'Despliegue' : 'Deployment'}</h4>
              <p className="text-sm font-medium opacity-80 leading-relaxed">
                {isEs 
                  ? 'Arranque oficial. Inyectamos capital y lanzamos las campañas al circuito bajo protocolos estrictos.' 
                  : 'Official launch. We inject capital and launch campaigns onto the circuit under strict protocols.'}
              </p>
            </div>

            {/* Paso 4 */}
            <div className="p-8 hover:bg-[var(--text-main)] hover:text-white transition-colors group">
              <span className="block text-5xl font-bold opacity-20 mb-6 font-mono text-[var(--accent-primary)] group-hover:opacity-100 group-hover:text-[var(--accent-primary)]">04</span>
              <h4 className="text-lg font-bold uppercase tracking-tight mb-4">{isEs ? 'Calibración' : 'Calibration'}</h4>
              <p className="text-sm font-medium opacity-80 leading-relaxed">
                {isEs 
                  ? 'Monitoreo en tiempo real. Ajustes micro-milimétricos para asegurar el dominio absoluto del mercado.' 
                  : 'Real-time monitoring. Micro-millimetric adjustments to ensure absolute market dominance.'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}