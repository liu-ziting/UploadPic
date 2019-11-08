<template>
	<div class="upload">
	  <h1>在线免费图片上传工具</h1>
	  <el-card class="box-card">
		<div slot="header" class="clearfix">
		  <span>Image Upload</span>
		  <el-button style="float: right; padding: 3px 0" type="text">清空</el-button>
		</div>
		<el-upload
		  class="upload-demo"
		  drag
		  :on-success = "onsuccess"
		  action="https://jsonplaceholder.typicode.com/posts/"
		  multiple>
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">备注：可支持图片上传，文件上传，apk上传，小视频上传等</div>
		</el-upload>
	  </el-card>
	  <template>
	    <el-tabs v-model="activeName" @tab-click="handleClick">
	      <el-tab-pane label="URL" name="first">
			  <el-input  placeholder=""></el-input>
		  </el-tab-pane>
	      <el-tab-pane label="Markdown" name="second">
			  <el-input  placeholder=""></el-input>
		  </el-tab-pane>
	      <el-tab-pane label="HTML" name="third">
			  <el-input  placeholder=""></el-input>
		  </el-tab-pane>
	    </el-tabs>
	  </template>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        activeName: 'first'
	      };
	    },
	    methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      },
		  // 上传成功的回调
		  onsuccess(response, file, fileList){
			
		  }
	    },
		created() {
			
		},
		mounted() {
			
		},
		updated() {
		
		}
	  };
</script>

<style>
	.upload{
		width: 100% !important;
		padding: 1.25rem 0;
	}
	.el-upload,.el-upload--text,.el-upload-dragger{
		width: 100% !important;
		height: 13.125rem;
	}
	.el-upload-dragger .el-icon-upload{
		line-height: 4.5rem;	
	}
	.box-card{
		margin-bottom: 1.875rem;
	}
</style>
