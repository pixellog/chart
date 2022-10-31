<template>
  <a class="material-symbols-outlined nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
    menu
  </a>

  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">검색필터</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <button type="button" class="btn btn-outline-primary btn-lg d-block w-100 mb-5">전체 초기화</button>

      <div class="d-flex align-center justify-space-between mt-10">
        <h5>키워드</h5>
        <button type="button" class="btn">초기화</button>
      </div>

      <div class="">
        <input type="text" class="form-control w-100">
        <div class="bg-secondary pa-2">
          <button v-for="item in keywords" :key="item.id"
                  type="button" class="btn btn-outline-primary rounded-pill ma-1">{{ item }}</button>
        </div>
      </div>

      <div class="d-flex align-center justify-space-between mt-10">
        <h5>카테고리</h5>
        <button type="button" class="btn">초기화</button>
      </div>

      <div class="row mt-3">
        <div class="col-6 form-check" v-for="item in categorys" :key="item.id">
          <input class="form-check-input" type="checkbox" :value="item" :id="item">
          <label class="form-check-label" :for="item">
            {{ item }}
          </label>
        </div>
      </div>

      <div class="d-flex align-center justify-space-between mt-10">
        <h5>누적투자 유치</h5>
        <button type="button" class="btn">초기화</button>
      </div>

      <div class="d-flex align-center justify-space-between mt-10">
        <h5>고용인원</h5>
        <button type="button" class="btn">초기화</button>
      </div>

      <div class="">
        <div class="form-check" v-for="item in [ '전체', '0 ~ 10인', '11 ~ 50인', '51 ~ 100인', '100인 초과' ]" :key="item.id">
          <input class="form-check-input" type="radio" name="flexRadioDefault" :id="item">
          <label class="form-check-label" :for="item">{{ item }}</label>
        </div>
      </div>

      <div class="d-flex align-center justify-space-between mt-10">
        <h5>매출</h5>
        <button type="button" class="btn">초기화</button>
      </div>

      <div class="d-flex align-center">
        <input type="text" class="form-control" placeholder="최소">
        <div class="px-2">~</div>
        <input type="text" class="form-control" placeholder="최대">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorys: [
        '광고/마케팅',
        '교육',
        '금융/보험/핀테크',
        '게임',
        '모빌리티/교통',
        '물류',
        '부동산/건설',
        '뷰티/화장품',
        '블록체인/DeepTech',
        '소셜미디어/커뮤니티',
        '여행/레저',
        '유아/출산',
        '인사/비즈니스/법률',
        '제조/하드웨어',
        '커머스',
        '컨텐츠/예술',
        '통신/보안/데이터/개발',
        '패션',
        '푸드/농업',
        '환경/에너지',
        '홈리빙/펫',
        '헬스케어/바이오',
        '기타'
      ],
      keywords: [
        '유아용품',
        'POS',
        '인터넷기술',
        '스타트업/창업자',
        '드론',
        '비영리/기부/사회적기업',
        '기타DeepTech',
        '수소에너지',
        '의료기기',
        '모바일기술',
        '보험/인슈어테크',
        '아르바이트',
        '로봇',
        '리뷰',
        '기타신재생에너지'
      ]
    }
  }
}
</script>

<style scoped>

</style>
