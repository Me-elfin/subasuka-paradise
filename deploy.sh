#!/bin/bash

# ─────────────────────────────────────────
#  deploy.sh — Subasuka Paradise
#  Usage: ./deploy.sh "pesan perubahan"
# ─────────────────────────────────────────

# Cek apakah pesan commit disertakan
if [ -z "$1" ]; then
  echo "❌ Harap sertakan pesan perubahan."
  echo "   Contoh: ./deploy.sh \"update menu\""
  exit 1
fi

echo "🚀 Memulai deploy ke Vercel..."
echo ""

# Stage semua perubahan
git add .

# Commit dengan pesan dari argumen
git commit -m "$1"

# Push ke GitHub → otomatis trigger Vercel
git push

echo ""
echo "✅ Selesai! Vercel sedang deploy otomatis."
echo "🔗 Cek live: https://subasuka-paradise.vercel.app"
