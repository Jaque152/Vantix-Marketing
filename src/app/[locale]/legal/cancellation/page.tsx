export default async function CancellationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <main className="min-h-screen bg-[var(--bg-main)] pt-32 pb-24 text-[var(--text-main)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white border-2 border-[var(--text-main)] p-8 md:p-12 shadow-[12px_12px_0px_0px_var(--text-main)]">
          
          <div className="border-b-4 border-[var(--accent-primary)] pb-6 mb-10">
            <span className="text-[var(--accent-primary)] font-mono uppercase tracking-[0.2em] text-xs font-bold block mb-4">
              [ SEC.LEGAL — 03 ]
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
              {isEs ? 'Política de reembolsos y cancelaciones[cite: 16]' : 'Refund and Cancellation Policy[cite: 16]'}
            </h1>
            <div className="font-mono text-[11px] text-[var(--text-main)]/60 uppercase tracking-widest space-y-1">
              <p>EKOLUK MKT DIGITAL S.A. DE C.V. • VANTIX MKT[cite: 16]</p>
              <p>{isEs ? 'Portal: VANTIX MKT.com • Línea de Atención: informacion@vantixmkt.com[cite: 16]' : 'Portal: VANTIX MKT.com • Support Line: informacion@vantixmkt.com[cite: 16]'}</p>
              <p>{isEs ? 'Dirección Fiscal: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX[cite: 16]' : 'Fiscal Address: CALLE RÍO GUADIANA NO.23 PISO 2, COL. RENACIMIENTO, ALCALDÍA CUAUHTÉMOC, C.P. 06500 CIUDAD DE MÉXICO, CDMX[cite: 16]'}</p>
              <p>{isEs ? 'Reglamento vigente desde: Mayo 2026[cite: 16]' : 'Regulations effective from: May 2026[cite: 16]'}</p>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'FILOSOFÍA DE FLEXIBILIDAD EN VANTIX MKT[cite: 16]' : 'FLEXIBILITY PHILOSOPHY AT VANTIX MKT[cite: 16]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'En VANTIX MKT entendemos que el mundo de la publicidad requiere adaptabilidad constante.[cite: 16] Así como creemos que la publicidad es como un motor potente que necesita ajustes precisos, nuestras políticas de cancelación y reembolso están diseñadas para ofrecer la flexibilidad que su negocio necesita, manteniendo siempre la transparencia y justicia para ambas partes.[cite: 16]' 
                : 'At VANTIX MKT we understand that the advertising world requires constant adaptability.[cite: 16] Just as we believe advertising is like a powerful engine that needs precise tuning, our cancellation and refund policies are designed to offer the flexibility your business needs, always maintaining transparency and fairness for both parties.[cite: 16]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'CATEGORIZACIÓN DE SERVICIOS PARA CANCELACIONES[cite: 16]' : 'SERVICE CATEGORIZATION FOR CANCELLATIONS[cite: 16]'}
            </h2>
            
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2 mt-6">
              {isEs ? 'Servicios de Consultoría y Estrategia Publicitaria[cite: 16]' : 'Consulting and Advertising Strategy Services[cite: 16]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Incluye desarrollo de estrategias de marketing, auditorías de marca, investigación de mercado, consultoría especializada, análisis de competencia y recomendaciones estratégicas.[cite: 16]' 
                : 'Includes marketing strategy development, brand audits, market research, specialized consulting, competitor analysis, and strategic recommendations.[cite: 16]'}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Servicios de Producción Creativa[cite: 16]' : 'Creative Production Services[cite: 16]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Comprende diseño gráfico, producción audiovisual, desarrollo de contenido, materiales promocionales, fotografía comercial, identidad visual y campañas multimedia.[cite: 16]' 
                : 'Comprises graphic design, audiovisual production, content development, promotional materials, commercial photography, visual identity, and multimedia campaigns.[cite: 16]'}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Servicios de Gestión de Campañas[cite: 16]' : 'Campaign Management Services[cite: 16]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Incluye administración de redes sociales, gestión de publicidad pagada, community management, email marketing, reputación online y monitoreo de resultados.[cite: 16]' 
                : 'Includes social media administration, paid advertising management, community management, email marketing, online reputation, and result monitoring.[cite: 16]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'PERÍODOS DE CANCELACIÓN SEGÚN TIPO DE SERVICIO[cite: 16]' : 'CANCELLATION PERIODS BY SERVICE TYPE[cite: 16]'}
            </h2>
            <ul className="list-disc pl-6 font-mono text-sm space-y-4 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li><strong>{isEs ? 'Cancelación Inmediata (5 días):' : 'Immediate Cancellation (5 days):'}</strong> {isEs ? 'Derecho de desistimiento dentro de 5 días hábiles sin penalización para servicios no iniciados o entregados.[cite: 16]' : 'Right of withdrawal within 5 business days without penalty for uninitiated or undelivered services.[cite: 16]'}</li>
              <li><strong>{isEs ? 'Período de Gracia (24-72 horas):' : 'Grace Period (24-72 hours):'}</strong> {isEs ? 'Retención del 15% para gastos administrativos; se reembolsa el 85% restante.[cite: 16]' : '15% retention for administrative expenses; the remaining 85% is refunded.[cite: 16]'}</li>
              <li><strong>{isEs ? 'Cancelación Estándar (72 horas – 7 días):' : 'Standard Cancellation (72 hours - 7 days):'}</strong> {isEs ? 'Retención del 30% por costos de oportunidad y trabajo preliminar.[cite: 16]' : '30% retention for opportunity costs and preliminary work.[cite: 16]'}</li>
              <li><strong>{isEs ? 'Cancelación Tardía (Después de 7 días):' : 'Late Cancellation (After 7 days):'}</strong> {isEs ? 'Evaluación caso por caso según avance, recursos y compromisos con terceros.[cite: 16]' : 'Case-by-case evaluation based on progress, resources, and commitments to third parties.[cite: 16]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'MODALIDADES DE REEMBOLSO DIFERENCIADAS[cite: 16]' : 'DIFFERENTIATED REFUND MODALITIES[cite: 16]'}
            </h2>
            <ul className="list-disc pl-6 font-mono text-sm space-y-4 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li><strong>{isEs ? 'Reembolso Total (100%):' : 'Full Refund (100%):'}</strong> {isEs ? 'Aplicable en incumplimiento comprobable de VANTIX MKT, cancelaciones en primeras 24 horas o errores administrativos.[cite: 16]' : 'Applicable in provable breach by VANTIX MKT, cancellations within the first 24 hours, or administrative errors.[cite: 16]'}</li>
              <li><strong>{isEs ? 'Reembolso Parcial Estándar:' : 'Standard Partial Refund:'}</strong> {isEs ? 'Calculado restando trabajo realizado, gastos de terceros, retención según período y 10% por gastos administrativos.[cite: 16]' : 'Calculated by subtracting work performed, third-party expenses, retention based on period, and 10% for administrative expenses.[cite: 16]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'PROCEDIMIENTO FORMAL PARA SOLICITAR CANCELACIONES[cite: 16]' : 'FORMAL PROCEDURE TO REQUEST CANCELLATIONS[cite: 16]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2 mt-6">
              {isEs ? 'Solicitud Inicial[cite: 16]' : 'Initial Request[cite: 16]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Las solicitudes deben enviarse por escrito a informacion@vantixmkt.com con número de contrato/pedido, motivo, fecha de efectividad y preferencia de reembolso o crédito.[cite: 16]' 
                : 'Requests must be sent in writing to informacion@vantixmkt.com with contract/order number, reason, effective date, and preference for refund or credit.[cite: 16]'}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Evaluación y Respuesta[cite: 16]' : 'Evaluation and Response[cite: 16]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'VANTIX MKT responderá en máximo 5 días hábiles con resolución basada en avance del proyecto, gastos incurridos y compromisos con terceros.[cite: 16]' 
                : 'VANTIX MKT will respond within a maximum of 5 business days with a resolution based on project progress, incurred expenses, and commitments to third parties.[cite: 16]'}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Proceso de Reembolso[cite: 16]' : 'Refund Process[cite: 16]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Los reembolsos monetarios se procesan en máximo 10 días hábiles por el mismo método de pago.[cite: 16] Los créditos futuros se activan inmediatamente.[cite: 16]' 
                : 'Monetary refunds are processed within a maximum of 10 business days via the same payment method.[cite: 16] Future credits are activated immediately.[cite: 16]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'SITUACIONES ESPECIALES Y EXCEPCIONES[cite: 16]' : 'SPECIAL SITUATIONS AND EXCEPTIONS[cite: 16]'}
            </h2>
            <ul className="list-disc pl-6 font-mono text-sm space-y-4 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li><strong>{isEs ? 'Fuerza Mayor:' : 'Force Majeure:'}</strong> {isEs ? 'Eventos extraordinarios evaluados individualmente con posibles condiciones preferenciales.[cite: 16]' : 'Extraordinary events evaluated individually with possible preferential conditions.[cite: 16]'}</li>
              <li><strong>{isEs ? 'Modificaciones:' : 'Modifications:'}</strong> {isEs ? 'Antes de cancelar, pueden proponerse ajustes de alcance, cronograma o presupuesto.[cite: 16]' : 'Before canceling, adjustments to scope, timeline, or budget may be proposed.[cite: 16]'}</li>
              <li><strong>{isEs ? 'Incumplimiento del Cliente:' : 'Client Breach:'}</strong> {isEs ? 'VANTIX MKT puede suspender el servicio con 15 días de anticipación; reembolso proporcional salvo dolo o mala fe comprobada.[cite: 16]' : 'VANTIX MKT may suspend the service with 15 days notice; proportional refund unless willful misconduct or bad faith is proven.[cite: 16]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'CONDICIONES ESPECIALES PARA CAMPAÑAS ACTIVAS[cite: 16]' : 'SPECIAL CONDITIONS FOR ACTIVE CAMPAIGNS[cite: 16]'}
            </h2>
            <ul className="list-disc pl-6 font-mono text-sm space-y-4 text-[var(--text-main)]/80 mb-6 marker:text-[var(--accent-primary)]">
              <li><strong>{isEs ? 'Publicidad Pagada:' : 'Paid Advertising:'}</strong> {isEs ? 'Las cancelaciones no afectan presupuestos ya invertidos en plataformas (responsabilidad del cliente).[cite: 16]' : 'Cancellations do not affect budgets already invested in platforms (client responsibility).[cite: 16]'}</li>
              <li><strong>{isEs ? 'Medios de Comunicación:' : 'Media Outlets:'}</strong> {isEs ? 'Sujetos a las políticas de cada medio, trasladadas al cliente.[cite: 16]' : 'Subject to the policies of each media outlet, transferred to the client.[cite: 16]'}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'POLÍTICA DE SATISFACCIÓN GARANTIZADA[cite: 16]' : 'GUARANTEED SATISFACTION POLICY[cite: 16]'}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2 mt-6">
              {isEs ? 'Garantía de Calidad[cite: 16]' : 'Quality Guarantee[cite: 16]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'VANTIX MKT garantiza cumplimiento de estándares de calidad en propuestas comerciales.[cite: 16] Se ofrecen revisiones sin costo hasta alcanzar lo acordado.[cite: 16]' 
                : 'VANTIX MKT guarantees compliance with quality standards in commercial proposals.[cite: 16] Revisions are offered at no cost until the agreement is met.[cite: 16]'}
            </p>

            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
              {isEs ? 'Resolución de Disputas[cite: 16]' : 'Dispute Resolution[cite: 16]'}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Si no se logra acuerdo, el caso se evaluará por un especialista independiente en publicidad, con honorarios compartidos 50/50.[cite: 16]' 
                : 'If no agreement is reached, the case will be evaluated by an independent advertising specialist, with fees shared 50/50.[cite: 16]'}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'COMUNICACIÓN Y NOTIFICACIONES[cite: 16]' : 'COMMUNICATION AND NOTIFICATIONS[cite: 16]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Todas las comunicaciones se realizarán exclusivamente por correos electrónicos oficiales registrados en el contrato.[cite: 16] Se enviarán confirmaciones, actualizaciones y resoluciones por escrito.[cite: 16]' 
                : 'All communications will be exclusively via official email addresses registered in the contract.[cite: 16] Confirmations, updates, and resolutions will be sent in writing.[cite: 16]'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--text-main)] mb-4 bg-[var(--bg-secondary)] p-3 border-l-4 border-[var(--text-main)]">
              {isEs ? 'MODIFICACIONES A ESTA POLÍTICA[cite: 16]' : 'MODIFICATIONS TO THIS POLICY[cite: 16]'}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-[var(--text-main)]/80 mb-4">
              {isEs 
                ? 'Puede actualizarse trimestralmente para reflejar cambios operativos, nuevos servicios o modificaciones legales.[cite: 16] Los cambios se notificarán con 15 días de anticipación y se publicarán en el sitio oficial.[cite: 16]' 
                : 'May be updated quarterly to reflect operational changes, new services, or legal modifications.[cite: 16] Changes will be notified 15 days in advance and published on the official site.[cite: 16]'}
            </p>
          </section>

          <div className="mt-12 pt-6 border-t-2 border-dashed border-[var(--text-main)]/20 text-center font-mono text-[10px] text-[var(--text-main)]/40 font-bold tracking-[0.3em]">
            EKOLUK MKT DIGITAL S.A. DE C.V. • VANTIX MKT[cite: 16]
          </div>

        </div>
      </div>
    </main>
  );
}