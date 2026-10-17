# RIZZTRADE
Situs statis multi-halaman (index, belajar, alat, demo, jurnal) + 1 serverless function (api/predict.js). Tema terang dan gelap. Tanpa build step.

## Update situs
Ganti file di GitHub (nama sama), commit. Vercel otomatis deploy ulang sekitar 1 menit.
Fitur Prediksi butuh Environment Variable `ANTHROPIC_API_KEY` di Vercel.

## Harga live
Tambahkan Environment Variable `TWELVEDATA_API_KEY` (twelvedata.com, ada paket gratis), lalu Redeploy.
Tanpa itu, grafik memakai data contoh dan diberi label. Hasil di-cache 5 menit agar kuota hemat.
