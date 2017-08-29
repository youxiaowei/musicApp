import * as types from './mutation-types'

// 定义一个mutations对象，对象里面是一些方法，
// 因为mutation 就是一个方法去修改
const mutations = {
  // 方法名就是mutation-types里面的值 第一个参数是 state，他能获取到当前状态树的state
  // 第二个参数就是提交mutation是提交的 payload
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}

export default mutations
