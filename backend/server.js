const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/metrics", (req, res) => {
  const metrics = {
    cpuLoad: os.loadavg()[0],
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    uptime: os.uptime(), // 🕒 System uptime in seconds
    numCPUs: os.cpus().length, // 💾 Number of CPU cores
    platform: os.platform(), // 💻 OS platform (Windows/Linux/macOS)
  };

  res.json(metrics);
});

app.listen(PORT, () => {
  console.log('🚀 Server is running on http://localhost:' + PORT +'/metrics');
});







