// app.test.js
const request = require("supertest");
const app = require("../app");

describe("POST /api/query", () => {
  it("should return available desks", async () => {
    const res = await request(app)
      .post("/api/query")
      .send({ query: "Find me an available standing desk near the marketing team on the 3rd floor for tomorrow afternoon." });

    expect(res.statusCode).toEqual(200);
    expect(res.body.desks.length).toBeGreaterThan(0);
  });
});
