# Image Processing API

This project is a simple **Node.js + TypeScript API** that resizes images dynamically using **Sharp**.
It can be used as a placeholder API during development or to serve optimized images.

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Build the project

```bash
npm run build
```

### Start the server

```bash
npm run start
```

Server will run on:

```
http://localhost:3000
```

---

## 📌 API Endpoint

### GET /api/images

Resize an image and return the processed file.

---

### 🔗 Quick Test (Copy & Paste)

Use the following URL to quickly test the API in your browser:

http://localhost:3000/api/images?fileName=encenadaport&width=200&height=200

---

### ✅ Expected Output

* Returns a **resized image file**
* The image will also be cached in `assets/thumb`
* Returns **status 200 OK**

---

### 📊 Status Codes

| Status Code | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| 200         | Image resized successfully and returned                      |
| 400         | Invalid parameters (e.g., missing, zero, or negative values) |
| 404         | Image not found in `assets/full`                             |
| 500         | Internal server error during processing                      |

---


## 🔍 Expected Behavior

* ✅ If the image exists → returns resized image
* ❌ If image does not exist → returns **404 error**
* ❌ If parameters are invalid → returns **400 error**

---

## 📥 Example Responses

### ❌ Invalid parameters

```json
{
  "error": "width and height must be greater than 0"
}
```

### ❌ Image not found

```json
{
  "error": "Image 'example' not found in assets/full"
}
```

---

## 📦 Query Parameters

| Parameter | Description                                                |
| --------- | ---------------------------------------------------------- |
| fileName  | Name of the image inside `assets/full` (without extension) |
| width     | Desired image width (must be > 0)                          |
| height    | Desired image height (must be > 0)                         |

---

## 🖼️ Supported Image Formats

* jpg
* jpeg
* png

---

## 📁 Project Structure

```
src/
  routes/
  utilities/
  tests/
  app.ts
  index.ts

assets/
  full/   → original images
  thumb/  → resized (cached) images

build/ → compiled JavaScript
```

---

## ⚙️ Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| npm run start  | Start production server        |
| npm run dev    | Run with nodemon (development) |
| npm run build  | Compile TypeScript             |
| npm run test   | Run Jasmine tests              |
| npm run lint   | Run ESLint                     |
| npm run format | Format code with Prettier      |

---

## 💡 Notes

* Resized images are cached in `assets/thumb`
* The cache folder is created automatically if it does not exist
* The API avoids reprocessing existing images for better performance
