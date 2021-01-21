import axios from "axios"
//axios.defaults.baseURL = "/api/";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.interceptors.response.use(function(response){
	// 统一对ajax返回 结果进行xss防护
	return response.data;
},function(error){

console.log(error.message);
return Promise.reject(error);
})

axios.interceptors.request.use(function(config){
	// 统一对ajax返回 结果进行xss防护
	config.data = config.data||{};
	let ret="";
	for (let it in config.data) {
		ret += encodeURIComponent(it) + '=' + encodeURIComponent(config.data[it]) + '&';
	}

    config.data=ret;
    return config;
})

export async function login(data:any){
	return axios.post("/Portal/Organization/LoginIn",data);
}
export async function getUnfinishWorkItems(data:any){
	let res = await axios.post("/Portal/WorkItem/GetUnfinishWorkItems",data);
	return res;
}

