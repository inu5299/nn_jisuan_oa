<template>
		
	<!-- 圆弧进度图 -->
	<view class="qiun-charts3">
		
		<canvas :canvas-id="canvasID" :id="canvasID" class="charts3"></canvas>
		<view class="summary">
			<!-- {{mode==MODE_WORK?"工作总数":"任务总数" }} -->
			<view class="title">{{mode==MODE_WORK?"工作总数":"任务总数" }}</view>
			<view class="number">{{all}}</view>
			<view class="title">完成数</view>
			<view class="number">{{complete}}</view>
		</view>
		<!-- <canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3" style="margin-left: 250upx;"></canvas> -->
		<!-- <canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" style="margin-left: 500upx;"></canvas> -->
	</view>
	
</template>

<script>
	export default{
		props:{
			canvasID:{
				type:String,
				default:""
			},
			mode:{
				type:String,
				default:"work"
			},
			complete:{
				type:[String, Number],
				default:0
			},
			all:{
				type:[String, Number],
				default:1,
			},
			rate:{
				type:[String, Number],
				default:0,
			},
			node:{
				type:Object,
				default:()=>{
					return {
						"mode":"work",
						"all":23,
						"complete":20,						
					}
				},
			},
		},
		data(){
			return {
				MODE_WORK :"work",
				MODE_TASK :"task",
				
				dataComplete:0,
				dataAll:1,
				dataRate:0,
				dataCanvasID:"",
				
				cWidth: '',
				cHeight: '',
				cWidth2: '', //横屏图表
				cHeight2: '', //横屏图表
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 20, //x轴单屏数据密度
				sliderMax: 50
			}
		},

		created() {
			// console.log(this)
			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.arcbarWidth = uni.upx2px(8);
			
			// console.log(this)
			this.setRate(this.rate)
		},
		watch:{		
			
			rate(val){
				// console.log(val)
				this.setRate(val)
			}
		},
		methods:{
			setRate(rate) {
				// debugger
				let Arcbar1 = {
					series: []
				};				
				var chartData1 = {
					series: [{
						name: '完成率',
						data: rate,
						color: '#2fc25b'
					}]
				}		
				
				this.showArcbar(this.canvasID, chartData1)
				
			},
			
			showArcbar(canvasId, chartData) {
				var uCharts = this.$uCharts
				var _self = this
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					title: {
						name: parseInt(chartData.series[0].data * 100 )+ '%',
						// name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						// name: chartData.series[0].name,
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'default',
							width: _self.arcbarWidth * _self.pixelRatio , //圆弧的宽度
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});

			},
			
			// fillData(data) {
			// 	// this.serverData = data;
			// 	// this.tips = data.tips;
			// 	// this.sliderMax = data.Candle.categories.length;
			// 	
			// 	// debugger
			// 	let Arcbar1 = {
			// 		series: []
			// 	};
			// 	// let Arcbar2 = {
			// 	// 	series: []
			// 	// };
			// 	// let Arcbar3 = {
			// 	// 	series: []
			// 	// };
			// 	// Arcbar1.series = data.Arcbar1.series;
			// 	// Arcbar2.series = data.Arcbar2.series;
			// 	// Arcbar3.series = data.Arcbar3.series;
			// 	// _self = this
			// 	console.log(123)
			// 	var rate 
			// 	var all = parseInt(_self.dataAll)
			// 	var complete = parseInt(_self.dataComplete)
			// 	if (all == 0)
			// 		rate = 0
			// 	else
			// 		rate = complete / all
			// 		
			// 	debugger
			// 	var chartData1 = {
			// 		series: [{
			// 			name: '正确率',
			// 			data: rate,
			// 			color: '#2fc25b'
			// 		}]
			// 	}
			// 		
			// 	this.showArcbar("canvasArcbar1", chartData1);
			// },
		},
	}
</script>

<style>
	/* summary */
	.summary{
		text-align: left;
	}
	.title{
		font-size: 9pt;
		color: #888;
	}
	.number{
		
		font-size: 13pt;
		color: #666;
		font-weight: bold;
		line-height: 22pt;
	}
	
	
	
	/* 圆弧进度样式 */
	.qiun-charts3 {
		/* width: 750upx; */
		/* height: 250upx; */
		background-color: #FFFFFF;
		/* position: relative; */
		display: flex;
		align-items: center;
		/* padding:10px 5px; */
		padding:10px 10px 10px 0;
	}

	.charts3 {
		/* position: absolute; */
		width: 250upx;
		height: 250upx;
		background-color: #FFFFFF;
	}

	.qiun-tip {
		display: block;
		width: auto;
		/* overflow: hidden; */
		padding: 15upx;
		height: 30upx;
		line-height: 30upx;
		margin: 10upx;
		background: #ff9933;
		font-size: 30upx;
		border-radius: 8upx;
		justify-content: center;
		text-align: center;
		border: 1px solid #dc7004;
		color: #FFFFFF;
	}
	
</style>
