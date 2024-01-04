# rive-vite-demo

```
npm i
npm run dev
```

## How was this created?

```
# https://vitejs.dev/guide/
npm create vite@latest . -- --template vanilla-ts

# https://help.rive.app/runtimes/overview/web-js
npm install @rive-app/canvas
```

Modified the loading with help of [@Aratmany](https://github.com/Aratmany) in this [thread](https://github.com/rive-app/rive-wasm/issues/342#issuecomment-1877085435). Thanks very much!

Added `src/vite-env-override.d.ts` for .riv files, included this in `src/vite-env.d.ts` ([Vite Client Types](https://vitejs.dev/guide/features.html#client-types)).
