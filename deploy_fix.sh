#!/bin/bash

# 1. Memperbaiki format package.json (menghapus duplikasi "homepage" dan memperbaiki format)
echo "Memperbaiki format package.json"
cat > package.json <<EOL
{
  "homepage": "https://DwiEkoRaharjo-SKom.github.io/portfolio-react",
  "name": "portfolio-react",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^4.10.1",
    "react-router-dom": "^6.14.2"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "vite": "^4.5.14"
  }
}
EOL

# 2. Menambahkan basename pada BrowserRouter di src/main.jsx
echo "Menambahkan basename pada BrowserRouter di src/main.jsx"
sed -i 's|import ReactDOM from "react-dom/client";|import { BrowserRouter } from "react-router-dom";\nimport ReactDOM from "react-dom/client";|' src/main.jsx
sed -i 's|root.render(<App />);|root.render(\n  <BrowserRouter basename={import.meta.env.BASE_URL}>\n    <App />\n  </BrowserRouter>\n);|' src/main.jsx

# 3. Menjalankan npm install untuk memastikan dependensi terinstall
echo "Menjalankan npm install"
npm install

# 4. Melakukan build aplikasi
echo "Membuat build aplikasi"
npm run build

# 5. Deploy ke GitHub Pages
echo "Deploying ke GitHub Pages"
npm run deploy

# 6. Menambahkan perubahan ke git dan melakukan commit
echo "Menambahkan perubahan ke Git dan melakukan commit"
git add .
git commit -m "fix: update package.json and add basename for GitHub Pages deployment"
git push origin main

echo "Proses selesai! Aplikasi telah di-deploy ke GitHub Pages."