<template>
    <div>
      <nav>
        <img src="../assets/images/logo.png" alt="" />
      </nav>

      <section class="sign">
        <div class="text">
          <ul>
            <li><em>签名内容</em><span>【任信了】</span></li>
            <li><em>营业执照名</em> <span>武汉恒枫伟业科技有限公司</span></li>
            <li><em>提交时间</em><span >2017.06.20</span></li>
            <li class="last"><em>审核结果</em><span class="green">已通过</span>
              <input type="button" class="btn btn-red" value="选择此签名" />
            </li>
          </ul>
        </div>

        <div class="text">
          <ul>
            <li><em>签名内容</em><span>【任信了】</span></li>
            <li><em>营业执照名</em> <span>武汉恒枫伟业科技有限公司</span></li>
            <li><em>提交时间</em><span >2017.06.20</span></li>
            <li class="last"><em>审核结果</em><span class="red">已通过</span>
              <input type="button" class="btn btn-gray" value="签名不可用" />
            </li>
          </ul>
        </div>
        <div class="paging">
          <span class="prev">< 上一页</span>
          <span>第 1 页</span>
          <span class="next color">下一页 ></span>
        </div>
      </section>
    </div>
</template>

<script>
  export default {}
</script>
<style scoped>
  .sign {
    padding: 0 0.3rem 0 0.3rem;
  }
  .sign .text {
    width: 100%;
    padding-top: 0.5rem;
    height: auto;
    border-bottom: 1px solid #e5e5e5;
  }
  .sign .text ul {
    padding: 0 0.3rem;
    color: #666;
    font-size: 0.24rem;
    line-height: 0.48rem;
  }
  .sign .text ul li em {
    width: 1.4rem;
    font-style: normal;
    display: inline-block;
  }
  .sign .text ul li .green {
    color: #5fcb25;
  }
  .sign .text ul li .red {
    color: #ff0000;
  }
  .sign .text ul li .btn {
    width: 2rem;
    height: 0.6rem;
    border: 0 none;
    outline: 0 none;
    color: #666;
    font-size: 0.24rem;
    color: #fff;
    float: right;
  }
  .sign .text ul li .btn-red {
    background-color: #FF7200;
  }
  .sign .text ul li .btn-gray {
    background-color: #ededed;
    color: #999;
  }
  .sign .text ul .last {
    height: 0.6rem;
    margin-bottom: 0.5rem;
  }
  .sign .text ul .last em,
  .sign .text ul .last span {
    vertical-align: bottom;
    line-height: 0;
  }
  .paging {
    margin-top: 0.5rem;
    color: #666;
    font-size: 0.24rem;
    text-align: center;
  }
  .paging .prev {
    float: left;
  }
  .paging .next {
    float: right;
  }
  .paging .color {
    color: #FF7200;
  }


</style>
