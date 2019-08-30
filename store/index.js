export const state = () => ({
	counter: 0
})

export const getters = {
	getStore(state) {
		return state.counter
	}
}

export const mutations = {
	increase(state){
		state.counter++
	},
	decrease(state){
		state.counter--
	}
}