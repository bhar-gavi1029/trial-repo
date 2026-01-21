
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "../index.html");
    res.sendFile(filePath);
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
