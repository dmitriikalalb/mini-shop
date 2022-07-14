export default function ({ $axios, store, redirect }, inject) {
  const api = $axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  api.interceptors.request.use(
    (config) => {
      if (store.getters.token) {
        config.headers.Authentication = 'Bearer' + store.getters.token
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  api.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      if (error.code === 401) {
        redirect('/auth')
      }
      return Promise.reject(error)
    }
  )

  inject('api', api)
}
