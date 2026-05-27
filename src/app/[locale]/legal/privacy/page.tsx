export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 text-[var(--text-main)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white border-2 border-[var(--text-main)] p-8 md:p-12 shadow-[12px_12px_0px_0px_var(--text-main)]">
          
          <div className="border-b-4 border-[var(--accent-primary)] pb-6 mb-10">
            <span className="text-[var(--accent-primary)] font-mono uppercase tracking-[0.2em] text-xs font-bold block mb-4">
              [ SEC.LEGAL — 02 ]
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
              {isEs ? 'Política de privacidad[cite: 15]' : 'Privacy Policy[cite: 15]'}
            </h1>
            <div className="font-mono text-[11px] text-[var(--text-main)]/60 uppercase tracking-widest space-y-1">
              <p>{isEs ? 'Responsable del Tratamiento: EKOLUK MKT DIGITAL S.A. DE C.V.[cite: 15]' : 'Data Controller: EKOLUK MKT DIGITAL S.A. DE C.V.[cite: 15]'}</p>
              <p>{isEs ? 'Portal: vantixmkt.com • Comunicaciones: informacion@vantixmkt.com[cite: 15]' : 'Portal: vantixmkt.com • Communications: informacion@vantixmkt.com[cite: 15]'}</p>
              <p>{isEs ? 'Domicilio: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX[cite: 15]' : 'Address: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX[cite: 15]'}</p>
              <p>{isEs ? 'Documento actualizado: Mayo 2026[cite: 15]' : 'Document updated: May 2026[cite: 15]'}</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'NUESTRA FILOSOFÍA DE PRIVACIDAD[cite: 15]' : 'OUR PRIVACY PHILOSOPHY[cite: 15]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'VANTIX MKT opera bajo la premisa de que cada cliente merece transparencia absoluta sobre cómo su información personal impulsa el éxito de su marca.[cite: 15] Como especialistas en publicidad que creemos en la precisión, el combustible creativo y la dirección clara, aplicamos estos mismos principios al cuidado de sus datos personales, cumpliendo rigurosamente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.[cite: 15]' 
                : 'VANTIX MKT operates on the premise that every client deserves absolute transparency regarding how their personal information drives their brand\'s success.[cite: 15] As advertising specialists who believe in precision, creative fuel, and clear direction, we apply these same principles to the care of your personal data, strictly complying with the Federal Law on Protection of Personal Data Held by Private Parties.[cite: 15]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'TIPOS DE INFORMACIÓN QUE RECOLECTAMOS[cite: 15]' : 'TYPES OF INFORMATION WE COLLECT[cite: 15]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2 mt-6">
              {isEs ? 'Información Personal y Empresarial[cite: 15]' : 'Personal and Business Information[cite: 15]'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Nombre completo y datos de identificación del contacto principal[cite: 15]' : 'Full name and identification details of the main contact[cite: 15]'}</li>
              <li>{isEs ? 'Canales de comunicación electrónica preferidos[cite: 15]' : 'Preferred electronic communication channels[cite: 15]'}</li>
              <li>{isEs ? 'Líneas telefónicas de contacto directo[cite: 15]' : 'Direct contact phone lines[cite: 15]'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Información Digital y de Comportamiento[cite: 15]' : 'Digital and Behavioral Information[cite: 15]'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Direcciones de protocolo de internet y geolocalización[cite: 15]' : 'Internet protocol addresses and geolocation[cite: 15]'}</li>
              <li>{isEs ? 'Características del dispositivo y software de navegación[cite: 15]' : 'Device characteristics and browsing software[cite: 15]'}</li>
              <li>{isEs ? 'Patrones de navegación y tiempo de permanencia en sitio[cite: 15]' : 'Browsing patterns and time spent on site[cite: 15]'}</li>
              <li>{isEs ? 'Interacciones con contenido publicitario y creatividades[cite: 15]' : 'Interactions with advertising content and creatives[cite: 15]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'FINALIDADES PARA LAS QUE UTILIZAMOS SU INFORMACIÓN[cite: 15]' : 'PURPOSES FOR WHICH WE USE YOUR INFORMATION[cite: 15]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Servicios Publicitarios Fundamentales[cite: 15]' : 'Fundamental Advertising Services[cite: 15]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-6">
              {isEs 
                ? 'Procesamos su información personal para crear y ejecutar campañas publicitarias precisas, desarrollar estrategias creativas, gestionar proyectos de branding, administrar inversiones publicitarias, procesar facturación, cumplir contratos y brindar soporte técnico.[cite: 15]' 
                : 'We process your personal information to create and execute precise advertising campaigns, develop creative strategies, manage branding projects, administer advertising investments, process billing, fulfill contracts, and provide technical support.[cite: 15]'}
            </p>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Servicios de Valor Agregado (Requieren Su Autorización)[cite: 15]' : 'Value-Added Services (Require Your Authorization)[cite: 15]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Con su consentimiento expreso, utilizamos su información para enviar actualizaciones, invitar a eventos exclusivos, realizar estudios de efectividad, crear perfiles de audiencia, ejecutar marketing directo segmentado y desarrollar análisis de mercado.[cite: 15]' 
                : 'With your express consent, we use your information to send updates, invite you to exclusive events, conduct effectiveness studies, create audience profiles, execute targeted direct marketing, and develop market analysis.[cite: 15]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'BASE LEGAL PARA EL PROCESAMIENTO[cite: 15]' : 'LEGAL BASIS FOR PROCESSING[cite: 15]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Nuestro tratamiento se sustenta en: consentimiento libre e informado, necesidad contractual, interés legítimo en mejorar servicios, y cumplimiento de obligaciones legales fiscales y comerciales mexicanas.[cite: 15]' 
                : 'Our processing is based on: free and informed consent, contractual necessity, legitimate interest in improving services, and compliance with Mexican fiscal and commercial legal obligations.[cite: 15]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'SUS DERECHOS COMO TITULAR DE DATOS[cite: 15]' : 'YOUR RIGHTS AS A DATA SUBJECT[cite: 15]'}
            </h2>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-4 marker:text-[var(--accent-primary)]">
              <li><strong>{isEs ? 'Acceso:' : 'Access:'}</strong> {isEs ? 'Conocer qué información mantenemos y cómo la usamos[cite: 15]' : 'Know what information we hold and how we use it[cite: 15]'}</li>
              <li><strong>{isEs ? 'Rectificación:' : 'Rectification:'}</strong> {isEs ? 'Corregir datos inexactos o desactualizados[cite: 15]' : 'Correct inaccurate or outdated data[cite: 15]'}</li>
              <li><strong>{isEs ? 'Cancelación:' : 'Cancellation:'}</strong> {isEs ? 'Solicitar eliminación de datos no necesarios[cite: 15]' : 'Request deletion of unnecessary data[cite: 15]'}</li>
              <li><strong>{isEs ? 'Oposición:' : 'Opposition:'}</strong> {isEs ? 'Negarse al uso de sus datos en finalidades específicas[cite: 15]' : 'Object to the use of your data for specific purposes[cite: 15]'}</li>
              <li><strong>{isEs ? 'Portabilidad:' : 'Portability:'}</strong> {isEs ? 'Obtener sus datos en formato común para transferirlos[cite: 15]' : 'Obtain your data in a common format for transfer[cite: 15]'}</li>
              <li><strong>{isEs ? 'Limitación:' : 'Limitation:'}</strong> {isEs ? 'Restringir el procesamiento bajo ciertas circunstancias[cite: 15]' : 'Restrict processing under certain circumstances[cite: 15]'}</li>
              <li><strong>{isEs ? 'Revocación:' : 'Revocation:'}</strong> {isEs ? 'Retirar su autorización en cualquier momento[cite: 15]' : 'Withdraw your authorization at any time[cite: 15]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'INFRAESTRUCTURA DE SEGURIDAD DE DATOS[cite: 15]' : 'DATA SECURITY INFRASTRUCTURE[cite: 15]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2 mt-6">
              {isEs ? 'Protecciones Técnicas[cite: 15]' : 'Technical Protections[cite: 15]'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Encriptación de extremo a extremo[cite: 15]' : 'End-to-end encryption[cite: 15]'}</li>
              <li>{isEs ? 'Firewalls empresariales con monitoreo 24/7[cite: 15]' : 'Enterprise firewalls with 24/7 monitoring[cite: 15]'}</li>
              <li>{isEs ? 'Autenticación multifactor[cite: 15]' : 'Multi-factor authentication[cite: 15]'}</li>
              <li>{isEs ? 'Respaldos automáticos cifrados[cite: 15]' : 'Encrypted automatic backups[cite: 15]'}</li>
              <li>{isEs ? 'Actualizaciones de seguridad automatizadas[cite: 15]' : 'Automated security updates[cite: 15]'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Controles Organizacionales[cite: 15]' : 'Organizational Controls[cite: 15]'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Manuales internos de manejo seguro[cite: 15]' : 'Internal secure handling manuals[cite: 15]'}</li>
              <li>{isEs ? 'Capacitaciones trimestrales en protección de datos[cite: 15]' : 'Quarterly data protection training[cite: 15]'}</li>
              <li>{isEs ? 'Acuerdos de confidencialidad firmados[cite: 15]' : 'Signed confidentiality agreements[cite: 15]'}</li>
              <li>{isEs ? 'Auditorías de seguridad bienales[cite: 15]' : 'Biennial security audits[cite: 15]'}</li>
              <li>{isEs ? 'Protocolos de respuesta inmediata ante incidentes[cite: 15]' : 'Immediate incident response protocols[cite: 15]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'CRONOGRAMA DE RETENCIÓN DE INFORMACIÓN[cite: 15]' : 'INFORMATION RETENTION SCHEDULE[cite: 15]'}
            </h2>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-4 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Datos de Campañas y Contratos: Vigencia + 10 años[cite: 15]' : 'Campaign and Contract Data: Term + 10 years[cite: 15]'}</li>
              <li>{isEs ? 'Información Fiscal y Comercial: 5 años[cite: 15]' : 'Tax and Commercial Information: 5 years[cite: 15]'}</li>
              <li>{isEs ? 'Datos de Marketing: Hasta revocación o 2 años de inactividad[cite: 15]' : 'Marketing Data: Until revocation or 2 years of inactivity[cite: 15]'}</li>
              <li>{isEs ? 'Cookies de Sesión: Eliminadas al cerrar navegador[cite: 15]' : 'Session Cookies: Deleted upon closing browser[cite: 15]'}</li>
              <li>{isEs ? 'Cookies de Análisis: Máximo 26 meses[cite: 15]' : 'Analytics Cookies: Maximum 26 months[cite: 15]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'TECNOLOGÍAS DE SEGUIMIENTO PUBLICITARIO[cite: 15]' : 'ADVERTISING TRACKING TECHNOLOGIES[cite: 15]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Usamos cookies y tecnologías similares para optimizar la experiencia, analizar rendimiento de campañas, personalizar contenido, medir efectividad y mejorar servicios.[cite: 15] Puede gestionarlas en su navegador, aunque algunas funciones podrían verse limitadas.[cite: 15]' 
                : 'We use cookies and similar technologies to optimize experience, analyze campaign performance, personalize content, measure effectiveness, and improve services.[cite: 15] You can manage them in your browser, although some functions may be limited.[cite: 15]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'ACTUALIZACIONES DE ESTA POLÍTICA[cite: 15]' : 'UPDATES TO THIS POLICY[cite: 15]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Esta política puede ser modificada para reflejar cambios en operación, servicios, leyes o estándares de privacidad.[cite: 15] Se notificará con 7 días hábiles de anticipación en nuestro sitio web y por correo electrónico.[cite: 15]' 
                : 'This policy may be modified to reflect changes in operation, services, laws, or privacy standards.[cite: 15] Notification will be given 7 business days in advance on our website and by email.[cite: 15]'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'CANAL DE QUEJAS Y DENUNCIAS[cite: 15]' : 'COMPLAINTS AND REPORTING CHANNEL[cite: 15]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Para asuntos no resueltos con VANTIX MKT, puede contactar al INAI en www.inai.org.mx o al teléfono 800 835 4324.[cite: 15]' 
                : 'For unresolved issues with VANTIX MKT, you can contact INAI at www.inai.org.mx or by calling 800 835 4324.[cite: 15]'}
            </p>
          </section>

          <div className="mt-12 pt-6 border-t-2 border-dashed border-[var(--text-main)]/20 text-center font-mono text-[10px] text-[var(--text-main)]/40 font-bold tracking-[0.3em] flex flex-col gap-2">
            <span>EKOLUK MKT DIGITAL S.A. DE C.V. • VANTIX MKT[cite: 15]</span>
            <span>{isEs ? 'Arrancamos tu marca con la máxima protección de tus datos[cite: 15]' : 'We start your brand with maximum protection of your data[cite: 15]'}</span>
          </div>

        </div>
      </div>
    </main>
  );
}