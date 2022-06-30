<template>

	<view class="content">
		<swiper class="swiper" 
		:autoplay="autoplay" 
		:duration="duration" indicator-dots>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img">
						<image src="../../static/guide/title01.png" mode="aspectFit" ></image>
					</view>
					
					<view class="swiper-item-tex"><text style="font-size: 40rpx;color: #333333;">快速咨询</text></view>
					<view class="swiper-item-tex" style="padding-top: 20rpx;"><text style="font-size: 30rpx;color: #808080;">对您的问题免费解答</text></view>
				</view>
				<view class="jump-over" @tap="launchFlag()">{{jumpover}}</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					
					<view class="swiper-item-img"><image src="/static/guide/title02.png" mode="aspectFit"></image></view>
					<view class="swiper-item-tex"><text style="font-size: 40rpx;color: #333333;">法律科普</text></view>
					<view class="swiper-item-tex" style="padding-top: 20rpx;"><text style="font-size: 30rpx;color: #808080;">你的法律宝典</text></view>
				</view>
				<view class="jump-over" @tap="launchFlag()">{{jumpover}}</view>
			</swiper-item>
		
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/guide/title03.png" mode="aspectFit"></image></view>
					<view class="swiper-item-tex"><text style="font-size: 40rpx;color: #333333;">法律援助</text></view>
					<view class="swiper-item-tex" style="padding-top: 20rpx;"><text style="font-size: 30rpx;color: #808080;">一站式法律平台</text></view>
				</view>
				<view class="experience" @click="launchFlag()">{{experience}}</view>
			</swiper-item> 
		</swiper>
		
	</view>

</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				autoplay: false,
				duration: 500,
				jumpover: '跳过',
				experience: '立即体验'
			}
		},
		methods: {
			launchFlag: function(){
				/**
				 * 向本地存储中设置launchFlag的值，即启动标识；
				 */
				uni.setStorage({
						key: 'launchFlag',
						data: false,
				});
				uni.switchTab({
					url: '/pages/index/index'
				});
				
			}
		}
	}
</script>
<style>
	page,
	.content{
		width: 100%;
		height: 100%;
		background-size: 100% auto ;
		padding: 0;
	}
	.swiper{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	.swiper-item {
		margin-top: 100rpx;
		width: 100%;
	    height: 100%;
		text-align: center;
		position: relative;
		display: flex;
		/* justify-content: center; */
		align-items:flex-end;
		flex-direction:column;
	}
	/* #ifdef MP-WEIXIN */
	.swiper-item-img{
		width: 100%;
		height: 400rpx;
		margin: 0 auto;
		margin-top: 200rpx;
		
	}
	/* #endif */
	/* #ifndef MP-WEIXIN */
	.swiper-item-img{
		width: 100%;
		height: 400rpx;
		margin: 0 auto;
		margin-top: 300rpx;
		
	}
	/* #endif */
	.swiper-item-tex{
		width: 100%;
		height: auto;
		
		padding-top: 100rpx;
	}
	
	.uniapp-img{
		height: 20%;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items:center;
		overflow: hidden;
	}
	.uniapp-img image{
		width: 20%;
	}
	
	.jump-over,.experience{
		position: absolute;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		border-radius: 30upx;
		font-size: 30rpx;
		color: #87CEFF;
		border: 1px solid #87CEFF;
		z-index: 999;
	}
	.jump-over{
		right: 45upx;
		top: 125upx;
	}
	.experience{
		margin-top:20rpx;
		right: 50%;
		margin-right: -105upx;
		bottom: 150rpx;
		
	}
</style>
