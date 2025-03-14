import { describe } from "vitest"
import {getStudentFind} from "@/api/methods/student";


describe("HelloWorld", async () => {
	let newVar = await getStudentFind(1,10);
	console.log(newVar)
})
