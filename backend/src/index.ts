import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { json } from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(json());

// app.get
// app.post
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