import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { json } from "express";
import { v4 as uuidv4 } from "uuid";
import mongoose from 'mongoose';
import { Movie } from "./models/movieModels";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(json());

// Create Connection to MongoDB
mongoose.connect(`mongodb+srv://coderaiders5:${process.env.MA_PASSWORD}@coderaiders.9tgceeu.mongodb.net/Streaming?retryWrites=true&w=majority`)
    .then(() => console.log('Connected to MongoDB!'));

app.get

app.post('/movie', async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const movie = await Movie.create(req.body);
        res.status(200).json(movie);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// app.delete
// app.put
app.use("*", (req, res) => {
    res.status(400).json({
        message: "Trying to find easter eggs? There are only 3 end points!",
    });
});

app.listen(PORT, () =>
    console.log(`Remember to take breaks. Running on localhost:${PORT}`)
);

console.log('Hello world!')

console.log("hello 2")