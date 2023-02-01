import http from './httprequest'

function Login(params) {
  return http({ url: http.addorUrl('/sys/login'), method: 'post', params })
}
export {Login}