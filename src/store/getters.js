export default {
    todos(state){
        return state.todos
    },
    completedSum(state){
      return  state.todos.reduce((sum,todo)=>{
            todo.completed?(sum++):sum
            return sum
        },0)
    },
    totalSum(state){
        return state.todos.length
    },
    
}