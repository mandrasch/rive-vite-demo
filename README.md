# rive-vite-demo

```
npm i
npm run dev
```

## TODOs

- [ ] add riv assets to vite config ([source](https://discord.com/channels/532365473602600965/532365473602600969/1118232275281252434), [source](https://discord.com/channels/532365473602600965/1085649291701407925/1085679308728709240))

```
export default defineConfig({
  ...
  vite: {
    assetsInclude: ['*/.riv'],
  },
});
``````

## How was this created?

```
# https://vitejs.dev/guide/
npm create vite@latest . -- --template vanilla-ts

# https://help.rive.app/runtimes/overview/web-js
npm install @rive-app/canvas
```