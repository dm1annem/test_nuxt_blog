import 'core-js/es/promise'

export const actions = {
    async fitchAdminPosts(){
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(
                    [
                        {title: 'Post 1', date: new Date(), veiws: 34, comments: [1, 2], _id: Math.random()},
                        {title: 'Post 2', date: new Date(), veiws: 45, comments: [1, 2, 3], _id: Math.random()}
                    ]
                )
            }, 1000)
        })
    },

    async remove({}, id){
        
    }
}

