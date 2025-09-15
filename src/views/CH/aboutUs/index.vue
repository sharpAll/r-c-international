<template>
  <div class="block">
    <el-divider>
      <div class="title">关于我们</div>
      <div class="title-1">R&C Asia Group（R&C）</div>
    </el-divider>
    <div v-show="type == 'introduce'" class="center-box fade-in" style="margin-top: 5%;">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">公司介绍</div>
          <p>
            R&C是一家以专业为客户提供商业决策为导向的咨询公司，提供极具商业合规、商业道德和诚信的商业咨询服务。
          </p>
          <br />
          <p>
            我们通过内部和外部的商业调查及商业信息收集与分析，在过去的10年中，我们帮助客户有效防范商业欺诈以及潜在的合作交易风险。
          </p>
        </div>
        <div style="width:550px;position:absolute;left:0;top:0">
          <el-carousel height="400px">
            <el-carousel-item>
              <div class="carousel-bg bg-1"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="carousel-bg bg-2"></div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div v-show="type == 'service'" class="center-box fade-in" style="margin-top: 5%;">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">我们的服务</div>
          <p>
            为客户提供“一站式”服务和调查后支持，包括：项目信息反馈、项目会议沟通、信息来源追溯等等，让客户及时的掌握项目的进展情况。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="400px" src="../../../assets/img/aboutUs/service-1.jpg" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      type: this.$route.params.type
    };
  },
  watch: {
    '$route.params.type'(newVal) {
      this.type = newVal;
    }
  }
};
</script>
<style scoped>
.title {
  font-size: 24px;
  color: #333;
  text-align: center;
}
.title-1 {
  font-size: 14px;
  color: #ccc;
  text-align: center;
}
.carousel-bg.bg-1 {
  background: center url(../../../assets/img/aboutUs/introduction-1.jpg) no-repeat;
  background-size: cover;
  height: 400px;
}
.carousel-bg.bg-2 {
  background: center url(../../../assets/img/aboutUs/introduction-2.jpg) no-repeat;
  background-size: cover;
  height: 400px;
}
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin-top: 40px;
}
.bg-box .title {
  font-size: 24px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin-bottom: 30px;
}
.bg-box .title::after {
  content: "";
  display: block;
  width: 3px;
  height: 24px;
  background: #606a9e;
  left: 0;
  top: 5px;
  position: absolute;
}
.bg-box .bg-content {
  margin-right: 600px;
  padding: 50px 120px 0;
  height: 400px;
}
.bg-box .bg-content.right {
  margin-right: 0;
  margin-left: 500px;
}
.bg-box .bg-content p {
  line-height: 28px;
  color: #888;
  font-size: 18px;
}
</style>
