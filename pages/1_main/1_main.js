

export default {

	data() {
		return {			
			//顶部tab选项卡
			current: 0,
			tabList:['项目','员工'],
			
			proList:[
				 {
					  status:1,
					  name:"项目一",
					  work:100,
					  work_complete:80,
					  task:100,
					  task_complete:80,
				},
				 {
					  status:2,
					  name:"项目二",
					  work:110,
					  work_complete:80,
					  task:120,
					  task_complete:80,
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
				"ProjectTotal":"250",
				"WorkTotal":"50",
				"WorkdoneTotal":"100",
				"TaskTotal":"60",
				"TaskDoneTotal":"100",
				"TaskNotStartTotal":"23", //任务未开始总数
				"TaskDoingTotal":"66", //正在进行任务总数
				"TaskClosedTotal":"49"  //任务关闭总数
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
	methods: {
		/**
		 * @method 页面初始化
		 */
		onInit(){
			
			// this.$refs.chartArc.fillData()
			
			
			this.$db.getMainTotal().then(res=>{
				// console.log(res)
				var data = res.data
				this.setData({
					total:{
						"ProjectTotal":"360",
						"WorkTotal":"300",
						"WorkdoneTotal":"50",
						"WorkRate":parseFloat(parseFloat(50/300).toFixed(2)),						
						"TaskTotal":"300",
						"TaskDoneTotal":"256",
						"TaskRate":parseFloat(parseFloat(256/300).toFixed(2)),
						"TaskNotStartTotal":"100", //任务未开始总数
						"TaskDoingTotal":"200", //正在进行任务总数
						"TaskClosedTotal":"300"  //任务关闭总数
					}
				})
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