module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    url: "/dashboard",
    auth: {
      secret: env("ADMIN_JWT_SECRET", "88cdb117b88da4775a7db8e09da286c5"),
    },
  },
});
