import express from "express";
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("KawaiiOps is alive! 💖🌸✨");
});

app.listen(PORT, () => {
    console.log(`🚀 KawaiiOps server running at http://localhost:${PORT}`);
});
 
