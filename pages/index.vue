<template>
      <div class="page-index">
        <body id="top">
      <div id="app">
        <div id="section1">
          <section class="name">
            <a href="#section2" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">
              <div class="img-box">
                <img src="~/assets/images/Y.png" alt="" class="no-active">
                <div class="active"> 
                    <div class = "contents-icon">about</div>
                </div>
              </div>
            </a>
            <a href="#section3" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">
              <div class="img-box">
                <img src="~/assets/images/O.png" alt="" class="no-active">
                <div class="active"> 
                    <div class = "contents-icon">works</div>
                </div>
              </div>
            </a>
            <a href="#section4" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">
              <div class="img-box">
                <img src="~/assets/images/K.png" alt="" class="no-active">
                  <div class="active"> 
                    <div class = "contents-icon">skills</div>
                  </div>
              </div>
            </a>
            <a href="#section5" v-smooth-scroll v-smooth-scroll="{ duration: 1000, offset: -50 }">
              <div class="img-box">
                <img src="~/assets/images/O.png" alt="" class="no-active">
                <div class="active"> 
                  <div class = "contents-icon">contact</div>
                </div>
              </div>
            </a>
                <img src="~/assets/images/s.png" >
          </section>
          <section class="mygif">
                <img src="~/assets/images/yokopoko.gif" alt="">
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
                </div>
                  <div class="two-column-wrapper">
                    <div class="two-column-image">
                      <img src="~/assets/images/about-me.png" alt="">
                    </div>
                    <div class="two-column-desc">
                      <ArticleBody>
                        <p>はじめまして。
                        平成4年生まれの26歳エンジニアのようこ( <a href = "https://twitter.com/haisuimaru?lang=ja">@haisuimaru </a>)と申します。</br>
                        社会人歴（IT業界）3年と6か月です。</br>
                        新卒では主に食品業界向けの業務用システムを受託開発する中小企業のSIerに入社しました。</br>
                        常駐先ではクッ〇パッドのようなメニューサイトの入力用システムや、飲料会社の営業様が使用する売上管理システム等様々な案件に携わりました。</br>
                        現在は主に機能改善の見積～納品までの作業を一通りと、問い合わせ対応や自社用の業務効率化のためのツール等を開発しております。</br>
                        2年目の時に初めて参加したカンファレンスがきっかけで、興味のある技術を自分でいろいろ触っていくうちに、
                        もっと開発がしたい！という思うようになり転職を決意しました。</br>
                        是非いろいろお話を聞かせていただきたいです。 </p>
                      </ArticleBody>
                    </div>
                </div>
            </div>
          </section>
        </div>
        <div id="section3">
          <section class="section" id="works">
            <h2 class="section-title">works</h2>
            <ArticleBody>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
            </ArticleBody>
          </section>
        </div>
        <div id="section4">
          <section class="section" id="skills">
            <h2 class="section-title">skills</h2>
            <ArticleBody>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
              <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
            </ArticleBody>
          </section>
        </div>
        <div id="section5">
          <section class="section"  id="contact">
            <h2 class="section-title">contact</h2>
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

  export default {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1200)
    })
  },
  components: {
      ArticleBody
    }
}
  import ArticleBody from '~/components/common/ArticleBody';

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
  z-index: 1;
}
.img-box .active {
  margin-right:30px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: 0.2s; // ゆっくり
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
    border-radius: 50%;
    max-width: 100%;
}

.two-column-desc {
  letter-spacing: 0.8px;
  width: 62%;
  font-size: 18px;
}

</style>
