# Portfolio Web v1

Sitio web personal estatico para publicar en GitHub Pages.

## Estructura

- `index.html`: Bio breve, competencias y contacto
- `trabajo.html`: Cronologia de piezas periodisticas y seccion "Mas alla del periodismo"
- `style.css`: Estilos globales

## Flujo recomendado de edicion

1. Actualiza contenido en `index.html` y `trabajo.html`.
2. Ajusta estilos en `style.css`.
3. Comprueba en navegador que no hay enlaces rotos.
4. Haz commit y publica.

## Checklist antes de publicar

- Sustituir el correo provisional (`contacto@ejemplo.com`) por el real.
- Sustituir URLs reales de LinkedIn/X/Bluesky en `index.html`.
- Verificar que los enlaces de articulos en `trabajo.html` abren correctamente.
- Revisar visualizacion en movil y escritorio.

## Publicacion en GitHub Pages

1. Inicializar git:

```bash
git init
git add .
git commit -m "v1 portfolio"
```

2. Crear un repositorio publico en GitHub.
3. Conectar remoto y subir:

```bash
git remote add origin <URL_DEL_REPO>
git branch -M main
git push -u origin main
```

4. Activar GitHub Pages:
- GitHub -> Settings -> Pages
- Source: Deploy from a branch
- Branch: `main` / `(root)`

5. Esperar la URL publica (ejemplo):
- `https://TU_USUARIO.github.io/TU_REPO/`
