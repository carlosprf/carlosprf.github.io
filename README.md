# carlosprf.github.io

Web personal de portfolio / CV — HTML, CSS y JavaScript vanilla, sin build step, lista para GitHub Pages.

## Estructura

```
.
├── index.html          # Contenido en español (por defecto) + atributos data-i18n
├── css/styles.css       # Estilos, paleta, tema claro/oscuro, responsive
├── js/content.js        # Traducciones al inglés (diccionario)
├── js/main.js           # Toggle de idioma, tema, menú móvil, scroll reveal
└── assets/
    ├── images/profile.jpg
    └── cv/Carlos-Perez-Rodenas-CV.pdf
```

## Cómo desplegar en GitHub Pages (cuenta `carlosprf`)

Este repo se llama `carlosprf.github.io`, que es el nombre especial que GitHub
reserva para las **páginas de usuario**: todo lo que subas a la rama por
defecto se publica automáticamente en `https://carlosprf.github.io`, sin
configuración adicional de Pages.

1. **Crear el repositorio remoto** (si no existe todavía) usando la cuenta `carlosprf`:
   ```bash
   gh repo create carlosprf/carlosprf.github.io --public --source=. --remote=origin
   ```
   (ejecútalo desde dentro de esta carpeta; si tienes varias cuentas de `gh`
   autenticadas, comprueba antes con `gh auth status` que `carlosprf` es la
   cuenta activa, o añade `GH_TOKEN`/`gh auth switch --user carlosprf`).

2. **Primer commit y push**:
   ```bash
   git init
   git add .
   git commit -m "Primera versión del portfolio"
   git branch -M main
   git push -u origin main
   ```

3. Espera 1-2 minutos. La web estará publicada en:
   **https://carlosprf.github.io**

4. Cambios futuros: simplemente `git add`, `commit` y `push` — GitHub Pages
   redepliega automáticamente en cada push a `main`.

## Desarrollo local

No hace falta ningún servidor especial, pero para evitar problemas de rutas
relativas usa un servidor estático simple:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Contenido pendiente de completar

Antes de publicar, revisa **`CONTENIDO-PENDIENTE.md`** — ahí está la lista de
datos que faltan (proyectos de IA, marketing, libros, URL de LinkedIn, etc.)
y las decisiones de privacidad a confirmar (teléfono y fecha de nacimiento
del CV original).

Los placeholders en el código están marcados con `[algo pendiente]` en
`index.html` y `js/content.js` — búscalos con:

```bash
grep -rn "pendiente\|PLACEHOLDER\|completar\|fill in" index.html js/content.js
```

## Notas técnicas

- **Bilingüe (ES/EN)**: el español vive directamente en el HTML (mejor para
  SEO); el inglés vive en `js/content.js` como diccionario `data-i18n` → texto.
  El botón de idioma alterna entre ambos y recuerda la preferencia en
  `localStorage`.
- **Tema claro/oscuro**: respeta `prefers-color-scheme` del sistema por
  defecto, y el toggle manual se guarda en `localStorage`.
- **Sin frameworks**: no hay paso de build, todo es HTML/CSS/JS estático —
  compatible con GitHub Pages tal cual.
- **Accesibilidad**: skip-link, landmarks semánticos, `aria-label`/`aria-expanded`
  en los controles, respeta `prefers-reduced-motion`.
