<template>
  <div class="block">
    <div class="title">Q & A</div>
    <div class="info">
      <p class="q">Q：如何联系我们的咨询部门？</p>
      <p class="a">A：您可以发送电子邮件至somchai.maha@apr-tha.com。您的信息必须包括您的身份、联系方式和联系我们的原因，我们的客户经理会及时跟进您的需求。</p>
    </div>
    <div class="info">
      <p class="q">Q：我的委托及相关信息会受到保护吗？</p>
      <p class="a">A：是的，会的。我们保证信息的保密性，此外，我们也可以根据您的要求签署保密协议。</p>
    </div>
    <div class="info">
      <p class="q">Q：你们可以为我提供一份关于项目的建议或计划书吗？</p>
      <p class="a">A：是的，可以。我们会向您提供一份正式的项目建议书，其中包含工作范围、工作方法、时间表和项目预算等信息。</p>
    </div>
    <div class="info">
      <p class="q">Q：我想指定你为我服务，你会把工作分包出去了吗？</p>
      <p class="a">A：我们有自己的办公室和专业的调研团队来执行和完成任务，不会将您的业务分包出去。</p>
    </div>
    <div class="info">
      <p class="q">Q：项目完成后，我会收到书面报告吗？</p>
      <p class="a">A：是的，我们在完成项目后会向您提供全面的报告。</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.block {
  width: 100%;
  height: 92vh;
  background: #1b3045 center url(../../../assets/img/qa/qa.jpg) no-repeat;
  background-size: cover;
  overflow: hidden;
}
.block .title {
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  margin: 40px 0;
}
.block .info {
  width: 1200px;
  margin: 30px auto;
  font-family: arial, helvetica, sans-serif;
}
.block .info .q {
  font-size: 22px;
}
.block .info .a {
  font-size: 18px;
}
</style>
