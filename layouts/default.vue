<template>
  <div>
    <!--<TheHeader/>-->
    <main class="contents">
      <nuxt/>
    </main>
    <!--<TheFooter/>-->
  </div>
</template>

<script>
 // import TheHeader from '~/components/common/TheHeader';
 // import TheFooter from '~/components/common/TheFooter';

  import Vue from 'vue'
  import vueSmoothScroll from 'vue-smooth-scroll'
  Vue.use(vueSmoothScroll);
  import ArticleBody from '~/components/common/ArticleBody';

  export default {
    components: {
      ArticleBody
 //       TheHeader,
 //       TheFooter
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