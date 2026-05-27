export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 text-[var(--text-main)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white border-2 border-[var(--text-main)] p-8 md:p-12 shadow-[12px_12px_0px_0px_var(--text-main)]">
          
          <div className="border-b-4 border-[var(--accent-primary)] pb-6 mb-10">
            <span className="text-[var(--accent-primary)] font-mono uppercase tracking-[0.2em] text-xs font-bold block mb-4">
              [ SEC.LEGAL — 01 ]
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
              {isEs ? 'Términos y condiciones' : 'Terms and Conditions'}
            </h1>
            <div className="font-mono text-[11px] text-[var(--text-main)]/60 uppercase tracking-widest space-y-1">
              <p>EKOLUK MKT DIGITAL S.A. DE C.V.</p>
              <p>{isEs ? 'Portal: vantixmkt.com • Canal de Atención: informacion@vantixmkt.com' : 'Portal: vantixmkt.com • Support Channel: informacion@vantixmkt.com'}</p>
              <p>{isEs ? 'Sede Corporativa: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX' : 'Corporate HQ: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX'}</p>
              <p>{isEs ? 'Vigencia del presente acuerdo: Mayo 2026' : 'Validity of this agreement: May 2026'}</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'BIENVENIDO A VANTIX MKT – ARRANCA TU MARCA' : 'WELCOME TO VANTIX MKT – START YOUR BRAND'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Estos términos establecen el marco legal que rige la relación entre usted como cliente y Vantix Mkt como su socio estratégico en publicidad y marketing. Al acceder a nuestros servicios, acepta integralmente estas condiciones y se compromete a cumplir con todas las disposiciones aquí establecidas.' 
                : 'These terms establish the legal framework governing the relationship between you as a client and Vantix Mkt as your strategic partner in advertising and marketing. By accessing our services, you fully accept these conditions and commit to complying with all provisions set forth herein.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'DEFINICIÓN DE NUESTROS SERVICIOS' : 'DEFINITION OF OUR SERVICES'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2 mt-6">
              {isEs ? 'Servicios Publicitarios Principales' : 'Core Advertising Services'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-2">
              {isEs ? 'Vantix Mkt se especializa en campañas publicitarias de alto impacto que incluyen:' : 'Vantix Mkt specializes in high-impact advertising campaigns which include:'}
            </p>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Campañas publicitarias integrales en plataformas digitales y tradicionales' : 'Comprehensive advertising campaigns on digital and traditional platforms'}</li>
              <li>{isEs ? 'Creación de contenido visual y audiovisual' : 'Creation of visual and audiovisual content'}</li>
              <li>{isEs ? 'Gestión completa de presencia en redes sociales' : 'Complete management of social media presence'}</li>
              <li>{isEs ? 'Estrategias de branding y posicionamiento de marca' : 'Branding and brand positioning strategies'}</li>
              <li>{isEs ? 'Consultoría en marketing digital y tradicional' : 'Consulting in digital and traditional marketing'}</li>
              <li>{isEs ? 'Análisis de resultados con reportes detallados' : 'Results analysis with detailed reports'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Servicios Complementarios y Especializados' : 'Complementary and Specialized Services'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Investigación de mercado y análisis de competencia' : 'Market research and competitor analysis'}</li>
              <li>{isEs ? 'Desarrollo de identidad visual corporativa' : 'Corporate visual identity development'}</li>
              <li>{isEs ? 'Producción de material publicitario impreso y digital' : 'Production of printed and digital advertising material'}</li>
              <li>{isEs ? 'Gestión de relaciones públicas y manejo de crisis' : 'Public relations management and crisis handling'}</li>
              <li>{isEs ? 'Organización de eventos promocionales y lanzamientos' : 'Organization of promotional events and launches'}</li>
              <li>{isEs ? 'Capacitación en marketing para equipos internos' : 'Marketing training for internal teams'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'PROCESO DE CONTRATACIÓN Y FORMALIZACIÓN' : 'CONTRACTING AND FORMALIZATION PROCESS'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Inicio del Proceso Comercial' : 'Start of the Commercial Process'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-6">
              {isEs 
                ? 'La relación comercial inicia cuando usted nos contacta a través de nuestros canales oficiales. Realizamos una consulta inicial gratuita, definimos necesidades y elaboramos una propuesta con alcance, cronograma, inversión y resultados esperados.' 
                : 'The commercial relationship begins when you contact us through our official channels. We conduct a free initial consultation, define needs, and develop a proposal outlining the scope, schedule, investment, and expected results.'}
            </p>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Formalización del Acuerdo' : 'Agreement Formalization'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'La aceptación de la propuesta constituye un contrato vinculante. El cliente debe proporcionar un brief detallado, realizar el pago acordado y designar un contacto autorizado para decisiones.' 
                : 'Acceptance of the proposal constitutes a binding contract. The client must provide a detailed brief, make the agreed payment, and designate an authorized contact for decisions.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'OBLIGACIONES Y RESPONSABILIDADES DEL CLIENTE' : 'CLIENT OBLIGATIONS AND RESPONSIBILITIES'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Colaboración Activa en el Proyecto' : 'Active Collaboration in the Project'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Proporcionar información veraz, completa y actualizada' : 'Provide truthful, complete, and updated information'}</li>
              <li>{isEs ? 'Facilitar materiales gráficos, audiovisuales y de marca' : 'Provide graphic, audiovisual, and brand materials'}</li>
              <li>{isEs ? 'Revisar y aprobar propuestas dentro de plazos' : 'Review and approve proposals within deadlines'}</li>
              <li>{isEs ? 'Dar feedback constructivo y específico' : 'Provide constructive and specific feedback'}</li>
              <li>{isEs ? 'Cumplir puntualmente con pagos' : 'Comply punctually with payments'}</li>
              <li>{isEs ? 'Mantener comunicación fluida con el equipo' : 'Maintain fluid communication with the team'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Restricciones y Limitaciones del Cliente' : 'Client Restrictions and Limitations'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'No interferir en la estrategia aprobada sin justificación válida' : 'Do not interfere with the approved strategy without valid justification'}</li>
              <li>{isEs ? 'No modificar materiales sin autorización' : 'Do not modify materials without authorization'}</li>
              <li>{isEs ? 'No usar creatividades con otros proveedores sin permiso' : 'Do not use creatives with other providers without permission'}</li>
              <li>{isEs ? 'No divulgar información confidencial de Vantix Mkt' : 'Do not disclose confidential information of Vantix Mkt'}</li>
              <li>{isEs ? 'No realizar declaraciones públicas negativas durante la vigencia' : 'Do not make negative public statements during the term'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'COMPROMISOS DE VANTIX MKT CON NUESTROS CLIENTES' : 'VANTIX MKT COMMITMENTS TO OUR CLIENTS'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Estándares de Calidad y Servicio' : 'Quality and Service Standards'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Entregar servicios con altos estándares creativos y técnicos' : 'Deliver services with high creative and technical standards'}</li>
              <li>{isEs ? 'Cumplir con cronogramas salvo fuerza mayor' : 'Comply with schedules except for force majeure'}</li>
              <li>{isEs ? 'Mantener comunicación constante sobre avances' : 'Maintain constant communication regarding progress'}</li>
              <li>{isEs ? 'Proporcionar reportes detallados de rendimiento' : 'Provide detailed performance reports'}</li>
              <li>{isEs ? 'Garantizar confidencialidad absoluta' : 'Guarantee absolute confidentiality'}</li>
              <li>{isEs ? 'Brindar soporte técnico durante la vigencia' : 'Provide technical support during the term'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Limitaciones de Responsabilidad' : 'Limitation of Liability'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Nuestra responsabilidad se limita al alcance de cada propuesta comercial. No garantizamos resultados específicos como ventas, leads o conversiones, ya que dependen de factores externos.' 
                : 'Our liability is limited to the scope of each commercial proposal. We do not guarantee specific results such as sales, leads, or conversions, as they depend on external factors.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'PROPIEDAD INTELECTUAL Y DERECHOS CREATIVOS' : 'INTELLECTUAL PROPERTY AND CREATIVE RIGHTS'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Titularidad de Creatividades y Estrategias' : 'Ownership of Creatives and Strategies'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-6">
              {isEs 
                ? 'Todo material desarrollado por Vantix Mkt es propiedad intelectual de la empresa hasta el pago total. Con el pago, el cliente adquiere derechos de uso comercial exclusivo, mientras Vantix Mkt retiene derechos de autor y puede usar los trabajos en su portafolio.' 
                : 'All material developed by Vantix Mkt is the intellectual property of the company until full payment is made. Upon payment, the client acquires exclusive commercial use rights, while Vantix Mkt retains copyright and may use the works in its portfolio.'}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Uso de Materiales del Cliente' : 'Use of Client Materials'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'El cliente garantiza contar con los derechos sobre materiales proporcionados y autoriza su uso para el proyecto. Vantix Mkt no es responsable por violaciones de derechos de terceros derivadas de dichos materiales.' 
                : 'The client guarantees having the rights to provided materials and authorizes their use for the project. Vantix Mkt is not responsible for violations of third-party rights derived from such materials.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'CONFIDENCIALIDAD Y PROTECCIÓN DE INFORMACIÓN COMERCIAL' : 'CONFIDENTIALITY AND COMMERCIAL INFORMATION PROTECTION'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Ambas partes mantienen confidencialidad sobre información privilegiada durante la relación contractual y cinco años posteriores a su terminación.' 
                : 'Both parties maintain confidentiality regarding privileged information during the contractual relationship and five years following its termination.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'MODIFICACIONES DE SERVICIOS Y ALCANCE' : 'MODIFICATIONS OF SERVICES AND SCOPE'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Cambios Solicitados por el Cliente' : 'Changes Requested by the Client'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-6">
              {isEs 
                ? 'Deben solicitarse por escrito y serán evaluados para determinar impacto en tiempos y costos. Los cambios aprobados requieren adenda al contrato.' 
                : 'They must be requested in writing and will be evaluated to determine their impact on time and costs. Approved changes require an addendum to the contract.'}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Adaptaciones por Condiciones de Mercado' : 'Adaptations due to Market Conditions'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Vantix Mkt podrá sugerir modificaciones estratégicas por cambios en mercado, plataformas o nueva información, siempre con autorización del cliente.' 
                : 'Vantix Mkt may suggest strategic modifications due to changes in the market, platforms, or new information, always with the client\'s authorization.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'RESOLUCIÓN DE CONTROVERSIAS' : 'DISPUTE RESOLUTION'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Las controversias se resolverán primero por negociación directa. Si no hay acuerdo en 15 días, se acudirá a mediación y, como última instancia, arbitraje comercial conforme al Centro de Arbitraje de México en CDMX.' 
                : 'Disputes will first be resolved by direct negotiation. If no agreement is reached within 15 days, mediation will be sought, and as a last resort, commercial arbitration according to the Arbitration Center of Mexico in CDMX.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'DISPOSICIONES GENERALES Y APLICABLES' : 'GENERAL AND APPLICABLE PROVISIONS'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'El acuerdo se rige por la legislación mexicana. Cualquier modificación requiere firma de ambas partes. La invalidez de una cláusula no afecta el resto. Comunicaciones oficiales deben realizarse a direcciones registradas.' 
                : 'The agreement is governed by Mexican legislation. Any modification requires the signature of both parties. The invalidity of one clause does not affect the rest. Official communications must be made to registered addresses.'}
            </p>
          </section>

          <div className="mt-12 pt-6 border-t-2 border-dashed border-[var(--text-main)]/20 text-center font-mono text-[10px] text-[var(--text-main)]/40 font-bold tracking-[0.3em]">
            EKOLUK MKT DIGITAL S.A. DE C.V. • VANTIX MKT
          </div>

        </div>
      </div>
    </main>
  );
}