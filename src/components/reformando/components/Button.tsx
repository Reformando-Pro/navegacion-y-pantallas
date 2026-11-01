"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";
import type { ButtonVariant, Size } from "../types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visual. `primary` (azul) por defecto; `confirm` (verde) solo dinero/confirmación. */
  variant?: ButtonVariant;
  /** Tamaño. */
  size?: Size;
  /** Ocupa el 100% del ancho del contenedor. */
  fullWidth?: boolean;
  /** Añade la sombra azul de elevación (CTAs flotantes). */
  elevated?: boolean;
  /** Nodo a la izquierda del texto (p. ej. un icono). */
  iconLeft?: ReactNode;
  /** Nodo a la derecha del texto. */
  iconRight?: ReactNode;
}

/**
 * Button — botón del sistema de diseño.
 * Solo presentación: no contiene lógica de negocio.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  elevated = false,
  iconLeft = null,
  iconRight = null,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-md " +
    "transition-colors duration-150 focus:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-focus disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizes: Record<Size, string> = {
    sm: "text-label px-4 py-2",
    md: "text-[15px] px-5 py-3",
    lg: "text-[15px] px-5 py-4",
  };

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    confirm: "bg-success-500 text-white hover:bg-success-700",
    secondary: "bg-bg-raised text-content-primary border border-default hover:border-strong",
    text: "bg-transparent text-primary-300 hover:text-primary-100 px-2 py-1",
    destructive: "bg-transparent text-danger-500 hover:bg-danger-900/40",
  };

  return (
    <button
      className={cn(
        base,
        sizes[size],
        variants[variant],
        fullWidth && "w-full",
        elevated && "shadow-fab",
        className
      )}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
