// Vercel Serverless Function. Env var: TWELVEDATA_API_KEY (twelvedata.com)
const IV = { M15: "15min", H1: "1h", H4: "4h", D1: "1day" };
module.exports = async (req, res) => {
  const key = process.env.TWELVEDATA_API_KEY;
  if (!key) return res.status(500).json({ error: "TWELVEDATA_API_KEY belum diatur" });
  const iv = IV[req.query.tf];
  if (!iv) return res.status(400).json({ error: "Timeframe tidak valid" });
  try {
    const u = `https://api.twelvedata.com/time_series?symbol=XAU%2FUSD&interval=${iv}&outputsize=60&apikey=${encodeURIComponent(key)}`;
    const d = await (await fetch(u)).json();
    if (d.status === "error" || !Array.isArray(d.values))
      return res.status(502).json({ error: String(d.message || "Data tidak tersedia").split(key).join("***") });
    const v = d.values.slice().sort((a, b) => (a.datetime < b.datetime ? -1 : 1));
    const candles = v.map(x => ({ o: +x.open, h: +x.high, l: +x.low, c: +x.close }))
      .filter(x => [x.o, x.h, x.l, x.c].every(Number.isFinite));
    if (candles.length < 20) return res.status(502).json({ error: "Data tidak cukup" });
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({ candles, last: v[v.length - 1].datetime, source: "Twelve Data" });
  } catch (e) {
    return res.status(502).json({ error: "Gagal mengambil data" });
  }
};
