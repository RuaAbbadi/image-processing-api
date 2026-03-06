import express from "express";
import path from "path";
import resizeImage from "../utilities/resizeImage";
const router = express.Router();

router.get("/", async (req, res) => {
  const fileName = req.query.fileName as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  //Validate parameters 
   if (!fileName) {
    return res.status(400).json({
      error: "fileName parameter is required",
    });
  }

  if (isNaN(width) || isNaN(height)) {
    return res.status(400).json({
      error: "width and height must be valid numbers",
    });
  }

  if (width === 0 || height === 0) {
    return res.status(400).json({
      error: "width and height cannot be zero",
    });
  }

  if (width < 0 || height < 0) {
    return res.status(400).json({
      error: "width and height must be positive numbers",
    });
  }

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
