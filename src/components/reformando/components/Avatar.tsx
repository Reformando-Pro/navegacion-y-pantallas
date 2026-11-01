import { cn } from "../cn";
import type { Size } from "../types";

export interface AvatarProps {
  /** URL de imagen. Si falta, muestra iniciales o un icono de persona. */
  src?: string;
  /** Iniciales de respaldo (p. ej. "JM"). */
  initials?: string;
  /** Tamaño: sm (40) | md (54) | lg (108). */
  size?: Size;
  /** Muestra el anillo azul. */
  ring?: boolean;
  /** Muestra el badge azul de verificación. */
  verified?: boolean;
  /** Texto alternativo de la imagen. */
  alt?: string;
  className?: string;
}

/**
 * Avatar — imagen de perfil circular del sistema.
 *
 * Nota Next: usa <img> nativo para mantenerse sin dependencias y framework-agnóstico.
 * Si preferís optimización, podéis envolver/duplicar con next/image en vuestro lado.
 */
export function Avatar({
  src,
  initials,
  size = "md",
  ring = false,
  verified = false,
  alt = "",
  className = "",
}: AvatarProps) {
  const px: Record<Size, number> = { sm: 40, md: 54, lg: 108 };
  const dim = px[size];
  const verifyPx = size === "lg" ? 30 : size === "md" ? 22 : 18;

  return (
    <div className={cn("relative inline-block", className)} style={{ width: dim, height: dim }}>
      <div
        className={cn(
          "w-full h-full rounded-full overflow-hidden flex items-center justify-center",
          "bg-gradient-to-br from-[#46566b] to-[#222d3a]",
          ring && "border-[3px] border-primary-700"
        )}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="font-semibold text-content-primary" style={{ fontSize: dim * 0.34 }}>
            {initials}
          </span>
        ) : (
          <svg viewBox="0 0 24 24" fill="#c7d2e0" style={{ width: dim * 0.54, height: dim * 0.54 }}>
            <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z" />
          </svg>
        )}
      </div>

      {verified && (
        <span
          className="absolute bottom-0.5 right-0.5 rounded-full bg-primary-500 border-[3px] border-bg-base flex items-center justify-center"
          style={{ width: verifyPx, height: verifyPx }}
          aria-label="Verificado"
        >
          <svg width={verifyPx * 0.5} height={verifyPx * 0.5} viewBox="0 0 24 24" fill="none"
               stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
      )}
    </div>
  );
}
