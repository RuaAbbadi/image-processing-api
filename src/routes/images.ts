import express from "express";
import resizeImage from "../utilities/resizeImage";
const router = express.Router();

router.get("/", async (req, res) => {
  const fileName = req.query.fileName as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!fileName || !width || !height) {
    res.status(400).send("Missing Parameters");
  }//if

  try {
    const imagePath = await resizeImage(fileName, width, height);
    res.sendFile(imagePath);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error while processing image");
  }
});

export default router;
