import type { HTMLAttributes, ElementType, ReactNode } from "react";
import { cn } from "../cn";
import type { CardVariant, Size } from "../types";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Variante de superficie. */
  variant?: CardVariant;
  /** Padding interno. */
  padding?: Size;
  /** Etiqueta a renderizar (div por defecto). Útil para section/button/article. */
  as?: ElementType;
  children?: ReactNode;
}

/**
 * Card — contenedor de superficie del sistema. Solo presentación.
 * Variante `active` (azul): úsala como máximo en una tarjeta por grupo.
 */
export function Card({
  variant = "surface",
  padding = "md",
  as: Tag = "div",
  className = "",
  children,
  ...props
}: CardProps) {
  const paddings: Record<Size, string> = { sm: "p-4", md: "p-5", lg: "p-6" };

  const variants: Record<CardVariant, string> = {
    surface: "bg-bg-surface border border-subtle",
    raised: "bg-bg-raised border border-default",
    active: "bg-primary-500 text-white border border-primary-500",
    dashed: "bg-transparent border border-dashed border-strong",
  };

  return (
    <Tag className={cn("rounded-lg", paddings[padding], variants[variant], className)} {...props}>
      {children}
    </Tag>
  );
}
