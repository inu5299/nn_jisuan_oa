

export default {

	data() {
		return {			
			article:{
				title:"比赛",
				summary:"比赛规则额",
				date:"2019.7.2 -- 2019.7.8",
			},
			
		};
	},

	onLoad() {
	},
	methods: {
		toComplete(){
			uni.navigateTo({
				url:"/pages/6_pro_9week_task/6_pro_9week_task"
			})
		},
	},
}