<template lang="html">
  <div class="my-nav">
    <ul>
      <router-link tag='li' to="/index">
        <i class="iconfont icon-shouye"></i>
        首页
      </router-link>
      <router-link tag='li' to="/shop">
        <i class="iconfont icon-shangcheng"></i>
        商城
      </router-link>
      <router-link tag='li' to="/life">
        <i class="iconfont icon-kafeibeichabei"></i>
        生活
      </router-link>
    </ul>
  </div>
</template>

<script>
import '../assets/font/iconfont.css'
export default {
}
</script>

<style lang="less">
body{
  background-color: #f1f1f1;
}
.my-nav{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  ul{
    list-style: none;
    display: flex;
    margin: 0;
    padding: 10px 0;
    li{
      float: left;
      flex: 1;
      text-align: center;
      font-size: 16px;
      i{
        font-size: 25px;
      }
    }
    .active{
      color: red;
    }
  }
}

</style>
