export const config = {
  port: process.env.PORT || 4000,
  mongoOptions: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret",
    expiresin: process.env.JWT_EXPIRESIN || "2d",
  },
};
