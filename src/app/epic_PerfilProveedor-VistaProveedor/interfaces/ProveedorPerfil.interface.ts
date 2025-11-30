// 👉 Este archivo DEFINE cómo son los datos que vienen del backend

export interface ProveedorPerfil {
  id: string;
  nombreCompleto: string;
  categoriasSecundarias: string; // sólo este, sin categoriaPrincipal
  celular: string;
  correo: string;
}

// 🔹 Ofertas de trabajo: sólo imagen + título (sin descripción)
export interface OfertaTrabajo {
  id: string;   // lo usamos para decidir qué imagen mostrar
  titulo: string;
}

// 🔹 Promociones: título + descripción
export interface Promocion {
  id: string;
  titulo: string;
  //descripcionCorta: string;
}

// 🔹 Estructura completa que usa la página
export interface ProveedorPerfilData {
  proveedor: ProveedorPerfil;
  ofertas: OfertaTrabajo[];
  promociones: Promocion[];
}
