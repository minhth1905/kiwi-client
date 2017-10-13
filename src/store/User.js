const state = {
    isLogin: false,
}

const mutations = {
	SET_AUTH_USER (state, userObj) {
		state.isLogin = userObj
	}
}

const actions = {
	setUserObject: ({commit}, userObj) => {
		commit('SET_AUTH_USER', userObj)
	}
}

export default {
	state, mutations, actions
}