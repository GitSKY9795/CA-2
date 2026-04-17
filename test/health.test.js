const request = require("supertest");
const app = require("../src/app");

describe("GET /health", () => {
  it("returns server status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(response.body.service).toBe("ca2-ci-cd-api");
    expect(response.body.timestamp).toBeDefined();
  });
});
