import { Request } from "zoltra";

const request = new Request();

const getJson = (res: any) => JSON.parse(res.body);

describe("POST /auth/login", () => {
  it("should return 401 for invalid credentials", async () => {
    await request.load();
    const response = await request.post("/auth/login", {
      email: "testuser@gmail.com",
      password: "testpass",
    });
    const json = getJson(response);
    expect(response.statusCode).toBe(401);
    expect(json.message).toBe("Invalid email or password.");
  });

  it("should return 400 for invalid email format", async () => {
    const response = await request.post("/auth/login", {
      email: "invalid-email",
      password: "testpass",
    });
    const json = getJson(response);
    expect(response.status).toBe(400);
    expect(json.message).toBe(
      "Invalid email format. Please provide a valid email address"
    );
  });
});
