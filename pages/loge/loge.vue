<template>
	<view class="container">
		<view class="logo">
			<image src="../../static/logo1.jpg" mode="aspectFit"></image>
			<text style="font-size: 40rpx;margin-top: 30rpx;">律百通</text>
			<text>人人知法，人人懂法</text>
		</view>
		<view class="third">
			<text>------------</text>
			<text>第三方登录</text>
			<text>------------</text>
		</view>
		<view class="wxloge">
			<image @click="wxlogin()" src="../../static/wxlogin.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			wxlogin() {

				let that = this;
				uni.login({
					provider: 'weixin',
					scopes: 'auth_use',
					success: loginRes => {
						//获取用户基本信息
						uni.showToast({
						    title: '正在登录',
						    duration: 2000
						});
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								uni.setStorageSync("openid", infoRes.userInfo.openId);
								uni.setStorageSync("photoUrl", infoRes.userInfo.avatarUrl);
								uni.setStorageSync("name", infoRes.userInfo.nickName);
								console.log(infoRes.userInfo.openId);
								console.log(uni.getStorageSync("openid"));
								console.log(infoRes)
								let stereo = {
									unionId: infoRes.userInfo.unionId,
									openId: infoRes.userInfo.openId,
									name: infoRes.userInfo.nickName,
									photoUrl: infoRes.userInfo.avatarUrl,
									sex: infoRes.userInfo.gender,
								};
								
					            setTimeout(function() {
					            	uni.navigateBack({
					            		delta:1
					            	})
					            }, 500)
								// that.$api.request.wxAppLogin(stereo, loginss => {


								// })
							}
						});
						// uni.request({
						// 	url:"http://47.94.14.42:5001/demo_war/GetBooks";
						// 	data:{
						// 		user:"myuser"
						// 	}
						// })

					}
				});
				
			}
		
		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #FFFFFF
	}

	.logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top:150rpx;
	}

	.logo image {
		height: 200rpx;
		width: 200rpx;
	}

	.logo text {
		margin-top: 10rpx;
		font-size: 30rpx;
	}

	.third {
		margin-top: 738rpx;
	}

	.third text {
		
		font-size: 30rpx;
		color: #007AFF;
	}

	.wxloge {
		margin-top: 30rpx;
	}

	.wxloge image {
		height: 100rpx;
		width: 100rpx;
	}
</style>
