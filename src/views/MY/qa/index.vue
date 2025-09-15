<template>
  <div class="block">
    <div class="title">Q & A</div>
    <div class="info">
      <p class="q">Q：Bagaimana untuk menghubungi Jabatan Perundingan kami?</p>
      <p class="a">A：Anda boleh menghantar e-mel kepada somchai.maha@roundcasia.com Maklumat anda mesti termasuk identiti anda, maklumat hubungan dan sebab untuk menghubungi kami, dan pengurus akaun kami akan mengikuti keperluan anda dengan tepat masa.</p>
    </div>
    <div class="info">
      <p class="q">Q：Adakah maklumat saya dan maklumat yang berkaitan akan dilindungi?</p>
      <p class="a">A：Ya, boleh. Kami menjamin kerahsiaan maklumat dan kami juga boleh menandatangani perjanjian kerahsiaan mengikut permintaan anda.</p>
    </div>
    <div class="info">
      <p class="q">Q： Bolehkah anda memberikan cadangan atau rancangan mengenai projek ini?</p>
      <p class="a">A：Ya, boleh. Kami akan memberikan cadangan projek rasmi yang mengandungi maklumat seperti bidang kerja, kaedah kerja, jadual dan bajet projek.</p>
    </div>
    <div class="info">
      <p class="q">Q：Saya ingin menetapkan anda untuk berkhidmat kepada saya, adakah anda akan subcontrak kerja ke luar?</p>
      <p class="a">A：Kami mempunyai pejabat kami sendiri dan pasukan penyelidikan profesional untuk melaksanakan dan menyelesaikan tugas dan tidak akan subkontrak perniagaan anda.</p>
    </div>
    <div class="info">
      <p class="q">Q：Adakah saya akan menerima laporan bertulis selepas tugas selesai?</p>
      <p class="a">A：Ya, kami akan memberikan laporan lengkap kepada anda selepas misi selesai.</p>
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
