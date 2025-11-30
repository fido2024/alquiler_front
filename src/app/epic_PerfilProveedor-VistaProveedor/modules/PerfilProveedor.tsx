// modules/PerfilProveedor.tsx
"use client";

import React, { useState } from "react";
import {
  ProveedorPerfilData,
  OfertaTrabajo,
  Promocion,
} from "../interfaces/ProveedorPerfil.interface";
import ProveedorHeader from "../components/ProveedorHeader";
import OfertaCard from "../components/OfertaCard";
import PromocionCard from "../components/PromocionCard";

interface Props {
  data: ProveedorPerfilData;
}

export default function PerfilProveedor({ data }: Props) {
  // 👉 Estados para los índices de los carruseles
  const [indiceOferta, setIndiceOferta] = useState(0);
  const [indicePromo, setIndicePromo] = useState(0);

  // ----- CARRUSEL OFERTAS (5 elementos, se ven 3) -----
  const moverOferta = (dir: "prev" | "next") => {
    setIndiceOferta((prev) => {
      if (dir === "prev") {
        return prev === 0 ? data.ofertas.length - 1 : prev - 1;
      }
      return prev === data.ofertas.length - 1 ? 0 : prev + 1;
    });
  };

  const getOfertasVisibles = (): OfertaTrabajo[] => {
    if (data.ofertas.length <= 3) return data.ofertas;
    const ofertas: OfertaTrabajo[] = [];
    for (let i = 0; i < 3; i++) {
      const idx = (indiceOferta + i) % data.ofertas.length;
      ofertas.push(data.ofertas[idx]);
    }
    return ofertas;
  };

  // ----- CARRUSEL PROMOCIONES (5 elementos, se ven 3) -----
  const moverPromo = (dir: "prev" | "next") => {
    setIndicePromo((prev) => {
      if (dir === "prev") {
        return prev === 0 ? data.promociones.length - 1 : prev - 1;
      }
      return prev === data.promociones.length - 1 ? 0 : prev + 1;
    });
  };

  const getPromosVisibles = (): Promocion[] => {
    if (data.promociones.length <= 3) return data.promociones;
    const promos: Promocion[] = [];
    for (let i = 0; i < 3; i++) {
      const idx = (indicePromo + i) % data.promociones.length;
      promos.push(data.promociones[idx]);
    }
    return promos;
  };

  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-6 bg-white">
      {/* 🧍‍♂️ Sección superior: datos del proveedor + botones */}
      <ProveedorHeader proveedor={data.proveedor} />

      {/* ----- OFERTAS DE TRABAJO ----- */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-bold text-[#0C4FE9]">
            Ofertas de trabajo
          </h2>

          <button
            className="flex items-center gap-2 px-3 py-1 rounded-[6px] border border-[#0C4FE9] text-[#0C4FE9] text-sm font-semibold"
            onClick={() => console.log("Editar ofertas de trabajo")}
          >
            <span className="text-[16px]">✏️</span>
            Editar
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Flecha izquierda */}
          <button
            className="w-7 h-7 rounded-full border border-[#0C4FE9] flex items-center justify-center text-[#0C4FE9]"
            onClick={() => moverOferta("prev")}
          >
            ‹
          </button>

          {/* Tarjetas de ofertas (3 visibles) */}
          <div className="flex-1 flex justify-center gap-4 flex-wrap">
            {getOfertasVisibles().map((oferta) => (
              <OfertaCard key={oferta.id} oferta={oferta} />
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            className="w-7 h-7 rounded-full border border-[#0C4FE9] flex items-center justify-center text-[#0C4FE9]"
            onClick={() => moverOferta("next")}
          >
            ›
          </button>
        </div>
      </section>

      {/* ----- PROMOCIONES DISPONIBLES ----- */}
      <section className="mt-10">
        <h2 className="text-[20px] font-bold text-[#0C4FE9] mb-4">
          Promociones disponibles
        </h2>

        <div className="flex items-center gap-3">
          {/* Flecha izquierda */}
          <button
            className="w-7 h-7 rounded-full border border-[#0C4FE9] flex items-center justify-center text-[#0C4FE9]"
            onClick={() => moverPromo("prev")}
          >
            ‹
          </button>

          {/* Tarjetas de promociones (3 visibles) */}
          <div className="flex-1 flex justify-center gap-4 flex-wrap">
            {getPromosVisibles().map((promo) => (
              <PromocionCard key={promo.id} promo={promo} />
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            className="w-7 h-7 rounded-full border border-[#0C4FE9] flex items-center justify-center text-[#0C4FE9]"
            onClick={() => moverPromo("next")}
          >
            ›
          </button>
        </div>
      </section>
    </main>
  );
}
