import 'core-js/es/promise'

export const state = () =>({
    token: true,
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

        try{
            const token = await new Promise((resolve, reject) => {
                setTimeout(() => reject('Полная хуйня'), 1000)
            })
    
            dispatch('setToken', token)

        } catch(e){
            commit('setError', e, {root: true})
            throw e
        }
       
        
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

