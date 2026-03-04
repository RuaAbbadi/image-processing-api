import sharp from "sharp";
import path from "path";
import fs from "fs";
const resizeImage = async (
  fileName: string,
  width: number,
  height: number,
): Promise<string> => {
  const inputPath = path.resolve(`assets/full/${fileName}.jpg`);
  const outputPath = path.resolve(
    `assets/thumb/${fileName}_${width}_${height}.jpg`,
  );

  if (fs.existsSync(outputPath)) {
    return outputPath;
  }

  await sharp(inputPath).resize(width, height).toFile(outputPath);

  return outputPath;
};

export default resizeImage;
