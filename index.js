import express from "express";
import cors from "cors";
import "dotenv/config";
import PhotosRoutes from "./Routes/Photos.js";
import PhotoDetailsRoutes from "./Routes/PhotoDetails.js";
import TagsRoutes from "./Routes/Tags.js";
import CommentsRoutes from "./Routes/Comments.js";

//define the port
const port = process.env.PORT ?? 5050;

//create an express "instance"
const app = express();

//enable CORS
app.use(cors());

//serve static files
app.use(express.static("public"));

app.get(express.json());

app.get("/",(req,res) =>{
  res.send("hello");
});

app.use("/photos",PhotosRoutes);

app.use("/photos",PhotoDetailsRoutes);

app.use("/tags",TagsRoutes);

app.use("/photos", CommentsRoutes);



app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
  
});