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
            axios.get('http://localhost:8000/api/v1/categories')
            .then(response => {
                console.log(response)
                context.commit('LOAD_CATEGORIES', response)
            })
            .catch(errors => {
                console.log(errors)
            })
        }
    },
    getters: {
        
    },
    mounted() {
        console.log('Component mounted.')
    }
}