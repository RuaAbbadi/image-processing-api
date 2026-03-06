import express from "express";
import imagesRoute from "./routes/images";

const app = express();

app.use("/api/images", imagesRoute);

app.get("/", (req, res) => {
  res.send("Image Processing API");
});


export default app;
