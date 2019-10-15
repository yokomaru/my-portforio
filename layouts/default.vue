<template>
  <div>
    <!--<TheHeader/>-->S
    <main class="contents">
      <nuxt/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
 // import TheHeader from '~/components/common/TheHeader';
  import TheFooter from '~/components/common/TheFooter';

  import Vue from 'vue'
  import vueSmoothScroll from 'vue-smooth-scroll'
  Vue.use(vueSmoothScroll);
  import ArticleBody from '~/components/common/ArticleBody';

  export default {
    components: {
      ArticleBody,
      //TheHeader,
      TheFooter
    }
    //head () {
    //  return {
    //    link: [
    //      { rel: 'stylesheet', href: 'https://unpkg.com/nes.css@0.0.2/css/nes.min.css' },
    //      { rel: 'stylesheet', href: 'https://unpkg.com/nes.css/css/nes.min.css' },
    //    ]
    //  }
    //}
  }

// Codepenの為、importは省略(設定から呼び出し)
// import Vue from 'vue'
// import vueSmoothScroll from 'vue-smooth-scroll'

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

#section1,
#section2,
#section3{
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#section1,
#section3 {
  background: #ccc;
}

#section2 {
  background: #eee;
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

</style>
