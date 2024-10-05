import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", (req, res) => {
   res.sendFile("/index.html");
});

app.get("/wat-ik-doe", (req, res) => {
   res.send("Dit is de wat die ik pagina");
});

app.get("/contact", (req, res) => {
   res.send("Dit is de contact pagina");
});

app.listen(port, () => {
   console.log(`Server is running on port ${3000}`);
})
