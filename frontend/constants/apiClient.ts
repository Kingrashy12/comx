import axios from "axios";

export type ErrorObj = { error?: string; message?: string };

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000",
  timeout: 10000,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional: handle errors globally
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getError = (error: Error | any): ErrorObj => {
  const Err_Data = error.response?.data;
  let errObj = Err_Data as ErrorObj;
  if (typeof Err_Data === "string") {
    errObj = { message: Err_Data, error: Err_Data };
  }
  return errObj;
};
