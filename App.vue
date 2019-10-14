<script>
	export default {
		onLaunch: function() {
			uni.showToast({
				title:"加载中",
				icon:"loading",
				duration:3000,
			})
			
			
			console.log('App Launch');
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// 检测升级
			uni.request({
				url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
				data: {
					appid: plus.runtime.appid,
					version: plus.runtime.version,
					imei: plus.device.imei
				},
				success: (res) => {
					console.log('success', res);
					if (res.statusCode == 200 && res.data.isUpdate) {
						let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
						// 提醒用户更新
						uni.showModal({
							title: '更新提示',
							content: res.data.note ? res.data.note : '是否选择更新',
							success: (showResult) => {
								if (showResult.confirm) {
									plus.runtime.openURL(openUrl);
								}
							}
						})
					}
				}
			})
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
    /* #ifndef APP-PLUS-NVUE */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';

	/* 以下样式用于 hello uni-app 演示所需 */
	/* page {
		background-color: #F4F5F6;
		background-color: #0c0c0c;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	} */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color:#f9f9f9;
	}

	.oa-node{
		
	}
	
	.oa-flex_center , .oa-flex_between{
		display: flex;
		align-items: center;		
	}
	.oa-flex_center{ justify-content: center;	}		
	.oa-flex_between{ justify-content: space-between;	}	
	.oa-white{ background-color: #ffffff;	}
	.oa-line_bottom{		border-bottom: 1rpx #E1E1E1 solid ;}
	.oa-line_top{		border-top: 1rpx #E1E1E1 solid ;}
	.oa-pd15{ padding: 15px;}
	.oa-space_5{margin-bottom: 5px;	}
	.oa-space_10{margin-bottom: 10px;	}



	.component{
		margin-bottom: 20upx;
	}
	.flex_center{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.white{		background-color: #ffffff;	}
	.line{		border-bottom: 1rpx #E1E1E1 solid ;}
	.line_top{		border-top: 1rpx #E1E1E1 solid ;}
	.pd15{ padding: 15px;}
	

	.btn{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 11pt !important;
	}








	.uni-header-logo {
		padding: 30upx;
		text-align: center;
		margin-top: 10upx;
	}

	.uni-header-logo image {
		width: 140upx;
		height: 140upx;
	}

	.uni-hello-text {
		color: #7A7E83;
	}

	.uni-hello-addfile {
		text-align: center;
		line-height: 300upx;
		background: #FFF;
		padding: 50upx;
		margin-top: 10px;
		font-size: 38upx;
		color: #808080;
	}
	
	
	/* 样例公共类 */
	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}
    /* #endif*/
</style>
