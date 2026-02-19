const request = require("supertest");
const app = require("../index");

describe("API Products", () => {
  

  test("GET /api/products debe devolver un array", async () => {
    const res = await request(app).get("/api/products");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  
  test("POST /api/products debe crear un producto", async () => {
    const newProduct = {
      name: "Producto test",
      description: "Descripción test",
      image: "https://via.placeholder.com/150",
      category: "Camisetas",
      size: "M",
      price: 10
    };

    const res = await request(app)
      .post("/api/products")
      .send(newProduct);

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Producto test");
  });

});









