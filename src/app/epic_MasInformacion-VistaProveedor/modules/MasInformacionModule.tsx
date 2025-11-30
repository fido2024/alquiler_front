"use client";

import React from "react";
import { DetalleOfertaTrabajo } from "../interfaces/DetalleOferta.interface";
import OfertaTrabajoHeader from "../components/OfertaTrabajoHeader";
import TrabajosRealizadosCarrusel from "../components/TrabajosRealizadosCarrusel";
import PromocionesDetalleLista from "../components/PromocionesDetalleLista";

interface Props {
  detalle: DetalleOfertaTrabajo;
}

export default function MasInformacionModule({ detalle }: Props) {
  const volver = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-6 bg-white">
      <OfertaTrabajoHeader detalle={detalle} />
      <TrabajosRealizadosCarrusel imagenes={detalle.trabajosRealizados} />
      <PromocionesDetalleLista promociones={detalle.promociones} />

      <div className="mt-10">
        <button
          className="px-6 py-2 rounded-[8px] bg-[#0C4FE9] text-white font-semibold text-[15px]"
          onClick={volver}
        >
          Atrás
        </button>
      </div>
    </main>
  );
}
