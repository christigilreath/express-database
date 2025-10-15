import { fileURLToPath } from "url";
import path from "path";
import db from "../db/queries.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const getUsernames = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

const createUsernameGet = async (req, res) =>{
const filePath = path.join(__dirname, "usernameForm.html");
  res.sendFile(filePath);
}

const createUsernamePost = async (req, res)=>{
    const {username} = req.body
    await db.insertUsername(username)
    res.redirect("/")
}

export {getUsernames, createUsernameGet, createUsernamePost}