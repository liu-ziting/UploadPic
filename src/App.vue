<template>
	<div id="app">
		<el-container>
		  <el-header>
			<el-menu class="el-menu-demo"  
			mode="horizontal" 
			@select="handleSelect" 
			:router="true" 
			:default-active="$route.path"
			 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-menu-item>花開彼岸天</el-menu-item>
				<el-menu-item index="/Upload" >图片上传</el-menu-item>
				<el-menu-item index="/Qrcode" >二维码生成</el-menu-item>
				<el-menu-item index="/Journal" style="float: right;">更新日志</el-menu-item>
			</el-menu>
		  </el-header>
		  <el-main>
			  <div class="main">
				<router-view></router-view>
			  </div>
		  </el-main>
		  <el-footer>技术支持：彼岸天工作室</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	html,body{
		margin: 0;
		padding: 0;
	}
	.el-header{
		width: 100%;
		height: 3.75rem;
		background-color: #545c64;
		
	}
	.el-menu-item{
		font-size: 1rem;
	}
	.el-menu{
		width: 80%;
		margin: 0 auto;
	}
	.el-main{
	    width: 80%;
	    margin: 0 auto;
	    height: auto;
		padding: 0 2rem;
		margin-bottom: 3.75rem;
	}
	.el-footer{
		width: 100%;
		height: 2.5rem !important;
		text-align: center;
		line-height: 2.5rem !important;
		background-color: #E4E7ED;
		color: #909399;
		font-size: 0.875rem;
		position: fixed;
		bottom: 0;
	}
	.main h1{
		font-weight: normal;
		margin-top: 0;
		color: #303133;
	}
</style>
