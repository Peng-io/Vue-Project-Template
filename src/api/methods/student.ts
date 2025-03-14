import { http } from "@/api"

export function getStudentFind(pageNum: number, pageSize: number, search = "") {
	return http.Get(`/stu/find`, {
		params: {
			pageNum,
			pageSize,
			search
		}
	})
}
