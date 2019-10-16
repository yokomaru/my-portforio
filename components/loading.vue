<template>
  <div v-if="loading" class="loading-page">
      <div class ="wave">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  bottom: 50px;
  right: 10px;
  z-index: 200;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  text-align: center;
  font-size: 30px;
  color:rgb(235, 233, 233);
  font-family: 'FCfonts';
}
@keyframes wave {
  100% {
    transform: translate3d(0, -10px, 0);
  }
}

.wave {
  margin: -200px 0 0 -300px;  /*縦横の半分をネガティブマージンでずらす*/
  position: absolute;  /*body要素に対して絶対配置*/
  top: 60%;  /*上端を中央に*/
  left: 50%;  /*左端を中央に*/
  width: 600px;  /*横幅*/
  height: 400px;  /*縦幅*/
  text-align: center;
  cursor: pointer;
}

.wave span {
  display: inline-block;
  color: #fff;
  font-size: 2em;
}

.wave span {
  animation-name: wave;
  animation-duration: .2s;
  animation-direction: alternate;
  animation-iteration-count: 2;
}

.wave span:nth-child(2) {
  animation-delay: .1s;
}

.wave span:nth-child(3) {
  animation-delay: .2s;
}

.wave span:nth-child(4) {
  animation-delay: .3s;
}

.wave span:nth-child(5) {
  animation-delay: .4s;
}

.wave span:nth-child(6) {
  animation-delay: .5s;
}

.wave span:nth-child(7) {
  animation-delay: .6s;
}

.wave span:nth-child(8) {
  animation-delay: .7s;
}

.wave span:nth-child(9) {
  animation-delay: .8s;
}
</style>