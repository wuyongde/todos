// store主文件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 导出store
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})