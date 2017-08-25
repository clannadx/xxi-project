<template>
    <div>
      <nav>
        <img src="../assets/images/logo.png" alt="" />
      </nav>
      <section class="nav-in">
        <ul>
          <router-link tag="li" :to="{'name':'User'}" >签名设置</router-link>
          <router-link tag="li" :to="{'name':'Work'}" >模板设置</router-link>
          <router-link tag="li" :to="{'name':'Study'}" >快速下发</router-link>
        </ul>
      </section>
      <router-view></router-view>
    </div>
</template>

<script>
//  let data = [
//    {
//      id:1,
//      userName:"leo1",
//      sex:'男',
//      hobby:'写代码'
//    },
//    {
//      id:2,
//      userName:"leo2",
//      sex:'男',
//      hobby:'唱歌'
//    },
//    {
//      id:3,
//      userName:"leo3",
//      sex:'男',
//      hobby:'读书'
//    }
//  ]
    export default {
//      data(){
//          return {
//              userList:data
//          }
//  }
    }
</script>
<style>

</style>
