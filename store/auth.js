import 'core-js/es/promise'

export const state = () =>({
    token: null,
})

export const mutations = {
    setToken(state, token){
        state.token = token
    },

    clearToken(state){
        state.token = null
    }
}

export const actions = {
    async login({commit, dispatch}, formData) {
       
        const token = await new Promise(resolve => {
            setTimeout(() => resolve('Полная хуйня'), 2000)
        })

        dispatch('setToken', token)
    },

    setToken({commit}, token){
        commit('setToken', token)
    },

    logaut({commit}){
        commit('clearToken')
    }
}

export const getters = {
    isAuthenticated: state => Boolean(state.token)
}

