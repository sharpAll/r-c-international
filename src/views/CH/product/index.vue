<template>
  <div class="block">
    <div v-show="type == 'zx'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">企业征信调查</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">企业注册概览报告</div>
          <p>
            预览目标公司的简单经营情况、产权成果、经营风险状况，用于快速确定潜在合作对象经营主体的真实情况。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">企业注册财务报告</div>
          <p>
            合作前快速确定目标的身份信息、判断其资本能力和简单背景，对目标公司经营及债务情况进行预判。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx2.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">标准信用报告</div>
          <p>
            基于多渠道数据获取与处理能力，根据不同业务场景和具体需求形成多元化的企业信用报告，为商业赊销提供信用评估，有效防范商业风险，助力商业决策。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx3.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">企业访谈信誉报告</div>
          <p>
            提供信用评级与商誉访谈服务，主要服务于银行、保险、互联网金融、供应链金融、消费金融及消费、生活等多种商业场景，用于了解合作方的商业诚信及公司背景研究信息，降低商业合作风险。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx4.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'ft'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">企业访谈信誉</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">标准商誉访谈报告</div>
          <p>
            基于合规性及商业调查性的产品，可以协助合作伙伴、交易对手等对潜在合作对象进行商业调查，通过合规合法的调查，获得真实、可靠的商业情报，为您的商业决策提供支持。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">深度商誉访谈报告</div>
          <p>
            对企业外部、内部环境信息收集及分析，通过各种维度了解目标，为您提供目标的信誉及风险信息，帮助您发掘目标的潜在风险。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft2.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">定制商誉访谈报告</div>
          <p>
            以客户要求为主要调查方向，快速提供可靠的商业信息，为您在突发事件解决、为企业商业合规提供全方面的专业支持。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft3.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">定制尽职调查访谈报告</div>
          <p>
            对目标进行多方面尽职调查，提供利益输送信息、管理人员背景以及商业合规等信息，帮助客户防范商业欺诈以及潜在的合作交易风险。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft4.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'fm'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">媒体负面搜索</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content large">
          <div class="title">企业媒体负面调查报告</div>
          <p>
            基于合规性及商业调查性的产品，可以协助合作伙伴、交易对手等对潜在合作对象进行商业调查，通过合规合法的调查，获得真实、可靠的商业情报，为您的商业决策提供支持。
          </p>
        </div>
        <div style="width:600px;position:absolute;right:0;top:0">
          <img width="600px" height="400px" src="../../../assets/img/product/fm.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'sd'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">实地考察</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">企业实地考察报告</div>
          <p>
            快速、高效地从现场获取目的地的第一手信息，帮助判断合作伙伴的真实性，防范欺诈风险。
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/sd1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">个人实地考察报告</div>
          <p>
            快速、高效地从现场获取目的地的第一手信息，帮助判断合作伙伴的真实性，防范欺诈风险。
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/sd2.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'sj'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">数据匹配</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content large">
          <div class="title">数据匹配报告</div>
          <p>
            运用大数据分析，精准匹配合作对象对外投资的商业信息。
          </p>
        </div>
        <div style="width:600px;position:absolute;right:0;top:0">
          <img width="600px" height="400px" src="../../../assets/img/product/sj.jpg" />
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
.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin: 80px 0 40px;
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
  height: 258px;
}
.bg-box .bg-content.large {
  margin-right: 500px;
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
