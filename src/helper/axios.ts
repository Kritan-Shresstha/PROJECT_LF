import axios from 'axios'
import { environments } from '../config/environments'
import { mockAdapter } from '../mocks/mocksAdapter'

const api = axios.create({
  baseURL: environments.apiUrl,
  headers: { 'Content-Type': 'application/json' },
})

// Demo mode: answer requests in the browser instead of calling a server
if (environments.useMock) {
  api.defaults.adapter = mockAdapter
}

// ...the request interceptor and response interceptor go here...

export default api