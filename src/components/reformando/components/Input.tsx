"use client";

import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Etiqueta encima del campo. */
  label?: string;
  /** Unidad alineada a la derecha (€, m², ml…). */
  unit?: string;
  /** Nodo a la derecha (p. ej. lupa). Se ignora si hay `unit`. */
  iconRight?: ReactNode;
  /** Mensaje de error. Si está presente, el borde pasa a rojo. */
  error?: string;
  /** Usa la fuente de cifras (Space Grotesk) para el valor. */
  numeric?: boolean;
}

/**
 * Input — campo de texto del sistema. Solo presentación; el estado lo controla quien lo usa.
 */
export function Input({
  label,
  unit,
  iconRight,
  error,
  numeric = false,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id ?? (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label htmlFor={inputId} className="block text-caption text-content-secondary font-medium mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          className={cn(
            "w-full bg-bg-raised border rounded-md px-4 py-3.5 text-[15px]",
            "text-content-primary placeholder:text-content-tertiary",
            "transition-colors duration-150 focus:outline-none",
            numeric && "font-num",
            !!(unit || iconRight) && "pr-12",
            error
              ? "border-danger-500 focus:ring-2 focus:ring-danger-500/40"
              : "border-default focus:border-primary-500 focus:ring-2 focus:ring-focus"
          )}
          aria-invalid={error ? true : undefined}
          {...props}
        />

        {unit && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-caption text-content-tertiary">
            {unit}
          </span>
        )}
        {iconRight && !unit && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-content-tertiary">
            {iconRight}
          </span>
        )}
      </div>

      {error && <p className="mt-2 text-caption text-danger-100">{error}</p>}
    </div>
  );
}
