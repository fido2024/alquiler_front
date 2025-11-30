"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation"; // 👈 NUEVO
import { OfertaTrabajo } from "../interfaces/ProveedorPerfil.interface";

// 🖼 Assets locales
import electricistaFoco from "../assets/electricistaFoco.png";
import martilloAlbanil from "../assets/martilloAlbañil.png";
import plomeriaImg from "../assets/plomeria.png";
import regarJardineria from "../assets/regarJardineria.png";
import itemsCarpinteria from "../assets/itemsCarpinteria.png";

// id de oferta -> imagen
const OFERTA_IMAGES: Record<string, StaticImageData> = {
  electricidad: electricistaFoco,
  albanileria: martilloAlbanil,
  plomeria: plomeriaImg,
  jardineria: regarJardineria,
  carpinteria: itemsCarpinteria,
};

interface Props {
  oferta: OfertaTrabajo;
}

export default function OfertaCard({ oferta }: Props) {
  const imgSrc = OFERTA_IMAGES[oferta.id] ?? martilloAlbanil;

  // 👉 Router para ir a la nueva epic de “Mas información”
  const router = useRouter();

  const irAMasInformacion = () => {
    // 🔗 Nueva ruta con query param ofertaId
    router.push(
      `/epic_MasInformacion-VistaProveedor?ofertaId=${oferta.id}`
    );
  };

  return (
    // 👉 Altura fija para que NO cambie el tamaño al mover el carrusel
    <div
      className="
        w-full max-w-[260px]
        h-[320px]            /* altura fija */
        border-2 border-[#0C4FE9]
        rounded-[8px]
        bg-white
        flex flex-col items-center justify-between
        px-4 py-6
      "
    >
      {/* Contenedor de imagen con altura fija para centrar cualquier imagen */}
      <div className="h-[160px] flex items-center justify-center mb-2">
        <Image
          src={imgSrc}
          alt={oferta.titulo}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="text-center font-bold text-[15px] mb-4 px-2">
        {oferta.titulo}
      </h3>

      <button
        className="mt-auto px-5 py-2 rounded-[8px] bg-[#0C4FE9] text-white text-[14px] font-semibold"
        onClick={irAMasInformacion} // 👈 AHORA navega a la nueva epic
      >
        Mas información
      </button>
    </div>
  );
}
