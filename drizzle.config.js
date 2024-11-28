/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:ol7yrzTEaI5k@ep-lingering-band-a10ie9v5.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };   