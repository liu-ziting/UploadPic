<template>
	<div class="qrcode">
		<h1>二维码生成</h1>
		<el-card class="box-card">
			<el-row :gutter="20">
			  <el-col :span="12">
				  <div class="grid-content bg-purple">
					  <el-input placeholder="请输入需要转成二维码的文本,网址或者其他链接..." rows="12" type="textarea" v-model="form.desc"></el-input>
					  <el-button @click="submit" type="info">生成</el-button>
				  </div>
			  </el-col>
			  <el-col :span="12">
				  <div id="qrcode" ref="qrcode">
					<img v-if="noimg" src="../assets/ewm.png" />
				  </div>
			  </el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script>
	
	import QRCode from 'qrcodejs2'
	
	export default {
	    data() {
	      return {
	        form: {
	          desc: ''
	        },
			noimg:true
	      }
	    },
	    methods: {
			//二维码生成方法
			qrcode(text){
				let qrcode = new QRCode('qrcode',{
				 text: text // 设置二维码内容
				})
			},
			//点击生成
			submit(){
				let text = this.form.desc;
				if(text == ""){
					this.noimg = true;
					this.$message({
					  message: '请输入内容在生成！',
					  type: 'warning'
					});
				}else{
					document.getElementById("qrcode").innerHTML = "";
					this.qrcode(text);
					this.noimg = false;
				}
			}
	    },
		mounted () {
			
		}
	  }
</script>

<style>
	.qrcode{
		width: 100% !important;
		padding: 1.25rem 0;
	}
	.qrcode textarea{
		font-size: 1rem !important;
	}
	#qrcode{
		width: 15.625rem;
		height: 15.625rem;
		display: block;
		margin: 0 auto;
	}
	#qrcode img{
		display: block;
		margin: 0 auto;
		margin-top: 3rem;
	}
	.qrcode button{
		width: 100%;
		height: 3rem;
		margin-top: 2rem;
		font-size: 1.0625rem;
		margin-bottom: 2rem;
	}
</style>
