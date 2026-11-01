"use client";

import type { ReactNode } from "react";
import { cn } from "../cn";
import { Checkbox } from "./Checkbox";

export interface ListItemProps {
  /** Nombre principal. */
  title: string;
  /** Línea secundaria (p. ej. "Cantidad: 25 sacos"). */
  subtitle?: string;
  /** Estado comprado/hecho (tacha y atenúa el texto). */
  done?: boolean;
  /** Recibe el nuevo booleano al pulsar el check. */
  onToggle?: (checked: boolean) => void;
  /** Nodo a la derecha (precio, chevron…). */
  trailing?: ReactNode;
  /** Muestra el checkbox a la izquierda (def. true). */
  showCheck?: boolean;
  className?: string;
}

/**
 * ListItem — fila de lista densa (p. ej. material en la lista de compra).
 * El check usa azul (selección/progreso), coherente con Checkbox.
 */
export function ListItem({
  title,
  subtitle,
  done = false,
  onToggle,
  trailing = null,
  showCheck = true,
  className = "",
}: ListItemProps) {
  return (
    <div className={cn("flex items-center gap-3.5 px-4 py-3.5", className)}>
      {showCheck && <Checkbox checked={done} onChange={onToggle} />}

      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-[15px] font-semibold mb-0.5 truncate",
            done ? "text-content-tertiary line-through" : "text-content-primary"
          )}
        >
          {title}
        </p>
        {subtitle && (
          <p className={cn("text-caption truncate", done ? "text-content-disabled" : "text-content-tertiary")}>
            {subtitle}
          </p>
        )}
      </div>

      {trailing && <div className="shrink-0">{trailing}</div>}
    </div>
  );
}

export interface ListGroupProps {
  className?: string;
  children?: ReactNode;
}

/** ListGroup — agrupa ListItems en una tarjeta con separadores entre filas. */
export function ListGroup({ className = "", children }: ListGroupProps) {
  return (
    <div
      className={cn(
        "bg-bg-surface border border-subtle rounded-[14px] overflow-hidden divide-y divide-white/[0.06]",
        className
      )}
    >
      {children}
    </div>
  );
}
