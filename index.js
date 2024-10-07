import express from "express";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public"))); 


app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/wat-ik-doe", (req, res) => {
   res.sendFile(path.join(__dirname, "public", "views", "wat-doe-ik.html"));
});

app.get("/contact", (req, res) => {
   res.sendFile(path.join(__dirname, "public", "views", "contact.html")); 
});

app.listen(port, () => {
   console.log(`Server is running on port ${3000}`);
});
