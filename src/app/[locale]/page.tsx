import { T } from "@/components/shared/T";
import { Activity, ShieldCheck, Zap, Target, ArrowDown } from 'lucide-react';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  // Datos de los pilares refactorizados
  const pilares = [
    {
      id: "01",
      titulo: isEs ? "Telemetría y Estrategia" : "Telemetry & Strategy",
      texto: isEs 
        ? "Monitoreo en tiempo real y planificación milimétrica. Diseñamos la ruta óptima para que tu marca alcance la máxima velocidad comercial."
        : "Real-time monitoring and exact planning. We design the optimal route for your brand to reach maximum commercial velocity.",
    },
    {
      id: "02",
      titulo: isEs ? "Chasis de Marca" : "Brand Chassis",
      texto: isEs 
        ? "Una identidad estructuralmente impecable. Forjamos el diseño visual que soporta el peso y la presión de un mercado altamente competitivo."
        : "A structurally flawless identity. We forge the visual design that withstands the weight and pressure of a highly competitive market.",
    },
    {
      id: "03",
      titulo: isEs ? "Distribución Exacta" : "Precision Distribution",
      texto: isEs 
        ? "Contenido calibrado para generar tracción inmediata. Sin fricción, solo impacto directo en tu audiencia objetivo."
        : "Content calibrated to generate immediate traction. No friction, just direct impact on your target audience.",
    },
    {
      id: "04",
      titulo: isEs ? "Unidad de Potencia" : "Power Unit",
      texto: isEs 
        ? "Inyectamos capital con eficiencia aerodinámica. Campañas hiper-segmentadas listas para dominar las nuevas regulaciones de los algoritmos."
        : "We inject capital with aerodynamic efficiency. Hyper-segmented campaigns ready to dominate the new algorithm regulations.",
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[var(--bg-main)] overflow-hidden">
      
      {/* HERO SECTION - TIPOGRAFÍA MONUMENTAL */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6">
        {/* Grid de fondo abstracto integrado directamente */}
        <div className="absolute inset-0 bg-[linear-gradient(var(--card-border)_1px,transparent_1px),linear-gradient(90deg,var(--card-border)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mx-auto mt-16">
          <p className="text-sm md:text-base font-bold text-[var(--accent-primary)] tracking-[0.3em] uppercase mb-6">
            {isEs ? 'Sistema de Adquisición Activo' : 'Acquisition System Active'}
          </p>
          
          <h1 className="text-[12vw] sm:text-[10vw] font-bold leading-[0.85] text-[var(--text-main)] tracking-tighter uppercase w-full">
            <T>Calibramos</T><br />
            <span className="text-[var(--text-main)]/10 text-transparent stroke-text" style={{ WebkitTextStroke: '2px var(--text-main)' }}>
              <T>Tu Marca.</T>
            </span>
          </h1>

          <div className="mt-16 w-full max-w-2xl mx-auto flex flex-col items-center gap-8">
            <p className="text-xl md:text-2xl text-[var(--text-main)]/60 font-medium leading-relaxed">
              {isEs 
                ? 'Telemetría exacta, arquitectura de datos y estrategias de alta precisión para liderar tu circuito comercial sin fricción.'
                : 'Exact telemetry, data architecture, and high-precision strategies to lead your commercial circuit without friction.'}
            </p>
            
            {/* Indicador de Scroll en lugar de Botones genéricos */}
            <div className="flex flex-col items-center gap-3 text-[var(--text-main)]/40 mt-8">
              <span className="text-xs uppercase tracking-widest font-bold">{isEs ? 'Explorar' : 'Explore'}</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN LA ESCUDERÍA - LISTA TÉCNICA (Cero Tarjetas) */}
      <section className="relative w-full border-t-4 border-[var(--text-main)] bg-[var(--bg-main)]">
        {/* Cabecera de la sección */}
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[var(--card-border)]">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)] tracking-tighter uppercase">
            {isEs ? 'Estructura de Rendimiento' : 'Performance Structure'}
          </h2>
          <p className="text-sm font-mono text-[var(--accent-primary)] mt-4 md:mt-0">
            [ SEC.01 — PROTOCOLOS ]
          </p>
        </div>

        {/* Tabla / Lista Estructural */}
        <div className="max-w-7xl mx-auto w-full">
          {pilares.map((pilar, index) => (
            <div 
              key={index}
              className="group flex flex-col md:flex-row border-b border-[var(--card-border)] hover:bg-[var(--text-main)] hover:text-white transition-colors duration-300 cursor-default"
            >
              {/* ID de la Fila */}
              <div className="p-6 md:p-12 md:w-1/6 flex items-center md:justify-center border-r-0 md:border-r border-[var(--card-border)] group-hover:border-white/20 transition-colors">
                <span className="text-5xl md:text-6xl font-bold tracking-tighter text-[var(--text-main)]/20 group-hover:text-white/40 transition-colors">
                  {pilar.id}
                </span>
              </div>
              
              {/* Título de la Fila */}
              <div className="p-6 md:p-12 md:w-2/6 flex items-center border-r-0 md:border-r border-[var(--card-border)] group-hover:border-white/20 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
                  {pilar.titulo}
                </h3>
              </div>
              
              {/* Descripción de la Fila */}
              <div className="p-6 md:p-12 md:w-3/6 flex items-center">
                <p className="text-lg font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {pilar.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}