<template>
	<view class="content">
		<view class="leaf pre" >
			<view class="">未开始</view>
			<view class="">{{pre}}</view>
		</view>
		<view class="leaf ing" >
			<view class="">进行中</view>
			<view class="">{{ing}}</view>
		</view>
		<view class="leaf complete" >
			<view class="">已完成</view>
			<view class="">{{complete}}</view>
		</view>
		<view class="leaf close" >
			<view class="">已关闭</view>
			<view class="">{{close}}</view>
		</view>
	</view>
</template>

<script>
	

	export default {
		props:{
			pre:{
				type:[String, Number],
				default:0
			},
			ing:{
				type:[String, Number],
				default:0
			},
			complete:{
				type:[String, Number],
				default:0
			},
			close:{
				type:[String, Number],
				default:0
			},
		},
		data() {
            return {
				
			}
		},
		created() {
		
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		padding: 10px 0; 
		font-display: 11pt;
	}

	.pre{color: $oa-color-pre;}
	.ing{color: $oa-color-ing;}
	.complete{color: $oa-color-complete;}
	.close{color: $oa-color-close;}
		
</style>
