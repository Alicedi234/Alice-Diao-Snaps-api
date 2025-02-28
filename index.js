import express from "express";
import cors from "cors";
import "dotenv/config";
import photosRoutes from "./Routes/photos.js";
import photoDetailsRoutes from "./Routes/photoDetails.js";
import Tags from "./Routes/Tags.js";

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

app.use("/photos",photosRoutes);

app.use("/photos",photoDetailsRoutes);

app.use("/tags",Tags);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
  
});