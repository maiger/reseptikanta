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

### Compile and Minify for Production

```sh
npm run build
```

### Push to gh-pages

(https://www.youtube.com/watch?v=yo2bMGnIKE8)

1. Update versio number
2. Run:

```sh
npm run build
npm run deploy
git add dist -f
git commit -m "..."
git subtree push --prefix dist origin gh-pages
```

### TODO:

- General

  - Tests

- New Features
  - Favourite recipes
  - Shopping cart
  - Add new recipes form
