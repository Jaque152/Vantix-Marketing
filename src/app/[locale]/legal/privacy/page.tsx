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
              {isEs ? 'Política de privacidad' : 'Privacy Policy'}
            </h1>
            <div className="font-mono text-[11px] text-[var(--text-main)]/60 uppercase tracking-widest space-y-1">
              <p>{isEs ? 'Responsable del Tratamiento: EKOLUK MKT DIGITAL S.A. DE C.V.' : 'Data Controller: EKOLUK MKT DIGITAL S.A. DE C.V.'}</p>
              <p>{isEs ? 'Portal: vantixmkt.com • Comunicaciones: informacion@vantixmkt.com' : 'Portal: vantixmkt.com • Communications: informacion@vantixmkt.com'}</p>
              <p>{isEs ? 'Domicilio: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX' : 'Address: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX'}</p>
              <p>{isEs ? 'Documento actualizado: Mayo 2026' : 'Document updated: May 2026'}</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'NUESTRA FILOSOFÍA DE PRIVACIDAD' : 'OUR PRIVACY PHILOSOPHY'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'VANTIX MKT opera bajo la premisa de que cada cliente merece transparencia absoluta sobre cómo su información personal impulsa el éxito de su marca. Como especialistas en publicidad que creemos en la precisión, el combustible creativo y la dirección clara, aplicamos estos mismos principios al cuidado de sus datos personales, cumpliendo rigurosamente con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.' 
                : 'VANTIX MKT operates on the premise that every client deserves absolute transparency regarding how their personal information drives their brand\'s success. As advertising specialists who believe in precision, creative fuel, and clear direction, we apply these same principles to the care of your personal data, strictly complying with the Federal Law on Protection of Personal Data Held by Private Parties.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'TIPOS DE INFORMACIÓN QUE RECOLECTAMOS' : 'TYPES OF INFORMATION WE COLLECT'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2 mt-6">
              {isEs ? 'Información Personal y Empresarial' : 'Personal and Business Information'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Nombre completo y datos de identificación del contacto principal' : 'Full name and identification details of the main contact'}</li>
              <li>{isEs ? 'Canales de comunicación electrónica preferidos' : 'Preferred electronic communication channels'}</li>
              <li>{isEs ? 'Líneas telefónicas de contacto directo' : 'Direct contact phone lines'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Información Digital y de Comportamiento' : 'Digital and Behavioral Information'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Direcciones de protocolo de internet y geolocalización' : 'Internet protocol addresses and geolocation'}</li>
              <li>{isEs ? 'Características del dispositivo y software de navegación' : 'Device characteristics and browsing software'}</li>
              <li>{isEs ? 'Patrones de navegación y tiempo de permanencia en sitio' : 'Browsing patterns and time spent on site'}</li>
              <li>{isEs ? 'Interacciones con contenido publicitario y creatividades' : 'Interactions with advertising content and creatives'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'FINALIDADES PARA LAS QUE UTILIZAMOS SU INFORMACIÓN' : 'PURPOSES FOR WHICH WE USE YOUR INFORMATION'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Servicios Publicitarios Fundamentales' : 'Fundamental Advertising Services'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-6">
              {isEs 
                ? 'Procesamos su información personal para crear y ejecutar campañas publicitarias precisas, desarrollar estrategias creativas, gestionar proyectos de branding, administrar inversiones publicitarias, procesar facturación, cumplir contratos y brindar soporte técnico.' 
                : 'We process your personal information to create and execute precise advertising campaigns, develop creative strategies, manage branding projects, administer advertising investments, process billing, fulfill contracts, and provide technical support.'}
            </p>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Servicios de Valor Agregado (Requieren Su Autorización)' : 'Value-Added Services (Require Your Authorization)'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Con su consentimiento expreso, utilizamos su información para enviar actualizaciones, invitar a eventos exclusivos, realizar estudios de efectividad, crear perfiles de audiencia, ejecutar marketing directo segmentado y desarrollar análisis de mercado.' 
                : 'With your express consent, we use your information to send updates, invite you to exclusive events, conduct effectiveness studies, create audience profiles, execute targeted direct marketing, and develop market analysis.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'BASE LEGAL PARA EL PROCESAMIENTO' : 'LEGAL BASIS FOR PROCESSING'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Nuestro tratamiento se sustenta en: consentimiento libre e informado, necesidad contractual, interés legítimo en mejorar servicios, y cumplimiento de obligaciones legales fiscales y comerciales mexicanas.' 
                : 'Our processing is based on: free and informed consent, contractual necessity, legitimate interest in improving services, and compliance with Mexican fiscal and commercial legal obligations.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'SUS DERECHOS COMO TITULAR DE DATOS' : 'YOUR RIGHTS AS A DATA SUBJECT'}
            </h2>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-4 marker:text-[var(--accent-primary)]">
              <li><strong>{isEs ? 'Acceso:' : 'Access:'}</strong> {isEs ? 'Conocer qué información mantenemos y cómo la usamos' : 'Know what information we hold and how we use it'}</li>
              <li><strong>{isEs ? 'Rectificación:' : 'Rectification:'}</strong> {isEs ? 'Corregir datos inexactos o desactualizados' : 'Correct inaccurate or outdated data'}</li>
              <li><strong>{isEs ? 'Cancelación:' : 'Cancellation:'}</strong> {isEs ? 'Solicitar eliminación de datos no necesarios' : 'Request deletion of unnecessary data'}</li>
              <li><strong>{isEs ? 'Oposición:' : 'Opposition:'}</strong> {isEs ? 'Negarse al uso de sus datos en finalidades específicas' : 'Object to the use of your data for specific purposes'}</li>
              <li><strong>{isEs ? 'Portabilidad:' : 'Portability:'}</strong> {isEs ? 'Obtener sus datos en formato común para transferirlos' : 'Obtain your data in a common format for transfer'}</li>
              <li><strong>{isEs ? 'Limitación:' : 'Limitation:'}</strong> {isEs ? 'Restringir el procesamiento bajo ciertas circunstancias' : 'Restrict processing under certain circumstances'}</li>
              <li><strong>{isEs ? 'Revocación:' : 'Revocation:'}</strong> {isEs ? 'Retirar su autorización en cualquier momento' : 'Withdraw your authorization at any time'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'INFRAESTRUCTURA DE SEGURIDAD DE DATOS' : 'DATA SECURITY INFRASTRUCTURE'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2 mt-6">
              {isEs ? 'Protecciones Técnicas' : 'Technical Protections'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Encriptación de extremo a extremo' : 'End-to-end encryption'}</li>
              <li>{isEs ? 'Firewalls empresariales con monitoreo 24/7' : 'Enterprise firewalls with 24/7 monitoring'}</li>
              <li>{isEs ? 'Autenticación multifactor' : 'Multi-factor authentication'}</li>
              <li>{isEs ? 'Respaldos automáticos cifrados' : 'Encrypted automatic backups'}</li>
              <li>{isEs ? 'Actualizaciones de seguridad automatizadas' : 'Automated security updates'}</li>
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Controles Organizacionales' : 'Organizational Controls'}
            </h3>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Manuales internos de manejo seguro' : 'Internal secure handling manuals'}</li>
              <li>{isEs ? 'Capacitaciones trimestrales en protección de datos' : 'Quarterly data protection training'}</li>
              <li>{isEs ? 'Acuerdos de confidencialidad firmados' : 'Signed confidentiality agreements'}</li>
              <li>{isEs ? 'Auditorías de seguridad bienales' : 'Biennial security audits'}</li>
              <li>{isEs ? 'Protocolos de respuesta inmediata ante incidentes' : 'Immediate incident response protocols'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'CRONOGRAMA DE RETENCIÓN DE INFORMACIÓN' : 'INFORMATION RETENTION SCHEDULE'}
            </h2>
            <ul className="list-disc pl-6 font-mono text-sm space-y-2 text-[var(--text-main)]/80 mb-4 marker:text-[var(--accent-primary)]">
              <li>{isEs ? 'Datos de Campañas y Contratos: Vigencia + 10 años' : 'Campaign and Contract Data: Term + 10 years'}</li>
              <li>{isEs ? 'Información Fiscal y Comercial: 5 años' : 'Tax and Commercial Information: 5 years'}</li>
              <li>{isEs ? 'Datos de Marketing: Hasta revocación o 2 años de inactividad' : 'Marketing Data: Until revocation or 2 years of inactivity'}</li>
              <li>{isEs ? 'Cookies de Sesión: Eliminadas al cerrar navegador' : 'Session Cookies: Deleted upon closing browser'}</li>
              <li>{isEs ? 'Cookies de Análisis: Máximo 26 meses' : 'Analytics Cookies: Maximum 26 months'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'TECNOLOGÍAS DE SEGUIMIENTO PUBLICITARIO' : 'ADVERTISING TRACKING TECHNOLOGIES'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Usamos cookies y tecnologías similares para optimizar la experiencia, analizar rendimiento de campañas, personalizar contenido, medir efectividad y mejorar servicios. Puede gestionarlas en su navegador, aunque algunas funciones podrían verse limitadas.' 
                : 'We use cookies and similar technologies to optimize experience, analyze campaign performance, personalize content, measure effectiveness, and improve services. You can manage them in your browser, although some functions may be limited.'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'ACTUALIZACIONES DE ESTA POLÍTICA' : 'UPDATES TO THIS POLICY'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Esta política puede ser modificada para reflejar cambios en operación, servicios, leyes o estándares de privacidad. Se notificará con 7 días hábiles de anticipación en nuestro sitio web y por correo electrónico.' 
                : 'This policy may be modified to reflect changes in operation, services, laws, or privacy standards. Notification will be given 7 business days in advance on our website and by email.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'CANAL DE QUEJAS Y DENUNCIAS' : 'COMPLAINTS AND REPORTING CHANNEL'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Para asuntos no resueltos con VANTIX MKT, puede contactar al INAI en www.inai.org.mx o al teléfono 800 835 4324.' 
                : 'For unresolved issues with VANTIX MKT, you can contact INAI at www.inai.org.mx or by calling 800 835 4324.'}
            </p>
          </section>

          <div className="mt-12 pt-6 border-t-2 border-dashed border-[var(--text-main)]/20 text-center font-mono text-[10px] text-[var(--text-main)]/40 font-bold tracking-[0.3em] flex flex-col gap-2">
            <span>EKOLUK MKT DIGITAL S.A. DE C.V. • VANTIX MKT</span>
            <span>{isEs ? 'Arrancamos tu marca con la máxima protección de tus datos' : 'We start your brand with maximum protection of your data'}</span>
          </div>

        </div>
      </div>
    </main>
  );
}