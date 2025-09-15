<template>
  <div class="block">
    <div v-show="type == 'zx'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">Penyiasatan Perniagaan</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Laporan Gambaran Umum Pendaftaran Perniagaan</div>
          <p>
            Pratinjau keadaan operasi mudah syarikat sasaran, hasil hak harta, keadaan risiko operasi untuk menentukan dengan cepat keadaan sebenar subjek operasi yang berpotensi bekerjasama.          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Laporan Kewangan Pendaftaran Perniagaan</div>
          <p>
            Menentukan identiti sasaran dengan cepat sebelum kerjasama, menilai keupayaan modal dan latar belakang yang mudah, dan meramalkan operasi dan hutang syarikat sasaran.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx2.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Laporan Kredit Standard</div>
          <p>
            Berdasarkan akses dan pemprosesan data pelbagai saluran, membentuk laporan kredit korporat yang pelbagai mengikut senario perniagaan yang berbeza dan keperluan khusus, menyediakan penilaian kredit untuk penjualan perniagaan, mencegah risiko perniagaan dengan berkesan dan membantu membuat keputusan perniagaan.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx3.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Laporan Kredibiliti Wawancara Perniagaan</div>
          <p>
            Menyediakan perkhidmatan temubual penarafan kredit dan reputasi, terutamanya untuk perbankan, insurans, kewangan internet, kewangan rantaian bekalan, kewangan pengguna dan penggunaan, kehidupan dan pelbagai senario perniagaan, untuk memahami integriti perniagaan rakan kongsi dan maklumat penyelidikan latar belakang syarikat, mengurangkan risiko kerjasama perniagaan.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/zx4.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'ft'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">Kredibiliti wawancara syarikat</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Laporan wawancara reputasi standard</div>
          <p>
            Produk berdasarkan pematuhan dan penyiasatan perniagaan yang boleh membantu rakan kongsi, pesaing dan lain-lain dalam menyiasat perniagaan yang berpotensi dan menyokong keputusan perniagaan anda dengan mendapatkan maklumat perniagaan yang sebenar dan boleh dipercayai melalui penyiasatan yang sah pematuhan.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">menyesuaikan laporan wawancara due diligence</div>
          <p>
            Penyelidikan usaha betul-betul pelbagai aspek terhadap matlamat, menyediakan maklumat seperti penghantaran manfaat, latar belakang pengurus dan pematuhan perniagaan untuk membantu pelanggan mencegah penipuan perniagaan dan risiko transaksi kerjasama yang berpotensi.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft2.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Laporan wawancara reputasi mendalam</div>
          <p>
            Pengumpulan dan analisis maklumat persekitaran luar dan dalaman perniagaan untuk memahami matlamat melalui pelbagai dimensi, menyediakan anda dengan maklumat kredibiliti dan risiko matlamat, membantu anda mengesan risiko yang berpotensi untuk matlamat.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft3.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">menyesuaikan laporan wawancara reputasi</div>
          <p>
            Menggunakan permintaan pelanggan sebagai arah penyiasatan utama, dengan cepat menyediakan maklumat perniagaan yang boleh dipercayai, untuk menyelesaikan kecemasan dan menyediakan sokongan profesional dalam semua aspek pematuhan perniagaan korporat.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/ft4.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'fm'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">Pencarian Negatif Media</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content large">
          <div class="title">รายงานผลสำรวจเชิงลบของสื่อองค์กร</div>
          <p>
            Produk berdasarkan pematuhan dan penyiasatan perniagaan yang boleh membantu rakan kongsi, pesaing dan lain-lain dalam menyiasat perniagaan yang berpotensi dan menyokong keputusan perniagaan anda dengan mendapatkan maklumat perniagaan yang sebenar dan boleh dipercayai melalui penyiasatan yang sah pematuhan.
          </p>
        </div>
        <div style="width:600px;position:absolute;right:0;top:0">
          <img width="600px" height="400px" src="../../../assets/img/product/fm.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'sd'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">Lawatan lapangan</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">Laporan lawatan lapangan syarikat</div>
          <p>
            Dapatkan maklumat langsung mengenai destinasi anda dengan cepat dan cekap, membantu menilai keaslian rakan kongsi dan mencegah risiko penipuan.
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/product/sd1.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Laporan Lawatan Lapangan Peribadi</div>
          <p>
            Dapatkan maklumat langsung mengenai destinasi anda dengan cepat dan cekap, membantu menilai keaslian rakan kongsi dan mencegah risiko penipuan.
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/product/sd2.jpg" />
        </div>
      </div>
    </div>

    <div v-show="type == 'sj'" class="center-box fade-in" style="margin-top: 5%;">
      <el-divider>
        <div class="title">Pemadangan data</div>
        <div class="title-1">R&C Asia Group（R&C）</div>
      </el-divider>
      <div class="bg-box">
        <div class="bg-content large">
          <div class="title">Laporan Perpadanan Data</div>
          <p>
            Menggunakan analisis data besar untuk sepadan dengan tepat maklumat perniagaan pelaburan luar negara objek kerjasama.
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
