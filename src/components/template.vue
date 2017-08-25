<template>
  <div>
    <nav>
      <img src="../assets/images/logo.png" alt="" />
    </nav>
    <section class="nav-in">
      <ul>
        <router-link tag="li" :to="{'name':'Template'}" >自建模板</router-link>
        <router-link tag="li" :to="{'name':'Template02'}" >参考模板</router-link>
      </ul>
    </section>
    <router-view></router-view>
  </div>
</template>
  export default {}
</script>
<style lang="css" scoped>
  .nav-in ul li {
  width : 50%;
}
</style>
