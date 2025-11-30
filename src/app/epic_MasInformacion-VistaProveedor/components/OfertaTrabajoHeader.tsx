"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { DetalleOfertaTrabajo } from "../interfaces/DetalleOferta.interface";

// Reutilizamos los mismos iconos del otro epic
import electricistaFoco from "../../epic_PerfilProveedor-VistaProveedor/assets/electricistaFoco.png";
import martilloAlbanil from "../../epic_PerfilProveedor-VistaProveedor/assets/martilloAlbañil.png";
import plomeriaImg from "../../epic_PerfilProveedor-VistaProveedor/assets/plomeria.png";
import regarJardineria from "../../epic_PerfilProveedor-VistaProveedor/assets/regarJardineria.png";
import itemsCarpinteria from "../../epic_PerfilProveedor-VistaProveedor/assets/itemsCarpinteria.png";

const ICONOS_OFERTA: Record<string, StaticImageData> = {
  electricidad: electricistaFoco,
  albanileria: martilloAlbanil,
  plomeria: plomeriaImg,
  jardineria: regarJardineria,
  carpinteria: itemsCarpinteria,
};

interface Props {
  detalle: DetalleOfertaTrabajo;
}

export default function OfertaTrabajoHeader({ detalle }: Props) {
  const icon = ICONOS_OFERTA[detalle.iconoKey] ?? electricistaFoco;

  return (
    <section className="w-full">
      <h1 className="text-[24px] sm:text-[26px] font-extrabold text-[#0C4FE9] mb-4">
        Oferta de Trabajo
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        {/* Recuadro de icono (mismas vibes que mockup) */}
        <div className="w-[160px] h-[160px] border-2 border-[#0C4FE9] flex items-center justify-center bg-white">
          <Image
            src={icon}
            alt={detalle.titulo}
            className="w-[130px] h-[130px] object-contain"
          />
        </div>

        {/* Descripción */}
        <div className="flex-1 text-[14px] sm:text-[15px] leading-[22px]">
          <h2 className="font-bold mb-2">{detalle.titulo}</h2>
          {detalle.descripcion.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
