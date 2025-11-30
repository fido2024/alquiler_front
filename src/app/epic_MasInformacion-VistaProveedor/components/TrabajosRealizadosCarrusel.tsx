"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TrabajoRealizadoImagen } from "../interfaces/DetalleOferta.interface";

interface Props {
  imagenes: TrabajoRealizadoImagen[];
}

export default function TrabajosRealizadosCarrusel({ imagenes }: Props) {
  const [startIndex, setStartIndex] = useState(0);
  const total = imagenes.length;
  const visibles = 4;

  const avanzar = () => {
    if (!total) return;
    setStartIndex((prev) => (prev + 1) % total);
  };

  const retroceder = () => {
    if (!total) return;
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const getVisibles = () => {
    if (total <= visibles) return imagenes;
    const res: TrabajoRealizadoImagen[] = [];
    for (let i = 0; i < visibles; i++) {
      res.push(imagenes[(startIndex + i) % total]);
    }
    return res;
  };

  return (
    <section className="mt-8 w-full">
      <h2 className="text-[20px] font-bold text-[#0C4FE9] mb-4">
        Trabajos Realizados
      </h2>

      <div className="flex items-center gap-3">
        <button
          className="w-7 h-7 rounded-full border border-[#000] flex items-center justify-center text-[#000] shrink-0"
          onClick={retroceder}
        >
          ‹
        </button>

        <div className="flex-1 flex gap-4 flex-wrap justify-center md:justify-between">
          {getVisibles().map((img) => (
            <div
              key={img.id}
              className="w-[200px] h-[180px] border border-[#0C4FE9] bg-white overflow-hidden flex items-center justify-center"
            >
              <Image
                src={img.url}
                alt={img.alt}
                width={260}
                height={230}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <button
          className="w-7 h-7 rounded-full border border-[#000] flex items-center justify-center text-[#000] shrink-0"
          onClick={avanzar}
        >
          ›
        </button>
      </div>
    </section>
  );
}
