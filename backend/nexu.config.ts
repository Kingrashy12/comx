import { defineConfig } from "nexujs";

export default defineConfig({
  port: 5000,
  keys: {
    public: String(process.env.NEXU_PUBLIC_KEY),
    private: String(process.env.NEXU_PRIVATE_KEY),
  },
  corsConfig: {
    origin: "*",
  },
  experimental: {
    fileBasedRouting: true,
  },
  dev: {
    disableEncryption: true,
  },
  rateLimit: {
    limit: 50,
  },
});
