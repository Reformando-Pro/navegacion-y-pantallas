"use client";

import { cn } from "../cn";

export interface CheckboxProps {
  /** Estado controlado. */
  checked?: boolean;
  /** Recibe el nuevo booleano. */
  onChange?: (checked: boolean) => void;
  /** Tamaño: sm (22px) | md (26px). */
  size?: "sm" | "md";
  /** Texto opcional a la derecha. */
  label?: string;
  /** Desactiva la interacción. */
  disabled?: boolean;
  className?: string;
}

/**
 * Checkbox — casilla circular (estilo "marcar como hecho").
 *
 * Usa AZUL al marcar, no verde: marcar es selección/progreso (territorio del azul).
 * El verde se reserva a dinero y a validaciones/hitos reales.
 */
export function Checkbox({
  checked = false,
  onChange,
  size = "md",
  label,
  disabled = false,
  className = "",
}: CheckboxProps) {
  const sizes = { sm: "w-[22px] h-[22px]", md: "w-[26px] h-[26px]" } as const;
  const checkSize = size === "sm" ? 12 : 14;

  return (
    <label
      className={cn(
        "inline-flex items-center gap-3",
        disabled ? "opacity-50 pointer-events-none" : "cursor-pointer",
        className
      )}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "flex items-center justify-center rounded-full border-2 transition-colors duration-150 shrink-0",
          sizes[size],
          checked ? "bg-primary-500 border-primary-500" : "bg-transparent border-strong hover:border-primary-500"
        )}
      >
        {checked && (
          <svg width={checkSize} height={checkSize} viewBox="0 0 24 24" fill="none"
               stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </button>
      {label && <span className="text-[15px] text-content-primary">{label}</span>}
    </label>
  );
}
