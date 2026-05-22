import { Resend } from 'resend';
import { Checkout, CartItem } from '@/types';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = 'ventas@vantixmkt.com'; 
const INTERNAL_EMAIL = 'informacion@vantixmkt.com';

const formatPrice = (price: number) => 
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);

// Paleta "Precisión Aerodinámica" Vantix
const emailTheme = {
  bgMain: '#FFFFFF', // Blanco
  bgSecondary: '#F4F4F5', // Gris técnico
  textMain: '#09090B', // Casi negro
  textMuted: '#71717A', // Gris oscuro
  accentPrimary: '#E11D48', // Rojo Carmesí
  borderMain: '#09090B' // Borde duro
};

// Fuentes para compatibilidad universal de correo
const fontSans = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const fontMono = "'Courier New', Courier, monospace";

// ============================================================================
// 1. EMAIL DE CHECKOUT (Cliente e Interno)
// ============================================================================
export async function sendReceiptEmail(
  checkout: Checkout, 
  items: CartItem[], 
  isEnglish: boolean = false
) {
  // --- A. PLANTILLA TÉCNICA PARA EL CLIENTE ---
  const subjectClient = isEnglish 
    ? `[ VANTIX ] - Deployment Authorized` 
    : `[ VANTIX ] - Despliegue Autorizado`;

  const htmlClient = `
    <div style="font-family: ${fontSans}; max-width: 600px; margin: auto; color: ${emailTheme.textMain}; background-color: ${emailTheme.bgMain}; border: 2px solid ${emailTheme.borderMain};">
      
      <div style="background-color: ${emailTheme.bgSecondary}; padding: 30px; text-align: left; border-bottom: 2px solid ${emailTheme.borderMain};">
        <div style="font-family: ${fontMono}; color: ${emailTheme.accentPrimary}; font-size: 11px; font-weight: bold; letter-spacing: 2px; margin-bottom: 15px;">
          [ TERMINAL DE INVERSIÓN ]
        </div>
        <h1 style="color: ${emailTheme.textMain}; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">
          VANTIX MARKETING<span style="color: ${emailTheme.accentPrimary};">.</span>
        </h1>
        <p style="color: ${emailTheme.textMuted}; font-family: ${fontMono}; font-size: 12px; margin-top: 10px; font-weight: bold; text-transform: uppercase;">
          ${isEnglish ? 'Growth Engineering' : 'Ingeniería de Crecimiento'}
        </p>
      </div>

      <div style="padding: 40px 30px;">
        <h2 style="color: ${emailTheme.textMain}; margin-top: 0; font-size: 20px; font-weight: 800; text-transform: uppercase;">
          ${isEnglish ? 'STATUS: APPROVED' : 'STATUS: APROBADO'}
        </h2>
        <p style="font-size: 15px; color: ${emailTheme.textMuted}; line-height: 1.6; font-weight: 500;">
          ${isEnglish 
            ? `> Signal received, ${checkout.nombre}. Your transaction was successfully processed by OctanoPayments. Your infrastructure is now in the deployment phase.` 
            : `> Señal recibida, ${checkout.nombre}. Su transacción fue procesada con éxito por OctanoPayments. La infraestructura solicitada ha entrado en fase de despliegue.`}
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 40px 0; border-top: 2px solid ${emailTheme.borderMain}; border-bottom: 2px solid ${emailTheme.borderMain};">
          <thead>
            <tr style="background-color: ${emailTheme.bgSecondary}; text-align: left;">
              <th style="padding: 15px 10px; color: ${emailTheme.textMain}; font-family: ${fontMono}; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">${isEnglish ? 'Protocol' : 'Protocolo'}</th>
              <th style="padding: 15px 10px; color: ${emailTheme.textMain}; font-family: ${fontMono}; font-size: 11px; font-weight: bold; text-transform: uppercase; text-align: right; letter-spacing: 1px;">${isEnglish ? 'Value' : 'Valor'}</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr style="border-bottom: 1px solid #E4E4E7;">
                <td style="padding: 15px 10px; color: ${emailTheme.textMain}; font-size: 14px; font-weight: 700; text-transform: uppercase;">
                  ${item.quantity}x ${item.vx_plans?.title || 'Desarrollo a Medida'}
                  ${item.quote_id ? `<br><span style="font-size:11px; color:${emailTheme.textMuted}; font-family: ${fontMono}; margin-top: 4px; display: inline-block;">REF: ${item.quote_id}</span>` : ''}
                </td>
                <td style="padding: 15px 10px; text-align: right; color: ${emailTheme.textMain}; font-size: 14px; font-weight: bold; font-family: ${fontMono};">
                  ${formatPrice(item.custom_price || item.vx_plans?.price || 0)}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="background-color: ${emailTheme.textMain}; padding: 25px; text-align: right;">
          <span style="font-size: 11px; color: #A1A1AA; font-family: ${fontMono}; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">
            ${isEnglish ? '[ TOTAL INVESTMENT (TAX INCLUDED) ]' : '[ TOTAL INVERSIÓN (IVA INCLUIDO) ]'}
          </span>
          <span style="font-size: 28px; font-weight: 900; color: #FFFFFF; display: block; margin-top: 8px;">
            ${formatPrice(checkout.total_estimado)}
          </span>
        </div>
      </div>
    </div>
  `;

  // --- B. PLANTILLA PARA EL EQUIPO INTERNO ---
  const htmlInternal = `
    <div style="font-family: ${fontSans}; max-width: 600px; padding: 0; border: 2px solid #09090B; background-color: #FFFFFF;">
      <div style="background-color: #09090B; padding: 20px; color: #FFFFFF;">
        <h2 style="margin: 0; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">🚨 [ ALERTA DE SISTEMA: NUEVO INGRESO ]</h2>
      </div>
      
      <div style="padding: 30px;">
        <p style="font-family: ${fontMono}; font-size: 12px; color: #71717A; margin-top: 0;"><strong>ID_TRANSACCIÓN:</strong> ${checkout.id}</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 25px; border: 1px solid #09090B;">
          <tr><td colspan="2" style="background: #F4F4F5; padding: 12px; font-weight: bold; color: #09090B; text-transform: uppercase; font-size: 12px; border-bottom: 1px solid #09090B;">Datos de Facturación</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; width: 30%; font-size: 13px;"><strong>Nombre:</strong></td><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px;">${checkout.nombre} ${checkout.apellidos}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px;"><a href="mailto:${checkout.correo_electronico}" style="color: #E11D48;">${checkout.correo_electronico}</a></td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px;"><strong>Teléfono:</strong></td><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px;">${checkout.telefono || 'No proporcionado'}</td></tr>
        </table>

        <h3 style="margin-top: 30px; color: #09090B; font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #09090B; padding-bottom: 5px;">Protocolos Adquiridos</h3>
        <ul style="color: #09090B; font-size: 14px; padding-left: 20px;">
          ${items.map(item => `
            <li style="margin-bottom: 10px;">
              <strong>[ ${item.quantity}x ]</strong> ${item.vx_plans?.title || 'Desarrollo a Medida'} 
              <br><span style="font-family: ${fontMono}; color: #71717A; font-size: 12px;">VALOR: ${formatPrice(item.custom_price || item.vx_plans?.price || 0)}</span>
            </li>
          `).join('')}
        </ul>
        
        <div style="margin-top: 30px; padding: 20px; background: #F4F4F5; border: 2px dashed #09090B; text-align: right; font-family: ${fontMono};">
          <p style="margin: 5px 0; color: #71717A; font-size: 12px;">SUBTOTAL: ${formatPrice(checkout.subtotal)}</p>
          <p style="margin: 5px 0; color: #71717A; font-size: 12px;">IMPUESTOS: ${formatPrice(checkout.impuesto)}</p>
          <p style="margin: 15px 0 0 0; font-size: 20px; color: #E11D48;"><strong>TOTAL: ${formatPrice(checkout.total_estimado)}</strong></p>
        </div>
      </div>
    </div>
  `;

  await Promise.all([
    resend.emails.send({
      from: `VANTIX MARKETING <${FROM_EMAIL}>`,
      to: [checkout.correo_electronico],
      subject: subjectClient,
      html: htmlClient,
    }),
    resend.emails.send({
      from: `System Bot <${FROM_EMAIL}>`,
      to: [INTERNAL_EMAIL],
      subject: `[ INGRESO ] ${checkout.nombre} ${checkout.apellidos} - ${formatPrice(checkout.total_estimado)}`,
      html: htmlInternal,
    })
  ]);
}

