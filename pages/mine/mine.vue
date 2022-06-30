<template>
	<view class="content" style=" background-color: #FFFFFF;height: 1435rpx;">
		<view class="head-box">
			<view class="iconfont icon-shezhi"></view>
			<view class="head-font">
				<view class="head-font-img">
					<image :src=avatalurl></image>
				</view>
				<view class="head-font-text" @click="denglu()" v-if="flag()">第三方登录</view>
				<view class="head-font-text" v-if="flag1()">{{name}}</view>
			</view>

		<!-- 	<view class="box">
				<view class="box-odiv" style="margin-left: auto;">
					<view class="box-max">
						<image src="../../static/img3.png" class="list-img" @click="kaifa()"></image>
					</view>
					<view style="font-size: 26rpx;" @click="kaifa()">我的申请</view>
				</view>
				<view class="box-odiv">
					<view class="box-max">
						<image src="../../static/img2.png" class="list-img" @click="kaifa()"></image>
					</view>
					<view style="font-size: 26rpx;" @click="kaifa()">我的律师</view>
				</view>
				<view class="box-odiv">
					<view class="box-max">
						<image src="../../static/img1.png" class="list-img" @click="kaifa()"></image>
					</view>
					<view style="font-size: 26rpx;" @click="kaifa()">我的案件</view>
				</view>
				<view class="box-odiv">
					<view class="box-max">
						<image src="../../static/img4.png" class="list-img" @click="kaifa()"></image>
					</view>
					<view style="font-size: 26rpx;" @click="kaifa()">我的收藏</view>
				</view>
			</view> -->
		</view>
		<view
			style="margin-top: 180rpx;display: flex;flex-direction: column;align-items: center; background-color: #FFFFFF;">
			<view class="list-box">

				<view class="iconfont icon-zixun"></view>

				<view class="list-box-font">
					<view @click="kaifa()">我的咨询</view>
					<view class="yuan"></view>
				</view>

				<view class="iconfont icon-jiantou"></view>

			</view>
			<view class="list-box">

				<view class="iconfont icon-yijianfankui"></view>

				<view class="list-box-font" @click="kaifa()">意见反馈</view>

				<view class="iconfont icon-jiantou"></view>

			</view>
			<view class="list-box">

				<view class="iconfont icon-yinsi"></view>

				<view class="list-box-font" @click="kaifa()">隐私协议</view>

				<view class="iconfont icon-jiantou"></view>

			</view>
			<view class="list-box">

				<view class="iconfont icon-guanyuwomen1"></view>

				<view class="list-box-font" @click="kaifa()">关于我们</view>

				<view class="iconfont icon-jiantou"></view>

			</view>
			<view class="list-box">

				<view class="iconfont icon-Group"></view>

				<view class="list-box-font" @click="tuichu()">退出登录</view>

				<view class="iconfont icon-jiantou"></view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				avatalurl: "../../static/img5.jpg",
				name: "第三方登录",

			}
		},
		onLoad() {

		},
		onShow() {
			if (uni.getStorageSync("openid")) {
				const res = uni.getStorageSync("openid");
				this.avatalurl = uni.getStorageSync("photoUrl");
				this.name = uni.getStorageSync("name")
				console.log("hallow");
				console.log(res);
			}
		},
		methods: {
			denglu() {
				uni.navigateTo({
					url: "../loge/loge"
				})
			},
			tuichu() {
				uni.removeStorageSync("openid");
				uni.removeStorageSync("photoUrl");
				uni.removeStorageSync("name");
				this.avatalurl = "../../static/img5.jpg",
					this.name = "第三方登录",
					uni.showToast({
						title: '已退出',
						icon: 'success',
						duration: 2000
					});

			},
			flag() {
				if (this.name != "第三方登录")
					return false;
				return true;
			},
			flag1() {
				if (this.flag())
					return false;
				return true;
			},
			kaifa() {
				uni.showToast({
					title: '正在开发中',
					icon: 'none',
					duration: 2000
				});
			}

		}
	}
</script>

<style>
	image {
		display: block;
	}

	.list-box-font {
		width: 520rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		border-bottom: 4rpx solid rgb(230, 230, 230);
		color: rgb(118, 118, 118);
		font-size: 30rpx;
		position: relative;
		color: #333;
	}

	.yuan {
		width: 15rpx;
		height: 15rpx;
		background-color: rgb(236, 128, 141);
		position: absolute;
		top: 35rpx;
		left: 120rpx;
		border-radius: 50%;
	}

	.icon-jiantou {
		color: rgb(190, 190, 190);
		margin-left: 20rpx;
	}

	.icon-yinsi,
	.icon-guanyuwomen1,
	.icon-yijianfankui,
	.icon-Group,
	.icon-zixun {
		font-size: 40rpx;
		margin-right: 20rpx;
		color: rgb(141, 141, 141);
	}

	.list-box {
		display: flex;
		align-items: center;
	}

	.head-box {
		width: 100%;
		height: 400rpx;
		background-color: rgb(71, 123, 255);
		position: relative;
	}

	.icon-shezhi {
		position: absolute;
		right: 40rpx;
		top: 70rpx;
		font-size: 50rpx;
		color: white;
	}

	.head-font {
		display: flex;
		font-size: 40rpx;
		font-weight: bold;
		color: white;
		padding-top: 140rpx;
		margin-left: 50rpx;
	}

	.head-font-img image {
		width: 120rpx;
		height: 120rpx;
	}

	.head-font-text {
		margin-left: 20rpx;
		margin-top: 40rpx;
	}

	.box {
		position: absolute;
		top: 300rpx;
		left: 50%;
		transform: translateX(-50%);
		height: 220rpx;
		position: absolute;
		width: 90%;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20rpx;
		box-shadow: -3rpx 5rpx 15rpx 4rpx rgba(116, 75, 239, 0.1);
	}

	.list-img {
		width: 80rpx;
		height: 80rpx;

	}

	.box-max {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 15rpx;
	}

	.box-odiv {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		margin-left: 0;
		color: black;
		font-size: 30rpx;
	}
</style>
