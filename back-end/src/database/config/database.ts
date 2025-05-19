import { Options } from "sequelize";

const config: Options = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "123456",
  database: "lista-de-coompras",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3003,
  dialect: "postgres",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

export = config;