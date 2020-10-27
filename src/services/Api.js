import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://twiliomevnapp.herokuapp.com'
  })
}