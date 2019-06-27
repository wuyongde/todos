<template>
    <div id="app">
        <TodosHeader></TodosHeader>
       <TodosMain></TodosMain>
        <TodosFooter></TodosFooter>
    </div>
</template>
<script>
import TodosHeader from './components/TodosHeader'
import TodosMain from './components/TodosMain'
import TodosFooter from './components/TodosFooter'

// import {mapGetters} from 'vuex'
import OptLocalDatas from './tools/OptLocalDatas'
export default {
    name:'App',
    mounted() {
        this.$store.dispatch('getTodosFromLocal')
    },
    components:{
        TodosHeader,
        TodosMain,
        TodosFooter
    },
    watch: {
        '$store.getters.todos':{
            deep:true,
            handler(newTodos){
                OptLocalDatas.writeTodosToLocal(newTodos)
            }
        }
    },
}
</script>
<style lang="scss" scoped>
/* #app */
#app{
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 5px;
}
</style>
