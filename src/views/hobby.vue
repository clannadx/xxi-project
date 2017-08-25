<template>
  <div >
    <section class="form-act">
      <input type="text" class="sign-f" placeholder="请输入签名内容" name=""  value="" />
      <p class="text">2-16个字符</p>
      <div class="mt clearfix">
        <input type="text" placeholder="请输入公司名称" name=""  value="" />
      </div>
      <div class="mt clearfix">
        <input type="text" placeholder="请选择行业类型" name=""  value="" />
      </div>
      <div class="mt clearfix">
        <input type="text" placeholder="请输入营业执照号" name=""  value="" />
      </div>
      <div class="load">
        <span>上传营业执照</span>  <a class="button">点此上传图片</a>
        <div class="load-pic">
          <p>请上传营业执照扫描件（复印件需加盖公章）<br />JPG或PNG格式，文件大小不超过2M</p>
          <img src="../assets/images/pic01.png" alt="" />
        </div>

      </div>
      <input type="submit" class="btn-submit" name=""  value="提交审核" />
    </section>

    <ul class="info">
      <li>1、每个签名必需绑定一个营业执照；</li>
      <li>2、我们会在工作时间一小时内为您审核处理；非工作时间如节假日、下班时间，审核工作将顺延。 工作时间：周一至周五09:00~18:00。</li>
    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>
<style>

</style>
