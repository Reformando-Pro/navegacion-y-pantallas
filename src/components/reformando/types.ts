/**
 * Tipos compartidos del sistema de diseño.
 * Reutilizables al integrar con vuestros tipos de dominio.
 */

/** Estados semánticos. Solo para <Badge>, nunca para gremios. */
export type SemanticStatus = "info" | "success" | "warning" | "danger" | "neutral";

/** Variantes de botón. `confirm` (verde) se reserva a dinero/confirmación. */
export type ButtonVariant = "primary" | "confirm" | "secondary" | "text" | "destructive";

/** Variantes de superficie de tarjeta. */
export type CardVariant = "surface" | "raised" | "active" | "dashed";

/** Estado de un hito en el Timeline. */
export type MilestoneStatus = "done" | "current" | "pending";

/** Tamaños genéricos usados en varios componentes. */
export type Size = "sm" | "md" | "lg";

/** Un hito del Timeline. */
export interface TimelineItem {
  status: MilestoneStatus;
  title: string;
  description?: string;
}

/** Una opción de SegmentedControl (string suelto o {value,label}). */
export type SegmentOption = string | { value: string; label: string };

/** Un segmento del Donut. `color` opcional: si falta, se asigna de la escala de azules. */
export interface DonutSegment {
  value: number;
  color?: string;
  label?: string;
}

/** Un ítem de TabBar. */
export interface TabItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}
