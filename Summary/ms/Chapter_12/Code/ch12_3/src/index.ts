import express from "express";

const app = express(),
    port = 4000;

app.get("/", (req, res) => res.json({ message: "Hello World!" }))
    .get("/users/:skip/:limit", (req, res) => {
        const { skip, limit } = req.params;
        res.json({ skip, limit });
    })
    .listen(port, () => console.log(`http://localhost:${port} started...`));
