<template>
  <div class="block">
    <el-divider>
      <div class="title">About Us</div>
      <div class="title-1">R&C Asia Group（R&C）</div>
    </el-divider>
    <div v-show="type == 'introduce'" class="center-box fade-in" style="margin-top: 5%;">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Company Profile</div>
          <p>
            R&C is a professional consulting firm that provides clients with business decision-making guidance, offering highly compliant, ethical, and honest business investigation services.
          </p>
          <br />
          <p>
            We have helped our clients effectively prevent commercial fraud and potential risks in cooperative transactions over the past 10 years through internal and external business investigations and collection and analysis of business information.
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
          <div class="title">Services</div>
          <p>
            Provide customers with "one-stop" services and post survey support, including project information feedback, project meeting communication, information source tracing, etc., to enable customers to timely grasp the progress of the project.
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
