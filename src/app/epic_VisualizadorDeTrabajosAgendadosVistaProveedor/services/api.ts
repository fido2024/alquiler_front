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
  },
  // --- 10 NUEVOS TRABAJOS ---
  {
    id: 'mock-6',
    clientName: 'Mario Fernandez',
    service: 'Albañilería',
    startISO: '2025-10-23T08:00:00.000Z',
    endISO: '2025-10-23T16:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Levantar pared en patio trasero.',
  },
  {
    id: 'mock-7',
    clientName: 'Sofia Rojas',
    service: 'Jardinería',
    startISO: '2025-10-23T11:00:00.000Z',
    endISO: '2025-10-23T13:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Mantenimiento mensual de jardín.',
  },
  {
    id: 'mock-8',
    clientName: 'David Luna',
    service: 'Cerrajería',
    startISO: '2025-10-24T10:30:00.000Z',
    endISO: '2025-10-24T11:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Cambio de chapa puerta principal.',
  },
  {
    id: 'mock-9',
    clientName: 'Valeria Torres',
    service: 'Limpieza',
    startISO: '2025-10-24T15:00:00.000Z',
    endISO: '2025-10-24T18:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Limpieza profunda de departamento.',
  },
  {
    id: 'mock-10',
    clientName: 'Jorge Campos',
    service: 'Gasfitería',
    startISO: '2025-10-25T09:00:00.000Z',
    endISO: '2025-10-25T11:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Instalación de calefón.',
  },
  {
    id: 'mock-11',
    clientName: 'Clara Montes',
    service: 'Mudanza',
    startISO: '2025-10-26T08:00:00.000Z',
    endISO: '2025-10-26T14:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Servicio de mudanza completo.',
  },
  {
    id: 'mock-12',
    clientName: 'Daniel Acosta',
    service: 'Electricidad',
    startISO: '2025-10-27T16:00:00.000Z',
    endISO: '2025-10-27T17:30:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Instalación de 3 lámparas.',
  },
  {
    id: 'mock-13',
    clientName: 'Patricia Guzman',
    service: 'Pintura',
    startISO: '2025-10-28T09:00:00.000Z',
    endISO: '2025-10-28T13:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Pintar 2 habitaciones.',
  },
  {
    id: 'mock-14',
    clientName: 'Luis Vera',
    service: 'Albañilería',
    startISO: '2025-10-29T10:00:00.000Z',
    endISO: '2025-10-29T12:00:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Reparación de revoque.',
  },
  {
    id: 'mock-15',
    clientName: 'Andrea Mejia',
    service: 'Cerrajería',
    startISO: '2025-10-30T14:00:00.000Z',
    endISO: '2025-10-30T14:30:00.000Z',
    status: 'pending',
    cancelReason: '',
    description: 'Apertura de puerta (llaves olvidadas).',
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