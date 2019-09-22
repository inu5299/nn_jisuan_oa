

export default {

	data() {
		return {		
			tableData : [
				{name:"项目编号",content:"广西计算中心项目2019-100-K"},
				{name:"申请部门",content:"软件事业部"},
				{name:"申请时间",content:"2019-05-27"},
			],
			columns :[
				{title:"名称",key:"name",width:150},
				{title:"内容",key:"content",width:550},
				// {title:"年龄",key:"age",width:'325rpx'},
			],
		};
	},

	onLoad() {
	},
	methods: {


	},
}