import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

export const runServer = (mongodb) => {
    const app = express(),
        port = 4000;

    app.use(bodyParser.urlencoded({ extended: true }))
        .use(cors())
        .get("/", (req, res) => res.json({ message: "Hello World!" }))
        .get("/users/:skip/:limit", async (req, res) => {
            const { skip, limit } = req.params;

            const userCollection = await mongodb.collection("users");
            const cursor = await userCollection
                .find({})
                .sort({ name: 1 })
                .skip(parseInt(skip))
                .limit(parseInt(limit));
            const result = await cursor.toArray();
            res.json(result);
        })
        .listen(port, () => console.log(`http://localhost:${port} started...`));
};
