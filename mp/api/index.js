var { API_CONFIG, SERVER, VERSION } = require('./config.js')

import {getToken} from '../utils/util.js'
import regeneratorRuntime, { async } from '../lib/regeneratorRuntime/regeneratorRuntime.js'
import promiseify from '../utils/promiseify.js'
let ajaxTimes=0
const getApiObj = (apiConfig) => {
    const apiObj = {}

    for (let key in apiConfig) {
       apiObj[key]=async (options={},v)=>{
         let version=VERSION
         if(v){
           version=v
         }
       
            //处理请求参数
            let url = apiConfig[key][0] || ''
            url='/'+version+url
           
            if (!url.startsWith('http://') && SERVER) {
                url = SERVER + url
            }
            let method = apiConfig[key][1] || 'get'
            options.url=url
            options.method=method
            try{
              if(apiConfig[key][2]=='auth'){
                const token=await getToken()
                options.header={...options.header,Authorization:token}
              }
              const request=promiseify(wx.request)
              wx.showLoading({
                title: '加载中',
                mask:true
              })
              ajaxTimes++
              const result=await request(options)
              ajaxTimes--
              if(ajaxTimes==0){
                wx.hideLoading()
              }
              if(result.data.code==0){
                return result.data.data
              }else{
                console.error('接口调用错误：'+result.data.message);
              }
            }catch(e){
              console.error('接口调用错误：'+result.data.message);
            }
       }
    }

    return apiObj
  }

            

module.exports = getApiObj(API_CONFIG)