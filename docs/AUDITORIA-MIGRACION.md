# Auditoría y migración del mockup

Fecha: 1 de noviembre de 2026.

## Evidencias

- VERIFIED_FACT: Chrome muestra la cuenta `ReformandoPro` y acceso a `Reformando-Pro`. El destino privado estaba vacío antes de iniciar el trabajo. Se inicializó con un README mínimo para permitir una PR; el código se prepara en `feat/mockup-independiente-v3`.
- VERIFIED_FACT: el README de `Reformando-Pro/reforapp` identifica la aplicación Next.js/React/TypeScript con Supabase/PostgreSQL. En la inspección inicial, `main` apuntaba a `b82ff16fc37df0a94a4b0827440dc6f105e935f4`.
- VERIFIED_FACT: los dos ZIP suministrados incluyen la misma app móvil y centro V3. El independiente adapta las rutas y mueve los estilos a `src/`.
- VERIFIED_FACT: `pruebas-html/componentes-tsx-src/` solo contenía un README en el árbol consultado. No es una copia de todos los componentes.
- VERIFIED_FACT: Sites conserva una demo «Reformando — Demo Stakeholders», con 25 versiones; la versión 25 registra el commit `b544fc5b80d195cc86c6a5c879d6a9a1ec347bbc` y un archivo de 72 ficheros. No se recuperó ese archivo para compararlo; los ZIP incluyen trabajo V3 que sus notas describen como posterior a lo publicado.
- VERIFIED_FACT: la conversación inicial solicita una demo con datos ficticios y sin conexión productiva; no aporta fechas, commits ni el desarrollo posterior que demuestre una incorporación a `reforapp`.
- UNKNOWN: que el mockup V3 se haya incorporado a alguna rama de `reforapp`. No se puede inferir por los nombres `mock-*`, por el contenido de la conversación ni por fechas.

## Inventario previo a cambios

Migrar la app visual, sus 19 archivos en `src/components/`, utilidades, estilos y CSS con licencia, favicon, centro V3, entrada y configuración Vite/TypeScript. Conservar también su documentación de separación.

Excluir del ZIP V3: `.openai/`, `build/`, scripts específicos de Sites, `db/`, `drizzle/`, `examples/d1/`, `app/chatgpt-auth.ts`, configuraciones Next/Cloudflare y componentes UI que no intervienen en el grafo de imports. La compilación verifica la suficiencia del conjunto independiente.

Conservar todo `reforapp` por ahora. Precaución especial con `src/lib/repositories/mock-*.ts`: su índice los exporta. También con la ruta `src/app/design-reference/` y componentes compartidos. No se han analizado todos sus consumidores; no hay una lista segura de eliminación.

## Comparación y cambios

La app `src/App.tsx` coincide con `app/mobile-app.tsx` de V3 salvo el enlace relativo al centro avanzado y `useGrouping: true` en lugar de `'always'` (compatible con los tipos Intl de este proyecto y conserva agrupación de cifras).

`src/styles.css` coincide con `app/globals.css` salvo el import relativo del CSS vendor. El centro avanzado coincide salvo el enlace de retorno `./`. Los 19 archivos en `src/components/` coinciden byte a byte con sus originales V3.

Se añade lockfile npm, pruebas de interacción en DOM, CI sin despliegue y documentación actualizada. El ejemplo Pages se mantiene fuera de workflows activos y solo usa ejecución manual al copiarlo.

## Validación local ejecutada

- Instalación de dependencias: correcta con npm y scripts de instalación desactivados.
- TypeScript y compilación Vite: correctos tras corregir el tipo Intl.
- Pruebas jsdom: los seis perfiles y todas sus pantallas principales; cambio de cantidades; historial, envío y aceptación simulada; conversión en obra; creación, envío y aceptación de anexos; partes y validación; estado de material; cronograma y reprogramación; importación del puente de presupuesto; vuelta desde V3 y recursos relativos bajo `/navegacion-y-pantallas/`; arranque del bundle React compilado y sus cinco secciones de navegación.
- Comparación estática de la app, estilos y centro V3: correcta con las diferencias enumeradas arriba.
- Sin dependencias de Supabase, Next, Drizzle, Odoo, autenticación o backend en el proyecto independiente. No se requieren variables de entorno.

No ejecutado: revisión visual móvil/escritorio en navegador real, pruebas de gestos, accesibilidad completa ni despliegue GitHub Pages. Los resultados DOM no acreditan estas pruebas. Tampoco está verificada la equivalencia funcional de todas las versiones históricas de Sites.

## Procedencia de los ZIP (SHA-256)

- `Reformando_V3_Mockup_para_compartir.zip`: `c616651fb05a2ed454dca48231167ed1c864b09bdc00fd4ae5451783b5821b9d`.
- `Reformando_Mockup_REPO_INDEPENDIENTE.zip`: `898b9214cb8a1a5aa2c254c0d34ad89f7b509aae2820eab8f5b4f0a27a507d8b`.

## Limpieza pendiente

No se modifica el repositorio principal ni se crea una PR de borrado sin candidatos seguros. La inspección es parcial y el conector GitHub devuelve 404 para los repositorios privados de la organización. Chrome permite inspeccionar y editar, pero ello no convierte en segura una eliminación. Véase la guía de separación para completar el análisis de imports, rutas, pruebas y despliegues antes de retirar código.
