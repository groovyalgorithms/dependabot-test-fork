const { test } = require("node:test");
const assert = require("node:assert");
const buildServer = require("./index");

test("GET /", async () => {
  const server = buildServer();
  const response = await server.inject({
    method: "GET",
    url: "/",
  });

  assert.strictEqual(response.statusCode, 200);
  assert.deepStrictEqual(response.json(), { hello: "world" });
});
