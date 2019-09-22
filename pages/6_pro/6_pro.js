

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
		toNav(id){
			
			switch (id){
				case 0: uni.navigateTo({url:"/pages/6_pro_1detail/6_pro_1detail"});break;
				case 1: uni.navigateTo({url:"/pages/6_pro_2team/6_pro_2team"});break;
				case 2: uni.navigateTo({url:"/pages/6_pro_5task/6_pro_5task"});break;
				case 3: uni.navigateTo({url:"/pages/5_task_2total/5_task_2total"});break;
				
				case 4: uni.navigateTo({url:"/pages/6_pro_7change/6_pro_7change"});break;
				case 5: uni.navigateTo({url:"/pages/6_pro_8show/6_pro_8show"});break;
				case 6: uni.navigateTo({url:"/pages/6_pro_9week/6_pro_9week"});break;
				case 7: uni.navigateTo({url:"/pages/6_pro_10total/6_pro_10total"});break;
				default:
					break;
			}
		}
	},
}