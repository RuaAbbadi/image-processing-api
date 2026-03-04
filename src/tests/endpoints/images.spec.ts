import supertest from "supertest";
import app from "../../app";

const request = supertest(app);

describe("Image API Endpoint", () => {
  it("should return 200 when valid parameters are provided", async () => {
    const response = await request.get(
      "/api/images?fileName=encenadaport&width=200&height=200",
    );

    expect(response.status).toBe(200);
  });

  it("should return 400 when parameters are missing", async () => {
    const response = await request.get("/api/images");

    expect(response.status).toBe(400);
  });
});
