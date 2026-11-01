# Separación segura del mockup y la aplicación real

## Estado

- Se ha aislado el mockup en un proyecto React/Vite independiente.
- Se han excluido Next/Cloudflare, autenticación ChatGPT, ejemplos de Drizzle/DB y utilidades de despliegue de producción del ZIP de la demo.
- Se ha inspeccionado parcialmente `Reformando-Pro/reforapp` desde Chrome. **No se ha borrado ni editado nada en él**. La revisión no identifica aún candidatos seguros de eliminación; véase `AUDITORIA-MIGRACION.md`.

## Auditoría ANTES de retirar cualquier archivo

1. Comprobar que esta demo compila y se navega correctamente desde el nuevo repositorio.
2. En el repositorio principal, localizar los elementos que solo pertenecen al mockup (nombres de archivo y referencias a `centro-avanzado.html`, `reformando-v3-bridge`, `v3-launcher`, `mobile-app.tsx`, etc.).
3. Distinguir **código específico del mockup** de componentes compartidos con producción. No borrar bibliotecas de UI ni carpetas `app/`, `src/` o `components/` completas.
4. Revisar rutas, imports, acciones CI, despliegue, tests y referencias a enlaces.
5. Abrir una rama dedicada con la eliminación solo de archivos realmente exclusivos de la demo; generar una PR para revisión, sin cambios automáticos sobre la rama principal.
6. Compilar y ejecutar las pruebas del proyecto principal antes de fusionar la PR.

## Comandos de diagnóstico de solo lectura (dentro del repositorio principal)

```bash
git status --short
git grep -n -E 'centro-avanzado|reformando-v3-bridge|v3-launcher|mockup' -- ':!pnpm-lock.yaml' ':!package-lock.json' || true
rg --files -g 'mobile-app.tsx' -g 'centro-avanzado.html'
```

No hay comandos de eliminación automática aquí: falta la inspección del árbol real de producción.

## Acceso GitHub

La conexión actual de GitHub solo muestra repositorios del usuario `ReformandoPro` y `Works-In-Gen-io`, pero no encuentra `Reformando-Pro/navegacion-y-pantallas` (404). Autorizar la aplicación de GitHub en la organización correcta o añadir el nuevo repositorio a su instalación para permitir preparar PRs y publicar desde el chat.
