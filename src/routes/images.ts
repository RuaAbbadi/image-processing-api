import express from "express";
import path from "path";
import resizeImage from "../utilities/resizeImage";
const router = express.Router();

router.get("/", async (req, res) => {
  const fileName = req.query.fileName as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!fileName || !width || !height) {
     return res.status(400).json({
      error: "Missing required parameters: fileName, width, height",
    });
  } //if

  try {
    const imagePath = await resizeImage(fileName, width, height);
    const absolutePath = path.resolve(imagePath);
    res.sendFile(absolutePath);
  } catch (error) {
    if (error instanceof Error && error.message === "Image not found") {
      return res.status(404).json({
        error: `Image '${fileName}' not found in assets/full`,
      });
    }
    console.error(error);

    return res.status(500).json({
      error: "Failed to process image",
    });
  }
});

export default router;
