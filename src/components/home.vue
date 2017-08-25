<template>
  <div >
    <section class="banner">
      <h2>业务办理</h2>
      <p>快速实现完善的移动端通讯应用</p>
    </section>

    <section class="items">
      <ul class="clearfix">
        <li class="item01">
          <router-link to="/"   event="mouseover">
            <img src="../assets/images/navigation/item01.png"/>
            <div class="item01-right" >
              <h4>点验</h4>
              <p>优化用户体验<br />
                双重验证保障</p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/user"   event="mouseover">
            <div class="none">
              <span></span>
              <h4>验证码短信</h4>
            </div>
          </router-link>
        </li>
        <li>
          <a href="">
            <div>
              <span class="icon02"></span>
              <h4>短信通知</h4>
            </div>
          </a>
        </li>
        <li>
          <router-link to="/document"   event="mouseover">
            <div>
              <span class="icon03"></span>
              <h4>流量分发</h4>
            </div>
          </router-link>
        </li>
        <li>
          <a href="">
            <div class="none">
              <span class="icon04"></span>
              <h4>语音验证码</h4>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <span class="icon05"></span>
              <h4>语音通知</h4>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <span class="icon06"></span>
              <h4>号码隐藏</h4>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="none">
              <span class="icon07"></span>
              <h4>网页回呼</h4>
            </div>
          </a>
        </li>
        <li class="none">
          <a href="">
            <div>
              <span class="icon08"></span>
              <h4>富媒体</h4>
            </div>
          </a>
        </li>
        <li class="none">
          <a href="">
            <div>
              <span class="icon09"></span>
              <h4>闪信</h4>
            </div>
          </a>
        </li>
        <li class="none">
          <a href="">
            <div class="none" >
              <span class="icon10"></span>
              <h4>国际短信</h4>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
  }
</script>
<style>

</style>
