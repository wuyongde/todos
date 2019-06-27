import OptLocalDatas from '../tools/OptLocalDatas'
export default {
    changeItemCompleted({commit,state},obj){
        commit('changeItemCompleted',{obj})
    },
    addTodos({commit},todo){
        commit('addTodos',{todo})
    },
    delTodo({commit},index){
        commit('delTodo',{index})
    },
    setAllChecked({commit},flag){
        commit('setAllChecked',{flag})
    },
    delCompleted({commit}){
        commit('delCompleted')
    },
    getTodosFromLocal({commit,state}){
        state.todos=OptLocalDatas.readTodosFromLocal()
    }
}