"use client";

import { cn } from "../cn";
import type { TabItem } from "../types";

export interface TabBarProps {
  /** Ítems de navegación. `icon` es un nodo lineal (outline). */
  items?: TabItem[];
  /** key del ítem activo. */
  active?: string;
  /** Recibe la key pulsada. */
  onChange?: (key: string) => void;
  className?: string;
}

/**
 * TabBar — barra de navegación inferior.
 *
 * Iconografía unificada (outline). El ítem activo se distingue por COLOR (azul),
 * no por relleno.
 */
export function TabBar({ items = [], active, onChange, className = "" }: TabBarProps) {
  return (
    <nav
      className={cn("grid border-t border-subtle bg-bg-base px-2 pt-3 pb-4", className)}
      style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
    >
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange?.(item.key)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex flex-col items-center gap-1.5 text-overline font-medium transition-colors duration-150",
              isActive ? "text-primary-500" : "text-content-tertiary"
            )}
          >
            <span className="w-6 h-6 flex items-center justify-center">{item.icon}</span>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
