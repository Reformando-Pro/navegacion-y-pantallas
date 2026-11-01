/**
 * cn — une clases de forma condicional.
 * Filtra valores falsy y une con espacio. Sin dependencias externas.
 *
 * Uso: cn("base", isActive && "active", disabled && "opacity-50")
 */
export type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
