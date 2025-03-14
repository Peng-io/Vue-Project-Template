import { createAlova } from "alova"
import { axiosRequestAdapter } from "@alova/adapter-axios"

export const http:any = createAlova({
	baseURL: "/api",
	requestAdapter: axiosRequestAdapter(),
	beforeRequest(method) {
		method.config.headers["Content-Type"] = "application/json"
	},
	timeout: 10000,
	cacheFor: null
})