// ============================================================================
// 2. EMAIL DE CONTACTO (Cliente e Interno)
// ============================================================================
export interface ContactFormData {
  nombre_completo: string;
  empresa_negocio: string;
  telefono: string;
  correo_electronico: string;
  asunto: string;
  mensaje: string;
}

export async function sendContactConfirmationEmail(data: ContactFormData, isEnglish: boolean = false) {
  
  // --- A. PLANTILLA TÉCNICA PARA EL CLIENTE ---
  const subjectClient = isEnglish 
    ? "[ VANTIX ] - Telemetry Received" 
    : "[ VANTIX ] - Telemetría Recibida";
  
  const htmlClient = `
    <div style="font-family: ${fontSans}; max-width: 600px; margin: auto; color: ${emailTheme.textMain}; background-color: ${emailTheme.bgMain}; border: 2px solid ${emailTheme.borderMain};">
      
      <div style="background-color: ${emailTheme.bgSecondary}; padding: 30px; text-align: left; border-bottom: 2px solid ${emailTheme.borderMain};">
        <div style="font-family: ${fontMono}; color: ${emailTheme.accentPrimary}; font-size: 11px; font-weight: bold; letter-spacing: 2px; margin-bottom: 15px;">
          [ SEC.03 - COMUNICACIÓN ]
        </div>
        <h1 style="color: ${emailTheme.textMain}; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">
          VANTIX MARKETING<span style="color: ${emailTheme.accentPrimary};">.</span>
        </h1>
      </div>
      
      <div style="padding: 40px 30px;">
        <h2 style="color: ${emailTheme.textMain}; margin-top: 0; font-size: 20px; font-weight: 800; text-transform: uppercase;">
          ${isEnglish ? `CONNECTION ESTABLISHED,` : `CONEXIÓN ESTABLECIDA,`}<br>
          <span style="color: ${emailTheme.accentPrimary};">${data.nombre_completo.toUpperCase()}</span>
        </h2>
        <p style="font-size: 15px; color: ${emailTheme.textMuted}; line-height: 1.6; font-weight: 500; margin-top: 20px;">
          ${isEnglish 
            ? '> Data successfully received at headquarters. A growth engineer is analyzing your commercial infrastructure and will contact you shortly.' 
            : '> Datos recibidos exitosamente en la central. Un ingeniero de crecimiento está analizando tu infraestructura comercial y se pondrá en contacto a la brevedad.'}
        </p>

        <div style="background-color: ${emailTheme.bgSecondary}; border: 1px solid ${emailTheme.borderMain}; padding: 20px; margin-top: 35px; border-left: 4px solid ${emailTheme.accentPrimary};">
          <p style="font-size: 12px; font-family: ${fontMono}; color: ${emailTheme.textMain}; margin: 5px 0; font-weight: bold;">[ ${isEnglish ? 'REFERENCE' : 'REFERENCIA'} ]</p>
          <p style="font-size: 14px; color: ${emailTheme.textMuted}; margin: 10px 0 5px 0;"><strong>${isEnglish ? 'SUBJECT:' : 'ASUNTO:'}</strong> ${data.asunto}</p>
          <p style="font-size: 14px; color: ${emailTheme.textMuted}; margin: 5px 0;"><strong>${isEnglish ? 'COMPANY:' : 'EMPRESA:'}</strong> ${data.empresa_negocio}</p>
        </div>
      </div>
    </div>
  `;

  // --- B. PLANTILLA PARA EL EQUIPO INTERNO ---
  const htmlInternal = `
    <div style="font-family: ${fontSans}; max-width: 600px; padding: 0; border: 2px solid #09090B; background-color: #FFFFFF;">
      <div style="background-color: #E11D48; padding: 20px; color: #FFFFFF;">
        <h2 style="margin: 0; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">📡 [ NUEVA SEÑAL ENTRANTE: LEAD ]</h2>
      </div>
      
      <div style="padding: 30px;">
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #09090B;">
          <tr><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; width: 30%; font-size: 13px; font-weight: bold;">Remitente:</td><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px;">${data.nombre_completo}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px; font-weight: bold;">Empresa:</td><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px;">${data.empresa_negocio}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px; font-weight: bold;">Contacto:</td><td style="padding: 10px; border-bottom: 1px solid #E4E4E7; font-size: 13px;"><a href="mailto:${data.correo_electronico}" style="color: #E11D48;">${data.correo_electronico}</a> <br> ${data.telefono}</td></tr>
          <tr><td style="padding: 10px; font-size: 13px; font-weight: bold;">Asunto:</td><td style="padding: 10px; font-size: 13px; font-weight: bold; color: #E11D48;">${data.asunto}</td></tr>
        </table>

        <div style="margin-top: 30px;">
          <h3 style="color: #09090B; font-size: 12px; text-transform: uppercase; font-family: ${fontMono}; margin-bottom: 10px;">[ MENSAJE DECAPSULADO ]</h3>
          <div style="white-space: pre-wrap; color: #09090B; background: #F4F4F5; padding: 20px; border: 1px solid #E4E4E7; font-size: 14px; line-height: 1.6;">${data.mensaje}</div>
        </div>
      </div>
    </div>
  `;

  await Promise.all([
    resend.emails.send({
      from: `VANTIX MARKETING <${FROM_EMAIL}>`,
      to: [data.correo_electronico],
      subject: subjectClient,
      html: htmlClient,
    }),
    resend.emails.send({
      from: `Comms Bot <${FROM_EMAIL}>`,
      to: [INTERNAL_EMAIL],
      subject: `[ LEAD ] ${data.asunto} - ${data.empresa_negocio}`,
      html: htmlInternal,
    })
  ]);
}