import 'core-js/es/promise'



const posts = [
    {title: 'Post 1', date: new Date(), veiws: 34, comments: [1, 2], _id: 'id1'},
    {title: 'Post 2', date: new Date(), veiws: 45, comments: [1, 2, 3], _id: 'id2'}
]

export const actions = {
    async fitchAdminPosts(){
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts)
            }, 1000)
        })
    },

    async remove({}, id){
        
    },

    async update({}, {id, text}){

    },

    async create({}, {text, title}){
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
    },

    async fitchAdmynById({}, id){
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(posts.find(p => p._id === id))
            }, 1000)
        })
    }
}

