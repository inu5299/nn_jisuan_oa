  // import service from '../../service.js';
    // import {
    //     mapState,
    //     mapMutations
    // } from 'vuex'
    // import mInput from '../../components/m-input.vue'

var GP 
    export default {
        // components: {
        //     mInput
        // },
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0,
				
					
				userName:"",
				password:""
            }
        },
		
		onLoad(){
			GP = this
			this.toMain()
			// this.checkStatus()
		},
        methods: {
			/**
			 * @method 跳转至首页
			 */
			toMain(){
				uni.switchTab({
					url:"/pages/1_main/1_main"
				})
			},
			
			/**
			 * @method 检测登陆状态
			 * @return
			 * 		true 已登录，跳转x_detail
			 * 		fasle 保持现有页面
			 */
			checkStatus(){			
				
				var token = uni.getStorageSync(this.$db.KEY_TOKEN) || ""
				// 用户未登录
				if(token == "")
					return
				
				this.$db.checkToken(token).then(res=>{
					// uni.hideLoading()
					console.log(true,res.data)
					
					if(res.data==true)	// 登陆成功 跳转详情
						this.toMain()
					else	//登陆超时，重新登录
						uni.showToast({
							title:"身份超时，请重新输入账号密码登录",
						})
				})
			},
			
			/**
			 * @method 登陆
			 * @return 
			 * 		true 账号正确，跳转
			 * 		false  账号错误，提示
			 */
			login(userName,password){
				
				
				this.$db.getToken(userName,password).then(res=>{
					// var result = res.data.result
					var code = res.code
					console.log(res)
					
					// debugger
					if(code == this.$CODE.LOGIN_FAIL){
						uni.showModal({
							title:"账号或密码错误",
							showCancel:false,
						})			
						return 
					}else{
						wx.showToast({
							title:"登陆成功"
						})
			
						// 设置TOKEN
						uni.setStorageSync(this.$db.KEY_TOKEN,res.data.token)
						console.log(uni.getStorageSync(this.$db.KEY_TOKEN))
						this.toMain()
					}
				})
			},
			
			/**
			 * @method 登陆表单submit
			 */
			formSubmit: function(e) {
				// console.log('onclick')
				var userName = e.detail.value.username
				var password = e.detail.value.password				
				// var userName = '18588276558'
				// var password = '123456'
				
				if( userName=="" || password == ""){
					uni.showModal({
						title:"请输入完整的账号密码",
						showCancel:false,
					})
					return 
					
				}
				this.login(userName,password)
			
			},
			
        },
        onReady() {
            // this.initPosition();
            // this.initProvider();
        },
		
    }