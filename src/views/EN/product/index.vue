<template>
  <div class="block">
    <div v-show="type == 'zx'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">Corporate credit</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Enterprise Registration Overview Report</div>
          <p>
            Preview the simple business situation, property rights achievements, and operational risk status of the target company, in order to quickly determine the true situation of potential cooperative partners' business entities.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Enterprise registration financial report</div>
          <p>
            Quickly determine the identity information of the target, assess their capital capacity and simple background before cooperation, and make predictions on the target company's operation and debt situation.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx2.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Standard Credit Report</div>
          <p>
            Based on multi-channel data acquisition and processing capabilities, diversified enterprise credit reports are formed according to different business scenarios and specific needs, providing credit evaluation for commercial credit sales, effectively preventing commercial risks, and assisting business decision-making.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx3.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Corporate Interview Reputation Report</div>
          <p>
            It provides credit rating and goodwill interview services, mainly serving a variety of business scenarios such as banking, insurance, Internet finance, supply chain finance, consumer finance and consumption, life, etc., to understand the business integrity of partners and company background research information, and reduce the risk of business cooperation.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx4.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'ft'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">Corporate reputation</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Standard Goodwill Interview Report</div>
          <p>
            Based on compliance and business investigation, products can assist partners, counterparties, and other potential partners in conducting business investigations. Through compliant and legal investigations, real and reliable business intelligence can be obtained to support your business decisions.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">In depth goodwill interview report</div>
          <p>
            Collect and analyze external and internal environmental information of the enterprise, understand the goals through various dimensions, provide you with credibility and risk information of the goals, and help you discover potential risks of the goals.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft2.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Customized Goodwill Interview Report</div>
          <p>
            Focusing on customer requirements as the main investigation direction, we quickly provide reliable business information and offer comprehensive professional support for resolving emergencies and ensuring business compliance for enterprises.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft3.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Customized due diligence interview report</div>
          <p>
            Conduct comprehensive due diligence on the target, provide information on benefit transfer, management background, and business compliance, etc., to help clients prevent commercial fraud and potential risks of cooperative transactions.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft4.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'fm'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">Negative media searches</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content large">
          <div class="title">Negative Investigation Report on Corporate Media</div>
          <p>
            Based on compliance and business investigation, products can assist partners, counterparties, and other potential partners in conducting business investigations. Through compliant and legal investigations, real and reliable business intelligence can be obtained to support your business decisions.
          </p>
        </div>
        <div style="width:600px;position:absolute;right:0;top:0">
          <img width="600px" height="400px" src="../../../assets/img/product/fm.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'sd'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">on-the-spot investigation</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">On site inspection report of the enterprise</div>
          <p>
            Quickly and efficiently obtain first-hand information about the destination from the site, helping to determine the authenticity of partners and prevent fraud risks.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/sd1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Personal field investigation report</div>
          <p>
            Quickly and efficiently obtain first-hand information about the destination from the site, helping to determine the authenticity of partners and prevent fraud risks.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/sd2.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'sj'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">Data Matching</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content large">
          <div class="title">Data Matching Report</div>
          <p>
            Using big data analysis to accurately match business information of cooperative partners' external investments.
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
  margin-right: 500px;
  padding: 30px 60px 0;
  height: 258px;
}
.bg-box .bg-content.large {
  margin-right: 600px;
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
