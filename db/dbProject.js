
/**
 * 项目请求的API接口
 * 
 */

import dbBase from '../db/dbBase.js'
// var dbBase = require('../db/dbBase.js');
class dbProject extends dbBase{	
	constructor(){
		super()
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
				data["WorkRate"] = parseFloat(parseFloat(data["WorkdoneTotal"]/data["WorkTotal"]).toFixed(2))
				data["TaskRate"] = parseFloat(parseFloat(data["TaskDoneTotal"]/data["TaskTotal"]).toFixed(2))

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
			// debugger
			this.baseURL("action=getProjectInfo","GET", { 
				page:page,
				limit:limit
			}).then(res=>{
				var data = res.data
				// 增加数据
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
	
	/*
	 * @method 9 获取员工任务概况
	 */
	getUserTaskTotal(){
		
		return new Promise((resolve, reject) => {
			// debugger
			this.baseURL("action=getUserTaskTotal","GET", { 
			}).then(res=>{
				var data = res.data
				console.log(data)
				data["TaskRate"] = parseFloat(parseFloat(data["TaskDoneCount"]/data["TaskTotal"]).toFixed(2))
				res.data = data
				resolve(res)
				
			}).catch(res => {			
				reject(res)
			})
		})
	}
	/*
	 * @method 10 获取最新公告
	 */
	getUserTaskList(page,limit){
		
		return new Promise((resolve, reject) => {
			// debugger
			this.baseURL("action=getUserTaskList","GET", { 
				page:page,
				limit:limit
			}).then(res=>{
				//TODO 修改的bug
				var data = [res.data]  
				console.log(data)
				// debugger
				// 增加数据
				for (var i=0;i<data.length;i++){		
					
					data[i]["TaskRate"] = parseInt( data[i]['TaskDoneTotal'] / data[i]['TaskAssitTotal']  * 100 ) || 0
				}
				res.data = data
				resolve(res)
				
			}).catch(res => {			
				reject(res)
			})
		})
	}
	
	
	
	
	
}
module.exports = dbProject