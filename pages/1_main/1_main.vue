<template>
	<view class="container">
			<!-- 顶部选项卡 -->
		<view class="oa-node ">			
			<uni-segmented-control 
				:current="current" 
				:values="['项目','员工']" 
				style-type="text" 
				@clickItem="onClickItem"
			/>
		</view>
		
		
		<!-- 项目页面 -->
		 <view v-if="current==0" class="">	
			<!-- 通知 -->
			<view class="oa-node ">
				<uni-notice-bar 
					:show-get-more="true" :show-icon="true" :single="true" 
					text="项目总数" more-text="120" @getmore="to6Pro" />		
			</view>
					
			<!-- 饼状图 -->
			<view class="oa-node oa-flex_center oa-white">
				<chart-arc></chart-arc>
				<chart-arc></chart-arc>
			</view>
			
			<view class="oa-node oa-pd15 ">
				<xx-mark text="任务统计"></xx-mark>
			</view>
			<view class="oa-node oa-white oa-space_10">
				<statistis></statistis>
			</view>
			<view class="oa-node oa-white oa-space_10"  v-for="(item,key) in proList"  @click="clickPro(key)">
				<task-process :node="item"></task-process>
			</view>
					
							
		 </view>
		 
		 <!-- 任务页面 -->
		 <view v-if="current==1" class="" >
			<view class="oa-space_10"></view>
			<view class="oa-node"></view>
					<!-- 饼状图 -->
			<view class="oa-node oa-flex_center oa-white oa-space_10">
				<chart-arc></chart-arc>
			</view>
			<view class="oa-node oa-white oa-space_10"   >
				<!-- <task-process :node="item"></task-process> -->
				<task-process-single v-for="(item,key) in staffList" :node="item" class="line"></task-process-single>
			</view>
					
		 </view>
			
	</view>
	
</template>

<script src="./1_main.js"></script>

<style src="./1_main.css"></style>