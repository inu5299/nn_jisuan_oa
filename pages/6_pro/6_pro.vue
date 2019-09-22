<template>
	<view class="container">
		<view class="component pd15 white">
			<view class="title">集团合同管理系统技术优化服务项目</view>
			<view class="des">集团合同管理系统详细描述</view>
			<view class="">
				<uni-tag class="tag"  text="进行中" size="small"  />
				<uni-tag class="tag"  text="已审批" size="small"  />			
				<uni-tag class="tag"  text="软件类" size="small"  />	
			</view>				
		</view>
		<view class=" pd15">
			<view class="white">
				<view class="summary pd15">
					<view class="">项目经理：张三</view>
					<view class="">申请部门：软件事业部</view>
					<view class="">项目起止时间：2019-9-27至2019-9-30</view>
					<view class=""></view>
				</view>				
				<xx-mark type="ing" text="完成率"></xx-mark>
				<view class="flex">
					<chart-arc></chart-arc>
					<chart-arc></chart-arc>
				</view>
				<xx-mark type="close" text="延期率"></xx-mark>
				<view class="flex">
					<chart-arc></chart-arc>
					<chart-arc></chart-arc>
				</view>
			</view>
		</view>
		
		<view class="component pd15">
			<view class="white menu">
				<view class="leaf pre" @click="toNav(0)">
					<uni-icon type="email" size="42"></uni-icon>
					<uni-tag class="menu_num" type='error'  text="99" size="small"  />	
					<view class="">项目详情</view>
				</view>
				<view class="leaf pre" @click="toNav(1)">
					<uni-icon type="email" size="42"></uni-icon>
					<view class="">项目团队</view>
				</view>
				<view class="leaf pre" @click="toNav(2)">
					<uni-icon type="email" size="42"></uni-icon>
					<uni-tag class="menu_num" type='error'  text="52" size="small"  />	
					<view class="">项目任务</view>
				</view>
				<view class="leaf pre" @click="toNav(3)">
					<uni-icon type="email" size="42"></uni-icon>
					<view class="">工作清单</view>
				</view>
			</view>	
			<view class="white menu">
				<view class="leaf pre" @click="toNav(4)">
					<uni-icon type="email" size="42"></uni-icon>
					<view class="">变更记录</view>
				</view>
				<view class="leaf pre" @click="toNav(5)">
					<uni-icon type="email" size="42"></uni-icon>
					<view class="">演示管理</view>
				</view>
				<view class="leaf pre" @click="toNav(6)">
					<uni-icon type="email" size="42"></uni-icon>
					<view class="">周报管理</view>
				</view>
				<view class="leaf pre" @click="toNav(7)">
					<uni-icon type="email" size="42"></uni-icon>
					<view class="">工作量统计</view>
				</view>
			</view>			
		</view>
		<view class="pd15 white">	
			<button type="primary">完成项目</button>
		</view>
		
		
		
		
		
<!-- 		<navigator url="/pages/6_pro_1detail/6_pro_1detail" hover-class="navigator-hover">
			<button type="default">项目详情</button>
		</navigator>	
		<navigator url="/pages/6_pro_2team/6_pro_2team" hover-class="navigator-hover">
			<button type="default">项目团队</button>
		</navigator>	
		<navigator url="/pages/6_pro_5task/6_pro_5task" hover-class="navigator-hover">
			<button type="default">项目任务</button>
		</navigator>	
		<navigator url="/pages/6_pro_7change/6_pro_7change" hover-class="navigator-hover">
			<button type="default">变更记录</button>
		</navigator>	
		<navigator url="/pages/6_pro_8show/6_pro_8show" hover-class="navigator-hover">
			<button type="default">演示管理</button>
		</navigator>	
		<navigator url="/pages/6_pro_9week/6_pro_9week" hover-class="navigator-hover">
			<button type="default">周报管理</button>		
		</navigator>	
		
		<navigator url="/pages/6_pro_10total/6_pro_10total" hover-class="navigator-hover">
			<button type="default">项目工作量统计</button>
		</navigator> -->	
<!-- 		<navigator url="/pages/5_task_2total/5_task_2total" hover-class="navigator-hover">
			<button type="default">项目人员工作量与实施情况</button>
		</navigator>	
		
		<navigator url="/pages/4_self_1task/4_self_1task" hover-class="navigator-hover">
			<button type="default">我的项目</button>
		</navigator>	 -->
	</view>
</template>

<script src="./6_pro.js"></script>

<style src="./6_pro.css"></style>