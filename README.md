# Tailwind Demo

## Links
- [Tailwind](https://tailwindcss.com)
- [Tailwind Docs](https://tailwindcss.com/docs/installation)
- [PostCSS - transforming tailwind to css](https://postcss.org)
- [Tailwind UI - site with tailwind components (not free)](https://tailwindui.com/)
- [Tailwind UI Builder - for drag&drop components from tailwind ui (not free)](https://tailwind.build/)
- [Tailwind Components - site with tailwind components (free)](https://tailwindcomponents.com/)
- [Tailwind CSS IntelliSense - Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Extra Links 
- [Emmet - toolkit for enhances abbreviations (works very well with Tailwind)](https://emmet.io/)
- [Sizzy - great browser for RWD testing](https://sizzy.co)
- [Blisk - Sizzy free alternative](https://blisk.io/)
- [Refactoring UI - Tailwind authors book](https://refactoringui.com/book)

## Abstract
- Tailwind is the CSS library of managing and styling applications with a set of classes like in bootstrap bulma etc.
- `utility-first-css` is the principle rule of Tailwind -- A set of different classes for each css property or class range for fast development
- The creators are the authors of great book [refactoring UI](https://refactoringui.com/book)
- According to the authors, the missing classes make it easier to manage and standardize the styling (according to good design patterns)
- The perfect-pixel assumption is out of the question with tailwind

## Compared to other CSS frameworks
- No default theme
- No build-in UI components
- No opinion about how your site should look
- Much lighter (bootstrap = 308kb | tailwind = 27kb)


## Pros & Cons

### Cons
- Developer needs to know css very well to recognize most of the tailwind shortcuts (not so obvious all class names)
- Poor code readability with numerous classes
- Missing classes (e.g. can't be set: 'left: 25px' -- according to good designs patterns)
- 

### Pros
 - All styles are defined
 - Great for custom design compared to bootstrap
 - You don't have to come up with class names
 - Great documentation
 - Great for lightweight projects (tailwind base file amounts up to 27kb)
 - Tailwind CSS IntelliSense VS code plugin (generally it is game changer)

## Basic setup

### Init project

```shell script
yarn init -y
```

```shell script
yarn add tailwindcss postcss-cli autoprefixer -D
```
 
```shell script
npx tailwind init
```

or for tailwind config with every tailwind options

```shell script
npx tailwind init tailwind.config.js --full
```

### Configure processing CSS

#### Using Tailwind CLI

For simple projects or just giving Tailwind a spin, you can use the Tailwind CLI tool to process your CSS:

```shell script
npx tailwindcss build styles.css -o output.css
```

#### Using Tailwind with PostCSS (recommended)

```js
// postcss.config.js

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};

```
> PostCSS plugins:
> - autoprefixer - parse css and add vendor prefixes (add prefixes for every browser)
> - cssnano - css compression tool


### Configure tailwind css

```css
/* src/css/tailwind.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Adding basic tailwind settings to the output css file
- Reference to the tailwind library '@tailwind' and its properties 'x'

> - base -> basic tailwind styles
> - components -> components that we can use, but these are also individual classes
> - Utilities -> set of classes to create our ui

#### Custom css/components

Custom styles must be placed after components and before utilities to not override tailwind styles.

```css
.classname {
  @apply styles;
}
``` 

### Configure package.json

```json
{
  "name": "tailwind-intent-demo",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build:css": "env NODE_ENV=production postcss src/css/tailwind.css -o public/tailwind.css",
    "prettier": "prettier --write --config .prettierrc .",
    "start": "concurrently 'live-server --open=src --no-css-inject' 'postcss src/css/tailwind.css -o public/tailwind.css --watch'"
  },
  "devDependencies": {
    "autoprefixer": "^9.8.6",
    "concurrently": "^5.3.0",
    "cssnano": "^4.1.10",
    "live-server": "^1.2.1",
    "postcss-cli": "^7.1.1",
    "prettier": "^2.1.2",
    "tailwindcss": "^1.7.3"
  }
}
```

### Setup base index.html

```html
<!--src/index.html-->

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tailwind CSS - Demo</title>

    <link rel="stylesheet" href="./public/tailwind.css">
</head>
<body>

</body>
</html>
```




















