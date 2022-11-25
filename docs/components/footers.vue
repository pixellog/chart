<template>
  <a href="#app"
     class="btn btn-outline-secondary rounded-0"
     :class="scrollY >= 200 || 'd-none'"
     style="position: fixed; right: 20px; top: 50vh; z-index: 100; padding: 0 6px;">
    <i class="material-symbols-outlined mt-1">north</i>
  </a>

  <footer class="py-10 text-white text-caption" style="background-color: #272660;">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-auto">
          <img style="width: 140px; height: auto; margin-top: 2px;"
               src="assets/img/ci.png" alt="고위드데이터 로고">
        </div>
        <div class="col-12 col-lg-auto flex-grow-1 lh-lg" style="color:rgba(255,255,255,.5);">
          <div class="d-flex flex-column flex-lg-row">
            <div>고위드데이터 주식회사<div class="vr mx-3 d-none d-lg-inline-block"></div></div>
            <div>대표이사 김대희<div class="vr mx-3 d-none d-lg-inline-block"></div></div>
            <div>사업자등록번호 297-87-02490</div>
          </div>
          <div class="d-flex flex-column flex-lg-row">
            <div>대표전화 02-2088-0862<div class="vr mx-3 d-none d-lg-inline-block"></div></div>
            <div>이메일 support@gowiddata.com</div>
          </div>
          <div class="mt-2">
            서울특별시 중구 통일로 10 연세 세브란스빌딩 17층 1714호
          </div>

<!--          <div class="d-flex mt-4">
            <div class="hstack gap-3 lh-1">
              <a class="nav-link" href="#none" data-bs-toggle="modal" data-bs-target="#privacyModal">개인정보 처리방침</a>
              <div class="vr"/>
              <a class="nav-link" href="#none" data-bs-toggle="modal" data-bs-target="#serviceModal">고위드 통합서비스 이용약관</a>
            </div>

            <terms1></terms1>
            <terms2></terms2>
          </div>-->
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
import _ from '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js'
// import terms1 from "./terms1.vue";
// import terms2 from "./terms2.vue";

export default {
  components: {
    // terms1,
    // terms2,
  },
  data() {
    return {
      scrollY: 0,
      toast: ''
    }
  },
  mounted() {
    window.addEventListener('scroll', _.debounce(() => {
      //console.log(window.scrollY)
      return this.scrollY = window.scrollY;
    }, 50))
  },
}

// 부트스트랩 툴팁 활성화
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
</script>
