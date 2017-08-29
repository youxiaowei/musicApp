// import jsonp from 'common/js/jsonp'
// import {options1} from './config'
import axios from 'axios'
export function getSingerList () {
  const url = '/api/getSingerList'

  const data = Object.assign({}, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    g_tk: 1500041078,
    // jsonpCallback: 'GetSingerListCallback',
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getSingerDetail (singerId) {
  const url = '/api/getSingerDetail'
  const data = Object.assign({}, {
    g_tk: 177469677,
    // jsonpCallback: 'MusicJsonCallbacksinger_track',
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    singermid: '002J4UUk29y8BY',
    order: 'listen',
    begin: 0,
    num: 30,
    songstatus: 1

  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
