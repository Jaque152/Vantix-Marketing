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
              {isEs ? 'Términos y condiciones[cite: 14]' : 'Terms and Conditions[cite: 14]'}
            </h1>
            <div className="font-mono text-[11px] text-[var(--text-main)]/60 uppercase tracking-widest space-y-1">
              <p>EKOLUK MKT DIGITAL S.A. DE C.V.[cite: 14]</p>
              <p>{isEs ? 'Portal: vantixmkt.com • Canal de Atención: informacion@vantixmkt.com[cite: 14]' : 'Portal: vantixmkt.com • Support Channel: informacion@vantixmkt.com[cite: 14]'}</p>
              <p>{isEs ? 'Sede Corporativa: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX[cite: 14]' : 'Corporate HQ: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX[cite: 14]'}</p>
              <p>{isEs ? 'Vigencia del presente acuerdo: Mayo 2026[cite: 14]' : 'Validity of this agreement: May 2026[cite: 14]'}</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'BIENVENIDO A VANTIX MKT – ARRANCA TU MARCA[cite: 14]' : 'WELCOME TO VANTIX MKT – START YOUR BRAND[cite: 14]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Estos términos establecen el marco legal que rige la relación entre usted como cliente y Vantix Mkt como su socio estratégico en publicidad y marketing.[cite: 14] Al acceder a nuestros servicios, acepta integralmente estas condiciones y se compromete a cumplir con todas las disposiciones aquí establecidas.[cite: 14]' 
                : 'These terms establish the legal framework governing the relationship between you as a client and Vantix Mkt as your strategic partner in advertising and marketing.[cite: 14] By accessing our services, you fully accept these conditions and commit to complying with all provisions set forth herein.[cite: 14]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'DEFINICIÓN DE NUESTROS SERVICIOS[cite: 14]' : 'DEFINITION OF OUR SERVICES[cite: 14]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2 mt-6">
              {isEs ? 'Servicios Publicitarios Principales[cite: 14]' : 'Core Advertising Services[cite: 14]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-2">
              {isEs ? 'Vantix Mkt se especializa en campañas publicitarias de alto impacto que incluyen:[cite: 14]' : 'Vantix Mkt specializes in high-impact advertising campaigns which include:[cite: 14]'}
            </p>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Campañas publicitarias integrales en plataformas digitales y tradicionales[cite: 14]' : 'Comprehensive advertising campaigns on digital and traditional platforms[cite: 14]'}</li>
              <li>{isEs ? 'Creación de contenido visual y audiovisual[cite: 14]' : 'Creation of visual and audiovisual content[cite: 14]'}</li>
              <li>{isEs ? 'Gestión completa de presencia en redes sociales[cite: 14]' : 'Complete management of social media presence[cite: 14]'}</li>
              <li>{isEs ? 'Estrategias de branding y posicionamiento de marca[cite: 14]' : 'Branding and brand positioning strategies[cite: 14]'}</li>
              <li>{isEs ? 'Consultoría en marketing digital y tradicional[cite: 14]' : 'Consulting in digital and traditional marketing[cite: 14]'}</li>
              <li>{isEs ? 'Análisis de resultados con reportes detallados[cite: 14]' : 'Results analysis with detailed reports[cite: 14]'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Servicios Complementarios y Especializados[cite: 14]' : 'Complementary and Specialized Services[cite: 14]'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Investigación de mercado y análisis de competencia[cite: 14]' : 'Market research and competitor analysis[cite: 14]'}</li>
              <li>{isEs ? 'Desarrollo de identidad visual corporativa[cite: 14]' : 'Corporate visual identity development[cite: 14]'}</li>
              <li>{isEs ? 'Producción de material publicitario impreso y digital[cite: 14]' : 'Production of printed and digital advertising material[cite: 14]'}</li>
              <li>{isEs ? 'Gestión de relaciones públicas y manejo de crisis[cite: 14]' : 'Public relations management and crisis handling[cite: 14]'}</li>
              <li>{isEs ? 'Organización de eventos promocionales y lanzamientos[cite: 14]' : 'Organization of promotional events and launches[cite: 14]'}</li>
              <li>{isEs ? 'Capacitación en marketing para equipos internos[cite: 14]' : 'Marketing training for internal teams[cite: 14]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'PROCESO DE CONTRATACIÓN Y FORMALIZACIÓN[cite: 14]' : 'CONTRACTING AND FORMALIZATION PROCESS[cite: 14]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Inicio del Proceso Comercial[cite: 14]' : 'Start of the Commercial Process[cite: 14]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-6">
              {isEs 
                ? 'La relación comercial inicia cuando usted nos contacta a través de nuestros canales oficiales.[cite: 14] Realizamos una consulta inicial gratuita, definimos necesidades y elaboramos una propuesta con alcance, cronograma, inversión y resultados esperados.[cite: 14]' 
                : 'The commercial relationship begins when you contact us through our official channels.[cite: 14] We conduct a free initial consultation, define needs, and develop a proposal outlining the scope, schedule, investment, and expected results.[cite: 14]'}
            </p>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Formalización del Acuerdo[cite: 14]' : 'Agreement Formalization[cite: 14]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'La aceptación de la propuesta constituye un contrato vinculante.[cite: 14] El cliente debe proporcionar un brief detallado, realizar el pago acordado y designar un contacto autorizado para decisiones.[cite: 14]' 
                : 'Acceptance of the proposal constitutes a binding contract.[cite: 14] The client must provide a detailed brief, make the agreed payment, and designate an authorized contact for decisions.[cite: 14]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'OBLIGACIONES Y RESPONSABILIDADES DEL CLIENTE[cite: 14]' : 'CLIENT OBLIGATIONS AND RESPONSIBILITIES[cite: 14]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Colaboración Activa en el Proyecto[cite: 14]' : 'Active Collaboration in the Project[cite: 14]'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Proporcionar información veraz, completa y actualizada[cite: 14]' : 'Provide truthful, complete, and updated information[cite: 14]'}</li>
              <li>{isEs ? 'Facilitar materiales gráficos, audiovisuales y de marca[cite: 14]' : 'Provide graphic, audiovisual, and brand materials[cite: 14]'}</li>
              <li>{isEs ? 'Revisar y aprobar propuestas dentro de plazos[cite: 14]' : 'Review and approve proposals within deadlines[cite: 14]'}</li>
              <li>{isEs ? 'Dar feedback constructivo y específico[cite: 14]' : 'Provide constructive and specific feedback[cite: 14]'}</li>
              <li>{isEs ? 'Cumplir puntualmente con pagos[cite: 14]' : 'Comply punctually with payments[cite: 14]'}</li>
              <li>{isEs ? 'Mantener comunicación fluida con el equipo[cite: 14]' : 'Maintain fluid communication with the team[cite: 14]'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Restricciones y Limitaciones del Cliente[cite: 14]' : 'Client Restrictions and Limitations[cite: 14]'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'No interferir en la estrategia aprobada sin justificación válida[cite: 14]' : 'Do not interfere with the approved strategy without valid justification[cite: 14]'}</li>
              <li>{isEs ? 'No modificar materiales sin autorización[cite: 14]' : 'Do not modify materials without authorization[cite: 14]'}</li>
              <li>{isEs ? 'No usar creatividades con otros proveedores sin permiso[cite: 14]' : 'Do not use creatives with other providers without permission[cite: 14]'}</li>
              <li>{isEs ? 'No divulgar información confidencial de Vantix Mkt[cite: 14]' : 'Do not disclose confidential information of Vantix Mkt[cite: 14]'}</li>
              <li>{isEs ? 'No realizar declaraciones públicas negativas durante la vigencia[cite: 14]' : 'Do not make negative public statements during the term[cite: 14]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'COMPROMISOS DE VANTIX MKT CON NUESTROS CLIENTES[cite: 14]' : 'VANTIX MKT COMMITMENTS TO OUR CLIENTS[cite: 14]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Estándares de Calidad y Servicio[cite: 14]' : 'Quality and Service Standards[cite: 14]'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Entregar servicios con altos estándares creativos y técnicos[cite: 14]' : 'Deliver services with high creative and technical standards[cite: 14]'}</li>
              <li>{isEs ? 'Cumplir con cronogramas salvo fuerza mayor[cite: 14]' : 'Comply with schedules except for force majeure[cite: 14]'}</li>
              <li>{isEs ? 'Mantener comunicación constante sobre avances[cite: 14]' : 'Maintain constant communication regarding progress[cite: 14]'}</li>
              <li>{isEs ? 'Proporcionar reportes detallados de rendimiento[cite: 14]' : 'Provide detailed performance reports[cite: 14]'}</li>
              <li>{isEs ? 'Garantizar confidencialidad absoluta[cite: 14]' : 'Guarantee absolute confidentiality[cite: 14]'}</li>
              <li>{isEs ? 'Brindar soporte técnico durante la vigencia[cite: 14]' : 'Provide technical support during the term[cite: 14]'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Limitaciones de Responsabilidad[cite: 14]' : 'Limitation of Liability[cite: 14]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Nuestra responsabilidad se limita al alcance de cada propuesta comercial.[cite: 14] No garantizamos resultados específicos como ventas, leads o conversiones, ya que dependen de factores externos.[cite: 14]' 
                : 'Our liability is limited to the scope of each commercial proposal.[cite: 14] We do not guarantee specific results such as sales, leads, or conversions, as they depend on external factors.[cite: 14]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'PROPIEDAD INTELECTUAL Y DERECHOS CREATIVOS[cite: 14]' : 'INTELLECTUAL PROPERTY AND CREATIVE RIGHTS[cite: 14]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Titularidad de Creatividades y Estrategias[cite: 14]' : 'Ownership of Creatives and Strategies[cite: 14]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-6">
              {isEs 
                ? 'Todo material desarrollado por Vantix Mkt es propiedad intelectual de la empresa hasta el pago total.[cite: 14] Con el pago, el cliente adquiere derechos de uso comercial exclusivo, mientras Vantix Mkt retiene derechos de autor y puede usar los trabajos en su portafolio.[cite: 14]' 
                : 'All material developed by Vantix Mkt is the intellectual property of the company until full payment is made.[cite: 14] Upon payment, the client acquires exclusive commercial use rights, while Vantix Mkt retains copyright and may use the works in its portfolio.[cite: 14]'}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Uso de Materiales del Cliente[cite: 14]' : 'Use of Client Materials[cite: 14]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'El cliente garantiza contar con los derechos sobre materiales proporcionados y autoriza su uso para el proyecto.[cite: 14] Vantix Mkt no es responsable por violaciones de derechos de terceros derivadas de dichos materiales.[cite: 14]' 
                : 'The client guarantees having the rights to provided materials and authorizes their use for the project.[cite: 14] Vantix Mkt is not responsible for violations of third-party rights derived from such materials.[cite: 14]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'CONFIDENCIALIDAD Y PROTECCIÓN DE INFORMACIÓN COMERCIAL[cite: 14]' : 'CONFIDENTIALITY AND COMMERCIAL INFORMATION PROTECTION[cite: 14]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Ambas partes mantienen confidencialidad sobre información privilegiada durante la relación contractual y cinco años posteriores a su terminación.[cite: 14]' 
                : 'Both parties maintain confidentiality regarding privileged information during the contractual relationship and five years following its termination.[cite: 14]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'MODIFICACIONES DE SERVICIOS Y ALCANCE[cite: 14]' : 'MODIFICATIONS OF SERVICES AND SCOPE[cite: 14]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Cambios Solicitados por el Cliente[cite: 14]' : 'Changes Requested by the Client[cite: 14]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-6">
              {isEs 
                ? 'Deben solicitarse por escrito y serán evaluados para determinar impacto en tiempos y costos.[cite: 14] Los cambios aprobados requieren adenda al contrato.[cite: 14]' 
                : 'They must be requested in writing and will be evaluated to determine their impact on time and costs.[cite: 14] Approved changes require an addendum to the contract.[cite: 14]'}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Adaptaciones por Condiciones de Mercado[cite: 14]' : 'Adaptations due to Market Conditions[cite: 14]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Vantix Mkt podrá sugerir modificaciones estratégicas por cambios en mercado, plataformas o nueva información, siempre con autorización del cliente.[cite: 14]' 
                : 'Vantix Mkt may suggest strategic modifications due to changes in the market, platforms, or new information, always with the client\'s authorization.[cite: 14]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'RESOLUCIÓN DE CONTROVERSIAS[cite: 14]' : 'DISPUTE RESOLUTION[cite: 14]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Las controversias se resolverán primero por negociación directa.[cite: 14] Si no hay acuerdo en 15 días, se acudirá a mediación y, como última instancia, arbitraje comercial conforme al Centro de Arbitraje de México en CDMX.[cite: 14]' 
                : 'Disputes will first be resolved by direct negotiation.[cite: 14] If no agreement is reached within 15 days, mediation will be sought, and as a last resort, commercial arbitration according to the Arbitration Center of Mexico in CDMX.[cite: 14]'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'DISPOSICIONES GENERALES Y APLICABLES[cite: 14]' : 'GENERAL AND APPLICABLE PROVISIONS[cite: 14]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'El acuerdo se rige por la legislación mexicana.[cite: 14] Cualquier modificación requiere firma de ambas partes.[cite: 14] La invalidez de una cláusula no afecta el resto.[cite: 14] Comunicaciones oficiales deben realizarse a direcciones registradas.[cite: 14]' 
                : 'The agreement is governed by Mexican legislation.[cite: 14] Any modification requires the signature of both parties.[cite: 14] The invalidity of one clause does not affect the rest.[cite: 14] Official communications must be made to registered addresses.[cite: 14]'}
            </p>
          </section>

          <div className="mt-12 pt-6 border-t-2 border-dashed border-[var(--text-main)]/20 text-center font-mono text-[10px] text-[var(--text-main)]/40 font-bold tracking-[0.3em]">
            EKOLUK MKT DIGITAL S.A. DE C.V. • VANTIX MKT[cite: 14]
          </div>

        </div>
      </div>
    </main>
  );
}