import 'core-js/es/promise'

export const state = () =>({
    token: null,
})

export const mutations = {

}

export const actions = {
    async login({commit, dispatch}, formData) {
       
        const token = await new Promise(resolve => {
            setTimeout(() => resolve('Полная хуйня'), 2000)
        })

        console.log('token', token)
    }
}

export const getters = {
    isAuthenticated: state => Boolean(state.token)
}

