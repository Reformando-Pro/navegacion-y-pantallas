/**
 * Sistema de Diseño — Librería de componentes (TypeScript)
 * Punto de entrada único:
 *
 *   import { Button, Card, Badge, GuildChip } from "@/ui";
 *   import type { ButtonProps, SemanticStatus } from "@/ui";
 */

export { cn } from "./cn";
export type { ClassValue } from "./cn";

// Componentes
export { Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { Card } from "./components/Card";
export type { CardProps } from "./components/Card";

export { Badge } from "./components/Badge";
export type { BadgeProps } from "./components/Badge";

export { GuildChip } from "./components/GuildChip";
export type { GuildChipProps } from "./components/GuildChip";

export { Input } from "./components/Input";
export type { InputProps } from "./components/Input";

export { Checkbox } from "./components/Checkbox";
export type { CheckboxProps } from "./components/Checkbox";

export { ProgressBar } from "./components/ProgressBar";
export type { ProgressBarProps } from "./components/ProgressBar";

export { Donut } from "./components/Donut";
export type { DonutProps } from "./components/Donut";

export { Timeline } from "./components/Timeline";
export type { TimelineProps } from "./components/Timeline";

export { Avatar } from "./components/Avatar";
export type { AvatarProps } from "./components/Avatar";

export { SegmentedControl } from "./components/SegmentedControl";
export type { SegmentedControlProps } from "./components/SegmentedControl";

export { TabBar } from "./components/TabBar";
export type { TabBarProps } from "./components/TabBar";

export { ListItem, ListGroup } from "./components/ListItem";
export type { ListItemProps, ListGroupProps } from "./components/ListItem";

export { MetricCard, MetricCardGroup } from "./components/MetricCard";
export type { MetricCardProps, MetricCardGroupProps } from "./components/MetricCard";

export { EmptyState } from "./components/EmptyState";
export type { EmptyStateProps } from "./components/EmptyState";

// Tipos de dominio del sistema
export type {
  SemanticStatus,
  ButtonVariant,
  CardVariant,
  MilestoneStatus,
  Size,
  TimelineItem,
  SegmentOption,
  DonutSegment,
  TabItem,
} from "./types";
