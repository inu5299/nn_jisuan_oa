

export default {

	data() {
		return {			
			menu:[
				{},
			],
			data1: [{
						image: '/static/images/nav-item5.png',
						text: '周报管理'
					},
					{
						image: '/static/images/nav-item1.png',
						text: '项目任务'
					},
					{
						image: '/static/images/nav-item2.png',
						text: '项目团队'
					},
					{
						image: '/static/images/nav-item3.png',
						text: '所有项目'
					},
					{
						image: '/static/images/nav-item7.png',
						text: '人员分工'
					},
				],
		};
	},

	onLoad() {
	},
	methods: {
		onClick(e) {
			var index = e.index
			switch (index){
				case 0:
					uni.navigateTo({url:'/pages/6_pro_9week/6_pro_9week'})
					break;
				case 1:
					uni.navigateTo({url:'/pages/6_pro_5task/6_pro_5task'})
					break;
				case 2:
					uni.navigateTo({url:'/pages/6_pro_2team/6_pro_2team'})
					break;
				case 3:
					uni.navigateTo({url:'/pages/7_more_1pro/7_more_1pro'})
					break;
				case 4:
					uni.navigateTo({url:'/pages/7_more_2staff/7_more_2staff'})
					break;
				default:
					break;
			}
			// console.log(e)
			// console.log('点击grid:' + JSON.stringify(e))
		}
	},
}