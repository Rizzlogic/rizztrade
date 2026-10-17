// Vercel Serverless Function: set ANTHROPIC_API_KEY di Project Settings > Environment Variables
module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Gunakan POST" });
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: "ANTHROPIC_API_KEY belum diatur" });
  const { candles, tf, live } = req.body || {};
  if (!Array.isArray(candles) || candles.length < 5 || candles.length > 60 ||
      !candles.every(c => Array.isArray(c) && c.length === 4 && c.every(Number.isFinite)))
    return res.status(400).json({ error: "Data candle tidak valid" });
  const prompt = `Kamu analis teknikal XAUUSD. ${live === true ? "" : "PENTING: candle ini data contoh simulasi, bukan pasar asli; sebut itu di risiko dan keyakinan maksimal 30. "}Timeframe ${String(tf).slice(0, 4)}. Candle [open,high,low,close] dari lama ke baru:\n${JSON.stringify(candles)}\nBalas HANYA JSON: {"bias":"NAIK|TURUN|SIDEWAYS","keyakinan":angka 0-75,"zona_entry":"teks","stop_loss":"teks","take_profit":"teks","alasan":["maks 4 poin"],"risiko":"satu kalimat"}. Bahasa Indonesia, sederhana untuk pemula. Jangan klaim kepastian.`;
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: "claude-sonnet-5-5", max_tokens: 800, messages: [{ role: "user", content: prompt }] })
    });
    const d = await r.json();
    if (!r.ok) return res.status(502).json({ error: "API Claude menolak permintaan" });
    const t = (d.content || []).map(x => x.text || "").join("").replace(/```json|```/g, "").trim();
    return res.status(200).json(JSON.parse(t));
  } catch (e) {
    return res.status(502).json({ error: "Jawaban tidak bisa diproses" });
  }
};
