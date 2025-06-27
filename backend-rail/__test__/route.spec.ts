import { Request } from "zoltra";

const request = new Request();

describe("GET  home '/' route", () => {
  it("should return 404 for invalid route", async () => {
    await request.load();
    const response = await request.get("/home");
    expect(response.statusCode).toBe(404);
    request.close();
  });

  it("should return 200", async () => {
    await request.load();
    const response = await request.get("/");
    expect(response.statusCode).toBe(200);
    request.close();
  });
});
