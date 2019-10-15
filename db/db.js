class db{	
	/**
	 * @statics 静态变量
	 */
	KEY_USER_INFO = "user_info"
	KEY_UUID = "uuid"
	KEY_TOKEN = "token"
	
	URL = "http://221.7.253.6:9019/Api/Task/TaskHandler.ashx?"
	
	constructor(){}
	
	
	// 封装基础的请求
    base(options){
        return new Promise((resolve, reject) => {
            var data = options.data || {}
            // data['customer_uuid'] = wx.getStorageSync(API.UUID)
			
            uni.request({
                url: options.url,
                method: options.method || "POST",
                header: {
                    'content-type': 'application/x-www-form-urlencoded' ,// 默认值
					'Access-Control-Allow-Origin':true,
					'Authorization': 'Bearer ' + uni.getStorageSync("token")
                },
                data: data,
                success(res) {
                    resolve(res)
                },
                fail(res) {
                    console.log(res)
                    reject(res)
                },
            })
        })
    }
	
    // 获取店铺列表
    baseURL(url,method,data) {		
        return new Promise((resolve, reject) => {
            this.base({
                url: this.URL + url,
				method:method,
                data:data || {},
            })
            .then(res => resolve(res.data))
            .catch(res => {
				
				reject(res)
			})
        })
    }
	
		
	/*
	 * @method 1 获取token
	 */
	getToken(){
		// return new Promise((resolve, reject) => {
		// 	resolve({
		// 		"code":0,
		// 		"msg":'success',
		// 		"data":'21dfssdgfrgre'
		// 	})
		// })
		
		return this.baseURL("action=getToken","GET", { 
			grant_type:'password',
			username:"admin",
			password:"123",
		})
	}
	
	/*
	 * @method 7 首页--获取统计详情
	 * @
	 */
	getMainTotal(){
		return new Promise((resolve, reject) => {
			this.baseURL("action=getTotal","GET", {
				// page:"1"
			}).then(res=>{
				var data = res.data
				console.log(data)
				data["WorkRate"] = parseFloat(parseFloat(data["WorkdoneTotal"]/data["WorkTotal"]).toFixed(2))
				data["TaskRate"] = parseFloat(parseFloat(data["TaskDoneTotal"]/data["TaskTotal"]).toFixed(2))
				// data["TaskRate"] = 0.14
				console.log(data["TaskRate"])
				res.data = data
				resolve(res)
			}).catch(res => {				
				reject(res)
			})
		})
		// return 
	}
	
	/*
	 * @method 8 获取项目信息列表
	 */
	getProjectInfo(page,limit){
		
		return new Promise((resolve, reject) => {
			this.baseURL("action=getProjectInfo","GET", { 
				page:page,
				limit:limit
			}).then(res=>{
				var data = res.data
				for (var i=0;i<data.length;i++){					
					data[i]["RatePlan"] = parseInt( data[i]['PlanWorkdoneTotal'] / data[i]['PlanWorkTotal']   * 100 ) || 0
					data[i]["RateTask"] = parseInt( data[i]['TaskDoneCount'] / data[i]['TaskAssignmentCount']  * 100 ) || 0
				}
				res.data = data
				resolve(res)
			}).catch(res => {				
				reject(res)
			})
		})
	}
	
}
module.exports = new db()