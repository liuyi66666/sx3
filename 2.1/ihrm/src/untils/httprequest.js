import axios from "axios"
import { getToken } from "./api"
import { MessageBox } from 'element-ui';
const http =axios.create({
	// 基本路径
	baseURL:'./',
	// 超时时间
	timeout:1000,
	// 请求超时时是否需要凭证
	withCredentials:true,
	// 请求头
	headers:{
		"Content-Type":"application/json;charset=utf-8"
	}
})
http.addorUrl=(actionName)=>process.env.VUE_APP_BASE_API+actionName
// 请求拦截器
 http.interceptors.request.use(
	(config)=>{
		// 请求带上token
		config.headers["Authorization"]=getToken()
		// 在发送请求之前做些什么
		return config
	},
	(error)=>{
		// 对错误请求做些什么
		return Promise.reject(error)
	}
 )

//  响应拦截器
 http.interceptors.response.use(
(response)=>{
	// if(response.data && response.data.status===2){
	// 	// token失效
	// 	removeToken()
	// 	router.push({
	// 		name:'login'
	// 	})
	// }
	// 对响应数据做点什么
	return response
},
(error)=>{
	console.log(error)
	// 对响应错误做些什么
	// return Promise.reject(error)
	let title=""
	let message=""

	if(error && error.response){
		message=error.response.data.message
		switch(
			error.response.status
		){
			case 400:
				title = "错误请求"
				break
			case 401:
				title = "资源未授权"
				break
			case 403:
				title = "禁止访问"
				break
			case 404:
				title = "未找到所请求的资源"
				break
			case 405:
				title = "不允许使用该方法"
				break
			case 408:
				title = "请求超时"
				break
			case 500:
				title = "内部服务器错误"
				break
			case 501:
				title = "未实现"
				break
			case 502:
				title = "网关错误"
				break
			case 503:
				title = "服务不可用"
				break
			case 504:
				title = "网关超时"
				break
			case 505:
				title = "HTTP版本不受支持"
				break
			default:
				title = error.response.status
		}
		return MessageBox.alert(message,title,{
			type:"warning"
		})
	}else{
		return MessageBox.alert("请联系系统管理员，或稍后再试","未知错误",{
			type:"error"
		})
	}

}
)

export default http
