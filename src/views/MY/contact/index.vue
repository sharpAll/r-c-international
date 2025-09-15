<template>
  <div class="block">
    <el-divider>
      <div class="title">Hubungi Kami</div>
      <div class="title-1">R&C Asia Group（R&C）</div>
    </el-divider>
    <div class="center-box fade-in" style="margin-top: 5%;">
       <div class="bg-box">
        <div class="bg-content right">
          <div class="title">Maklumat Hubungan</div>
          <p>
            <b>Somchai Maha:</b> somchai.maha@apr-tha.com<br/>
            <b>Nattapon Wattanakul:</b> nattapon.wattanakul@apr-tha.com<br/>
            <b>Sunisa jaiyen:</b> sunisa.jaiyen@apr-tha.com<br/>
            <b>Rattana Sritong:</b> rattana.sritong@apr-tha.com<br/>
            <b>Wannisa Maniwong:</b> wannisa.maniwong@apr-tha.com<br/>
          </p>
        </div>
        <div style="width:600px;position:absolute;left:0;top:0">
          <img width="600px" src="../../../assets/img/contact/contact.jpg" />
        </div>
      </div>
      <div class="bg-box">
        <div class="bg-content" style="height: 370px;">
          <div class="title">Alamat Pejabat</div>
          <p>
            <b>Lokasi:</b> 8F,111 Somerset Road,Singapore,238164<br/><br/>
            <b>Hong Kong:</b> 12/F,Skyline Tower，Suite No.1003B，39 WangKwong Road,Kowloon Bay, Hongkong<br/>
          </p>
        </div>
        <div style="width:600px;position:absolute;right:0;top:0">
          <img width="600px" src="../../../assets/img/contact/email.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
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
  margin: 80px 0;
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
  padding: 50px 50px 0;
  height: 400px;
}
.bg-box .bg-content.right {
  margin-right: 0;
  margin-left: 600px;
}
.bg-box .bg-content p {
  line-height: 28px;
  color: #888;
  font-size: 18px;
}
</style>
