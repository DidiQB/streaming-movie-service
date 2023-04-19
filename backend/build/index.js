"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_2 = require("express");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use((0, express_2.json)());
// app.get
// app.post
// app.delete
// app.put
app.use("*", (req, res) => {
    res.status(400).json({
        message: "Trying to find easter eggs? There are only 3 end points!",
    });
});
app.listen(PORT, () => console.log(`Remember to take breaks. Running on localhost:${PORT}`));
console.log('Hello world!');
console.log("hello 2");
