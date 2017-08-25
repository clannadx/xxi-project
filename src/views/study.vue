<template>
  <div>
    <section class="form-in">
      <router-link class="button"  :to="{'name':'Template'}" >点此选择模板</router-link>
      <div class="mt">
        <textarea placeholder="请选择模板"  readonly="readonly" name="" rows="" cols=""></textarea>
      </div>

      <div class="md">
        <span>选择发送方式</span>
        <ul class="clearfix">
          <li class="active">输入手机号</li>
          <li class="last">选择群组</li>
        </ul>
      </div>

      <div class="mt">
        <input type="text" placeholder="请输入要下发的手机号" name="" id="" value="" />
      </div>

      <div class="mt mb">
        <input type="submit" class="btn-submit"  name="" id="" value="确定发送" />
      </div>
    </section>

    <section class="info-bottom">
      <h4>温馨提示</h4>
      <ul>
        <li>1、变量模板下发请至电脑端操作。</li>
        <li>2、微信端<span>仅支持</span>单一手机号及通讯录群组下发。</li>
        <li>3、如果有任何疑问，请联系客服：400-1000-986。</li>
      </ul>

      <h4>计费规则</h4>
      <ul>
        <li>1、短信字数<span>≤70</span>个字，按照<span>70个字</span>一条短信计算。中文英文符号统一计算为一个字符。</li>
        <li>2、短信字数<span>＞70</span>个字，占用3个字符作为分条字符，按照<span>67个字</span>记为一条短信计算，多条短信可能在部分手机系统上呈现为一条短信的形态，测试时请注意。</li>
      </ul>
    </section>
  </div>
</template>

<script>
    export default {}
</script>
<style lang="css" scoped>
  @import"../assets/css/quickly-send.css";
</style>
