<template>
   <li class="TodosItem">
                    <input type="checkbox" v-model="isChecked">
                    <span>{{todoItem.title}}</span>
                    <button @click="delTodo">删除</button>
                </li>
</template>
<script>
export default {
    name:'TodosItem',
    props:{
        todoItem:Object,
        todoIndex:Number
    },
    computed: {
        isChecked:{
            get(){
                return this.todoItem.completed
            },
            set(v){
                // 更改相应数据项的completed值 
                this.$store.dispatch('changeItemCompleted',{completed:v,index:this.todoIndex})
            }
        }
    },
    methods: {
        delTodo(){
            this.$store.dispatch('delTodo',this.todoIndex)
        }
    },
    
}
</script>
<style lang="scss" scoped>
.TodosItem{
    font-size: 13px;
    color: #333;
    line-height: 25px;
} 
.TodosItem span{
    margin-left: 10px;
}
.TodosItem button{
    float: right;
    background-color: red;
    color: #fff;
    padding: 2px 5px;
    border-radius: 3px;
    border: 0;
    display: none;
    cursor: pointer;
}
.TodosItem:hover{
    background-color: #eee;
}
.TodosItem:hover button{
    display: inline-block;
}

</style>
