<template>
	<view class="container">
		<view class="">
			<uni-collapse @change="change">
				<uni-collapse-item title="下拉菜单">
					<uni-list>
						<uni-list-item title="选项1" />
						<uni-list-item title="选项2" />
						</uni-list>
				</uni-collapse-item>
			</uni-collapse>
			<tabbar :list="tabBars"></tabbar>
		</view>
		<view class="component " style="padding: 10px 15px;background-color: #fff;">
			<input type="text" value="" focus="true" style="background-color: #efefef;padding: 5px;" />
		</view>
		
		<view class="component">
			<!-- <task-list :list="taskList"></task-list> -->
			<uni-list>
				<uni-list-item @click="toEditor" :show-arrow="false" title="集团内部APP门户开发（22）周报" note="2019年第22周(2019-05-27 - 2019-05-31)" />
				<uni-list-item @click="toEditor" :show-arrow="false" title="集团党建管理平台集团党建管理平台集团党建管理平台（26）周报" note="2019年第26周(2019-06-24 - 2019-06-28)" />
			</uni-list>
		</view>
		
		<view class="" style="height: 50px;">
			
		</view>
		
		<navigator url="/pages/2_work_2editor/2_work_2editor" hover-class="navigator-hover" class="btn">
			<button type="default">新增工作清单</button>
		</navigator>
		
		
		<!-- <navigator url="/pages/6_pro_9week_editor/6_pro_9week_editor" hover-class="navigator-hover">
			<button type="default">查看/编辑周报</button>
		</navigator>	 -->
	</view>
</template>

<script src="./6_pro_9week.js"></script>

<style src="./6_pro_9week.css"></style>