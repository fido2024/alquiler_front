"use client";

import React from "react";
import { ProveedorPerfil } from "../interfaces/ProveedorPerfil.interface";

// 🎨 Paleta de colores base (igual que en tus otras vistas)
const C = {
  blue: "#0C4FE9",
  blueDark: "#1140BC",
  white: "#FFFFFF",
};

interface Props {
  proveedor: ProveedorPerfil;
}

export default function ProveedorHeader({ proveedor }: Props) {
  return (
    <header className="w-full flex flex-col gap-4">
      {/* Título principal */}
      <h1 className="text-[24px] sm:text-[26px] font-extrabold text-[#0C4FE9]">
        PERFIL DE PROVEEDOR
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start">
        {/* 🔵 Avatar del proveedor (mock) 
            - Aquí podrías reemplazar por <Image /> si tienes la foto real */}
        <div className="w-[80px] h-[80px] rounded-full bg-blue-200 flex items-center justify-center text-[32px] font-semibold text-[#0C4FE9]">
          {/* Iniciales del nombre */}
          {proveedor.nombreCompleto
            .split(" ")
            .map((p) => p[0])
            .join("")
            .slice(0, 2)}
        </div>

        {/* 📄 Datos del proveedor */}
        <div className="flex-1 text-[14px] sm:text-[16px] leading-[22px]">
          {/* Cada línea simula lo del mockup */}
          <p>
            <span className="font-bold">Nombre: </span>
            {proveedor.nombreCompleto}
          </p>
          <p>
            <span className="font-bold">Categorías: </span>
            {proveedor.categoriasSecundarias}
          </p>
          <p>
            <span className="font-bold">Celular: </span>
            {proveedor.celular}
          </p>
          <p>
            <span className="font-bold">Correo: </span>
            {proveedor.correo}
          </p>
        </div>
      </div>

      {/* 🔘 Botones principales de acción */}
      <div
        className="
          w-full
          flex flex-col sm:flex-row
          items-center
          justify-center
          gap-6 sm:gap-16   /* 👈 MÁS separación entre botones */
          mt-4
        "
      >
        <button
          className="px-6 py-3 rounded-[8px] bg-[#0C4FE9] text-white font-semibold text-[15px]"
          onClick={() => console.log('Ver mis calificaciones')}
        >
          Ver mis calificaciones
        </button>

        <button
          className="px-6 py-3 rounded-[8px] bg-[#0C4FE9] text-white font-semibold text-[15px]"
          onClick={() => console.log('Agregar disponibilidad de horarios')}
        >
          Agregar disponibilidad de horarios
        </button>

        <button
          className="px-6 py-3 rounded-[8px] bg-[#0C4FE9] text-white font-semibold text-[15px]"
          onClick={() => console.log('Ir a Mis trabajos')}
        >
          Mis trabajos
        </button>
      </div>

    </header>
  );
}
