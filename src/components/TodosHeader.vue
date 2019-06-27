<template>
    <div class="TodosHeader">
            <input type="text" placeholder="请输入待办事项并按回车添加" @keyup.enter='addTodos' v-model="todoTitle">
        </div>
</template>
<script>
export default {
    name:'TodosHeader',
    data() {
        return {
            todoTitle:''
        }
    },
    methods: {
        addTodos(){
            // 判断输入是否为空
            if(!this.todoTitle.trim()){
                alert('不要输入空字符')
                this.todoTitle=''
                return
            }
            // 否则，数据有效
            this.$store.dispatch('addTodos',{title:this.todoTitle,completed:false})
            this.todoTitle=''
        }
    },
    
}
</script>
<style lang="scss" scoped>
/* TodosHeader */
.TodosHeader{

}
.TodosHeader input{
    width: 100%;
    line-height: 30px;
    border: 1px solid #eee;
    text-indent: 2em;
    border-radius: 5px;
}
.TodosHeader input:focus{
    outline: none;
    background-color: #eee;
}
</style>
