# @lordnik10/cyberkit-ui

Libreria di componenti **React** per interfacce coerenti. Lo stile si basa su **variabili CSS** (token `--ck-*`) e su un foglio di stile **pubblicato nel pacchetto**: importandolo una sola volta nell’app, i componenti ricevono colori, spaziature e tipografia allineati. Puoi personalizzare l’aspetto **senza forkare i componenti**, sovrascrivendo i token su `:root` o su un contenitore antenato.

## Installazione

```bash
npm install @lordnik10/cyberkit-ui
```

**Peer dependencies** (obbligatorie nell’app che consuma la libreria):

- `react` ^19.2.4
- `react-dom` ^19.2.4

## Stili (obbligatori)

I componenti dipendono dai token CSS e dal CSS bundlato. Importa il foglio di stile **una volta** (ad esempio nel layout radice o prima del primo utilizzo):

```ts
import '@lordnik10/cyberkit-ui/styles.css'
```

Poi importa i componenti come di consueto:

```ts
import { Button, Input } from '@lordnik10/cyberkit-ui'
```

## Componenti

| Componente | Note |
|------------|------|
| **Button** | Varianti (es. primary, secondary, outlined). Documentato in Storybook. |
| **Input** | Campo di testo stilizzato con i token della libreria. |
| **Select** | Presente nel codice sorgente del repository e nelle story di Storybook; **non è ancora esportato** da `src/index.ts`, quindi **non fa parte dell’API pubblica del pacchetto** finché non viene aggiunto l’export. |

L’entry pubblica del package (`exports` su `"."`) espone attualmente **Button** e **Input**.

## Test dei componenti

I componenti sono stati testati con **Vitest** usando **snapshot testing**: il rendering dei componenti viene confrontato con baseline salvate (file `*.snap` versionati), così si rilevano regressioni nella struttura del markup senza dover scrivere asserzioni esplicite per ogni nodo.

Per lanciare la suite di test dalla root del repository:

```bash
npm run test
```

Per la qualità del codice è disponibile anche il lint:

```bash
npm run lint
```

La verifica visiva e il comportamento in contesto restano supportati da **Storybook** (vedi sotto).

## Storybook

Storybook serve a **documentare e provare** i componenti in isolamento.

- **Avvio in sviluppo** (porta predefinita **6006**):

  ```bash
  npm run storybook
  ```

- **Build statica** (output in `storybook-static/`, adatta a hosting statico o CI):

  ```bash
  npm run build-storybook
  ```

**Configurazione attuale:**

- Framework: **Storybook 10** con **`@storybook/react-vite`** (allineato a Vite).
- Add-on: **`@storybook/addon-docs`** (documentazione) e **`@storybook/addon-a11y`** (controlli di accessibilità).
- Le story sono file `*.stories.tsx` (e opzionalmente `*.mdx`) sotto `src/`.
- Le story dei componenti usano il formato **CSF 3** (`Meta`, `StoryObj`); dove presente, il tag **`autodocs`** genera pagine di documentazione automatiche da Storybook.
- In **`.storybook/preview.ts`** viene importato `src/styles/tokens.css`, così le anteprime usano gli stessi token della libreria.

## Theming

Sovrascrivi i token su `:root` (o su un antenato) per cambiare colori senza modificare i componenti:

```css
:root {
  --ck-color-primary: #7c3aed;
  --ck-color-primary-contrast: #ffffff;
}
```

Le variabili primitive (es. `--ck-blue-500`) sono mattoni opzionali; quando possibile preferisci sovrascrivere i token semantici `--ck-color-*`.

## Sviluppo della libreria

Dal clone del repository:

```bash
npm install
npm run build
```

Genera `dist/` (bundle ESM/CJS, dichiarazioni TypeScript e `cyberkit-ui.css`).
