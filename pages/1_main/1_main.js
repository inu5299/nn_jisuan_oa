

export default {

	data() {
		return {			
			//顶部tab选项卡
			current: 0,
			
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
		};
	},

	onLoad() {
		this.$db.checkToken().then(res=>{
			console.log(res)
		})
		
	},
	methods: {
		onClickItem(index) {
			console.log(index)
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