<template>
	<view class="container">
		<view class="header-1">
			
		</view>
		<view class="header">
			
			<view class="header-left" style="font-size: 40rpx;">
				<image src="../../static/image/position.png"></image>
				<label>秦皇岛</label>
			</view>
			<view class="header-right">
				<u-search :show-action="true" action-text="搜索" :animation="true"></u-search>
			</view>
		</view>

		<view class="wrap">
			<u-swiper :list="list1" :effect3d="true" style="height: 150px;" img-mode="scaleToFill" :border-radius="50">
				
			</u-swiper>
		</view>
		<!-- <view class="uni-margin-wrap">
			<swiper class="swiper" :circular="true" :indicator-dots="true" :indicator-active-color="ffffff" :autoplay="true" :interval="2000"
				:duration="duration">
				<swiper-item>
					<image mode="scaleToFill" src="../../static/1.jpg" class="swiper-image">
					</image>
				</swiper-item>
				<swiper-item>
					<image mode="scaleToFill" src="../../static/1.jpg" class="swiper-image">
					</image>
				</swiper-item>
				<swiper-item>

					<image mode="scaleToFill" src="../../static/1.jpg" class="swiper-image">
					</image>
				</swiper-item>
			</swiper>
		</view> -->

		<view>
			<u-tabs :list="list2" :is-scroll="false" :current="current" @change="change" :bar-width="110" :fontSize="35"
				style="background-color: #f1f1f1;"></u-tabs>
		</view>

		<view v-if="type1" class="list">
			<view class="card" v-for="item,index in list" :key='index'>
				<view class="content">
					<view class="content-left">
						<view class="title">
							<label type="settings" size="15">{{item.title}}</label>
						</view>
						<view>
							<view class="icons">
								<view class="chat">
									<view class="chat-one">
										<image class="image" :src="item.img1" style="margin-right: 5px;" type="chat"></image>{{item.num1}}
										<image class="image" :src="item.img2" style="margin-right: 5px;" type="star-filled"></image>{{item.num2}}
										<image class="image" :src="item.img3" style="margin-right: 5px;" type="star-filled"></image>{{item.num3}}
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="content-right">
						<view class="img">
							<image :src="item.img" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view v-if="type2" class="list">
			<view>
				<u-collapse>
					<u-collapse-item class="law" :title="item.head" v-for="(item, index) in itemList" :key="index">
						{{item.body}}
					</u-collapse-item>
				</u-collapse>
			</view>
			
		</view>

		<view v-if="type3" class="list">
			<view class="suits" v-for="(item, index) in list4" :key="index">
				<view class="title">
					<label>{{item.title}}</label>
				</view>
				<u-read-more ref="uReadMore" show-height="200" toggle="true">
					<!-- <u-parse :html="item.content" @load="parseLoaded"></u-parse> -->
					<rich-text :nodes="item.content"></rich-text>
				</u-read-more>
			
			</view>

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
				list: [{
						title: '10条法律常识，最后一条很多人都不晓得！',
						img: require('../../static/law.png'),
						content: '网购商品遇到问题，该如何维权？',
						secondTitle: '生活法律科普',
						time: '2020年3月4日',
						img1: require('../../static/image/comment.png'),
						img2: require('../../static/image/like.png'),
						img3: require('../../static/image/collect.png'),
						num1: '8',
						num2: '31',
						num3: '15',
					},
					{
						title: '《民法典》每日一点',
						img: require('../../static/law1.jpg'),
						content: '侄子、外甥有继承权吗？',
						secondTitle: '生活法律科普',
						time: '2020年2月5日',
						img1: require('../../static/image/comment.png'),
						img2: require('../../static/image/like.png'),
						img3: require('../../static/image/collect.png'),
						num1: '8',
						num2: '31',
						num3: '15',
					},
					{
						title: '《民法典》每日一点',
						img: require('../../static/law2.jpg'),
						content: '可以再收养一个孩子吗。',
						secondTitle: '生活法律科普',
						time: '2020年1月5日',
						img1: require('../../static/image/comment.png'),
						img2: require('../../static/image/like.png'),
						img3: require('../../static/image/collect.png'),
						num1: '8',
						num2: '31',
						num3: '15',
					},
				],
				list1: [{
						image: '/static/1.jpg',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: '/static/2.jpg',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: '/static/4.jpg',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				],
				type1: true,
				type2: false,
				type3: false,
				list2: [{
					name: '法律常识',
				}, {
					name: '法律法规'
				}, {
					name: '经典案例',
				}],
				current: 0,
				itemList: [{
					head: "【固定期限劳动合同】",
					body: "固定期限劳动合同，是指用人单位与劳动者约定合同终止时间的劳动合同。",
					open: true,
					disabled: true
				}, {
					head: "【公司义务及权益保护】",
					body: "公司从事经营活动，必须遵守法律、行政法规，遵守社会公德、商业道德，诚实守信，接受政府和社会公众的监督，承担社会责任。",
					open: false,
				}, {
					head: "【夫妻共同财产的离婚处理】",
					body: "离婚时，夫妻的共同财产由双方协议处理;协议不成时，由人民法院根据财产的具体情况，照顾子女和女方权益的原则判决。",
					open: false,
				}, {
					head: "【共同债务】",
					body: "离婚时，原为夫妻共同生活所负的债务，应当共同偿还。共同财产不足清偿的，或财产归各自所有的，由双方协议清偿;协议不成时，由人民法院判决。",
					open: false,
				}, {
					head: "【社会保险和福利】",
					body: "国家发展社会保险事业，建立社会保险制度，设立社会保险基金，使劳动者在年老、患病、工伤、失业、生育等情况下获得帮助和补偿。",
					open: false,
				}],
				list4: [{
					title: "泸州遗赠案",
					content: `<p>四川泸州的黄永彬与妻子蒋伦芳结婚30多年，有一养子。1994年起黄开始与张学英来往，1996年起二人公开同居，依靠黄的工资（退休金）及奖金生活，并曾经共同经营。但黄永彬与蒋伦芳并未离婚。2001年2月起，黄病重住院，蒋伦芳一直在医院照顾，法院认为其尽到了扶养义务。4月18日黄永彬立下遗嘱：“我决定，将依法所得的住房补贴金、公积金、抚恤金和卖泸州市江阳区一套住房售价的一半（即4万元），以及手机一部遗留给我的朋友张学英一人所有。我去世后骨灰盒由张学英负责安葬。”</p>
					
					<p>4月20日，该遗嘱在纳溪区公证处得到公证。黄去世后，张根据遗嘱向蒋索要财产和骨灰盒，遭到蒋拒绝。张遂向纳溪区人民法院起诉，请求依据《继承法》的有关规定，判令被告蒋伦芳按遗嘱履行，同时对遗产申请诉前保全。</p>
					
					<p>从5月17日起，法院经过4次开庭之后（其间曾一度中止，2001年7月13日，纳溪区司法局对该公证遗嘱的“遗赠抚恤金”部分予以撤销，依然维持了住房补贴和公积金中属于黄永彬部分的公证。此后审理恢复），于10月11日判决驳回原告张学英的诉讼请求。</p>
					
					<p>法院判决依据《民法通则》第七条“民事活动应当尊重社会公德，不得损害社会公共利益”的基本原则，认为黄某的遗嘱虽然是其真实意思的表示，形式上也合法，但遗嘱内容存在违法之处，且黄某与原告的非法同居关系违反了《婚姻法》的有关规定，黄某的遗赠遗嘱是一种违反公序良俗和法律的行为，因此是无效的。本案判决获得了当地民众的热烈支持，但却被很多法律界人士评价为“道德与法”“情与法”的冲突，甚至认为这是在舆论的压力下做出的一起错案。</p>
					
					`,
				}, {
					title: "齐玉苓受教育权案",
					content: `<p>齐玉苓与陈晓琪均系滕州八中1990届应届初中毕业生，陈晓琪在1990年中专预选考试时成绩不合格，失去了升学考试资格。齐玉苓则通过了预选考试，在统考中成绩为441分，超过了委培录取的分数线。后来济宁商校发出了录取“齐玉玲”为该校1990级财会专业委培生的通知书，陈晓琪在其父陈克政的操纵下，从滕州八中领取了该通知后即以“齐玉玲”的名义入济宁商校就读。陈晓琪从济宁商校毕业后，以“齐玉玲”的姓名在中国银行滕州支行工作。齐玉苓经过复读，后就读于邹城劳动技校，1996年8月被分配到山东鲁南铁合金总厂工作，自1998年7月，有相当一段时间下岗待业。</p>

					<p>1999年齐玉苓在得知陈晓琪冒用其姓名上学并就业这一情况后，以陈晓琪及有关学校和单位侵害其姓名权和受教育权为由诉至法院，要求被告停止侵害，并赔偿经济损失和精神损失。枣庄市中级人民法院一审认为陈晓琪侵害了齐玉苓的姓名权，判决陈晓琪停止侵害，陈晓琪、陈克政、济宁商校、滕州八中、滕州教委向齐玉苓赔礼道歉并赔偿其精神损失费35，000元。齐玉苓不服，提出上诉，要求陈晓琪等赔偿各种损失56万元。</p>　

					<p>该案二审期间，最高人民法院于8月13日专门就该案作出了《关于以侵犯姓名权的手段侵犯宪法保护的公民受教育的基本权利是否应承担民事责任的批复》（法释【２００１】２５号），明确指出：根据本案事实，陈晓琪等以侵犯姓名权的手段，侵犯了齐玉苓依据宪法规定所享有的受教育的基本权利，并造成了具体的损害后果，应承担相应的民事责任。</p>　

					<p>山东高院8月23日作出了终审判决，判决陈晓琪停止对齐玉苓姓名权的侵害；陈晓琪、陈克政、济宁商校、滕州八中、滕州教委向齐玉苓赔礼道歉；齐玉苓因受教育的权利被侵犯造成的直接经济损失7，000元由陈晓琪和陈克政赔偿，济宁商校、滕州八中、滕州教委承担连带赔偿责任；齐玉苓因受教育的权利被侵犯造成的间接经济损失由陈晓琪、陈克政赔偿，济宁商校、滕州八中、滕州教委承担连带赔偿责任；陈晓琪、陈克政、济宁商校、滕州八中、滕州教委赔偿齐玉苓精神损害赔偿费50，000元。</p>`,
				}],
				shadowStyle: {
					backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
					paddingTop: "300rpx",
					marginTop: "-300rpx"
				}
			}
		},
		methods: {
			change(index) {
				this.current = index;
				if (index == 0) {
					this.type1 = true;
					this.type2 = false;
					this.type3 = false;
				} else if (index == 1) {
					this.type1 = false;
					this.type2 = true;
					this.type3 = false;
				} else {
					this.type1 = false;
					this.type2 = false;
					this.type3 = true;
				}
			},
			parseLoaded() {
				this.$refs.uReadMore.init();
				this.$set()
			},
			like(){
				console.write(index);
				this.list[c].img2=require('../../static/image/like1.png');
			}

		}
	}
