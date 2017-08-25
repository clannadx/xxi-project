<template>
  <div>
    <section class="form-in">
      <div class="model">
        <select name="">
          <option value="">请选择模板类型</option>
          <option value="">请选择模板类型1</option>
          <option value="">请选择模板类型2</option>
          <option value="">请选择模板类型3</option>
        </select>
        <span></span>
      </div>
      <div class="mt">
        <input class="sign-s" type="text" />

        <router-link class="button"  :to="{'name':'Sign'}" >点此选择签名</router-link>
      </div>
      <div class="mt">
        <textarea placeholder="请输入短信内容。例子：【任信了】您的验证码是：{AA}。如有帮助请联系客服。" name="" rows="" cols=""></textarea>
        <p>总计 <span>20</span>个字   第<span>1</span>条 <span>68</span>/70 个字</p>
      </div>

      <input class="btn-submit" type="submit" name="" id="" value="确认提交" />
    </section>

    <section class="info-bottom">
      <h4>内容规范</h4>
      <ul>
        <li>1、必须带有<span>【签名】</span>，签名内容为：公司或品牌名称，字数要求<span>2-16</span>个字符，运营商规定必填。</li>
        <li>2、签名只能选择审核过的签名，内容首尾不能添加<span>【】</span>，且不能包含<span>超链接</span>。</li>
        <li>3、内容合法，不能发送<span>房产、发票、移民</span>等国家法律法规严格禁止的内容。</li>
        <li>4、如果短信中含有变量如：姓名，验证码等，可用<span>{AA}</span>代替，变量<span>{AA}</span>代表最多12个汉字，数字，字母或者符号。</li>
        <li>5、模板内容最多<span>不超过800</span>个字符。</li>
        <li>6、每个签名可以绑定<span>多个</span>模板。</li>
        <li>7、16:30分前提交的申请将在当日审核完成，节假日顺延。</li>
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
  @import "../assets/css/template_set.css";
</style>
