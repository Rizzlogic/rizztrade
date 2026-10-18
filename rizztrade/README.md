# RIZZTRADE
Situs statis multi-halaman: index, grafik (mode fokus), belajar, alat, demo (gaya MetaTrader), jurnal.
4 tema warna emas (tombol ◐ atau di Pengaturan ⚙). Serverless: api/candles.js (harga live), api/predict.js (prediksi AI).

## Environment Variables (Vercel > Settings > Environment Variables, lalu Redeploy)
- TWELVEDATA_API_KEY : harga live (twelvedata.com, ada paket gratis)
- ANTHROPIC_API_KEY  : prediksi AI (console.anthropic.com)

## Update situs
Timpa file di GitHub (nama sama), commit. Vercel deploy ulang sendiri sekitar 1 menit.
