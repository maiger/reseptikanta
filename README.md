# reseptikanta

Simple collection of recipes.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Tests

All tests

```sh
npm run test
```

Check coverage

```sh
npm run test:coverage
```

### Compile and Minify for Production

```sh
npm run build
npm run deploy
```

### Push to gh-pages

(https://www.youtube.com/watch?v=yo2bMGnIKE8)

1. Update versio number
2. Run:

```sh
git commit -m "..."
npm run build
npm run deploy
git add dist -f
git commit -m "Update dist"
git subtree push --prefix dist origin gh-pages
```

### TODO:

- Fixes

  - Recipe detail X-scroll on small screens?

- New Features
  - Remember selected recipe sorting / search words/tags
  - Pagination?
  - Shopping cart
  - Add new recipes form
