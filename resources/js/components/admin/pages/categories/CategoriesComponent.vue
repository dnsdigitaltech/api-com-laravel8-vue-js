<template>
    <div>
        <h1>Listagem das Categorias</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th width="100">ACÇÕES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categories.data" :key="index">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                    <td>...</td>
                </tr>  
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    created() {
        this.$store.dispatch('loadCategories')
    },
    computed: {
        categories () {
            return this.$store.state.categories.items
        }
    },
    
}
</script>

<style>
    
</style>