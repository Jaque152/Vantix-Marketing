import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const translatePlanTitle = (spanishTitle: string, isEs: boolean) => {
  if (isEs) return spanishTitle;

  const translations: Record<string, string> = {
    "Fotografía Profesional": "Professional Photography",
    "Gestión De E-Commerce": "E-Commerce Management",
    "Desarrollo Web Y Landing Pages": "Web Development & Landing Pages",
    "Análisis De Métricas Y Reportes": "Metrics Analysis & Reporting",
    "Community Management": "Community Management",
    "Publicidad En Redes Sociales": "Social Media Advertising",
    "Campañas SEM (Google Ads)": "SEM Campaigns (Google Ads)",
    "Marketing De Influencers": "Influencer Marketing",
    "SEO (Posicionamiento En Buscadores)": "SEO (Search Engine Optimization)",
    "Email Marketing": "Email Marketing",
    "Redacción Publicitaria (Copywriting)": "Copywriting",
    "Producción Audiovisual": "Audiovisual Production",
    "Producción De Materiales Impresos": "Print Material Production",
    "Diseño De Identidad Visual": "Visual Identity Design",
    "Creación De Conceptos Creativos": "Creative Concept Creation",
    "Planificación De Medios Integrada": "Integrated Media Planning",
    "Análisis De Competencia Y Mercado": "Competitor & Market Analysis",
    "Impulso Estratégico": "Strategic Boost",
    "Plan personalizado": "Custom Plan",
  };

  return translations[spanishTitle] || spanishTitle;
};

export const translatePlanDescription = (
  spanishDescription: string,
  isEs: boolean
) => {
  if (isEs) return spanishDescription;

  const translations: Record<string, string> = {
    "Realizamos sesiones fotográficas de productos y contenido corporativo para mejorar la imagen de tu marca.":
      "We create professional product and corporate photography sessions to strengthen your brand image.",

    "Administramos y optimizamos tu tienda en línea para mejorar la experiencia del usuario y aumentar las ventas.":
      "We manage and optimize your online store to improve user experience and increase sales.",

    "Creamos sitios web y páginas de aterrizaje optimizadas para convertir visitantes en clientes.":
      "We create websites and landing pages optimized to turn visitors into customers.",

    "Realizamos seguimiento y análisis de tus campañas para optimizar resultados y tomar decisiones informadas.":
      "We track and analyze your campaigns to optimize results and support informed decision-making.",

    "Administramos tus redes sociales, creando contenido relevante y gestionando la interacción con tu comunidad.":
      "We manage your social media channels by creating relevant content and handling engagement with your community.",

    "Creamos y gestionamos anuncios en plataformas como Facebook, Instagram y TikTok para aumentar tu alcance y engagement.":
      "We create and manage ads on platforms like Facebook, Instagram, and TikTok to increase reach and engagement.",

    "Gestionamos campañas de anuncios en Google para atraer tráfico cualificado y generar conversiones inmediatas.":
      "We manage Google Ads campaigns to attract qualified traffic and generate immediate conversions.",

    "Gestionamos campañas con influencers que amplifican tu mensaje y llegan a audiencias específicas de manera auténtica.":
      "We manage influencer campaigns that amplify your message and reach specific audiences authentically.",

    "Optimizamos tu sitio web para mejorar su visibilidad en los motores de búsqueda, atrayendo tráfico orgánico cualificado.":
      "We optimize your website to improve search engine visibility and attract qualified organic traffic.",

    "Diseñamos y gestionamos campañas de correo electrónico que fidelizan a tus clientes y aumentan tus conversiones.":
      "We design and manage email campaigns that build customer loyalty and increase conversions.",

    "Elaboramos textos persuasivos que comunican tu mensaje de forma clara y atractiva, generando una respuesta del público.":
      "We create persuasive copy that communicates your message clearly and attractively, encouraging audience response.",

    "Creamos videos y spots publicitarios que capturan la atención y transmiten tu mensaje de manera impactante.":
      "We create videos and advertising spots that capture attention and deliver your message with impact.",

    "Diseñamos y producimos flyers, carteles y empaques que comunican tu mensaje de forma efectiva y profesional.":
      "We design and produce flyers, posters, and packaging that communicate your message effectively and professionally.",

    "Creamos logotipos, paletas de colores y tipografías que representan tu marca de manera coherente y atractiva.":
      "We create logos, color palettes, and typography systems that represent your brand consistently and attractively.",

    "Desarrollamos ideas innovadoras que reflejan la esencia de tu marca, creando una conexión emocional con tu audiencia.":
      "We develop innovative ideas that reflect your brand essence and create an emotional connection with your audience.",

    "Elaboramos planes de medios que combinan canales tradicionales y digitales, optimizando tu inversión publicitaria para alcanzar a tu público objetivo.":
      "We create media plans that combine traditional and digital channels, optimizing your advertising investment to reach your target audience.",

    "Realizamos estudios profundos de tu industria y competidores para identificar oportunidades y amenazas.":
      "We conduct in-depth studies of your industry and competitors to identify opportunities and threats.",

    "Diseñamos estrategias personalizadas que alinean tus objetivos comerciales con las tendencias del mercado digital.":
      "We design personalized strategies that align your business goals with digital market trends.",
  };

  return translations[spanishDescription] || spanishDescription;
};