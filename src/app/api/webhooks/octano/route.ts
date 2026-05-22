import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Lógica futura para procesar notificaciones de OctanoPayments (Ej: Devoluciones, contracargos)
    console.log("[OCTANO WEBHOOK] Notificación recibida:", body);

    // Siempre devolver un 200 OK para que Octano no reintente enviar la notificación
    return NextResponse.json({ success: true, message: "Webhook procesado por Vantix" }, { status: 200 });
  } catch (error) {
    console.error("[CRÍTICO] Error en webhook de Octano:", error);
    return NextResponse.json({ success: false, message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Método GET no permitido en este endpoint de Octano" }, { status: 405 });
}