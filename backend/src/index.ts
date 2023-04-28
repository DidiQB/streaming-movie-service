import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { json } from "express";
import mongoose from 'mongoose';
import { Movie } from "./models/movieModels";
import { Search } from "./models/searchModels";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(json());


mongoose.connect(`mongodb+srv://coderaiders5:${process.env.MA_PASSWORD}@coderaiders.9tgceeu.mongodb.net/Streaming?retryWrites=true&w=majority`)
  .then(() => console.log('Connected to MongoDB!'));

// ENDPOINTS

app.get('/movie/:id', async (req, res) => {
  try {
    const movieId = req.params.id;
    console.log(movieId);
    const oneMovie = await Movie.findOne({ imdbid: movieId });
    return res.status(200).json(oneMovie);
  } catch (error: any) {
    console.log(error.stack)
    res.status(500).json({ message: error.message });
  }
});


app.get('/movies', async (_req, res) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});


app.post('/movie', async (req, res) => {
  const { imdbid } = req.body;

  try {
    const existingMovie = await Movie.findOne({ imdbid });

    if (existingMovie) {
      return res.status(400).json({ message: 'Movie already exists' });
    }

    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});


app.delete('/movie/:id', async (req, res) => {
  try {
    const movieId = req.params.id;
    const deleteMovie = await Movie.deleteOne({ imdbid: movieId });
    if (deleteMovie.deletedCount === 0) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(204).json({ message: 'Movie deleted succesfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
})


app.put('/movies/', async (_req, res) => {
  try {
    const updateMovies = await Movie.updateOne({});
    return res.status(200).json(updateMovies);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});


app.get('/search', async (req, res) => {
  try {
    const { title } = req.query;
    const query: MovieQuery = {};
    if (typeof title === 'string') {
      query.title = { $regex: title, $options: 'i' }; // using regex to perform case-insensitive search
    }
    const movies = await Search.find(query);
    return res.status(200).json(movies);
  } catch (error: any) {
    console.log(error.stack);
    res.status(500).json({ message: error.message });
  }
});

interface MovieQuery {
  title?: {
    $regex: string;
    $options: string;
  };
  year?: number;
}


app.post('/search', async (req, res) => {
  const { imdbid } = req.body;

  try {
    const existingMovie = await Search.findOne({ imdbid });

    if (existingMovie) {
      return res.status(400).json({ message: 'Movie already exists' });
    }

    const movie = await Search.create(req.body);
    res.status(201).json(movie);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});


app.use("*", (_req, res) => {
  res.status(400).json({
    message: "Invalid endpoint",
  });
});

app.listen(PORT, () =>
  console.log(`Remember to take breaks. Running on localhost:${PORT}`)
);