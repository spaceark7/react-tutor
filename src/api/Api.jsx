const baseURL = 'http://post.kmotion.com:3001'

const Api = axios.create({
  baseURL,
})

const fetchUser = async () => {
  const response = await Api.get('/users')
  return response.data
}

const fetchPosts = async () => {
  const response = await Api.get('/posts', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })
  return response.data
}

export { Api, baseURL, fetchUser, fetchPosts }
