"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation"; // 👈 NUEVO
import { Promocion } from "../interfaces/ProveedorPerfil.interface";

import electricistaFoco from "../assets/electricistaFoco.png";
import martilloAlbanil from "../assets/martilloAlbañil.png";
import plomeriaImg from "../assets/plomeria.png";
import regarJardineria from "../assets/regarJardineria.png";
import itemsCarpinteria from "../assets/itemsCarpinteria.png";

// id de promo → imagen
const PROMO_IMAGES: Record<string, StaticImageData> = {
  "promo-electricidad": electricistaFoco,
  "promo-albanileria": martilloAlbanil,
  "promo-plomeria": plomeriaImg,
  "promo-jardineria": regarJardineria,
  "promo-carpinteria": itemsCarpinteria,
};

// 🔗 Mapa: promo → oferta relacionada
const PROMO_TO_OFERTA: Record<string, string> = {
  "promo-electricidad": "electricidad",
  "promo-albanileria": "albanileria",
  "promo-plomeria": "plomeria",
  "promo-jardineria": "jardineria",
  "promo-carpinteria": "carpinteria",
};

interface Props {
  promo: Promocion;
}

export default function PromocionCard({ promo }: Props) {
  const imgSrc = PROMO_IMAGES[promo.id] ?? electricistaFoco;

  const router = useRouter();

  const irAMasInformacion = () => {
    const ofertaId = PROMO_TO_OFERTA[promo.id] ?? "electricidad";
    router.push(
      `/epic_MasInformacion-VistaProveedor?ofertaId=${ofertaId}`
    );
  };

  return (
    <div
      className="
        relative
        w-[260px]
        h-[230px]
        border border-[#0C4FE9]
        rounded-[8px]
        bg-white
        overflow-hidden
        flex flex-col items-center justify-between
        px-6 py-5
      "
    >
      {/* 📦 Zona del TEXTO con la imagen justo detrás */}
      <div className="relative w-full flex-1 flex items-center justify-center">
        {/* 🖼 Imagen detrás del texto (centrada respecto al texto, no al card completo) */}
        <Image
          src={imgSrc}
          alt={promo.titulo}
          className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[140px]    /* 👈 tamaño de la imagen */
            h-[140px]
            object-contain
            opacity-40   /* 👈 transparencia */
            pointer-events-none
            select-none
          "
        />

        {/* TEXTO encima de la imagen */}
        <h3
          className="
            relative z-10
            text-center
            font-extrabold
            text-[18px]   /* 👈 tamaño del texto de promos */
            leading-tight
            px-2
          "
        >
          {promo.titulo}
        </h3>
      </div>

      {/* Botón abajo */}
      <button
        className="
          relative z-10
          px-4 py-1.5
          rounded-[6px]
          bg-[#0C4FE9]
          text-white
          text-[14px] font-semibold
        "
        onClick={irAMasInformacion}  // 👈 AHORA navega a la nueva epic
      >
        Más información
      </button>
    </div>
  );
}
