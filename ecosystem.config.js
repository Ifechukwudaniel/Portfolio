module.exports = {
  apps: [
    {
      name: "server",
      cwd: "server",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: "cluster0-t65h9.mongodb.net",
        DATABASE_SRV: true,
        DATABASE_PORT: 27017,
        DATABASE_NAME: "portfolio",
        DATABASE_USERNAME: "daniel",
        DATABASE_PASSWORD: "danemmaebubesonia",
        DATABASE_SSL: true,
        AWS_ACCESS_KEY_ID: "AKIAY7SN6HWXW23NWIO6",
        AWS_ACCESS_SECRET: "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",
        AWS_REGION: "us-east-2",
        AWS_BUCKET_NAME: "portfolio-dan",
      },
    },
    {
      name: "client",
      cwd: "client",
      script: "npm",
      args: "start",
      env: {
        NEXT_PUBLIC_STRAPI_API_URL: "http://localhost:1337",
      },
    },
  ],
};
