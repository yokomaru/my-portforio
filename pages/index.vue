
<template>
  <div class="page-index">
    <body id="top">
      <div id="app">
        <section class="top">
          <ul>
            <li>
              <a href="#section1" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">セクション1</a>
            </li>
            <li>
              <a href="#section2" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">セクション2</a>
            </li>
            <li>
              <a href="#section3" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">セクション3</a>
            </li>
          </ul>
        </section>
        <div id="section1">
          <section class="name">
                <img src="~/assets/images/Y.png" >
                <img src="~/assets/images/O.png" >
                <img src="~/assets/images/K.png" >
                <img src="~/assets/images/O.png" >
                <img src="~/assets/images/s.png" >
          </section>
          <section class="mygif">
                <img src="~/assets/images/yokopoko.gif" alt="welcome!!!!">
          </section>
          <section class="portfolio">
                <img src="~/assets/images/P.png">
                <img src="~/assets/images/O.png">
                <img src="~/assets/images/R.png">
                <img src="~/assets/images/T.png">
                <img src="~/assets/images/F.png">
                <img src="~/assets/images/O.png">
                <img src="~/assets/images/L.png">
                <img src="~/assets/images/I.png">
                <img src="~/assets/images/O.png">
          </section>
        </div>
        <div id="section2">
          <section class="works">
            <h2 class="section-title">代表作</h2>
            <ArticleBody>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
            </ArticleBody>
          </section>
        </div>
      </div>
        <div id="section3">
          <section class="works">
            <h2 class="section-title">代表作</h2>
            <ArticleBody>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
            </ArticleBody>
          </section>
        </div>
        <div v-scroll="handleScroll" 
          :class="{visible: visible}">
            <a href="#top" v-smooth-scroll>トップへ戻る</a>
        </div>
    </body>
  </div>
</template>

<script>
  import Vue from 'vue'
  import vueSmoothScroll from 'vue-smooth-scroll'
  Vue.use(vueSmoothScroll);
  import ArticleBody from '~/components/common/ArticleBody';

  export default {
    components: {
      ArticleBody
    }
//head () {
//     return {
//        link: [
//          { rel: 'stylesheet', href: 'https://unpkg.com/nes.css@0.0.2/css/nes.min.css' },
//          { rel: 'stylesheet', href: 'https://unpkg.com/nes.css/css/nes.min.css' },
//        ]
//      }
//    }
  }

// 必ずVueインスタンス作成前に登録する
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    };
    window.addEventListener('scroll', f)
  }
});

// Vueインスタンス作成
const app = new Vue({
  el: '#app',
  data: {
    visible: false // 表示・非表示判定を格納
  },
  methods: {
    handleScroll() {
      // スクロール値が151以上の場合にvisibleをtrue、そうでない場合にfalseにする
      this.visible = window.pageYOffset > 150;
    }
  }
});

</script>
<style scoped lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
}

li:not(:first-child) {
  margin-left: 20px;
}

li a {
  text-decoration: none;
  color: tomato;
  border: 1px solid;
  padding: 4px;
}

#app {
  height: 1000px;
  padding-top: 50px;
}

#section2,
#section3{
  padding-top: 50px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 50px 30px 50px;
  background: rgb(224, 224, 224);
}

#section1,{
  height: 800px;
 // display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 50px 30px 50px;
  background: rgb(224, 224, 224);
}

a[href="#top"] {
  position: fixed;
  bottom: 50px;
  right: 10px;
  z-index: 100;
  text-decoration: none;
  background: tomato;
  color: #fff;
  padding: 10px 20px;
}

.box_DQ_in {
padding: 15px;
border: solid 4px #fff;
border-radius: 10px;
background-color: #000000;
margin-top: 30px;
margin-bottom: 30px;
color: #fff;
margin: 0;
 font-family: 'FCfonts';
 font-size:30px;
}
.box_DQ_out {
 padding: 2px;
 display: inline-block;
 background-color: #000000;
 border-radius: 12px;
 margin: 30px 0 30px 0;
 font-family: 'FCfonts';
 font-size:30px;
}
@keyframes fadein {
  from {
      opacity: 0;
      transform: translateY(20px);
  }

  to {
      opacity: 1;
      transform: translateY(0);
  }
}
.page-index{
    background-color: tomato;
}
.name{
    display: flex;
    align-items: center;
    justify-content: center;
}
.portfolio{
    display: flex;
    align-items: center;
    justify-content: center;
}
.mygif{
    //font-size: 20px;
    //font-weight: bold;
    //animation-name: fadein;
    //animation-duration: 2s;
    //margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    //animation-iteration-count: infinite;
}

</style>
