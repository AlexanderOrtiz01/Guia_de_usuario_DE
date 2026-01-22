# Guía de Usuario - Panel Admin

Esta es una guía de usuario creada con [Astro](https://astro.build) y [Starlight](https://starlight.astro.build), optimizada para documentación.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🚀 Estructura del Proyecto

```
.
├── public/          # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── assets/      # Recursos (imágenes optimizadas)
│   └── content/     # Contenido de la documentación
│       └── docs/    # Archivos .md o .mdx
└── astro.config.mjs # Configuración de Astro
```

Starlight busca archivos `.md` o `.mdx` en el directorio `src/content/docs/`. Cada archivo se expone como una ruta basada en su nombre.

Las imágenes se pueden agregar a `src/assets/` e incrustar en Markdown con un enlace relativo.

Los recursos estáticos, como favicons, se pueden colocar en el directorio `public/`.

## 🧞 Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto usando Bun:

| Comando              | Acción                                           |
| :------------------- | :----------------------------------------------- |
| `bun install`        | Instala las dependencias                         |
| `bunx astro dev`     | Inicia el servidor local en `localhost:4321`     |
| `bun run build`      | Construye el sitio para producción en `./dist/`  |
| `bun run preview`    | Vista previa de la build localmente              |
| `bunx astro ...`     | Ejecuta comandos CLI como `astro add`, `astro check` |
| `bunx astro -- --help` | Obtén ayuda sobre la CLI de Astro             |

## 📝 Agregar Contenido

1. Crea archivos `.md` o `.mdx` en `src/content/docs/`
2. Actualiza la barra lateral en `astro.config.mjs`
3. Los cambios se reflejan automáticamente en desarrollo

## 🌐 Deploy a Vercel

### Opción 1: Deploy desde GitHub

1. Sube el proyecto a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente que es un proyecto Astro
4. Configura el comando de build: `bun run build`
5. ¡Deploy!

### Opción 2: Deploy directo con Vercel CLI

```bash
# Instalar Vercel CLI globalmente
bun add -g vercel

# Deploy desde el directorio del proyecto
vercel

# Para producción
vercel --prod
```

## 📚 Documentación

- [Documentación de Starlight](https://starlight.astro.build/)
- [Documentación de Astro](https://docs.astro.build)
- [Guía de deploy en Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
