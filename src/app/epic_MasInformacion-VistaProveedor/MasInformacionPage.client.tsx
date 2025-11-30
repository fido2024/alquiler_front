"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DetalleOfertaTrabajo } from "./interfaces/DetalleOferta.interface";
import { fetchDetalleOfertaTrabajo } from "./services/api";
import MasInformacionModule from "./modules/MasInformacionModule";

export default function MasInformacionPageClient() {
  const sp = useSearchParams();
  const ofertaId = sp.get("ofertaId") ?? "albanileria";

  const [detalle, setDetalle] = useState<DetalleOfertaTrabajo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetalleOfertaTrabajo(ofertaId)
      .then((data) => setDetalle(data))
      .catch((err) =>
        console.error("Error cargando detalle de la oferta:", err)
      )
      .finally(() => setLoading(false));
  }, [ofertaId]);

  if (loading || !detalle) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <p className="text-[#0C4FE9] font-bold">
          Cargando detalle de la oferta...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white flex justify-center">
      <MasInformacionModule detalle={detalle} />
    </div>
  );
}
