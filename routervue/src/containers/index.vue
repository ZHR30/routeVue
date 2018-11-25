<template lang="html">
  <div class="index">
    <ul>
      <router-link tag='li' to="/index/a">页面A</router-link>
      <router-link tag='li' to="/index/b">页面B</router-link>
      <router-link tag='li' :to="{name:'C',params:{id:'78977'}}">页面C</router-link>
    </ul>
    <keep-alive>
      <router-view />
    </keep-alive>
    <MyNav />
  </div>
</template>

<script>
import MyNav from '../components/MyNav'
export default {
  components:{
    MyNav
  }
}
</script>

<style lang="css">
  ul{
    background-color: #fff;
    display: flex;
    list-style: none;
    padding: 5px 0;
  }
  ul li{
    flex: 1;
    text-align: center;
  }
  ul .active{
    color: green;
  }
</style>
