import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        rating: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        genre: {
            type: Array,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        trailer: {
            type: String,
            required: true
        },
        imdbid: {
            type: String,
            required: true
        }
    }
)

export const Movie = mongoose.model('Movies', movieSchema);