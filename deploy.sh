#!/bin/bash

# 1. Menambahkan homepage ke package.json
echo "Menambahkan homepage ke package.json"
sed -i '1i\
"homepage": "https://DwiEkoRaharjo-SKom.github.io/portfolio-react",' package.json

# 2. Menambahkan script predeploy dan deploy di package.json
echo "Menambahkan script predeploy dan deploy di package.json"
sed -i '/"scripts": {/a \
    "predeploy": "npm run build",\
    "deploy": "gh-pages -d build",' package.json

# 3. Menginstall gh-pages
echo "Menginstall gh-pages"
npm install gh-pages --save-dev

# 4. Menambahkan basename pada BrowserRouter di src/main.jsx
echo "Menambahkan basename pada BrowserRouter di src/main.jsx"
sed -i 's|import ReactDOM from "react-dom/client";|import { BrowserRouter } from "react-router-dom";\nimport ReactDOM from "react-dom/client";|' src/main.jsx
sed -i 's|root.render(<App />);|root.render(\n  <BrowserRouter basename={import.meta.env.BASE_URL}>\n    <App />\n  </BrowserRouter>\n);|' src/main.jsx

# 5. Membuat build dan deploy ke GitHub Pages
echo "Membuat build dan deploy ke GitHub Pages"
npm run build
npm run deploy

# 6. Menambahkan perubahan ke git dan melakukan commit
echo "Menambahkan dan commit perubahan ke Git"
git add .
git commit -m "fix: add basename for GitHub Pages deployment"
git push origin main

echo "Proses deploy ke GitHub Pages selesai!"