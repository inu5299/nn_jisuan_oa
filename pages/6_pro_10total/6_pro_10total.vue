<template>
	<view class="container">
		<view class="component " style="padding: 10px 15px;background-color: #fff;">
			<input type="text" value="" focus="true" style="background-color: #efefef;padding: 5px;" />
		</view>
		<view class="component ">
			<xx-mark text="项目名称"></xx-mark>
		</view>
		<!-- 饼状图 -->
		<view class="component flex_center">
			<chart-arc></chart-arc>
			<chart-arc></chart-arc>
		</view>
		
		<template v-for="(item,key) in list">
			<view class="component ">
				<task-process></task-process>
			</view>
		</template>
		
	</view>
</template>

<script src="./6_pro_10total.js"></script>

<style src="./6_pro_10total.css"></style>