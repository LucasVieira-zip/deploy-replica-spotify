import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://lucasvieira:zigzagbro@cluster-replicaspotify.kjetv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-ReplicaSpotify";

const client = new MongoClient(URI);

export const db = client.db("Spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
