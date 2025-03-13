import { defineStore } from "pinia"

export const useStore = defineStore("mian", {
	state: () => {
		return {
			i: 0
		}
	},
	getters: {
		num(): number {
			return this.i + 1
		}
	},
	actions: {
		getNum(): number {
			return this.num
		}
	}
})
