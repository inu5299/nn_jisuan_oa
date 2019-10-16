class dbBase{	
	/**
	 * @statics 静态变量
	 */
	KEY_USER_INFO = "user_info"
	KEY_UUID = "uuid"
	KEY_TOKEN = "token"
	
	URL = "http://221.7.253.6:9019/Api/Task/TaskHandler.ashx?"
	
	constructor(){}
	
	/********瀑布流模块*********/
	checkIsMore(page,limit,count){
		//判断是否还有更多
		if (page*limit < count)
			return true
		else 
			return false
	}
	
	/**
	 * @method 初始化瀑布流
	 */
	listInit(self){
		self.setData({
			page : 1,
			limit : 10,
			lock : false,
			isMore:true,
			list:[],
		})
	}
	
	/**
	 * @method 更新
	 */
	listUpdate(self,res){
		// debugger
		var page = self.$data.page
		var limit = self.$data.limit
		var count = res.count
		var oldList = self.$data.list
		var newList = res.data
		
		var isMore = this.checkIsMore(page,limit,count)
		self.setData({
			page:self.$data.page + 1,
			lock:false,
			list: oldList.concat(newList) ,
			isMore:isMore,
		})					
	}
	
	
	/********基础请求*********/
	
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
			uni.showLoading()
            this.base({
                url: this.URL + url,
				method:method,
                data:data || {},
            })
            .then(res => {				
				uni.hideLoading()
				resolve(res.data)
			})
            .catch(res => {
				
				uni.hideLoading()
				reject(res)
			})
        })
    }
}
module.exports = dbBase

// export default dbBase;