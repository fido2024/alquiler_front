"use client";

import React from "react";
import { PromocionDetalle } from "../interfaces/DetalleOferta.interface";

interface Props {
  promociones: PromocionDetalle[];
}

export default function PromocionesDetalleLista({ promociones }: Props) {
  return (
    <section className="mt-10 w-full">
      <h2 className="text-[20px] font-bold text-[#0C4FE9] mb-4">
        Promociones:
      </h2>

      <div className="flex flex-col gap-3">
        {promociones.map((promo) => (
          <div
            key={promo.id}
            className="w-full border border-[#000] rounded-[4px] px-4 py-3 bg-white text-[14px] font-semibold"
          >
            {promo.titulo}
          </div>
        ))}
      </div>
    </section>
  );
}
