<template>
  <header class="header">
    <template v-if="curLanguage == 'CH'">
      <nav class="nav">
        <a href="#" class="u-fl" style="margin-left: 8%;">
          <img src="../../assets/img/title-r&c.png" height="50px" alt />
        </a>
        <ul class="container menu-box u-cb">
          <router-link to="/CH/home" tag="li" class="box-li">
            <span class="menu-item">首页</span>
          </router-link>

          <router-link to="/CH/aboutUs/introduce" tag="li" class="box-li">
            <span class="menu-item">关于我们</span>
            <ul class="li-menu">
              <li class="li-item" @click.stop="go('/CH/aboutUs/introduce')">公司介绍</li>
              <li class="li-item" @click.stop="go('/CH/aboutUs/service')">我们的服务</li>
            </ul>
          </router-link>

          <router-link to="/CH/product/zx" tag="li" class="box-li">
            <span class="menu-item">产品</span>
            <ul class="li-menu">
              <li class="li-item" @click.stop="go('/CH/product/zx')">企业征信调查</li>
              <li class="li-item" @click.stop="go('/CH/product/ft')">企业访谈信誉</li>
              <li class="li-item" @click.stop="go('/CH/product/fm')">媒体负面搜索</li>
              <li class="li-item" @click.stop="go('/CH/product/sd')">实地考察</li>
              <li class="li-item" @click.stop="go('/CH/product/sj')">数据匹配</li>
            </ul>
          </router-link>

          <router-link to="/CH/qa" tag="li" class="box-li">
            <span class="menu-item">R&C优势</span>
          </router-link>

          <router-link to="/CH/contact" tag="li" class="box-li">
            <span class="menu-item">联系我们</span>
          </router-link>
        </ul>
        <div class="Language u-fr">
          <a class="active" @click="switchLanguage('CH')">中文</a>
          <a @click="switchLanguage('EN')">English</a>
          <a @click="switchLanguage('MY')">Bahasa Melayu</a>
        </div>
      </nav>
    </template>
    <template v-else-if="curLanguage == 'EN'">
      <nav class="nav">
        <a href="#" class="u-fl" style="margin-left: 8%;">
          <img src="../../assets/img/title-r&c.png" height="50px" alt />
        </a>
        <ul class="container menu-box u-cb">
          <router-link to="/EN/home" tag="li" class="box-li">
            <span class="menu-item">Home</span>
          </router-link>

          <router-link to="/EN/aboutUs/introduce" tag="li" class="box-li">
            <span class="menu-item">About Us</span>
            <ul class="li-menu">
              <li class="li-item" @click.stop="go('/EN/aboutUs/introduce')">Company Profile</li>
              <li class="li-item" @click.stop="go('/EN/aboutUs/service')">Services</li>
            </ul>
          </router-link>

          <router-link to="/EN/product/zx" tag="li" class="box-li">
            <span class="menu-item">Product</span>
            <ul class="li-menu">
              <li class="li-item" @click.stop="go('/EN/product/zx')">Corporate credit</li>
              <li class="li-item" @click.stop="go('/EN/product/ft')">Corporate reputation</li>
              <li class="li-item" @click.stop="go('/EN/product/fm')">Negative media searches</li>
              <li class="li-item" @click.stop="go('/EN/product/sd')">on-the-spot investigation</li>
              <li class="li-item" @click.stop="go('/EN/product/sj')">Data Matching</li>
            </ul>
          </router-link>

          <router-link to="/EN/qa" tag="li" class="box-li">
            <span class="menu-item">R&C Advantage</span>
          </router-link>

          <router-link to="/EN/contact" tag="li" class="box-li">
            <span class="menu-item">Contact Us</span>
          </router-link>
        </ul>
        <div class="Language u-fr">
          <a @click="switchLanguage('CH')">中文</a>
          <a class="active" @click="switchLanguage('EN')">English</a>
          <a @click="switchLanguage('MY')">Bahasa Melayu</a>
        </div>
      </nav>
    </template>
    <template v-else-if="curLanguage == 'MY'">
      <nav class="nav">
        <a href="#" class="u-fl" style="margin-left: 8%;">
          <img src="../../assets/img/title-r&c.png" height="50px" alt />
        </a>
        <ul class="container menu-box u-cb">
          <router-link to="/MY/home" tag="li" class="box-li">
            <span class="menu-item">Laman Utama</span>
          </router-link>

          <router-link to="/MY/aboutUs/introduce" tag="li" class="box-li">
            <span class="menu-item">mengenai kami</span>
            <ul class="li-menu">
              <li class="li-item" @click.stop="go('/MY/aboutUs/introduce')">Pengenalan Syarikat</li>
              <li class="li-item" @click.stop="go('/MY/aboutUs/service')">Perkhidmatan kami</li>
            </ul>
          </router-link>

          <router-link to="/MY/product/zx" tag="li" class="box-li">
            <span class="menu-item">produk</span>
            <ul class="li-menu">
              <li class="li-item" @click.stop="go('/MY/product/zx')">Penyiasatan Perniagaan</li>
              <li class="li-item" @click.stop="go('/MY/product/ft')">Kredibiliti wawancara</li>
              <li class="li-item" @click.stop="go('/MY/product/fm')">Pencarian Negatif Media</li>
              <li class="li-item" @click.stop="go('/MY/product/sd')">Lawatan lapangan</li>
              <li class="li-item" @click.stop="go('/MY/product/sj')">Pemadangan data</li>
            </ul>
          </router-link>

          <router-link to="/MY/qa" tag="li" class="box-li">
            <span class="menu-item">Kelebihan R&C</span>
          </router-link>

          <router-link to="/MY/contact" tag="li" class="box-li">
            <span class="menu-item">Hubungi Kami</span>
          </router-link>
        </ul>
        <div class="Language u-fr">
          <a @click="switchLanguage('CH')">中文</a>
          <a @click="switchLanguage('EN')">English</a>
          <a class="active" @click="switchLanguage('MY')">Bahasa Melayu</a>
        </div>
      </nav>
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    curLanguage() {
      return this.$store.state.language.curLan;
    }
  },
  components: {},

  methods: {
    switchLanguage(language) {
      if (this.curLanguage !== language) {
        this.$store.dispatch("setLanguage", language);
        let path = this.$router.currentRoute.path;
        let pathArray = path.split("/");
        pathArray[1] = language;
        this.$router.push(pathArray.join("/"));
      }
    },
    go(url){
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
.logo {
  padding-top: 30px;
}
.container {
  width: 1000px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.nav {
  border-bottom: 4px solid rgba(157, 168, 203, 0.4);
  margin-top: 12px;
  position: relative;
}
.nav ul.menu-box li.box-li {
  float: left;
  list-style: none;
  width: 20%;
  height: 58px;
  line-height: 58px;
  text-align: center;
  border-left: 1px solid #d1d3d5;
  position: relative;
  cursor: pointer;
}
.nav ul.menu-box li.box-li span.menu-item {
  height: 58px;
  display: inline-block;
  color: #312d2d;
  font-size: 15px;
  letter-spacing: 1.5px;
  position: relative;
}
.nav ul.menu-box li.box-li.cur span.menu-item {
  border-bottom: 4px solid #606a9e;
}
.nav ul.menu-box li.box-li span.menu-item:after {
  content: "";
  width: 0;
  display: block;
  height: 4px;
  margin: 0 auto;
  background-color: #606a9e;
  border-radius: 2px;
}
.nav ul.menu-box li.box-li:hover span.menu-item:after {
  transition: 0.12s width ease-in;
  width: 100%;
}
.nav ul.menu-box li.box-li .li-menu {
  background-color: white;
  width: 100%;
  color: #312d2d;
  font-size: 15px;
  display: none;
  position: absolute;
  left: 0;
  top: 62px;
  box-shadow: -1px 0px 24px 0px rgba(75, 76, 79, 0.3);
  z-index: 99;
}
.nav ul.menu-box li.box-li:hover .li-menu {
  display: block;
}
.nav ul.menu-box li.box-li .li-menu .li-item {
  padding: 0 10px;
  border-bottom: 1px solid #e4e8ea;
}
.nav ul.menu-box li.box-li .li-menu .li-item:hover {
  background-color: rgba(96, 110, 158, 0.4);
}
.nav .Language {
  font-family: arial;
  margin-top: 10px;
  position: absolute;
  right: 8%;
  top: 4px;
}
.nav .Language a.en {
  margin-left: -1px;
}
.nav .Language a {
  border: 1px solid #dedede;
  float: left;
  padding: 3px 10px;
  font-size: 12px;
  color: #343c48;
  transition: 0.5s;
}
.nav .Language a.active {
  border: 1px solid #606a9e;
  color: #606a9e;
  position: relative;
  z-index: 2;
}
</style>
