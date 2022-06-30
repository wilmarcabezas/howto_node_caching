import express from "express";
import axios from "axios";
import { createClient } from "redis";
import responseTime from "response-time";

const app = express();

// Connecting to redis
const client = createClient({
  host: "localhost",
  port: 6379,
});

app.use(responseTime());


app.get("/", async (req, res, next) => {
    try {
      // Search Data in Redis
      const reply = await client.get("character");
  
      // if exists returns from redis and finish with response
      if (reply) return res.send(JSON.parse(reply));
  
      // Fetching Data from Rick and Morty API
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
  
      // Saving the results in Redis. The "EX" and 10, sets an expiration of 10 Seconds
      const saveResult = await client.set(
        "character",
        JSON.stringify(response.data),
        {
          EX: 10,
        }
      );
      console.log(saveResult)
  
      // resond to client
      res.send(response.data);
    } catch (error) {
      res.send(error.message);
    }
  });

async function main() {
  await client.connect();
  app.listen(3000);
  console.log("server listen on port 3000");
}

main();