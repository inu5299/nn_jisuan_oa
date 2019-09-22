

export default {

	data() {
		return {			
			//顶部tab选项卡
			current: 0,
			tabBars: [
				{
					name: '全部',
					id: 'guanzhu'
				}, {
					name: '进行中',
					id: 'tuijian'
				}, {
					name: '未开始',
					id: 'tiyu'
				}, {
					name: '已完成',
					id: 'redian'
				},
			],
		};
	},

	onLoad() {
	},
	methods: {
		change(e){
			console.log(e)
		},
		onClickItem(index) {
			console.log(index)
			if (this.current !== index) {
				this.current = index
			}
		},
		
		click(method){
			switch (method){
				case "5_task_1self":
					uni.navigateTo({url:'/pages/5_task_1self/5_task_1self'})				
					break;
				case "5_task_2total":
					uni.navigateTo({url:'/pages/5_task_2total/5_task_2total'})				
					break;
				default:
					break;
			}
		},
		
		/**
		 * @method 跳转至项目
		 */
		toProgram(){
			uni.navigateTo({
				url:"/pages/6_pro/6_pro"
			})
		},
	},
}