import axios from "axios"

// Create an instance of Axios
export const httpInterceptor = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

// Request interceptor to add Authorization and IP headers
httpInterceptor.interceptors.request.use(
  (config) => {
    const token = "N/A" // Retrieve the token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

httpInterceptor.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    return Promise.reject(error)
  },
)

export const swrFetcher = async (key: string) => {
  try {
    const response = await httpInterceptor.get(`/${key}`)
    return response.data
  } catch (error) {
    console.error("Error in fetcher:", error)
    throw error
  }
}
