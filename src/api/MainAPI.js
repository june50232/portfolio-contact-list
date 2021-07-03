import APIClient from './APIClient'

export default class MainAPI {
  constructor(auth) {
    this.client = new APIClient('main')
  }

  getContact(id) { // catch 的 error 404 500 是給 server index 跳轉用的
    return this.client.get(`/api/contacts/${id}`, '', null)
      .catch((error) => {
        console.log('error ----', error)
        return ({ data: {
          error: error.status,
          msg: error.msg || null,
        } })
      })
      .then(resp => ({ contact: resp.data }))
  }

  getContacts() {
    return this.client.get('/api/contacts', '', null).then(resp => ({ cintacts: resp.data }))
  }

  postContact(data) {
    return this.client.post('/api/contacts', data, null).then(resp => resp.data)
  }

  patchContact(id, data) {
    return this.client.patch(`/api/contacts/${id}`, data)
        .catch((error) => {
          console.log('error ----', error)
          return ({ data: {
              error: error.status,
              msg: error.msg || null,
            } })
        })
        .then(resp => ({ contact: resp.data }))
  }

  deleteContact(id) {
    return this.client.del(`/api/contacts/${id}`, null)
        .catch((error) => {
          console.log('error ----', error)
          return ({ data: {
              error: error.status,
              msg: error.msg || null,
            } })
        })
        .then(resp => ({ contact: resp.data }))
  }
}

