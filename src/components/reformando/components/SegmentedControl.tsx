"use client";

import { cn } from "../cn";
import type { SegmentOption } from "../types";

export interface SegmentedControlProps {
  /** Opciones: strings sueltos o { value, label }. */
  options?: SegmentOption[];
  /** Valor seleccionado. */
  value?: string;
  /** Recibe el value elegido. */
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * SegmentedControl — selector de una opción entre varias (p. ej. nivel de experiencia).
 *
 * La opción activa usa superficie elevada (no un color fuerte), para no competir
 * con los acentos del sistema.
 *
 * NOTA DE ORDEN: cuando las opciones son una escala (niveles, tallas, rangos),
 * ordénalas de menor a mayor de izquierda a derecha.
 * Ej. ["Aprendiz", "Oficial 2ª", "Oficial 1ª"].
 */
export function SegmentedControl({ options = [], value, onChange, className = "" }: SegmentedControlProps) {
  const normalized = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));

  return (
    <div
      role="radiogroup"
      className={cn("grid gap-2 bg-bg-surface border border-subtle rounded-[14px] p-1.5", className)}
      style={{ gridTemplateColumns: `repeat(${normalized.length}, minmax(0, 1fr))` }}
    >
      {normalized.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange?.(opt.value)}
            className={cn(
              "py-2.5 px-2 rounded-[9px] text-label font-semibold text-center transition-colors duration-150 border",
              active
                ? "bg-bg-raised text-content-primary border-default"
                : "bg-transparent text-content-tertiary border-transparent hover:text-content-secondary"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
