import { NexuClient } from "nexujs-client";

const publicKey = String(process.env.NEXU_PUBLIC_KEY);
const privateKey = String(process.env.NEXU_PRIVATE_KEY);

const client = new NexuClient({
  privateKey,
  publicKey,
});

export const apiClient = client.createApiClient({
  // baseUrl: "http://localhost:5000",
  baseUrl: "https://comx-production.up.railway.app",
});