</script>

<style lang="less">
	/deep/.swiper-item {
		width: 100%;
		height: 100%;
		border-radius: 10px;

		&>image {
			width: 100%;
			height: 100%;
		}
	}

	.wrap {
		padding: 40rpx;
		padding-bottom: 5rpx;
	}

	.container {
	 display: flex;
	 flex-direction: column;
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50px;
			background-color: #477BFF;

			.header-left {
				display: flex;
				align-items: center;
				padding-left: 10px;

				&>image {
					width: 30px;
					height: 30px;
				}

				&>label {
					margin-left: 5px;
					font-size: 20px;
					color: #FFFFFF;
					font-weight: bold;
				}
			}

			.header-right {
				width: 200px;
				margin-right: 20px;

				&>u-search {
					width: 100%;
				}
			}
		}


		.list {

			margin: 10px;

			.card {
				height: 120px;
				background-color: #ffffff;
				padding: 10px;
				margin: 10px;
				border-radius: 10px;

				.content {
					display: flex;
					justify-content: space-between;

					.content-left {
						width: 350rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.title {
							font-size: 15px;
						}
					}

					.content-right {

						.img {
							width: 100px;
							height: 100px;


							&>image {
								width: 100%;
								height: 100%;
								border-radius: 20px;
							}
						}
					}
				}

				.icons {
					margin-top: 10px;
					justify-content: space-between;

					.chat {
						display: flex;

						.chat-one {
							display: flex;
							align-items: center;

							.image {
								margin-left: 10px;
								width: 15px;
								height: 15px;
							}

						}
					}
				}
			}


			.law {
				background-color: #ffffff;
				padding: 10px;
				margin: 10px;
				border-radius: 10px;
				margin-top: 10px;

				.lawtop {
					font-size: 15px;

					&>text {
						display: -webkit-box;
						/*弹性伸缩盒子模型显示*/
						-webkit-box-orient: vertical;
						/*排列方式*/
						-webkit-line-clamp: 2;
						/*显示文本行数*/
						overflow: hidden;
						/*溢出隐藏*/
					}
				}

				.lawbottom {
					font-size: 13px;
					display: flex;
					flex-direction: row-reverse;
				}
			}

			.suits {
				background-color: #ffffff;
				padding: 10px;
				margin: 10px;
				border-radius: 10px;

				&>u-read-more {}

				.title {
					font-size: 20px;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			}

		}
	.uni-margin-wrap {
	 	
		height:100%;
	 	margin:0 0upx;
	 }
	 .swiper {
	 	height: 300upx;
	 }
	 .swiper-item {
	 	display: block;
	    line-height: 300upx;
	 	text-align: center;
	 }
	 /*图片宽度设置100% ，高度300upx（设为auto图片无法显示）*/
	 .swiper-image{  
	     width:100%;  
	     height:300upx; 
	 } 
	}
	.header-1{
		height: 50rpx;
		width: 100%;
		background-color: #477BFF;
	}
</style>
