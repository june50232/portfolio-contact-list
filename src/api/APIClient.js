import axios from 'axios'
import store from '../redux/store'
import actions from '../redux/action'
// import {
//   increaseLoaderCount,
//   decreaseLoaderCount,
// } from 'src/actions/UIAction'
// import { push } from 'react-router-redux'
// import {
//   addNotification,
//   createValidationFails,
// } from 'src/actions/UtilitiesActions'
import { MainPath } from '../common/LinkPath'
// import handle404 from 'src/common/handleAPIStatus'
// import _ from 'lodash'
// import React from 'react'

const API_BASE_URL = process.env.API_URL

export default class APIClient {
  constructor(name) {
    this.name = name
    this.API_BASE_URL = API_BASE_URL
  }

  /**
   *
   * @param apiPath
   * @param params
   * @param token
   * @param skipFail
   * @param others
   * @param useLoader 是否要顯示 loader
   * @returns {Promise.<TResult>}
   */
  get(apiPath, params, token, skipFail = false, others = {}, useLoader = true) {
    // console.log('store.getState()===', store.getState())
    // if (store.getState().utilities.loaderCount.count < 20 && useLoader) { store.dispatch(increaseLoaderCount()) }
    const url = this.API_BASE_URL + apiPath
    return axios.get(url, {
      timeout: 30000,
      headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
      proxy: false,
      ...others,
      params,
    }).then(this.checkResponse, skipFail).catch(data => this.checkResponse(data.response, skipFail, useLoader))
  }

  patch(apiPath, params, token) {
    // if (store.getState().utilities.loaderCount.count < 20) { store.dispatch(increaseLoaderCount()) }
    const url = this.API_BASE_URL + apiPath
    return axios.patch(url, params, {
      timeout: 30000,
      headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
      proxy: false,
    }).then(this.checkResponse).catch(data => this.checkResponse(data.response))
  }

  put(apiPath, params, token) {
    // if (store.getState().loaderCount.count < 20) { store.dispatch(increaseLoaderCount()) }
    const url = this.API_BASE_URL + apiPath
    return axios.put(url, params, {
      timeout: 60000,
      headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
      proxy: false,
    }).then(this.checkResponse).catch(data => this.checkResponse(data.response))
  }

  post(apiPath, params, token) {
    // if (store.getState().utilities.loaderCount.count < 20) { store.dispatch(increaseLoaderCount()) }
    const url = this.API_BASE_URL + apiPath
    return axios.post(url, params, {
      timeout: 120000,
      headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
      proxy: false,
    }).then(this.checkResponse).catch(data => this.checkResponse(data.response))
  }

  postFile(apiPath, params, token) {
    // if (store.getState().utilities.loaderCount.count < 20) { store.dispatch(increaseLoaderCount()) }
    const url = this.API_BASE_URL + apiPath
    return axios.post(url, params, {
      timeout: 120000,
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        Authorization: `Bearer ${token}`,
      },
      proxy: false,
    }).then(this.checkResponse).catch(data => this.checkResponse(data.response))
  }

  del(apiPath, params, token) {
    // if (store.getState().utilities.loaderCount.count < 20) { store.dispatch(increaseLoaderCount()) }
    const url = this.API_BASE_URL + apiPath

    return axios.delete(url, {
      timeout: 30000,
      headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
      proxy: false,
      params,
    }).then(this.checkResponse).catch(data => this.checkResponse(data.response))
  }

  checkResponse = (resp, skipFail, useLoader = true) => {
    if (resp === undefined) {
      resp = { data: { message: 'error connect' } }
    }

    if (resp.status >= 200 && resp.status < 300) {
      return resp
    }

    if (resp.status === 401) {
        resp = { ...resp, reload: true }
    }
    //
    // if (resp.status === 403) {
    //   if (resp.data.code === 40301) {
    //     window.location.href = MainPath.careGiverRecruiting
    //   }
    //   else {
    //     const hasCareuErrorMessage = resp.data && resp.data.message
    //     if(!hasCareuErrorMessage && (config.env === 'dev' || config.env === 'local')) {
    //       getStore().dispatch(addNotification(<div><h3>發生防火牆擋錯誤 (dev限定訊息)</h3><h4 className="text-justify">很抱歉，發生防火牆阻檔行為，請通知工程同仁檢查，造成不便請見諒，謝謝! (API ERROR 403 NO MSG)</h4></div>, 'dialogError'))
    //     }
    //   }
    // }
    //
    // if (resp.status == 404) {
    //   resp = handle404(resp, _.get(getStore().getState(), ['utilities', 'locationMatch', 'match', 'path'], null))
    // }
    //
    // if (resp.status === 422) {
    //   if (resp.data.errors) {
    //     const errorFields = {}
    //     const { errors } = resp.data
    //     for (const key in errors) {
    //       const error = errors[key]
    //       errorFields[key] = error[0]
    //     }
    //     getStore().dispatch(createValidationFails(errorFields))
    //   }
    // }
    //
    // if (resp.status >= 500) {
    //   getStore().dispatch(addNotification(<div><h3>很抱歉! 系統目前異常</h3><h4 className="text-justify">請您稍後再使用本網站，並建議您重整網頁後再進行操作，可能會需要您重新輸入資料，請見諒。</h4></div>, 'dialogError'))
    // }

    return Promise.resolve(resp)
  }
}
