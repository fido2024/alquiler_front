// interfaces/DetalleOferta.interface.ts

// 👉 Imagen de un trabajo realizado
export interface TrabajoRealizadoImagen {
  id: string;
  url: string; // el backend luego enviará URLs reales
  alt: string;
}

// 👉 Promoción simple que se muestra en la parte de abajo
export interface PromocionDetalle {
  id: string;
  titulo: string;
}

// 👉 Detalle completo de una oferta de trabajo
export interface DetalleOfertaTrabajo {
  ofertaId: string;
  titulo: string;
  descripcion: string;
  iconoKey: string; // p.ej. "albanileria" para elegir imagen
  trabajosRealizados: TrabajoRealizadoImagen[];
  promociones: PromocionDetalle[];
}
