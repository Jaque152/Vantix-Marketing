import Link from 'next/link';
import { Gauge, Gem, Zap, Target, Share2, LineChart } from 'lucide-react';

export default async function SolucionesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  const soluciones = [
    {
      icono: <Gauge className="w-8 h-8 text-[var(--text-main)] group-hover:text-white transition-colors" />,
      titulo: isEs ? "Planificación de Telemetría" : "Telemetry Planning",
      resumen: isEs ? "Rutas estratégicas para alcanzar objetivos basados en datos." : "Strategic routes to achieve data-driven goals.",
      texto: isEs ? "Analizamos el mercado y la competencia. Diseñamos tácticas multicanal que combinan redes, publicidad pagada y SEO para que tu marca tome la delantera de manera sostenida." : "We analyze market and competition. We design multichannel tactics combining social, paid ads, and SEO so your brand takes the lead sustainably."
    },
    {
      icono: <Gem className="w-8 h-8 text-[var(--text-main)] group-hover:text-white transition-colors" />,
      titulo: isEs ? "Arquitectura Visual" : "Visual Architecture",
      resumen: isEs ? "Sistemas de diseño estructurados y memorables." : "Structured and memorable design systems.",
      texto: isEs ? "Construimos identidades completas: logos, colorimetría y manuales operativos. Fusionamos ingeniería visual con narrativa para conectar emocionalmente y diferenciarte en el circuito." : "We build complete identities: logos, colorimetry, and operational manuals. We fuse visual engineering with narrative to connect emotionally."
    },
    {
      icono: <Zap className="w-8 h-8 text-[var(--text-main)] group-hover:text-white transition-colors" />,
      titulo: isEs ? "Motor de Contenidos" : "Content Engine",
      resumen: isEs ? "Distribución de activos que fidelizan y educan." : "Asset distribution that builds loyalty and educates.",
      texto: isEs ? "Desplegamos activos de alto impacto (blogs, videos, infografías). Aplicamos técnicas SEO y monitoreamos métricas de rendimiento para calibrar continuamente la eficacia del despliegue." : "We deploy high-impact assets (blogs, videos). We apply SEO techniques and monitor performance metrics to continuously calibrate deployment efficiency."
    },
    {
      icono: <Target className="w-8 h-8 text-[var(--text-main)] group-hover:text-white transition-colors" />,
      titulo: isEs ? "Inyección de Tráfico (Ads)" : "Traffic Injection (Ads)",
      resumen: isEs ? "Segmentación algorítmica para conversión inmediata." : "Algorithmic targeting for immediate conversion.",
      texto: isEs ? "Campañas de alto rendimiento en motores de búsqueda y redes sociales. Aplicamos pruebas A/B y remarketing en tiempo real para maximizar el retorno de inversión de tu capital." : "High-performance campaigns on search engines and social networks. We apply A/B testing and remarketing in real time to maximize ROI."
    },
    {
      icono: <Share2 className="w-8 h-8 text-[var(--text-main)] group-hover:text-white transition-colors" />,
      titulo: isEs ? "Control de Ecosistema Social" : "Social Ecosystem Control",
      resumen: isEs ? "Crecimiento sistemático de comunidades digitales." : "Systematic growth of digital communities.",
      texto: isEs ? "Gestionamos canales sociales con precisión milimétrica. Publicamos material calibrado al tono de tu marca, garantizando consistencia y respuestas estratégicas a tu comunidad." : "We manage social channels with pinpoint accuracy. We publish material calibrated to your brand's tone, ensuring consistency and strategic responses."
    },
    {
      icono: <LineChart className="w-8 h-8 text-[var(--text-main)] group-hover:text-white transition-colors" />,
      titulo: isEs ? "Calibración Continua" : "Continuous Calibration",
      resumen: isEs ? "Supervisión de métricas y ajustes en tiempo real." : "Metrics supervision and real-time adjustments.",
      texto: isEs ? "Auditoría constante de campañas. Identificamos cuellos de botella y optimizamos recursos. Hacemos que tu sistema comercial sea flexible y resistente a los cambios del algoritmo." : "Constant campaign auditing. We identify bottlenecks and optimize resources. We make your commercial system flexible and resistant to algorithm changes."
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 text-[var(--text-main)]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* ENCABEZADO */}
        <div className="mb-20 border-l-4 border-[var(--accent-primary)] pl-6">
          <span className="text-[var(--accent-primary)] font-mono uppercase tracking-[0.2em] text-xs font-bold block mb-4">
            [ ARSENAL OPERATIVO ]
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter uppercase">
            {isEs ? 'Sistemas a Medida' : 'Custom Systems'}
          </h1>
          <p className="text-[var(--text-main)]/60 font-mono text-sm max-w-2xl">
            {isEs ? '> Ingeniería de alto rendimiento para cada fase de adquisición.' : '> High-performance engineering for each acquisition phase.'}
          </p>
        </div>

        {/* GRID DE SOLUCIONES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-[var(--text-main)] bg-white shadow-[12px_12px_0px_0px_var(--text-main)]">
           {soluciones.map((solucion, idx) => (
             <div 
               key={idx} 
               className="group p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--text-main)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors h-full flex flex-col"
               style={{
                 borderBottomWidth: idx < 3 ? '2px' : '0px', 
                 borderRightWidth: (idx + 1) % 3 !== 0 ? '2px' : '0px'
               }}
             >
               <div className="mb-6 flex justify-between items-start">
                 <div className="w-14 h-14 bg-[var(--bg-secondary)] flex items-center justify-center border-2 border-[var(--text-main)] group-hover:bg-[var(--text-main)] group-hover:border-[var(--text-main)] transition-colors">
                   {solucion.icono}
                 </div>
                 <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100">MOD.0{idx + 1}</span>
               </div>
               
               <h3 className="text-xl font-bold mb-3 tracking-tight uppercase">
                 {solucion.titulo}
               </h3>

               <p className="text-[var(--accent-primary)] group-hover:text-white font-mono text-xs uppercase tracking-widest mb-4">
                 {solucion.resumen}
               </p>

               <div className="mt-auto pt-4 border-t-2 border-dashed border-[var(--text-main)]/20 group-hover:border-white/20">
                 <p className="opacity-80 text-sm leading-relaxed font-medium">
                   {solucion.texto}
                 </p>
               </div>
             </div>
           ))}
        </div>

        {/* BLOQUE DE PLAN PERSONALIZADO  */}
        <div className="mt-24 bg-[var(--text-main)] text-white border-2 border-[var(--text-main)] p-8 md:p-12 shadow-[12px_12px_0px_0px_var(--accent-primary)] flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* Fondo técnico sutil */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <div className="mb-8 md:mb-0 max-w-2xl relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-4">
              {isEs ? 'Plan Personalizado' : 'Custom Plan'}
            </h3>
            <p className="text-white/70 font-mono text-sm leading-relaxed">
              {isEs 
                ? '¿Tu marca requiere un motor con especificaciones únicas? Construimos arquitecturas de adquisición exclusivas adaptadas a los requerimientos técnicos y comerciales de tu organización.' 
                : 'Does your brand require an engine with unique specifications? We build exclusive acquisition architectures adapted to the technical and commercial requirements of your organization.'}
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

      </div>
    </main>
  );
}