<p align="center">
  <a href="https://www.npmjs.com/react-debounce-rendering"><img src="https://img.shields.io/npm/v/react-debounce-rendering.svg?label=%20&style=flat-square" alt="react-debounce-rendering NPM package" /></a>
  <a href="https://www.npmjs.com/react-debounce-rendering"><img src="https://img.shields.io/npm/dw/react-debounce-rendering.svg?style=flat-square" alt="Download arkit" /></a>
</p>

---

# react-debounce-rendering

[react-debounce-render](https://github.com/podefr/react-debounce-render) + typescript

```shell
npm install --save react-debounce-rendering
```

```tsx
const debouncedComponent = debounceRender(<YourComponent />, 1000, {})
```

Notice usage with redux:  

```tsx
connect(...)(debounceRender(YourComponent)) // This works well
debounceRender(connect(...)(YourComponent)) // This is not
```

## Publish a package for react + typescript

Refer to this article [link](https://codeburst.io/https-chidume-nnamdi-com-npm-module-in-typescript-12b3b22f0724)  

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./dist",
    "strict": true,
    "jsx": "react",
    "esModuleInterop": true,
  }
}
```

package.json

```json
  "dependencies": {
    "typescript": "^3.7.5"
  },
  "peerDependencies": {
    "react": "^16.12.0"
  },
  "devDependencies": {
    "@types/react": "^16.9.19"
  }
```

Use `typings` to generate `index.js` and `index.d.ts`

```shell
npm i -g typings -D
```

Build

```shell
tsc
```
