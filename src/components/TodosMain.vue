<template>
     <div class="TodosMain">
            <ul>
                <TodosItem v-for="(todo, index) in todos" :key="index" :todoItem='todo' :todoIndex='index'></TodosItem>
            </ul>
        </div>
</template>
<script>
import TodosItem from './TodosItem'
import {mapGetters} from 'vuex'
export default {
    name:'TodosMain',
    components:{
        TodosItem
    },
    computed: {
        ...mapGetters(['todos']),

    },
    
}
</script>
<style lang="scss" scoped>
/* TodosMain */
.TodosMain{

}
</style>
