<template>
  <div class="nav">
    <div class="container py-3">
      <div class="d-flex justify-content-between">
        <a href="/" class="text-white fw-bold">RNB</a>
        <div>
          <a class="link-info p-1" href="/">데이터룸</a>
          <a class="link-info p-1" href="/guide.html">분석리포트</a>
        </div>
      </div>
    </div>
  </div>

  <header class="position-sticky fixed-top" style="z-index: 10">
    <div class="container py-5">
      <h4 class="text-white fw-bold">고위드데이터</h4>

      <span v-for="item in [ '기업개요', '트래픽', '기술특허', '소셜 분석', '소비자 거래분석', '소비자 유형분석', '투자유치', '조직 분석', '손익/재무', '보도자료', ]" :key="item.id">
          <a class="link-info p-1" href="#chart">{{ item }}</a>
        </span>
    </div>
  </header>


</template>

<style scoped>
.nav {
  background-color: #272660;
  z-index: 100;
  top: 0;
}
</style>
