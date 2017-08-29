import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// vuex 一个插件，当每次通过mutation修改state是会打印一条日志，
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
// 调试工具
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  // 严格模式
  strict: debug,
  plugins: debug ? [createLogger()] : []

})
