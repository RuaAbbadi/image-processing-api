import sharp from "sharp";
import path from "path";
import fs from "fs";

//support multiple image extensions
const supportedExtensions: string[] = ["jpg", "jpeg", "png"];

// Find the image and return its path and extension
const findImagePath = (
  fileName: string,
): { path: string; ext: string } | null => {
  const fullDir = path.resolve(__dirname, "../../assets/full");

  for (const ext of supportedExtensions) {
    const fullPath = path.join(fullDir, `${fileName}.${ext}`);

    console.log("Checking:", fullPath);

    if (fs.existsSync(fullPath)) {
      return { path: fullPath, ext };
    }
  } //findImagePath

  return null;
};

const resizeImage = async (
  fileName: string,
  width: number,
  height: number,
): Promise<string> => {
  const image = findImagePath(fileName);

  if (!image) {
    throw new Error("Image not found");
  } //if

  const thumbDir = path.resolve(__dirname, "../../assets/thumb");
  if (!fs.existsSync(thumbDir)) {
    fs.mkdirSync(thumbDir, { recursive: true });
  }

  const outputPath = path.join(
    thumbDir,
    `${fileName}_${width}_${height}.${image.ext}`,
  );

  //caching - return the cached Image if it exists
  if (!fs.existsSync(outputPath)) {
    await sharp(image.path).resize(width, height).toFile(outputPath);
  } //if

  return outputPath;
}; //resizeImage

export default resizeImage;
