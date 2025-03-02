import express from "express";
import cors from "cors";
import "dotenv/config";
import PhotosRoutes from "./Routes/Photos.js";
import PhotoDetailsRoutes from "./Routes/PhotoDetails.js";
import TagsRoutes from "./Routes/Tags.js";
import CommentsRoutes from "./Routes/Comments.js";
import PostCommentsRoutes from "./Routes/PostComments.js";

//define the port
const port = process.env.PORT ?? 5050;

//create an express "instance"
const app = express();

//enable CORS
app.use(cors());

//serve static files
app.use(express.static("public"));

app.use(express.json());

app.get("/",(req,res) =>{
  res.send("hello");
});

app.use("/",PhotosRoutes);

app.use("/",PhotoDetailsRoutes);

app.use("/",TagsRoutes);

app.use("/", CommentsRoutes);

app.use("/", PostCommentsRoutes);



app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
  
});