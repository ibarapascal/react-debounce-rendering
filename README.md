# react-debounce-rendering

[react-debounce-render](https://github.com/podefr/react-debounce-render) + typescript

```tsx
const debouncedComponent = debounceRender(<YourComponent>, 1000, {})
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