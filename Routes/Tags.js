import express from "express";
const router = express.Router();
import fs from "fs";

router.get("/tags", (req, res) => {
  try {
    //read th Json file with all the books data
    const photoTagsFile = fs.readFileSync("./data/tags.json");
    const photoTags = JSON.parse(photoTagsFile);
    res.json(photoTags);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

export default router;
