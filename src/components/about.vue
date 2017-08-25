<template>
  <div style="height: 2000px;">
    我是关于
    <hr>
    <ul class="nav">
      <!--li标签里没有地址 为了方便以后调试地址 加上a标签-->
      <!--to后边接的是目标地址-->
      <!--<router-link tag="li"  to="/about" exact active-class="activeClass">-->
        <!--<a >study</a>-->
      <!--</router-link>-->
      <!--<router-link tag="li" to="/about/work">-->
        <!--<a >work</a>-->
      <!--</router-link>-->
      <!--<router-link tag="li" to="/about/hobby">-->
        <!--<a >hobby</a>-->
      <!--</router-link>-->

      <router-link tag="li"  :to="{'name':'About'}" exact active-class="activeClass">
        <a >study</a>
      </router-link>
      <router-link tag="li" :to="{'name':'Work'}">
        <a >work</a>
      </router-link>
      <router-link tag="li" :to="{'name':'Hobby'}">
        <a >hobby</a>
      </router-link>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
<!--要写在div内-->
  <!--<router-view></router-view>-->

</template>

<script>
  export default {
  }
</script>
<style>

</style>
