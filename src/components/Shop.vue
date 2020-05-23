<template>
	<div class="shop">
		<ul class="left_part">
			<li><a href="#">家用电器</a></li>
			<li><a href="#">手机</a>/<a href="#">运用商</a>/<a href="#">数码</a></li>
			<li><a href="#">女装</a>/<a href="#">男装</a>/<a href="#">儿童装</a></li>
			<li><a href="#">鞋履</a>/<a href="#">箱包</a></li>
			<li><a href="#">运动</a>/<a href="#">户外</a></li>
			<li><a href="#">家具</a>/<a href="#">家电</a></li>
			<li><a href="#">办公</a>/<a href="#">娱乐</a></li>
			<li><a href="#">手机</a>/<a href="#">运用商</a></li>
			<li><a href="#">手机</a>/<a href="#">运用商</a></li>
			<li><a href="#">手机</a>/<a href="#">运用商</a></li>
			<li><a href="#">手机</a>/<a href="#">运用商</a>/<a href="#">数码</a></li>
			<li><a href="#">手机</a>/<a href="#">运用商</a>/<a href="#">数码</a></li>
			<li><a href="#">手机</a>/<a href="#">运用商</a>/<a href="#">数码</a></li>
			<li><a href="#">图像</a>/<a href="#">音响</a>/<a href="#">电子书</a></li>
			<li><a href="#">手机</a>/<a href="#">运用商</a>/<a href="#">数码</a></li>
			<li><a href="#">理财</a>/<a href="#">众筹</a>/<a href="#">白条</a>/<a href="#">保险</a></li>
		</ul>
		<ul class="shop_ul">
			<li class="shop_li" v-for="(good,index) in goods">
					<img :src="good.src" alt="good" class="good_img" @mouseover="changeFlagTrue(index)" />
					<div class="good_info">
						<p @click="changeSelectedItem(index)">
							<router-link to="/shoppingitem" class="title_info">{{good.title}}</router-link>
						</p>
						<p class="good_info_bottom">
							<span class="user_info"><img :src="good.shopsSrc" alt="shop"/><span class="user_name">{{good.shopsName}}</span></span>
							<span class="price_info"><img :src="'../static/images/price.png'" alt="price"/><span class="price_num">{{good.price}}</span></span>
						</p>
					</div>
					
					<div class="layout" v-if="good.flag" @mouseout="changeFlagFalse(index,$event)" @click="changeSelectedItem(index)">
						<router-link to="/shoppingitem" tag="div" class="link">
						 	<p><img :src="'../static/images/like.png'" alt="like"/><span class="like_num">{{good.likes}}</span></p>
							 <!-- 这里的：class绑定的背景图，对应css在islike.css中 -->
						 </router-link>
					</div>					
					<div class="like" :class="good.isLike?'toLike':'noLike'" @click="changeLike(index)" v-if="good.flag"></div>				
			</li>
		</ul>
				<div class="grid-col3 fr">
			<!-- 登录模块 -->
			<div class="login">
				<div class="login-t">
					Hi，欢迎来到购物网站！<br />
					 <a @click="changeLoginway('login')"><router-link to="/login"  class="login_button">登录</router-link></a>
        			<a @click="changeLoginway('register')" ><router-link to="/login" class="register">注册</router-link></a>     
					<a href="#" class="user-info">
						<img :src="'../static/images/login.png'" alt="">
					</a>
				</div>
				<div class="login-b">
					<a href="#">新人福利</a>
					<a href="#">PLUS会员</a>
				</div>
			</div>

		</div>
	</div>
</template>
<script type="text/javascript">
import {mapGetters} from 'vuex'
	export default {
		data (){
			return {
			}
		},
		created (){
			this.$store.dispatch('changeShow','shop')//此步改变导航栏
		},
		computed:mapGetters({
				goods:'getGoods',
				loginway:'getLoginway'
			}),
		methods:{
			    changeLoginway(type){
      //改变登录方式
        this.$store.dispatch('changeLoginway',type)
    },
			changeLike(index){
				this.$store.dispatch('changeLike',index)//改变是否喜欢
			},
			changeFlagTrue(index){
				this.$store.dispatch('changeFlagTrue',index)//改变是否显示喜欢
			},
			changeFlagFalse(index,e){
				var evt=this.getRelatedTarget(e)
				if(evt.getAttribute('class')){
					if(!(evt.getAttribute('class').indexOf('like')!=-1)){
						this.$store.dispatch('changeFlagFalse',index)//改变是否显示喜欢
					}	
				}
			},
			changeSelectedItem(index){
				this.$store.dispatch('changeSelectedItem',index)//改变进入商品
			},
			getRelatedTarget: function (event) {
		        if (event.relatedTarget) {
		            return event.relatedTarget;
		        } else if (event.toElement) {
		            return event.toElement;
		        } else if (event.fromElement) {
		            return event.fromElement;
		        } else {
		            return null;
		        }
    		}
		}
	}
