/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://AI_owner:uiEs7UgOt2jd@ep-calm-river-a5eqy2ep.us-east-2.aws.neon.tech/AI?sslmode=require",
  },
};
