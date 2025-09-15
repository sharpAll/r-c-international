<template>
  <div class="block">
    <div class="title">Q & A</div>
    <div class="info">
      <p class="q">Q：How to contact our consulting department?</p>
      <p class="a">A：You can send an email to somchai.maha@apr-tha.com Your information must include your identity, contact information, and the reason for contacting us. Our account manager will promptly follow up on your needs.</p>
    </div>
    <div class="info">
      <p class="q">Q：Will my commission and related information be protected?</p>
      <p class="a">A：Yes, it will. We guarantee the confidentiality of information, and we can also sign a confidentiality agreement according to your request.</p>
    </div>
    <div class="info">
      <p class="q">Q：Can you provide me with a proposal or plan for the project?</p>
      <p class="a">A：Yes, it's possible. We will provide you with a formal project proposal that includes information such as scope of work, work methods, timeline, and project budget.</p>
    </div>
    <div class="info">
      <p class="q">Q：I want to designate you to serve me, will you subcontract the work?</p>
      <p class="a">A：We have our own office and professional research team to execute and complete tasks, and will not subcontract your business.</p>
    </div>
    <div class="info">
      <p class="q">Q：Will I receive a written report after completing the task?</p>
      <p class="a">A：Yes, we will provide you with a comprehensive report after completing the task.</p>
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
