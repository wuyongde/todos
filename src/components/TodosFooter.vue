<template>
    <div class="TodosFooter">
            <input type="checkbox" v-model="isAllChecked">
            <span>完成{{completedSum}}条/共{{totalSum}}条</span>
            <button @click="delCompleted">清除已完成事项</button>
        </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name:'TodosFooter',
    computed: {
        ...mapGetters(['completedSum','totalSum']),
        isAllChecked:{
            get(){
                return this.completedSum===this.totalSum && this.totalSum>0
            },
            set(v){
                this.$store.dispatch('setAllChecked',v)
            }
        }
    },
    methods: {
        delCompleted(){
            this.$store.dispatch('delCompleted')
        }
    },
    
}
</script>
<style lang="scss" scoped>
/* TodosFooter */
.TodosFooter{
    font-size: 13px;
    padding: 5px 0;
}
.TodosFooter span{
    margin-left: 10px;
}
.TodosFooter button{
    float: right;
    background-color: red;
    color: #fff;
    border: 0;
    padding: 2px 5px;
    border-radius: 3px;
}
</style>
