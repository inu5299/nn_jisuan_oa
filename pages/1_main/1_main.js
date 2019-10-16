


export default {
	data() {
		return {			
			//顶部tab选项卡
			current: 0,
			tabList:['项目','员工'],
			
			// 瀑布流专用
			page : 1,
			limit : 10,
			lock : false,
			isMore:true,
			list:[],
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
			},
			userTotal:{
				"UserName":"1",
				"TaskAssitTotal":0,
				"TaskDoneTotal":0,
				"TaskRate":0, //任务完成率				
			},
		};
	},

	onLoad() {
		this.onInit()
	},
	/**
	 * @method 滑动到底部，更新信息
	 */
	onReachBottom(){
		this.getList()
	},
	methods: {
		/**
		 * @method 页面初始化
		 */
		onInit(){
			// 获取综合信息
			this.$db.getMainTotal().then(res=>{
				console.log(res.data)
				this.setData({
					total: res.data,
				})
			})
			
			// 初始化加载列表
			this.$db.listInit(this)
			this.getList()
			
			// 获取员工任务概况
			this.$db.getUserTaskTotal().then(res=>{
				this.setData({
					userTotal:res.data
				})
			})
		},
		
		/**
		 * @method 分布加载瀑布流
		 */
		getList(){
			if(this.$data.lock || !this.$data.isMore)
				return 
			this.$data.lock = true
			// console.log(this)
			if( this.$data.current == 0)
				this.$db.getProjectInfo(this.$data.page,this.$data.limit).then(res=>{
					this.$db.listUpdate(this,res)
				}).catch(res=> this.$data.lock = false )
			else
				this.$db.getUserTaskList(this.$data.page,this.$data.limit).then(res=>{
					this.$db.listUpdate(this,res)
				}).catch(res=> this.$data.lock = false )
		},		
		
		/**
		 * @method 切换选项卡
		 */
		onClickItem(index) {
			console.log(index)
			// debugger
			if (this.current !== index) {
				this.current = index	
				this.$db.listInit(this)
				this.getList()
			}
		},
		
		/**
		 * @method 点击项目卡
		 */
		clickProject(ProjectId){
			
			console.log(ProjectId)
		},
		/**
		 * @method 点击用户卡
		 */
		clickUser(GuID){			
			console.log(GuID)
		},
		
		
		/**
		 * @method 跳转至项目页面
		 */
		to6Pro(){ wx.navigateTo({ url:"/pages/6_pro/6_pro"})},
	},
}




			// projectList:[
			// 	// {
			// 	// 	Ordinal: 19,
			// 	// 	PlanWorkTotal: 33,
			// 	// 	PlanWorkdoneTotal: 0,
			// 	// 	ProjectId: "6b2f3397-b133-f06e-8fcc-a4b7a95cd876",
			// 	// 	ProjectName: "东方先导糖酒仓库管理系统",
			// 	// 	Status: "未开始",
			// 	// 	TaskAssignmentCount: null,
			// 	// 	TaskDoneCount: null,
			// 	// 	RatePlan:0,
			// 	// 	RateTask:0,
			// 	// }
			// ],
			// 
			// staffList:[
			// 	 {
			// 		  name:"张一",
			// 		  position:"项目经理",
			// 		  task:100,
			// 		  task_complete:80,
			// 	},
			// 	 {
			// 		  name:"王而",
			// 		  position:"研发",
			// 		  task:1230,
			// 		  task_complete:890,
			// 	},
			// ],