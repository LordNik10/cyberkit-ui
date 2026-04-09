# @lordnik10/cyberkit-ui

React component library.

## Styles (required)

Components rely on CSS custom properties and bundled styles. Import the stylesheet once in your app (before or with your root layout):

```ts
import '@lordnik10/cyberkit-ui/styles.css'
```

Then import components as usual:

```ts
import { Button } from '@lordnik10/cyberkit-ui'
```

## Storybook

```bash
npm run storybook
```

Static export: `npm run build-storybook` (output in `storybook-static/`).

### Theming

Override tokens on `:root` (or any ancestor) to customize colors without changing components:

```css
:root {
  --ck-color-primary: #7c3aed;
  --ck-color-primary-contrast: #ffffff;
}
```

Primitive variables (e.g. `--ck-blue-500`) are optional building blocks; prefer overriding semantic `--ck-color-*` values when possible.
