import 'core-js/es/promise' // нужно /es6/ или /es7/ поменять на /es/ в связи с обновлениями в core-js

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

    async createUser({commit}, formData){
        try{
            console.log('создан пользователь', formData)
        }catch(e){}
    },

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

