<template>
  <div class="page-about">
    <section class="history">
  <div class="container">
    <p>About Page</p>
    <NuxtLink to="/">
      Go to /
    </NuxtLink>
  </div>
    </section>
  </div>
</template>

<script>
  import ArticleBody from '~/components/common/ArticleBody';

  import Vue from 'vue'
  import vueSmoothScroll from 'vue-smooth-scroll'
  Vue.use(vueSmoothScroll);

  export default {
    components: {
      ArticleBody
    },
    asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  }
  }
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
