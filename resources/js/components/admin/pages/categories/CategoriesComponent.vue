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
                        <a href="#" class="btn btn-danger" @click.prevent="confirmDestroy(category)">Remover</a>
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
        /////////////ler categorias ao criar e deletar 
        loadCategories () {
             this.$store.dispatch('loadCategories')
        },
        /////////////confirmar ao deletar
        confirmDestroy (category) {
            this.$snotify.error(`Deseja relamente deletar a categoria: ${category.name}`, 'Deletar?', {
                timout: 10000,
                ShowProgressBar: true,
                closeOnClick:true,
                buttons: [
                    {text: 'Não', action: () => console.log('Não deletou...')},
                    {text: 'Sim', action: () => this.destroy(category)}
                ]
            })
        },
        ////////////deleta as categorias
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