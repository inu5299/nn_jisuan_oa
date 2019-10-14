class db{	
	/**
	 * @statics 静态变量
	 */
	KEY_USER_INFO = "user_info"
	KEY_UUID = "uuid"
	
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
            .then(res => resolve(res))
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
		
		return this.baseURL("action=getToken/","POST", { 
			grant_type:'password',
			username:"admin",
			password:"123",
		})
	}
	
	/*
	 * @method 7 首页--获取统计详情
	 */
	getMainTotal(){
		return new Promise((resolve, reject) => {
			resolve({
				"code":0,
				"msg":"获取数据成功",
				"data":{
					"ProjectTotal":"250",
					"WorkTotal":"100",
					"WorkdoneTotal":"50",
					"TaskTotal":"60",
					"TaskDoneTotal":"100",
					"TaskNotStartTotal":"23", //任务未开始总数
					"TaskDoingTotal":"66", //正在进行任务总数
					"TaskClosedTotal":"49"  //任务关闭总数
				}
			})
		})
		
		return this.baseURL("action=getTotal/","GET", { 
		})
	}
	
	/*
	 * @method 8 获取项目信息列表
	 */
	getProjectInfo(){
		return new Promise((resolve, reject) => {
			resolve({
				"code": "0",
				"msg": "操作成功.",
				"count": "项目总数",
				"data": [
					{
						"ProjectId": "项目id",
						"ProjectName":"项目名称",
						"PlanWorkTotal": "计划工作总数",
						"PlanWorkdoneTotal": "计划工作完成数",
						"TaskAssignmentCount": "任务指派数",
						"TaskDoneCount ": "任务完成数",
						"Status": "项目状态",
						"Ordinal": "序号"
					}
				]

			})
		})
		
		return this.baseURL("action=getProjectInfo/","GET", { 
		})
	}
	
}
module.exports = new db()