import express from "express";
const router = express.Router();
import fs from "fs";



// we will mount this route modeule with a base path of: /photos
// GET / (GET/books/) -> respond with a list of books

router.get("/", (req, res) => {
  try{
    //read th Json file with all the books data
    const photosFile = fs.readFileSync("./data/photos.json");
    const photosFile_js = JSON.parse(photosFile);
    res.json(photosFile_js);
  }catch(error){
    console.log(error);
    res.status(500);
  }
});


export default router;

