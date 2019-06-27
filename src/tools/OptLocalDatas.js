// 操作localStorage数据库模块:读与写
export default {
    readTodosFromLocal(){
        return JSON.parse(window.localStorage.getItem('todos') || '[]')
    },
    writeTodosToLocal(todosArr){
        window.localStorage.setItem('todos',JSON.stringify(todosArr))
    }
}
