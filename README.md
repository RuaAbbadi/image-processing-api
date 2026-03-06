# Image Processing API

This project is a simple **Node.js + TypeScript API** that resizes images dynamically using **Sharp**.  
It can be used as a placeholder API during development or to serve optimized images for a frontend application.


## Installation
install dependencies: npm install

# Scripts
### Start the server 
npm run start 

### Development mode
npm run dev 
Runs the server using nodemon 

### Build the project
npm run build


### Run tests
npm run test
Runs **Jasmine tests** after building the project.

### Run linter
npm run lint
Checks code quality using **ESLint**.

### Format code
npm run format


## Project Structure

src/
routes/
utilities/
tests/
app.ts
index.ts

assets/
full/ → original images
thumb/ → resized images

build/ → compiled JavaScript


## API Endpoint

### Resize Image

Endpoint:

/api/images

Example request:

http://localhost:3000/api/images?fileName=encenadaport&width=200&height=200

### Query Parameters

| Parameter | Description |
|-----------|-------------|
| fileName | Name of the image inside `assets/full` |
| width | Desired image width |
| height | Desired image height |


### Supported Image Formats

The API supports the following image formats:

jpg
jpeg
png

