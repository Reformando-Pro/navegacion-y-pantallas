import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";
import type { SemanticStatus } from "../types";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Estado semántico. */
  status?: SemanticStatus;
  /** Muestra un punto de color delante del texto. */
  dot?: boolean;
  /** Esquinas de cápsula (por defecto rounded-sm). */
  pill?: boolean;
  children?: ReactNode;
}

/**
 * Badge — etiqueta de ESTADO semántico.
 *
 * IMPORTANTE: solo para estados. Para gremios/especialidades usa <GuildChip>.
 * Esta separación evita reintroducir el "exceso de color" del diseño original
 * (un color de estado nunca debe usarse como categoría).
 */
export function Badge({
  status = "info",
  dot = false,
  pill = false,
  className = "",
  children,
  ...props
}: BadgeProps) {
  const variants: Record<SemanticStatus, string> = {
    info: "bg-primary-900 text-primary-100",
    success: "bg-success-900 text-success-100",
    warning: "bg-warning-900 text-warning-100",
    danger: "bg-danger-900 text-danger-100",
    neutral: "bg-bg-raised text-content-secondary border border-subtle",
  };

  const dotColors: Record<SemanticStatus, string> = {
    info: "bg-primary-300",
    success: "bg-success-300",
    warning: "bg-warning-500",
    danger: "bg-danger-500",
    neutral: "bg-content-tertiary",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-overline font-semibold uppercase tracking-wide px-3 py-1",
        pill ? "rounded-full" : "rounded-sm",
        variants[status],
        className
      )}
      {...props}
    >
      {dot && <span className={cn("w-2 h-2 rounded-full", dotColors[status])} />}
      {children}
    </span>
  );
}
