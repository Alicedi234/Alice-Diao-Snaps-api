import express from "express";
const router = express.Router();
import fs from "fs";

router.get("/photos/:id", (req, res) => {
  try {
    //read jason file
    const photoDetailFile = fs.readFileSync("./data/photos.json");
    const photoDetails = JSON.parse(photoDetailFile);
    // get id
    const id = req.params.id;
    // look for the photo
    const individualPhoto = photoDetails.find((photo) => photo.id === id);

    // if photo not found
    if (!individualPhoto) {
      console.log("Photo not found for ID:", id);
      return res.status(404).json({ error: "Photo not found" });
    }

    // return photo
    return res.json(individualPhoto);
  } catch (error) {
    console.error("Error fetching photo details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
