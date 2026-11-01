import type { ReactNode } from "react";
import { cn } from "../cn";
import type { DonutSegment } from "../types";

export interface DonutProps {
  /** Segmentos. Si un segmento no trae `color`, se asigna de la escala de azules. */
  segments?: DonutSegment[];
  /** Diámetro en px. */
  size?: number;
  /** Grosor del anillo en px. */
  thickness?: number;
  /** Nodo o texto en el centro (p. ej. "24%" o un icono). */
  centerLabel?: ReactNode;
  /** Muestra la leyenda con los labels de cada segmento. */
  showLegend?: boolean;
  /** Color de la pista de fondo. */
  track?: string;
  className?: string;
}

/**
 * Donut — gráfico circular del sistema.
 *
 * Para series sin significado semántico usa una escala MONOCROMA de azules en vez de
 * colores arbitrarios (dos series se distinguen sin introducir colores nuevos).
 */
const BLUE_SCALE = ["#2D7FF9", "#6FA8F6", "#C7DEFD", "#1850AB"];

interface Arc {
  color: string;
  dasharray: string;
  dashoffset: number;
  label?: string;
}

export function Donut({
  segments = [],
  size = 118,
  thickness = 11,
  centerLabel = null,
  showLegend = false,
  track = "rgba(255,255,255,0.07)",
  className = "",
}: DonutProps) {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;

  let offsetAcc = 0;
  const arcs: Arc[] = segments.map((seg, i) => {
    const len = (seg.value / total) * circumference;
    const arc: Arc = {
      color: seg.color ?? BLUE_SCALE[i % BLUE_SCALE.length],
      dasharray: `${len} ${circumference - len}`,
      dashoffset: -offsetAcc,
      label: seg.label,
    };
    offsetAcc += len;
    return arc;
  });

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={track} strokeWidth={thickness} />
          {arcs.map((arc, i) => (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={arc.color}
              strokeWidth={thickness}
              strokeLinecap="round"
              strokeDasharray={arc.dasharray}
              strokeDashoffset={arc.dashoffset}
            />
          ))}
        </svg>
        {centerLabel != null && (
          <div className="absolute inset-0 flex items-center justify-center">
            {typeof centerLabel === "string" ? (
              <span className="font-num text-2xl font-bold text-content-primary">{centerLabel}</span>
            ) : (
              centerLabel
            )}
          </div>
        )}
      </div>

      {showLegend && (
        <div className="flex gap-3.5 mt-3.5">
          {arcs.map((arc, i) =>
            arc.label ? (
              <span key={i} className="flex items-center gap-1.5 text-caption text-content-secondary font-medium">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: arc.color }} />
                {arc.label}
              </span>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
