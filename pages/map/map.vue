<template>
	<view class="container">
		<view class="demo">
			<text style="font-size: 40rpx;">距离最近的为燕山大学信息馆{{distance}}千米</text>
		</view>
		<view class="mapp">
			<map style="width: 100%; height: 900rpx;" :latitude="latitude" :longitude="longitude" :markers="covers"
				:scale="14" show-compass=true show-location=true></map>
		</view>
		<view class="demo1">
			<text style="font-size: 40rpx;color: #FFFFFF;font-weight: bolder;" @click="daohang()" >导航前往</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 经纪人id
				agentId: 0,
				title: '机器人分布图', //地图标题
				latitude: 39.908649, //纬度
				longitude: 119.537778, //经度
				distance: 0,
				covers: [{
						id: 1,
						latitude: 39.908649,
						longitude: 119.537778,
						iconPath: '../../static/image/robt.png',
						callout: {
							content: "燕山大学信息馆\n地址：秦皇西大街84号",
							borderRadius: 10,
							padding: 5,
							display: "ALWAYS"
						},


					},
					{
						id: 2,
						latitude: 39.943399,
						longitude: 119.541129,
						iconPath: "../../static/robt.png",
						callout: {
							content: "你的位置",
							borderRadius: 10,
							padding: 10,
							display: "ALWAYS"
						}
					},
				]
			}
		},
		methods: {
			getLocationInfo() {
				const that = this;
				var a = 0;
				uni.getLocation({
					type: "gcj02",
					success: function(res) {
						// 暂时
						that.longitude = res.longitude; //118.787575;
						that.latitude = res.latitude; //32.05024;
						a = res.longitude;
						console.log("aa", a);
						console.log("获取当前的用户经度", that.longitude);
						console.log("获取当前的用户纬度", that.latitude);
						var long = 0;
						var lat = 0;
						//小数点保留六位  经度
						if (that.longitude.toString().indexOf('.') > 0) {
							const longlatsplit = that.longitude.toString().split('.');
							if (longlatsplit.length >= 2) {
								long = parseFloat(longlatsplit[0] === "" ? 0 : longlatsplit[0]) + parseFloat(
									"." + longlatsplit[1].slice(0, 6));
							}
						}
						if (that.latitude.toString().indexOf('.') > 0) {
							const longlatsplit1 = that.latitude.toString().split('.');
							if (longlatsplit1.length >= 2) {
								lat = parseFloat(longlatsplit1[0] === "" ? 0 : longlatsplit1[0]) + parseFloat(
									"." + longlatsplit1[1].slice(0, 6));
							}
						}

						console.log("纬度", lat);
						// this.distance(that.latitude,that.longitude);
						that.covers = [{
							id: "2",
							latitude: res.latitude,
							longitude: res.longitude,
							iconPath: "../../static/robt.png",
							callout: {
								content: "你的位置",
								borderRadius: 10,
								padding: 10,
								display: "ALWAYS"
							}

						}, {
							id: 1,
							latitude: 39.908649,
							longitude: 119.537778,
							iconPath: '../../static/image/robt.png',
							callout: {
								content: "燕山大学信息馆\n地址：秦皇西大街84号",
								borderRadius: 10,
								padding: 5,
								display: "ALWAYS"
							}
						}];



					},
				});
				2
				setTimeout(function() {
					that.pdistance();
				}, 1000)

			},
			pdistance() {

				let PI = 3.14159265358979323; //圆周率
				let R = 6371229; //地球半径

				var lon1 = this.longitude;
				var lat1 = this.latitude;

				console.log(lon1);
				console.log(lat1)
				var lon2 = 119.537778;
				var lat2 = 39.908649;

				let x, y, distance;
				let lonres = lon1 > lon2 ? lon1 - lon2 : lon2 - lon1;
				let latres = lat1 > lat2 ? lat1 - lat2 : lat2 - lat1;
				console.log(lon1 - lon2);
				x = (lonres) * PI * R * Math.cos(((lat1 + lat2) / 2) * PI / 180) / 180;
				y = (lat2 - lat1) * PI * R / 180;
				console.log(lonres)
				console.log(y)
				distance = Math.hypot(x, y);
				distance /= 1000;
				let distance1 = parseFloat(distance).toFixed(2);
				this.distance = distance1;
				console.log(distance1)

			},
			openMapRoute(lat, lon, cityName) {
				var url = '';
				if (plus.os.name == 'Android') {
					var hasBaiduMap = plus.runtime.isApplicationExist({
						pname: 'com.baidu.BaiduMap',
						action: 'baidumap://'
					});
					var hasAmap = plus.runtime.isApplicationExist({
						pname: 'com.autonavi.minimap',
						action: 'androidamap://'
					});
					var urlBaiduMap = 'baidumap://map/marker?location=' + lat + ',' + lon + '&title=' + cityName +
						'&src=婚梯';
					var urlAmap = 'androidamap://viewMap?sourceApplication=婚梯&poiname=' + cityName + '&lat=' + lat +
						'&lon=' + lon +
						'&dev=0';
					if (hasAmap && hasBaiduMap) {
						plus.nativeUI.actionSheet({
							title: '选择地图应用',
							cancel: '取消',
							buttons: [{
								title: '百度地图'
							}, {
								title: '高德地图'
							}]
						}, function(e) {
							switch (e.index) {
								case 1:
									plus.runtime.openURL(urlBaiduMap);
									break;
								case 2:
									plus.runtime.openURL(urlAmap);
									break;
							}
						});
					} else if (hasAmap) {
						plus.runtime.openURL(urlAmap);
					} else if (hasBaiduMap) {
						plus.runtime.openURL(urlBaiduMap);
					} else {
						url = 'geo:' + lat + ',' + lon + '?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82';
						plus.runtime.openURL(url); //如果是国外应用，应该优先使用这个，会启动google地图。这个接口不能统一坐标系，进入百度地图时会有偏差
					}
				} else {
					// iOS上获取本机是否安装了百度高德地图，需要在manifest里配置，在manifest.json文件app-plus->distribute->apple->urlschemewhitelist节点下添加（如urlschemewhitelist:["iosamap","baidumap"]）
					plus.nativeUI.actionSheet({
						title: '选择地图应用',
						cancel: '取消',
						buttons: [{
							title: 'Apple地图'
						}, {
							title: '百度地图'
						}, {
							title: '高德地图'
						}]
					}, function(e) {
						console.log('e.index: ' + e.index);
						switch (e.index) {
							case 1:
								url = 'http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=' + lat +
									',' + lon +
									'&spn=0.008766,0.019441';
								break;
							case 2:
								url = 'baidumap://map/marker?location=' + lat + ',' + lon + '&title=' + cityName +
									'&src=婚梯';
								break;
							case 3:
								url = 'iosamap://viewMap?sourceApplication=婚梯&poiname=' + cityName + '&lat=' +
									lat + '&lon=' + lon + '&dev=0';
								break;
							default:
								break;
						}
						if (url != '') {
							plus.runtime.openURL(url, function(e) {
								plus.nativeUI.alert('本机未安装指定的地图应用');
							});
						}
					});
				}
			},
			daohang() {
				this.openMapRoute(39.908649, 119.537778, "燕山大学信息馆");
				// plus.runtime.openURL('https://blog.qian-hong.com'');
			}

		},
		onLoad() {
			this.getLocationInfo();

			// uni.getLocation({
			// 	type: 'wgs84',
			// 	geocode: true, //设置该参数为true可直接获取经纬度及城市信息
			// 	success: function(res) {
			// 		console.log(res)
			// 		this.latitude = res.latitude;
			// 		this.longitude = res.longitude;

			// 	},
			// 	fail: function() {
			// 		uni.showToast({
			// 			title: '获取地址失败，将导致部分功能不可用',
			// 			icon: 'none'
			// 		});
			// 	}
			// });
		}
	}
</script>

<style>
	.container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.demo {
		width: 90%;
		height: 250rpx;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		margin-top: 20rpx;
	}

	.mapp {
		margin-top: 20rpx;
		width: 90%;
		height: 600rpx;
	}

	.demo1 {
		width: 50%;
		height: 100rpx;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #477BFF;
		margin-top: 330rpx;
	}
</style>
