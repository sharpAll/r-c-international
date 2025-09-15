<template>
  <div class="block">
    <el-divider>
      <div class="title">mengenai kami</div>
      <div class="title-1">R&C Asia Group（R&C）</div>
    </el-divider>
    <div v-show="type == 'introduce'" class="center-box fade-in" style="margin-top: 5%;">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Pengenalan Syarikat</div>
          <p>
            R&C adalah sebuah syarikat perundingan yang berorientasikan pengambilan keputusan perniagaan kepada pelanggan yang menyediakan perkhidmatan perundingan perniagaan yang sangat mematuhi perniagaan, etika perniagaan dan integriti.
          </p>
          <br />
          <p>
            Melalui siasatan perniagaan dalaman dan luaran dan pengumpulan dan analisis maklumat perniagaan, kami telah membantu pelanggan kami dengan berkesan melindungi diri daripada penipuan perniagaan dan risiko transaksi kerjasama yang berpotensi selama 10 tahun yang lalu.
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
          <div class="title">Perkhidmatan kami</div>
          <p>
            Menyediakan perkhidmatan "satu perhentian" dan sokongan selepas penyiasatan kepada pelanggan, termasuk: maklumat maklumat projek, komunikasi mesyuarat projek, pengesanan sumber maklumat dan lain-lain, supaya pelanggan dapat mengetahui kemajuan projek pada masa yang tepat.
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
  padding: 50px 80px 0;
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
