// ./src/app/epic_VisualizadorDeTrabajosAgendadosVistaCliente/services/api.ts

import { Job } from '../interfaces/types';
import { convertirAISO, normalizarEstado } from '../utils/helpers';

// +++ AÑADIDO +++
// Definimos la estructura de los datos "crudos" que vienen de la API
interface ApiTrabajoRaw {
  proveedor?: { id: string | number };
  cliente?: { id: string | number; nombre: string };
  fecha: string;
  horaInicio: string;
  horaFin: string;
  servicio: string;
  estado: string;
  cancelReason?: string;
  descripcion?: string;
}

/** HU 1.7 – Trabajos por PROVEEDOR */
export async function fetchTrabajosProveedor(proveedorId: string, estado?: string): Promise<Job[]> {
  const url = new URL(`http://localhost:5000/api/vengadores/trabajos/proveedor`);
  url.searchParams.set('proveedorId', proveedorId);
  if (estado) url.searchParams.set('estado', estado); // ← opcional

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Error al obtener trabajos del proveedor');
  
  // +++ CAMBIO AQUÍ +++
  // Tipamos 'data' como un array de la interfaz que creamos
  const data: ApiTrabajoRaw[] = await res.json();

  // 👇 Ahora TypeScript sabe lo que es 't' sin necesidad de 'any'
  return data.map((t) => ({ // <--- CAMBIO AQUÍ: Se quitó '(t: any)'
    id: `${t.proveedor?.id}-${t.cliente?.id}-${t.fecha}-${t.horaInicio}`,
    clientName: t.cliente?.nombre ?? '—', // ← CLIENTE
    service: t.servicio,
    startISO: convertirAISO(t.fecha, t.horaInicio),
    endISO: convertirAISO(t.fecha, t.horaFin),
    status: normalizarEstado(t.estado),
    cancelReason: t.cancelReason ?? '',
    description: t.descripcion ?? '',
  }));
}
