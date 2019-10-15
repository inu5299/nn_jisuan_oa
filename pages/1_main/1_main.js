

export default {
	data() {
		return {			
			//顶部tab选项卡
			current: 0,
			tabList:['项目','员工'],
			
			projectList:[
				{
					Ordinal: 19,
					PlanWorkTotal: 33,
					PlanWorkdoneTotal: 0,
					ProjectId: "6b2f3397-b133-f06e-8fcc-a4b7a95cd876",
					ProjectName: "东方先导糖酒仓库管理系统",
					Status: "未开始",
					TaskAssignmentCount: null,
					TaskDoneCount: null,
					RatePlan:0,
					RateTask:0,
					
				}
			],
			
			staffList:[
				 {
					  name:"张一",
					  position:"项目经理",
					  task:100,
					  task_complete:80,
				},
				 {
					  name:"王而",
					  position:"研发",
					  task:1230,
					  task_complete:890,
				},
			],
			
			
			total:{
				"ProjectTotal":0,
				"WorkTotal":0,
				"WorkdoneTotal":0,
				"TaskTotal":0,
				"TaskDoneTotal":0,
				"TaskNotStartTotal":0, //任务未开始总数
				"TaskDoingTotal":0, //正在进行任务总数
				"TaskClosedTotal":0  ,//任务关闭总数
				"WorkRate":0, //工作完成率
				"TaskRate":0, //任务完成率
			}
		};
	},

	onLoad() {
		this.onInit()
		// this.$db.checkToken().then(res=>{
		// 	console.log(res)
		// })
		// 
	},
	onReachBottom(){
		console.log("onReachBottom")
	},
	methods: {
		/**
		 * @method 页面初始化
		 */
		onInit(){
			// 获取综合信息
			this.$db.getMainTotal().then(res=>{
				// console.log(res)
				// debugger
				// var data = res.data
				console.log(res.data)
				this.setData({
					total: res.data,
				})
			})
			
			// 获取项目信息列表
			this.$db.getProjectInfo(1,10).then(res=>{
				this.setData({
					projectList:res.data
				})
				// console.log(res.data)
			})
		},
		
		
		
		/**
		 * @method 切换选项卡
		 */
		onClickItem(index) {
			// console.log(index)
			if (this.current !== index) {
				this.current = index
			}
		},
		
		/**
		 * @method 点击项目卡
		 */
		clickPro(e){
			console.log(e)
		},
		
		/**
		 * @method 跳转至项目页面
		 */
		to6Pro(){ wx.navigateTo({ url:"/pages/6_pro/6_pro"})},
	},
}