<template>
    <div>
        <h1>Listagem das Categorias</h1>
        <router-link :to="{name: 'admin.categories.create'}" class="btn btn-success">Cadastrar</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th width="200">ACÇÕES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categories.data" :key="index">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                    <td>
                        <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}}" class="btn btn-info">Editar</router-link>
                        <a href="#" class="btn btn-danger" @click.prevent="destroy(category)">Remover</a>
                    </td>
                </tr>  
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    created() {
        this.loadCategories ();
    },
    computed: {
        categories () {
            return this.$store.state.categories.items
        }
    },
    methods: {
        loadCategories () {
             this.$store.dispatch('loadCategories')
        },
        destroy(category) {
            this.$store.dispatch('distroyCategory', category.id)
                            .then(() => {
                                this.$snotify.success(`Sucesso ao deletar a categoria: ${category.name}`)
                                this.loadCategories ();
                            })
                            .catch(error => {
                                console.log(error)
                                this.$snotify.error('Erro ao deletar a categoria', 'Falha')
                            })
        }
    },
    
}
</script>

<style>
    
</style>