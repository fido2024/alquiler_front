import { Suspense } from "react";
import MasInformacionPageClient from "./MasInformacionPage.client";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <MasInformacionPageClient />
    </Suspense>
  );
}
