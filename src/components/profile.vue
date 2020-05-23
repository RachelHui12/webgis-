<template>
  <div class="main-main">
    <div class="header">
      <span class="setting"></span>
      <div class="logo"></div>
      <div class="btns">
        <router-link :to="{name:'register'}" class="btn">注册</router-link>
        <router-link :to="{name:'login'}" class="btn">登陆</router-link>
      </div>
    </div>

  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  name: "Main",
  components: {},
  data(){
      return {
          sorryShow:false
      }
  },
  methods:{
      handleKf(){
          this.sorryShow = true;
          setTimeout(()=>{
              this.sorryShow = false;
          },2000)
      }
  }
};
</script>
<style scoped lang="scss">
.main-main {
  width: 100%;
  background: url("../../static/images/icons/bg.png") no-repeat;
  background-size: 100%;
  .header {
    position: relative;
    margin-top: 44px;
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    .setting {
      position: absolute;
      right: 16px;
      top: 0;
      display: block;
      width: 24px;
      height: 24px;
      background: url("../../assets/imgs/icons/setting.png") no-repeat;
      background-size: cover;
    }
    .logo {
      width: 74px;
      height: 74px;
      border-radius: 50%;
      background: #fff url("../../static/images/icons/logo.png") no-repeat;
      background-size: cover;
    }
    .btns {
      display: flex;
      margin-top: 20px;
      .btn {
        outline: none;
        border: 1px solid #f5f5f5;
        font-size: 14px;
        color: #010e0d;
        padding: 4px 9px;
        background-color: #fff;
      }
    }
  }
  .my-card-bar {
    margin: 20px auto;
    width: 336px;
    height: 120px;
    background: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(233, 233, 233, 0.5);
    border-radius: 6px;
    .title-bar {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      height: 38px;
      align-items: center;
      box-sizing: border-box;
      padding: 0 16px;
      > .title {
        font-size: 16px;
        color: #010e0d;
        line-height: 38px;
      }
      > .arr-r {
        width: 20px;
        height: 20px;
        background: url("../../assets/imgs/icons/arr-r-1.png") no-repeat;
        background-size: 20px;
      }
      border-bottom: 1px solid #e5e5e5;
    }
    .card-items {
      display: flex;
      width: 100%;
      height: 80px;
      justify-content: space-around;
      .card-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 28px;
          height: 28px;
          margin-bottom: 4px;
        }
        .text {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
  .setting-list {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    .item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 52px;
      background-color: #fff;
      margin-bottom: 1px;
      box-sizing: border-box;
      padding: 0 16px;
      align-items: center;
      .icon-text {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #494949;
        .icon {
          width: 22px;
          height: 22px;
          margin-right: 8px;
        }
      }

      .arr-r {
        width: 30px;
        height: 30px;
        background: url("../../assets/imgs/icons/arr-r-1.png") no-repeat center;
        background-size: 20px;
      }
    }
  }
  .sorry{
      display: flex;
      width: 140px;
      background-color: #e5e5e5;
      border:1px solid #e9e9e9;
      border-radius: 6px;
      position: fixed;
      left: 50%;
      margin-left: -70px;
      top: 50%;
      align-items: center;
      justify-content: center;
      .icon{
          width: 36px;
          height: 36px;
      }
  }
}
</style>

