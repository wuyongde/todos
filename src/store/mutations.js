export default {
    changeItemCompleted(state,{obj}){
        state.todos[obj.index].completed=obj.completed
    },
    addTodos(state,{todo}){
        state.todos.push(todo)
    },
    delTodo(state,{index}){
        state.todos.splice(index,1)
    },
    setAllChecked(state,{flag}){
        state.todos.forEach(todo=>todo.completed=flag)
    },
    delCompleted(state){
        state.todos=state.todos.filter(todo=>!todo.completed)
    }
}