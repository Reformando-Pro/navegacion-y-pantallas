import { cn } from "../cn";

export interface ProgressBarProps {
  /** Valor 0–100. */
  value?: number;
  /** Tono del relleno. `warning` solo si hay un aviso real. */
  tone?: "primary" | "warning";
  /** Alto: sm (6px) | md (8px) | lg (9px). */
  height?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * ProgressBar — barra de progreso del sistema.
 *
 * Relleno AZUL por defecto (color de dato/progreso). No usar verde aquí: el verde
 * es para dinero y completado. `tone="warning"` solo en contextos de aviso real.
 */
export function ProgressBar({ value = 0, tone = "primary", height = "md", className = "" }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const heights = { sm: "h-1.5", md: "h-2", lg: "h-[9px]" } as const;
  const tones = { primary: "bg-primary-500", warning: "bg-warning-500" } as const;

  return (
    <div
      className={cn("w-full rounded-full overflow-hidden bg-white/[0.07]", heights[height], className)}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn("h-full rounded-full transition-[width] duration-500", tones[tone])}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
