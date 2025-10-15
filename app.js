import express from "express";
import {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
} from "./controllers/usernames.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", getUsernames);

app.get("/new", createUsernameGet);

app.post("/new", createUsernamePost);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
