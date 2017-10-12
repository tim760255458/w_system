import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 自定义axios实例

var axiosWuan = axios.create({
  baseURL: 'http://47.88.58.119:800/',
  timeout: 2000
})

export function getPlanetList (offset, limit) {
  return axiosWuan({
    url: `/groups?offset=${offset}&limit=${limit}`,
    method: 'get'
  })
}
