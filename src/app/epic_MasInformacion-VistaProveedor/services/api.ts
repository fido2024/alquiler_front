// services/api.ts
import { DetalleOfertaTrabajo } from "../interfaces/DetalleOferta.interface";

// ⚠️ Cuando tengas backend real, aquí va tu endpoint:
// const API_URL = "http://localhost:5000/api/los_vengadores/ofertas";

/**
 * Helper simple para generar 8 imágenes de "trabajos realizados".
 * Estas rutas son MOCK y deben ser reemplazadas por URLs reales
 * o imports estáticos cuando el backend/almacenamiento esté listo.
 */
function generarTrabajosMock(prefijoAlt: string) {
  return [
    { id: "1", url: "/mas-info/trabajo1.png", alt: `${prefijoAlt} 1` },
    { id: "2", url: "/mas-info/trabajo2.png", alt: `${prefijoAlt} 2` },
    { id: "3", url: "/mas-info/trabajo3.png", alt: `${prefijoAlt} 3` },
    { id: "4", url: "/mas-info/trabajo4.png", alt: `${prefijoAlt} 4` },
    { id: "5", url: "/mas-info/trabajo5.png", alt: `${prefijoAlt} 5` },
    { id: "6", url: "/mas-info/trabajo6.png", alt: `${prefijoAlt} 6` },
    { id: "7", url: "/mas-info/trabajo7.png", alt: `${prefijoAlt} 7` },
    { id: "8", url: "/mas-info/trabajo8.png", alt: `${prefijoAlt} 8` },
  ];
}

/**
 * Promos base: mismos títulos que usas en el epic de perfil de proveedor.
 * El backend, más adelante, puede devolver esta misma estructura.
 */
const PROMOS_BASE = {
  "promo-electricidad": {
    id: "promo-electricidad",
    titulo: "50% de Descuento en Trabajo de Electricista",
  },
  "promo-albanileria": {
    id: "promo-albanileria",
    titulo: "Cotización en obras grandes en Trabajos de Albañilería",
  },
  "promo-plomeria": {
    id: "promo-plomeria",
    titulo: "Descuento en instalación de grifería",
  },
  "promo-jardineria": {
    id: "promo-jardineria",
    titulo: "Paquete de mantenimiento de jardín",
  },
  "promo-carpinteria": {
    id: "promo-carpinteria",
    titulo: "Descuento en muebles a medida",
  },
} as const;

/**
 * MOCK principal: detalle por cada oferta disponible en el frontend.
 * Clave = ofertaId (lo que se manda en la URL: ?ofertaId=albanileria, etc.)
 */
const DETALLES_POR_OFERTA: Record<string, DetalleOfertaTrabajo> = {
  electricidad: {
    ofertaId: "electricidad",
    iconoKey: "electricidad",
    titulo: "Trabajos de electricista.",
    descripcion:
      "Se realizan instalaciones y mantenimiento de sistemas eléctricos en viviendas y locales.\n" +
      "Incluye cableado, tomacorrientes, iluminación, tableros eléctricos y revisión general.\n" +
      "Se prioriza la seguridad y el cumplimiento de normas eléctricas vigentes.",
    trabajosRealizados: generarTrabajosMock("Trabajo de electricidad"),
    promociones: [
      PROMOS_BASE["promo-electricidad"],
      PROMOS_BASE["promo-plomeria"], // ejemplo de promo complementaria
    ],
  },

  albanileria: {
    ofertaId: "albanileria",
    iconoKey: "albanileria",
    titulo: "Trabajos de albañilería.",
    descripcion:
      "Se realizan construcción de todo tipo de viviendas.\n" +
      "Obra gruesa: zapatas, columnas, vigas, losas.\n" +
      "Obra fina: construcción de muros, revoques de yeso, revoques de cerámica, molduras, zócalos, etc.",
    trabajosRealizados: generarTrabajosMock("Trabajo de albañilería"),
    promociones: [
      PROMOS_BASE["promo-electricidad"],
      PROMOS_BASE["promo-albanileria"],
    ],
  },

  plomeria: {
    ofertaId: "plomeria",
    iconoKey: "plomeria",
    titulo: "Trabajos de plomería.",
    descripcion:
      "Instalación y reparación de tuberías de agua fría y caliente, desagües y grifería.\n" +
      "Solución de filtraciones, cambio de sanitarios y mantenimiento de instalaciones existentes.\n" +
      "Atención a emergencias menores según disponibilidad del proveedor.",
    trabajosRealizados: generarTrabajosMock("Trabajo de plomería"),
    promociones: [
      PROMOS_BASE["promo-plomeria"],
      PROMOS_BASE["promo-electricidad"],
    ],
  },

  jardineria: {
    ofertaId: "jardineria",
    iconoKey: "jardineria",
    titulo: "Trabajos de jardinería.",
    descripcion:
      "Mantenimiento de jardines, áreas verdes y pequeños paisajismos.\n" +
      "Incluye corte de césped, poda de arbustos, limpieza de canteros y riego programado.\n" +
      "Se pueden coordinar visitas periódicas según requerimiento del cliente.",
    trabajosRealizados: generarTrabajosMock("Trabajo de jardinería"),
    promociones: [
      PROMOS_BASE["promo-jardineria"],
      PROMOS_BASE["promo-electricidad"],
    ],
  },

  carpinteria: {
    ofertaId: "carpinteria",
    iconoKey: "carpinteria",
    titulo: "Trabajos de carpintería.",
    descripcion:
      "Diseño, fabricación y reparación de muebles a medida y estructuras de madera.\n" +
      "Incluye closets, puertas, muebles de cocina, estanterías y otros proyectos personalizados.\n" +
      "Se trabaja con acabados a elección del cliente.",
    trabajosRealizados: generarTrabajosMock("Trabajo de carpintería"),
    promociones: [
      PROMOS_BASE["promo-carpinteria"],
      PROMOS_BASE["promo-albanileria"],
    ],
  },
};

/**
 * Función que usa el frontend para obtener el detalle de la oferta.
 * Actualmente devuelve MOCKS, pero está preparada para conectarse a backend.
 */
export async function fetchDetalleOfertaTrabajo(
  ofertaId: string
): Promise<DetalleOfertaTrabajo> {
  // ============================
  // 🚀 Implementación con BACKEND (futuro)
  // ============================
  /*
  const res = await fetch(`${API_URL}/${ofertaId}/detalle`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener detalle de la oferta");
  }

  return (await res.json()) as DetalleOfertaTrabajo;
  */

  // ============================
  // ✅ MOCK ACTUAL (sin backend)
  // ============================
  const detalle = DETALLES_POR_OFERTA[ofertaId];

  if (detalle) {
    return detalle;
  }

  // Fallback genérico si llega una ofertaId que todavía no está mapeada
  return {
    ofertaId,
    iconoKey: ofertaId,
    titulo: "Oferta de trabajo",
    descripcion: "Descripción aún no disponible para esta oferta.",
    trabajosRealizados: [],
    promociones: [],
  };
}
