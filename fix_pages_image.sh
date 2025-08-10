#!/bin/bash
set -e

echo "==> Memastikan dijalankan di root proyek (ada package.json)..."
test -f package.json || { echo "ERROR: Jalankan dari folder proyek yang berisi package.json"; exit 1; }

echo "==> Set base Vite ke /portfolio-react/ (untuk GitHub Pages)"
cat > vite.config.js <<'EOF'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio-react/',
})
EOF

echo "==> Ganti semua 'process.env.PUBLIC_URL' menjadi 'import.meta.env.BASE_URL' di folder src (Vite way)"
# Hanya file JS/JSX/TS/TSX
find src -type f \( -name "*.jsx" -o -name "*.js" -o -name "*.tsx" -o -name "*.ts" \) -print0 \
  | xargs -0 sed -i 's/process\.env\.PUBLIC_URL/import.meta.env.BASE_URL/g'

echo "==> Cek file foto ada di public/"
if [ -f "public/Pas Foto Dwi 3X4.jpg" ]; then
  echo "   OK: public/Pas Foto Dwi 3X4.jpg ditemukan"
else
  echo "   WARNING: Foto tidak ditemukan di 'public/'. Pastikan nama & huruf besar-kecil persis sama."
fi

echo "==> Install gh-pages (jika belum)"
npm i -D gh-pages

echo "==> Build (Vite akan menggunakan base=/portfolio-react/)"
npm run build

echo "==> Deploy ke GitHub Pages (pakai dist)"
# Pastikan script di package.json: "deploy": "gh-pages -d dist"
# Kalau masih 'build', ganti ke 'dist' dulu.
npm run deploy

echo "==> Commit & push perubahan konfigurasi"
git add -A
git commit -m "fix(pages): use Vite BASE_URL and set base for GitHub Pages" || echo "   (Tidak ada yang berubah untuk di-commit)"
git push origin main || true

echo "==> SELESAI. Buka: https://DwiEkoRaharjo-SKom.github.io/portfolio-react"
echo "    Jika foto belum muncul, refresh pakai Ctrl+F5 (cache)."