import { Suspense } from "react";
import PerfilProveedorPageClient from "./PerfilProveedorPage.client";

// 👉 Forzamos modo dinámico para que lea los query params (id) correctamente
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <PerfilProveedorPageClient />
    </Suspense>
  );
}
