<template>
  <div class="page-index">
    <body id="top">
      <div id="app">
        <!--<section class="top">
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
        </section>-->
        <div id="section1">
          <section class="name">
            <a href="#section2" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">
              <div class="img-box">
                <img src="~/assets/images/Y.png" alt="" class="no-active">
                <!--<img src="~/assets/images/icon.png" alt="" class="active">-->
                <div class="active"> 
                    <div class = "contents-icon">about</div>
                </div>
              </div>
            </a>
            <a href="#section3" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">
              <div class="img-box">
                <img src="~/assets/images/O.png" alt="" class="no-active">
                <!--<img src="~/assets/images/icon.png" alt="" class="active">-->
                <div class="active"> 
                    <div class = "contents-icon">works</div>
                </div>
              </div>
            </a>
            <a href="#section4" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">
              <div class="img-box">
                <img src="~/assets/images/K.png" alt="" class="no-active">
                <!--<img src="~/assets/images/icon.png" alt="" class="active">-->
                  <div class="active"> 
                    <div class = "contents-icon">skills</div>
                  </div>
              </div>
            </a>
            <a href="#section5" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">
              <div class="img-box">
                <img src="~/assets/images/O.png" alt="" class="no-active">
                <!--<img src="~/assets/images/icon.png" alt="" class="active">-->
                <div class="active"> 
                  <div class = "contents-icon">contact</div>
                </div>
              </div>
            </a>
                <img src="~/assets/images/s.png" >
          </section>
          <section class="mygif">
                <img src="~/assets/images/yokopoko.gif" alt="welcome!!!!">
          </section>
          <section class="portfolio">
                <img src="~/assets/images/P.png">
                <img src="~/assets/images/lO.png">
                <img src="~/assets/images/R.png">
                <img src="~/assets/images/T.png">
                <img src="~/assets/images/F.png">
                <img src="~/assets/images/lO.png">
                <img src="~/assets/images/L.png">
                <img src="~/assets/images/I.png">
                <img src="~/assets/images/lO.png">
          </section>
        </div>
        <div id="section2">
            <section class="section" id="about">
              <div class="inner">
                <div class="section-title-block">
                  <h2 class="section-title">ABOUT</h2>
                  <p class="section-desc">
                    こんにちは。ヤマダハナコと申します。
                  </p>
                </div>
                  <div class="two-column-wrapper">
                    <div class="two-column-image">
                      <img src="~/assets/images/about-me.png" alt="">
                    </div>
                    <div class="two-column-desc">
                      <p class="text">
                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br><br>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br><br>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                      </p>
                    </div>
                </div>
            </div>
          </section>
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
        <div id="section4">
          <section class="skills">
            <h2 class="section-title">代表作</h2>
            <ArticleBody>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
            </ArticleBody>
          </section>
        </div>
        <div id="section5">
          <section class="contact">
            <h2 class="section-title">代表作</h2>
            <ArticleBody>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
            </ArticleBody>
          </section>
        </div>
      </div>
    </body>
            <div v-scroll="handleScroll" 
          :class="{visible: visible}">
            <a href="#top" v-smooth-scroll>トップへ戻る</a>
        </div>
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
    },
      data() {
    return {
      imgSrc: require("~/assets/images/Y.png")
    }
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
/*document.addEventListener('DOMContentLoaded', function() {
        new Vue({
          el: '#imgtest',
 
          //ここから追加する
          methods: {
            // mouseover時の処理
            changeImg: function(e) {
              var imgUrl = e.target.getAttribute("src");
              var imgUrl = imgUrl.replace(/\/(.*)_off\.png/g,"~/assets/images/K.pngg");
              e.target.setAttribute("src", imgUrl)
            },
            // mouseleave時の処理
            returnImg: function(e) {
              var imgUrl = e.target.getAttribute("src");
              var imgUrl = imgUrl.replace(/\/(.*)_on\.png/g,"~/assets/images/O.pngg");
              e.target.setAttribute("src", imgUrl)
            }
          }
          // ここまで追加する
        })
      }, false);*/
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
#section3,
#section4,
#section5{
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
.img-box {
  margin-right:20px;
  position: relative;
}
.img-box .active {
  margin-right:30px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  //transition: 0.2s; // ゆっくり
  width:  170px; 
  height: 170px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.img-box .active .contents-icon{
  font-family: 'FCfonts';
  letter-spacing: .2em;
	margin: 0 auto;
  font-size: 45px;
  line-height: 1;
  color: #f62e92;
}
.img-box:hover .active {
  opacity: 1;
}
.img-box:hover .no-active {
  opacity: 0;
  //transition: 0.2s; // ゆっくり
}
/*--------------------------------
　Section
---------------------------------*/

.section .inner {
  padding: 80px 10px;
}

.section .section-title-block {
  text-align: center;
  margin-bottom: 30px;
}

.section .section-title {
 font-family: 'FCfonts';
  text-transform: lowercase;
  letter-spacing: .2em;
  display: inline-block;
  font-size: 36px;
  line-height: 1;
  margin-bottom: 10px;
  color: #f62e92;
}

.section .section-desc {
  text-align: center;
}

.two-column-wrapper {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.two-column-image {
  width: 33%;
}

.two-column-image img {
  margin: 0 auto;
}

.two-column-desc {
  width: 62%;
}

</style>
