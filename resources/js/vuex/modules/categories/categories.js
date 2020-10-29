export default{
    state:{
        items:{
            data: []
        },
    },
    mutations: {
        LOAD_CATEGORIES(state, categories){
            state.items = categories
        }
    },
    actions: {
        loadCategories (context) {
            context.commit('PRELOADER', true)

            axios.get('http://localhost:8000/api/v1/categories')
            .then(response => {
                console.log(response)
                context.commit('LOAD_CATEGORIES', response)
            })
            .catch(errors => {
                console.log(errors)
            })
            .finally(() => context.commit('PRELOADER', false))
        },
        loadCategory(context, id){
            context.commit('PRELOADER', true)
            return new Promise((resolve, reject) => {
                axios.get(`http://localhost:8000/api/v1/categories/${id}`)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error))
                    .finally(() => context.commit('PRELOADER', false))
            })
        },
        storeCategory(context, params) {
            context.commit('PRELOADER', true)

            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8000/api/v1/categories', params)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error))
                    .finally(() => context.commit('PRELOADER', false))
            })
        },
        updateCategory(context, params) {
            context.commit('PRELOADER', true)

            return new Promise((resolve, reject) => {
                axios.put(`http://localhost:8000/api/v1/categories/${params.id}`, params)
                    .then(response => resolve(response.data))
                    .catch(error => reject(error))
                    .finally(() => context.commit('PRELOADER', false))
            })
        }
    },
    getters: {
        
    },
    mounted() {
        console.log('Component mounted.')
    }
}