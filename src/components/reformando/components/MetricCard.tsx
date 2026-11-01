"use client";

import { Children, type ReactNode } from "react";
import { cn } from "../cn";

export interface MetricCardProps {
  /** Etiqueta superior (overline). */
  label: string;
  /** Cifra principal (se renderiza en Space Grotesk). */
  value: ReactNode;
  /** Nodo opcional debajo (p. ej. un Badge de tendencia). */
  footer?: ReactNode;
  /** Versión azul destacada. Máx. una por grupo. */
  active?: boolean;
  className?: string;
}

/**
 * MetricCard — tarjeta de métrica/KPI (p. ej. "ACTIVOS 12").
 * La tarjeta activa usa fondo azul: como máximo UNA por grupo (es el acento que guía).
 */
export function MetricCard({ label, value, footer = null, active = false, className = "" }: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-5 min-w-0",
        active ? "bg-primary-500 text-white" : "bg-bg-surface border border-subtle text-content-primary",
        className
      )}
    >
      <p
        className={cn(
          "text-overline font-semibold uppercase tracking-wide mb-2",
          active ? "text-white/80" : "text-content-secondary"
        )}
      >
        {label}
      </p>
      <p className="font-num text-[34px] font-bold leading-none mb-3">{value}</p>
      {footer}
    </div>
  );
}

export interface MetricCardGroupProps {
  className?: string;
  children?: ReactNode;
}

/**
 * MetricCardGroup — fila horizontal de MetricCards con scroll lateral en móvil
 * ("ACTIVOS / PRESUPUESTOS / COMPRAS").
 */
export function MetricCardGroup({ className = "", children }: MetricCardGroupProps) {
  return (
    <div className={cn("flex gap-3 overflow-x-auto pb-1 -mx-1 px-1 snap-x", className)}>
      {Children.map(children, (child) => (
        <div className="snap-start shrink-0 w-[44%] min-w-[150px]">{child}</div>
      ))}
    </div>
  );
}
