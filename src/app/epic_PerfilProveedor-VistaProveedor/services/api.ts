import { ProveedorPerfilData } from "../interfaces/ProveedorPerfil.interface";

// ⚠️ Cuando tengas el endpoint real, cambia esta constante
const API_URL = "http://localhost:5000/api/los_vengadores/proveedores";

// 👉 Esta función devuelve el perfil completo del proveedor
//    Por ahora usa MOCKS para que el frontend funcione sin backend.
export async function fetchPerfilProveedor(
  proveedorId: string
): Promise<ProveedorPerfilData> {

  // ============================================================
  //  🔁 EJEMPLO DE LLAMADA REAL (LO DEJAMOS COMENTADO)
  // ============================================================
  /*
  const res = await fetch(`${API_URL}/${proveedorId}/perfil-completo`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al obtener el perfil del proveedor");
  }

  const json = await res.json();
  return json as ProveedorPerfilData;
  */
  // ============================================================


  // ============================================================
  //  ✅ MOCKS TEMPORALES PARA PROBAR EL FRONTEND
  // ============================================================
  return {
    proveedor: {
      id: proveedorId,
      nombreCompleto: "Juan Perez",
      categoriasSecundarias: "Electricista / Plomero",
      celular: "74538292",
      correo: "PerezJuana@gmail.com",
    },

    ofertas: [
      { id: "electricidad", titulo: "Trabajos de Electricista" },
      { id: "albanileria", titulo: "Trabajos de Albañilería" },
      { id: "plomeria", titulo: "Trabajos de Plomería" },
      { id: "jardineria", titulo: "Trabajos de Jardinería" },
      { id: "carpinteria", titulo: "Trabajos de Carpintería" },
    ],

    promociones: [
      {
        id: "promo-electricidad",
        titulo: "50% de Descuento en Trabajo de Electricista",
       // descripcionCorta: "Aplica para diagnósticos y mantenimientos.",
      },
      {
        id: "promo-albanileria",
        titulo: "Cotización en obras grandes en Trabajos de Albañilería",
       // descripcionCorta: "Consulta gratuita para proyectos grandes.",
      },
      {
        id: "promo-plomeria",
        titulo: "Descuento en instalación de grifería",
       // descripcionCorta: "Promoción disponible por tiempo limitado.",
      },
      {
        id: "promo-jardineria",
        titulo: "Paquete de mantenimiento de jardín",
       // descripcionCorta: "Incluye poda, limpieza y riego.",
      },
      {
        id: "promo-carpinteria",
        titulo: "Descuento en muebles a medida",
        //descripcionCorta: "Ideal para proyectos personalizados.",
      },
    ],
  };
}
