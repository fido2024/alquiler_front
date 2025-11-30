"use client";

// 👉 Este componente se encarga de:
//    - Leer el id del proveedor desde la URL (?id=123)
//    - Llamar al servicio del backend (o mock)
//    - Mostrar la pantalla de carga
//    - Renderizar el módulo principal PerfilProveedor

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProveedorPerfilData } from "./interfaces/ProveedorPerfil.interface";
import { fetchPerfilProveedor } from "./services/api";
import PerfilProveedor from "./modules/PerfilProveedor";

export default function PerfilProveedorPageClient() {
  const sp = useSearchParams();
  const proveedorId = sp.get("id") ?? "proveedor-demo"; // id mock en caso de que no llegue

  const [data, setData] = useState<ProveedorPerfilData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔁 Aquí llamamos al servicio que eventualmente se conectará al backend
    fetchPerfilProveedor(proveedorId)
      .then((perfil) => {
        setData(perfil);
      })
      .catch((err) => {
        console.error("Error cargando perfil de proveedor:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [proveedorId]);

  if (loading || !data) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <p className="text-[#0C4FE9] font-bold">
          Cargando perfil del proveedor...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white flex justify-center">
      {/* 👉 El módulo principal recibe TODOS los datos ya listos */}
      <PerfilProveedor data={data} />
    </div>
  );
}
