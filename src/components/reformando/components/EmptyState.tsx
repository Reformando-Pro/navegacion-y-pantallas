import type { ReactNode } from "react";
import { cn } from "../cn";

export interface EmptyStateProps {
  /** Icono o ilustración superior (nodo, p. ej. un <svg/> lineal). Opcional. */
  icon?: ReactNode;
  /** Título principal del estado vacío. */
  title: string;
  /** Texto descriptivo opcional debajo del título. */
  description?: string;
  /** Acción opcional (normalmente un <Button/>). Se renderiza centrada debajo. */
  action?: ReactNode;
  /** Compacta los espacios (para contenedores pequeños). */
  compact?: boolean;
  className?: string;
}

/**
 * EmptyState — estado vacío del sistema (lista sin elementos, búsqueda sin
 * resultados, sección aún sin datos…). Solo presentación.
 *
 * El icono se muestra dentro de un contenedor neutro (no usa color semántico):
 * un estado vacío no es ni éxito ni error, así que se mantiene sobrio. Si en un
 * caso concreto el vacío SÍ es un aviso (p. ej. "sin conexión"), pasa tú el color
 * en el propio nodo `icon`.
 */
export function EmptyState({
  icon = null,
  title,
  description,
  action = null,
  compact = false,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        compact ? "py-8 px-4" : "py-14 px-6",
        className
      )}
    >
      {icon && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full bg-bg-raised border border-subtle text-content-tertiary mb-4",
            compact ? "w-12 h-12" : "w-16 h-16"
          )}
        >
          {icon}
        </div>
      )}

      <h3 className={cn("font-semibold text-content-primary", compact ? "text-[15px]" : "text-h3")}>
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-caption leading-relaxed text-content-tertiary max-w-xs">
          {description}
        </p>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
