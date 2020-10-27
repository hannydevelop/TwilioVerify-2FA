import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('datas')
  },
  addPost (params) {
    return Api().post('datas', params)
  },
  addLogin (params) {
    return Api().post('users/login', params)
  },
  addVerify (params) {
    return Api().post('users/verify', params)
  },
  addRegister (params) {
    return Api().post('users/register', params)
  },
  Order (params) {
    return Api().post('orders', params)
  }
}
