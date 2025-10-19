import { Job } from '../interfaces/types';
// Importamos 'JobStatus' para usarlo en nuestros mocks
import { JobStatus } from '../interfaces/types';
// Las funciones 'convertirAISO' y 'normalizarEstado' no las necesitamos aquí
// porque nuestros datos falsos ya tendrán el formato correcto (ISO y JobStatus).
// import { convertirAISO, normalizarEstado } from '../utils/helpers';

// --- INICIO DE DATOS FALSOS (MOCK) ---
// 1. Creamos una lista de trabajos falsos.
// Usamos el tipo 'Job' directamente. Esto también arregla
// la advertencia de 'Job is defined but never used'.
const MOCK_JOBS: Job[] = [
  {
    id: 'mock-1',
    clientName: 'Fidel Vasquez', // ¡Un saludo!
    service: 'Plomería',
    startISO: '2025-10-20T09:00:00.000Z',
    endISO: '2025-10-20T11:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Instalación de grifo en la cocina.',
  },
  {
    id: 'mock-2',
    clientName: 'Ana García',
    service: 'Electricidad',
    startISO: '2025-10-21T14:00:00.000Z',
    endISO: '2025-10-21T15:30:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Revisión de tablero eléctrico.',
  },
  {
    id: 'mock-3',
    clientName: 'Carlos Soliz',
    service: 'Pintura',
    startISO: '2025-10-19T08:00:00.000Z',
    endISO: '2025-10-19T17:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Pintar la habitación principal.',
  },
  {
    id: 'mock-4',
    clientName: 'Lucía Méndez',
    service: 'Plomería',
    startISO: '2025-10-18T10:00:00.000Z',
    endISO: '2025-10-18T11:00:00.000Z',
    status: 'pending',
    cancelReason: 'Cliente pospuso la cita.',
    description: 'Reparación de fuga en el baño.',
  },
  {
    id: 'mock-5',
    clientName: 'Rodolfo Argote',
    service: 'Desarrollo de Software',
    startISO: '2025-10-22T10:00:00.000Z',
    endISO: '2025-10-22T18:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Revisión final del proyecto.',
  }
];
// --- FIN DE DATOS FALSOS (MOCK) ---


/** HU 1.7 – Trabajos por PROVEEDOR (VERSIÓN MOCKEADA PARA QA) */
export async function fetchTrabajosProveedor(proveedorId: string, estado?: string): Promise<Job[]> {
  
  // Un mensaje en la consola para que sepas que estás usando datos falsos
  console.log(
    `%c ⚡ MOCK API ⚡: Devolviendo datos falsos para proveedor: ${proveedorId}`, 
    'color: #FFD700; background: #333; font-weight: bold; padding: 4px 8px; border-radius: 4px;'
  );

  // 2. Simulamos un retraso de red (1 segundo)
  // Esto es para que puedas ver tu pantalla de "Cargando..."
  return new Promise((resolve) => {
    setTimeout(() => {
      
      // 3. Simulamos el filtro por 'estado' que tu backend haría
      const trabajosFiltrados = (estado && estado !== 'all' && estado !== undefined)
        ? MOCK_JOBS.filter(job => job.status === estado)
        : MOCK_JOBS;
        
      resolve(trabajosFiltrados);
      
    }, 1000); // 1000 milisegundos = 1 segundo
  });
}


// ---------------------------------------------------------------
// AQUÍ ABAJO ESTÁ TU CÓDIGO ORIGINAL (EL QUE DABA ERROR 'any')
// Lo guardamos comentado para que lo uses cuando tu backend esté listo.
// ---------------------------------------------------------------
/*
import { Job } from '../interfaces/types';
import { convertirAISO, normalizarEstado } from '../utils/helpers';

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

export async function fetchTrabajosProveedor(proveedorId: string, estado?: string): Promise<Job[]> {
  const url = new URL(`http://localhost:5000/api/vengadores/trabajos/proveedor`);
  url.searchParams.set('proveedorId', proveedorId);
  if (estado) url.searchParams.set('estado', estado); // ← opcional

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Error al obtener trabajos del proveedor');
  
  // EL ERROR 'any' ESTABA AQUÍ
  const data: ApiTrabajoRaw[] = await res.json();

  // 👇 En Vista Proveedor mostramos al CLIENTE en el “card header”
  return data.map((t: ApiTrabajoRaw) => ({ // <-- Se corrige 'any' por 'ApiTrabajoRaw'
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
*/