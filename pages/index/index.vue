<template>
	<view class="container">
		<view class="dingwei">
			<image src="../../static/position.png" mode="aspectFill" @click="navimap"></image>
		</view>
		<view class="huanyingtxt">
			<text>Hello!</text>
			<text>欢迎使用律百通！</text>
		</view>
		
		<view class="mainimage">
			<image src="../../static/kaishi.gif" mode="aspectFit" @click="tiaozhuan()"></image>
		
			<text>有问题,一键快速咨询</text>
		</view>
	</view>
	
</template>

<script>
	import uniIcons from "../../components/yangxiaochuang-icons/yangxiaochuang-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
			 
			}
		},
		onLoad() {
			console.log("奥里给")
          this.loadExecution()
		},
		methods: {
			tiaozhuan() {
				console.log("我跳转了")
				uni.navigateTo({
					url: "../fastZixun/fastZixun"
				})
			},
            navimap(){
				uni.navigateTo({
					url: "../map/map"
				})
			},
			loadExecution: function() {
				/**
				 * 获取本地存储中launchFlag的值
				 * 若存在，说明不是首次启动，直接进入首页；
				 * 若不存在，说明是首次启动，进入引导页；
				 */
				try {
					// 获取本地存储中launchFlag标识
					const value = uni.getStorageSync('launchFlag');
					console.log(value);
					if (value==true) {
						// launchFlag=true直接跳转到首页
						uni.switchTab({
							url: '/pages/index/index'
						});
					} else {
						console.log("我走了");
						// launchFlag!=true显示引导页
						uni.navigateTo({
							url: '/pages/guide/guide'
						});
					}
				} catch (e) {
					// error 
					uni.setStorage({
						key: 'launchFlag',
						data: false,
						success: function() {
							console.log('error时存储launchFlag');
						}
					});
					
				}
				return;
				uni.switchTab({
					url: '/pages/index/index'
				});
			}

		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.huanyingtxt{
		margin-top: 10rpx;
		display: flex;
		flex-direction: column;
		width: 95%;
		height: 200rpx;
		background-color: #FFFFFF;
		
		// border: groove #DDDDDD;
		// border-bottom:groove #DDDDDD;
		// border-left:groove #DCDFE6;
		// border-right:groove #DCDFE6;
		border-radius:20rpx;
		justify-content: center;
	}
	.huanyingtxt text{
		margin-top: 10rpx;
		margin-left: 10rpx;
		font-size: 50rpx;
        font-weight: bold;
		
	}
	.mainimage{
		margin-top: 10rpx;
		width: 95%;
		// #ifdef APP-PLUS
		height: 1060rpx;
		//#endif
		// #ifndef APP-PLUS
		height:860rpx;
		//#endif
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #FFFFFF;
		border-radius:20rpx;
	}
	.mainimage image{
		margin-top:150rpx;
	}
	.dingwei{
		width: 100%;
		background-color:#477BFF;
		height: 150rpx;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
	}
	.dingwei image{
		height: 64rpx;
		width: 64rpx;
		margin-right: 50rpx;
	}
</style>
