const Fastify = require("fastify");

const buildServer = () => {
  const server = Fastify();

  server.get("/", async () => {
    return { hello: process.env.HELLO };
  });

  return server;
};

module.exports = buildServer;
