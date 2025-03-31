import React, { useState, useEffect } from "react";

function App() {
  const [metrics, setMetrics] = useState(null);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch(`http://localhost:3001/metrics?timestamp=${new Date().getTime()}`);
        const data = await response.json();
        setMetrics(data);
        setUpdate((prev) => prev + 1); // 🔥 Forces React to re-render
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchMetrics(); // Fetch immediately
    const interval = setInterval(fetchMetrics, 5000); // Refresh every 5 sec

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to right, #ffdde1, #ee9ca7)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#5c5c8a",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#ff69b4", textShadow: "2px 2px white" }}>
        🎀 KawaiiOps Dashboard 🎀
      </h1>

      {metrics ? (
        <div
          key={update}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            width: "320px",
          }}
        >
          <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>🌸 System Metrics 🌸</p>
          <p style={{ fontSize: "1.2rem" }}>✨ <strong>CPU Load:</strong> {metrics.cpuload ? metrics.cpuload.toFixed(2) : "N/A"}</p>
          <p style={{ fontSize: "1.2rem" }}>💾 <strong>Total Memory:</strong> {metrics.totalMemory ? Math.round(metrics.totalMemory / 1024 / 1024) : "N/A"} MB</p>
          <p style={{ fontSize: "1.2rem" }}>🩷 <strong>Free Memory:</strong> {metrics.freeMemory ? Math.round(metrics.freeMemory / 1024 / 1024) : "N/A"} MB</p>
          <p style={{ fontSize: "1.2rem" }}>📊 <strong>Used Memory:</strong> {metrics.totalMemory && metrics.freeMemory ? Math.round((metrics.totalMemory - metrics.freeMemory) / 1024 / 1024) : "N/A"} MB</p>
          <p style={{ fontSize: "1.2rem" }}>⏳ <strong>Uptime:</strong> {metrics.uptime ? Math.floor(metrics.uptime / 60) : "N/A"} minutes</p>
          <p style={{ fontSize: "1.2rem" }}>🔥 <strong>Platform:</strong> {metrics.platform || "N/A"}</p>
          <p style={{ fontSize: "1.2rem" }}>💡 <strong>CPU Model:</strong> {metrics.cpuModel || "N/A"}</p>
        </div>
      ) : (
        <p style={{ fontSize: "1.2rem", color: "white" }}>Loading system metrics... ⏳</p>
      )}
    </div>
  );
}

export default App;