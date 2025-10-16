import { pool } from "./pool.js";

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username])
}

async function searchUsernames(searchQuery){
  const { rows } = await pool.query("SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER($1)", [`%${searchQuery}%`]);
  return rows;
}

async function deleteUsernames(){
  await pool.query("DELETE FROM usernames")
}





export default {getAllUsernames, insertUsername, searchUsernames, deleteUsernames}