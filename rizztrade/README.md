# RIZZTRADE
Situs statis (HTML/CSS/JS) + 1 serverless function. Tema terang dan gelap (tombol di pojok kanan atas). Tanpa build step.

## Deploy ke Vercel
1. Upload folder ini ke GitHub, lalu Vercel > Add New Project > pilih repo (Framework: Other).
2. Settings > Environment Variables: tambah `ANTHROPIC_API_KEY` (dari console.anthropic.com).
3. Deploy. Fitur Prediksi memakai `/api/predict`.
Atau via CLI: `npm i -g vercel && vercel --prod`
