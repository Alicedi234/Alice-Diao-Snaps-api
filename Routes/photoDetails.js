import express from "express";
const router = express.Router();
import fs from "fs";

router.get("/:id", (req, res) => {
  try {
    //read jason file
    const photoDetailFile = fs.readFileSync("./data/photos.json");
    console.log("File content:", photoDetailFile); // 打印文件内容
    
    const photoDetails = JSON.parse(photoDetailFile);
    console.log("Parsed data:", photoDetails); // 打印解析后的数据

    // get id
    const id = req.params.id;
    console.log("Requested photoId:", id);

    // look for the photo
    const individualPhoto = photoDetails.find((photo) => photo.id === id);
    console.log("Found photo:", individualPhoto);

    // if photo not found
    if (!individualPhoto) {
      console.log("Photo not found for ID:", photoId); 
      return res.status(404).json({ error: "Photo not found" });
    }

    // return photo
    return res.json(individualPhoto);
  } catch (error) {
    // 处理错误
    console.error("Error fetching photo details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;