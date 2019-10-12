<template>
  <div class="page-index">
    <section class="about">
      <h2 class="section-title">夏目漱石</h2>
      <ArticleBody>
        <img src="~/assets/images/yokopoko_right.png" alt="夏目漱石">
        <p>日本の小説家、評論家、英文学者。本名、夏目 金之助（なつめ きんのすけ）。江戸の牛込馬場下横町（現在の東京都新宿区喜久井町）出身。俳号は愚陀仏。詳細は<a href="<https://ja.wikipedia.org/wiki/夏目漱石>" target="_blank">ウィキペディア</a>を。</p>
      </ArticleBody>
    </section>

    <section class="works">
      <h2 class="section-title">代表作</h2>
      <ArticleBody>
        <p>『吾輩は猫である』（1905年）がデビュー作である。</p>
        <ul>
          <li>『吾輩は猫である』（1905年）</li>
          <li>『坊っちゃん』（1906年）</li>
          <li>『草枕』（1906年）</li>
          <li>『三四郎』（1908年）</li>
        </ul>
      </ArticleBody>
    </section>
  </div>
</template>

<script>
  import ArticleBody from '~/components/common/ArticleBody';

  export default {
    components: {
      ArticleBody
    }
  }
</script>
