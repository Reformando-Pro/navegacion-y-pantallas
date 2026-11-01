import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

export interface GuildChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Icono monocromo opcional del gremio. */
  icon?: ReactNode;
  /** Esquinas de cápsula (por defecto rounded-sm). */
  pill?: boolean;
  children?: ReactNode;
}

/**
 * GuildChip — etiqueta de GREMIO / especialidad (Albañilería, Fontanería, Pintura…).
 *
 * Todos los gremios comparten EXACTAMENTE el mismo aspecto neutro y se diferencian
 * solo por el texto. Decisión central del sistema: con 8+ gremios, un color por
 * gremio produce un arcoíris que compite con los estados semánticos.
 *
 * Por eso NO existe una prop de color. Si en el futuro hay que distinguirlos de un
 * vistazo, el camino correcto es un icono monocromo en `icon`.
 */
export function GuildChip({ icon = null, pill = false, className = "", children, ...props }: GuildChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-overline font-semibold uppercase tracking-wide px-2.5 py-1",
        "bg-guild-bg text-guild-text border border-guild-border",
        pill ? "rounded-full" : "rounded-sm",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
