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

// ENDPOINTS

// app.get by :id Do we need it???
app.get('/movie/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        const oneMovie = await Movie.findOne({ _id: movieId }); // has to be dynamic
        return res.status(200).json(oneMovie);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

//HOMEPAGE ON LOAD --> FIGURE OUT HOW
app.get('/movies', async (_req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

//HOMEPAGE --> ADD MOVIE TO LIST
app.post('/movie', async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// MY LIST PAGE /movie/favorites/:id
app.delete('/movie/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        const deleteQuote = await Movie.deleteOne({ _id: movieId });
        if (deleteQuote.deletedCount === 0) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(204).json({ message: 'Movie deleted succesfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.mmessage });
    }
})

// MY LIST PAGE /movie/favorites/:id   
// app.put - is it by id or do we have to get all of them back - update movie list

app.put('/movies/', async (req, res) => {
    try {
        const updateMovies = await Movie.updateOne({});
        return res.status(200).json(updateMovies);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

app.use("*", (_req, res) => {
    res.status(400).json({
        message: "Trying to find easter eggs? There are only 3 end points!",
    });
});

app.listen(PORT, () =>
    console.log(`Remember to take breaks. Running on localhost:${PORT}`)
);

console.log('Hello world!')

console.log("log end of index.ts")