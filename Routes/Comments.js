import express from "express";
import fs from "fs";


const router = express.Router();

router.get("/:id/comments",(req, res)=>{
  try{

    const commentsFile = fs.readFileSync("./data/photos.json");
    const comments = JSON.parse(commentsFile);
    //get id
    const id = req.params.id;
    //look for single photo's comments
    const commentIndividual = comments.find((comment) => comment.id === id).comments;
    
    // if comment not found
    if(!commentIndividual){
      console.log("comment not found for ID", id);
      return req.statusCode(404).json({error: "comment not found"});
    }
    return res.json(commentIndividual);
  } catch (error){
    console.error("Error fetching comment", error);
    res.status(500).json({error:"internal error"});
  }
})

export default router;