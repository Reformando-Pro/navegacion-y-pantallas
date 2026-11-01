import { cn } from "../cn";
import type { MilestoneStatus, TimelineItem } from "../types";

export interface TimelineProps {
  /** Hitos a mostrar, en orden. */
  items?: TimelineItem[];
  className?: string;
}

/**
 * Timeline — línea de hitos (p. ej. progreso de obra en el portal del cliente).
 *
 * Color de los puntos (clave del sistema):
 *  - done    : verde  → completado (familia de "pagado").
 *  - current : azul   → en curso (activo). Título también azul.
 *  - pending : gris   → futuro, hueco.
 */
export function Timeline({ items = [], className = "" }: TimelineProps) {
  return (
    <div className={cn("relative pl-1", className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <div key={i} className={cn("flex gap-4 relative", !isLast && "pb-6")}>
            <div className="relative shrink-0 flex flex-col items-center">
              <Marker status={item.status} />
              {!isLast && <span className="absolute top-[30px] -bottom-6 w-0.5 bg-strong z-[1]" />}
            </div>

            <div className="pt-0.5">
              <p
                className={cn(
                  "text-[15px] font-semibold mb-1",
                  item.status === "current" ? "text-primary-300" : "text-content-primary"
                )}
              >
                {item.title}
              </p>
              {item.description && (
                <p className="text-caption leading-relaxed text-content-tertiary italic">{item.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Marker({ status }: { status: MilestoneStatus }) {
  const base = "w-[30px] h-[30px] rounded-full flex items-center justify-center z-[2]";

  if (status === "done") {
    return (
      <div className={cn(base, "bg-success-500")}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#04342C"
             strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
    );
  }
  if (status === "current") {
    return (
      <div className={cn(base, "bg-transparent border-2 border-primary-500")}>
        <span className="w-[11px] h-[11px] rounded-full bg-primary-500" />
      </div>
    );
  }
  return <div className={cn(base, "bg-transparent border-2 border-strong")} />;
}
