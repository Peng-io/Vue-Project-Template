import { alovaInst } from "@/api"

export function getStudentFind(pageNum: number, pageSize: number, search = "") {
	return alovaInst.Get(`/stu/find`, {
		params: {
			pageNum,
			pageSize,
			search
		}
	})
}