</script>
<style scoped>
	.shop{margin: 0 auto;padding-top: 20px}
	.shop:after{width: 0;height: 0;display: block;clear:both;content: ""}
	.shop_li{float:left;width: 300px;padding: 5px;border:1px solid #d9d9d9;margin-left:10px;margin-bottom: 20px;position: relative;box-sizing: border-box;}
	.good_img{width: 290px;height: 300px;border:none;}
	.title_info{display: inline-block;width: 290px;margin: 4px 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height: 24px;line-height: 24px;font-size:16px; }
	.good_info_bottom{height: 24px;display: block}
	.good_info_bottom:after{width: 0;height: 0;display: block;clear:both;content: ""}
	.price_info,.user_info{height: 24px;display: inline-block}
	.user_info{float:left;}
	.price_info{vertical-align: top;float:right;}
	.user_info img{width: 24px;height: 24px;margin-right:5px ;border: none}
	.price_info img{width: 18px;height: 18px;border: none;}
	.user_name{color:rgb(114, 113, 118);font-size: 12px;vertical-align: top;line-height: 24px;height: 24px;display: inline-block;}
	.price_num{color: #2C2C2C;font-size: 21px;line-height: 24px;font-weight: bold;height: 24px;display: inline-block;margin-left:3px;}
	.layout{z-index:2;width: 290px;height: 300px;opacity: 0.8;background: #111;position: absolute;top:5px;left: 5px;opacity: 0.8;cursor:pointer;}
	.layout p{text-align: right;}
	.layout img{width: 21px;height: 20px;margin-right:5px ;border: none;}
	.layout .like_num{color:#fff;font-size: 18px;vertical-align: top;line-height: 20px;height: 20px;display: inline-block;font-weight: bold}
	 .like{top:115px;left: 50%;margin-left: -35px;position: absolute;width: 70px;height: 90px;    z-index: 9999;opacity: 1;cursor: pointer;}
	 .link{width: 290px;height: 290px;padding: 5px 5px 0 0}
	.left_part {
	padding: 10px 0;
	float: left;
	height: 1200px;
}
.left_part li {
	padding-left: 12px;
	height: 29px;
	line-height: 26px;
}
.left_part  li:hover {
	background-color: #FFE4DC;
}
.left_part  li:hover a {
	color: #00BC9B;
}
 a {
	text-decoration: none;  /* 取消下划线 */
	font-size: 12px;
	color: #999;
}
a:hover {
	color: #c81623;
}
.grid-col3 {
	/* width: 80px; */
	height: 100%;
}
/* 右边模块 */
.login {
	height: 85px;
	background-color: #fff;
	padding: 15px;
	margin-left: 10px;
}
.login-t {
	/* width: 95px; */
	height: 60px;
	line-height: 20px;
	font-size: 12px;
	white-space: nowrap;  /* 强制一行内显示 */
	overflow: hidden;  /* 溢出隐藏 */
	text-overflow: ellipsis; /* 超出的部分显示 省略号 */
	color: #666;
	padding-left: 60px;  /* 这里给padding 把文字挤过来 */
	position: relative;
}
.user-info {
	/* width: 50px; */
	height: 50px;
	position: absolute;
	left: 0;
	top: 0;
	/* background: url(../../static/images/@1x.png) no-repeat -70px 0; */
	
}
.login-b a {
	display: inline-block;
	width: 60px;
	height: 20px;
	line-height: 20px;
	border: 2px solid #f10215;
	margin-right: 3px;
	text-align: center;
	color: #f10215;
}
.login-b a:hover {
	background-color:  #f10215;
	color: #fff;
}
.user-info img {
	width: 40px;
	border-radius: 50%;
	margin: 5px;
}
.news {
	height: 154px;
	border-bottom: 1px solid #ccc;
	background-color: #fff;
	padding: 7px 13px 0;
	box-sizing: border-box;
}
.news-t {
	height: 19px;
	border-bottom: 1px solid #ccc;
	position: relative;
}
.news-t a {
	float: left;
	height: 17px;
	line-height: 17px;
}
	</style>