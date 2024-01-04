# rive-vite-demo

Simple demo repository for usage of [Rive](https://rive.app/) in Vite projects. Have fun!

## Local setup

```
npm i
npm run dev
```

You can also open the repository in StackBlitz:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/mandrasch/rive-vite-demo)

_(If you experience errors, disable Ad or Tracking blockers)_

## TODOs / goals

- [ ] Integrate simple example for State Machines (https://marmelab.com/blog/2023/01/30/rive-animation-state-machine.html)

## How was this created?

```
# https://vitejs.dev/guide/
npm create vite@latest . -- --template vanilla-ts

# https://help.rive.app/runtimes/overview/web-js
npm install @rive-app/canvas
```

Modified the loading with help of [@Aratmany](https://github.com/Aratmany) in this [thread](https://github.com/rive-app/rive-wasm/issues/342#issuecomment-1877085435). Thanks very much!

Added `src/vite-env-override.d.ts` for .riv files, included this in `src/vite-env.d.ts` ([Vite Client Types](https://vitejs.dev/guide/features.html#client-types)).

## Credits

- vehicles.riv - example file provided by Rive
