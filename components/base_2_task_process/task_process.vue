<template>
   <view class="page">
		<view class="content">
				<view class="header">
					<text class="" >{{Ordinal}}. {{ProjectName}}</text>
					<text class="mark" >
						<view v-if="Status == '未开始'" class="status pre">未开始</view>
						<view v-if="Status == '进行中'" class="status ing">进行中</view>
						<view v-if="Status == '已完成'" class="status complete">已完成</view>
						<view v-if="Status == '已关闭'" class="status close">已关闭</view>
					</text>
				</view>
				<view class="" style="height: 10px;"></view>
				<view class="flex work">
					<view style="font-size: 9pt">计划工作数：{{PlanWorkTotal|| 0}}</view>
					<view style="font-size: 9pt">工作完成数：{{PlanWorkdoneTotal || 0}}</view>
				</view>				
				<view class="progress-box">
					<progress :percent="RatePlan" show-info stroke-width="3" activeColor="#1abc9c" />
				</view>
				<view class="" style="height: 10px;"></view>
				
				<view class="flex task">
					<view style="font-size: 9pt">任务指派数：{{TaskAssignmentCount|| 0}}</view>
					<view style="font-size: 9pt">任务完成数：{{TaskDoneCount|| 0}}</view>
				</view>				
				<view class="progress-box">
					<progress :percent="RateTask" show-info stroke-width="3"  activeColor="#ff6633"  />
				</view>
				
				
				
				
				
				<!-- <view v-if="node.status == PRE" class="uni-text-small uni-ellipsis  "> <view class="date dpre">计划开始时间:{{node.date}}</view></view>
				<view v-if="node.status == ING" class="uni-text-small uni-ellipsis  "> <view class="date ding">计划结束时间:{{node.date}}</view></view>
				<view v-if="node.status == COMPLETE" class="uni-text-small uni-ellipsis  "> <view class="date dcomplete">实际结束时间:{{node.date}}</view></view>
				<view v-if="node.status == CLOSE" class="uni-text-small uni-ellipsis  "> <view class="date dclose">实际结束时间:{{node.date}}</view></view>
				 -->
					<!-- <view v-if="node.status == PRE" class="uni-text-small uni-ellipsis date pre">{{node.date}}</view>
					<view v-if="node.status == ING" class="uni-text-small uni-ellipsis  date ing">{{node.date}}</view>
					<view v-if="node.status == COMPLETE" class="uni-text-small uni-ellipsis  date complete">{{node.date}}</view>
					<view v-if="node.status == CLOSE" class="uni-text-small uni-ellipsis date  close ">{{node.date}}</view> -->
					
				<!-- <text class="uni-text-small uni-ellipsis">{{node.date}}  </text> -->
			
		</view>
    </view>
</template>
<!--    '' -->
<script>
	 export default {
        data() {
            return {
				/**
				 * 卡片状态
				 * 0、未开始
				 * 1、进行中
				 * 2、已完成
				 * 3、已关闭
				 */
				// status:0, 
				PRE:0,
				ING:1,
				COMPLETE:2,
				CLOSE:3,
				
				ratePlan:0,
				rateTask:0,
            }
        },
		 props: {
			node:{
				type: Object,
				default: () => {
					return {
						  status:1,
						  name:"王五",
						  work:100,
						  work_complete:80,
						  task:100,
						  task_complete:80,
					}
				}
			},
			// 是否展示标签项目
			showTag:{
				type:Boolean,
				default:false,
			},
			
			Ordinal:{
				type:[String, Number],
				default:""
			},
			
			PlanWorkTotal:{
				type:[String, Number],
				default:0
			},
			PlanWorkdoneTotal:{
				type:[String, Number],
				default:0
			},
			ProjectId:{
				type:[String, Number],
				default:""
			},
			ProjectName:{
				type:[String, Number],
				default:""
			},
			Status:{
				type:[String, Number],
				default:""
			},
			TaskAssignmentCount:{
				type:[String, Number],
				default:""
			},
			TaskDoneCount:{
				type:[String, Number],
				default:""
			},
			
			
			RatePlan:{
				type:[String, Number],
				default:0
			},
			
			RateTask:{
				type:[String, Number],
				default:0
			},
			
		},
		// watch:{			
		// 	PlanWorkTotal(val){
		// 		console.log("PlanWorkTotalval)
		// 		if (val)
		// 			this.ratePlan =  parseInt( this.PlanWorkdoneTotal / val  * 100 )
		// 		else
		// 			this.ratePlan = 0
		// 		
		// 		// ratePlan:0,
		// 		// rateTask:0,
		// 	},	
		// 	PlanWorkdoneTotal(val){
		// 		console.log("PlanWorkdoneTotal",val)
		// 		if (this.PlanWorkdoneTotal)
		// 			this.ratePlan =  parseInt( val / this.PlanWorkTotal  * 100 )
		// 		else
		// 			this.ratePlan = 0
		// 		
		// 	}
		// 	
		// },
		methods:{
			updatePlan(){
				
			},
		}
    }
</script>

<style lang="scss">
	.content{
		padding: 15px;
		background-color: #fff
	}
	.header{
		display: flex;
		justify-content: space-between;		
	}	
	.mark{
		// width : 80px;
		flex: 0 0 auto;
	}
	.flex{
		display: flex;
		justify-content: space-around;

	}
	.work , .task{ font-size: 9pt !important;}
	.work{
		color:$oa-color-work;
		.uni-progress-info {
			color:$oa-color-work !important;
		}
	}	
	.task{
		color:$oa-color-task;
	}
	
	.status{
		display: inline-block;
		color: #ffffff;
		padding:2px 10px ;
		font-size: 9pt;
		border-radius: 5px;
	}
	.pre{background-color: $oa-color-pre;}
	.ing{background-color: $oa-color-ing;}
	.complete{background-color: $oa-color-complete;}
	.close{background-color: $oa-color-close;}
	
	.progress-box{
		color: #888 !important;
		font-size: 9pt !important;
	}
</style>
