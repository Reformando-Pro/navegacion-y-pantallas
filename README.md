# Reformando · Navegación y pantallas

Mockup independiente para diseñar y validar pantallas, navegación, estética y usabilidad de Reformando.app. Utiliza datos ficticios; no es la aplicación operativa.

## Sitio público

- Mockup: https://reformando-pro.github.io/navegacion-y-pantallas/
- Centro V3: https://reformando-pro.github.io/navegacion-y-pantallas/centro-avanzado.html

Publicado el 1 de noviembre de 2026 con autorización del propietario. La rama `gh-pages` contiene la compilación estática del commit `6ab53768f5b99df998e6c615cdf5f668ef0a402b` de esta rama. La PR #1 sigue abierta y no se ha fusionado. Para actualizar el sitio, reconstruir y comprobar la fuente, y copiar la nueva salida `dist/` a `gh-pages` mediante commits normales. No editar las pantallas compiladas directamente.

Se ha comprobado la navegación principal y el paso a V3 en Chrome, los seis perfiles y la vista de 390 px. Esta comprobación no sustituye una revisión visual y de accesibilidad completa de todas las pantallas.

## Funcionalidades conservadas

- App React móvil: inicio, obras, fichas de obra, presupuestos, asistente por capítulos/estancias, partidas y mediciones, costes y margen, tareas, compras, proveedores, equipo, CRM, documentos, incidencias, seguimiento cliente y configuración.
- Centro avanzado V3: seis perfiles (administrador/gerente, comercial/presupuestador, jefe de obra, trabajador, proveedor y cliente), paneles por perfil y navegación ilustrativa de permisos.
- Presupuestos por estancias y oficios, cantidades, precios y costes; versiones comerciales, aceptación simulada, anexos y conversión a obra.
- Planificación en calendario y cronograma, partes y validación de tareas, materiales del cliente, transporte, reprogramación y mensajes simulados.
- Transferencia de partidas de React al centro V3 desde «Abrir V3». Se conserva el diseño de los ZIP, con fuentes de sistema y mejoras de contraste.

La demo combina dos módulos existentes; no pretende que todas las pantallas tengan la misma profundidad funcional.

## Ejecución local

Requisitos: Node.js 22.13 o posterior y npm.

```bash
npm ci
npm run dev
```

Abrir la dirección que indica Vite (habitualmente http://localhost:5173). El centro avanzado es `centro-avanzado.html` y también se abre desde «Abrir V3».

## Compilar y comprobar

```bash
npm run build
npm test
npm run preview
```

`build` ejecuta TypeScript y Vite y produce `dist/`. `test` comprueba el código compilado y las interacciones de ambos módulos mediante jsdom; no verifica apariencia, adaptación visual, gestos ni accesibilidad completa en un navegador real. Ejecutar `build` antes de `test`.

## GitHub Pages (publicación manual)

El workflow de CI solo instala, compila y prueba. El sitio ya publicado se sirve desde la raíz de `gh-pages`, sin fusionar la PR ni desplegar la aplicación principal.

Para sustituir la publicación desde `gh-pages` por un workflow de publicación:

1. Revisar la visibilidad resultante de Pages: un repositorio privado no garantiza por sí solo que el sitio sea privado.
2. Copiar `docs/ejemplo-pages.yml` a `.github/workflows/pages.yml` y cambiar la fuente de Pages de rama a GitHub Actions.
3. Ejecutar ese workflow manualmente. Publica `dist/`; no contiene backend.

Vite usa `base: './'`, los recursos compilados son relativos y los enlaces entre módulos conservan `/navegacion-y-pantallas/`. La navegación interna React está en memoria; no requiere reglas de reescritura de rutas de un servidor.

## Simulaciones y almacenamiento

No hay APIs, base de datos, cuentas, permisos reales, envío de mensajes, pagos ni firmas. Las cantidades, precios y márgenes son ejemplos, no presupuestos para uso profesional.

React mantiene su estado en memoria y lo reinicia al recargar. V3 guarda su simulación en `localStorage` (`reformando-v3-state`); «Restaurar demo» reinicia esos datos. La clave `reformando-v3-bridge` transfiere partidas una sola vez al centro avanzado. Ambas páginas deben estar en el mismo origen. La transferencia es unidireccional.

Las fotos y adjuntos del centro V3 son interfaces previstas: no existe almacenamiento real de archivos. Los proveedores externos, cuando se muestran, no constituyen integraciones.

## Diferencias con la aplicación real

La aplicación principal está en `Reformando-Pro/reforapp`, usa Next.js y tiene arquitectura operativa con Supabase/PostgreSQL. Este proyecto React/Vite es estático y no importa su backend, autenticación, variables privadas, migraciones ni configuraciones de despliegue.

Los cambios de diseño se desarrollan aquí. No se deben copiar a producción sin una implementación y revisión independiente. No se han retirado archivos de `reforapp`: cualquier limpieza requiere demostrar antes que son exclusivos del mockup y abrir otra PR.

## Estructura y procedencia

- `src/App.tsx`: app React y datos ficticios.
- `src/components/`: componentes visuales conservados de V3.
- `src/styles.css`, `src/vendor/`: diseño y licencia del CSS incluido.
- `public/centro-avanzado.html`: simulador V3 autónomo.
- `scripts/smoke.mjs`: pruebas de interacción en DOM.
- `docs/`: auditoría, comparación de ZIP, comprobaciones y guía de separación segura.

Base: `Reformando_Mockup_REPO_INDEPENDIENTE.zip`, comparado con `Reformando_V3_Mockup_para_compartir.zip`. Se excluye el scaffolding de Sites/Cloudflare, autenticación ChatGPT y ejemplos de base de datos ajenos a la demo. Véase `docs/AUDITORIA-MIGRACION.md`.
