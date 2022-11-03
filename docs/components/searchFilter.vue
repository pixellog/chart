<template>
  <a data-bs-toggle="offcanvas" href="#myOffcanvas" role="button" aria-controls="myOffcanvas" class="d-flex align-center nav-link">
    <i class="material-symbols-outlined mr-n9 position-relative">search</i>
    <input type="search" class="form-control rounded-pill pl-10" placeholder="Search" style="width: 240px;"/>
  </a>

  <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="myOffcanvas" aria-labelledby="myOffcanvasLabel">
    <div class="offcanvas-header border-bottom">
      <h6 class="offcanvas-title opacity-50">검색필터</h6>
      <button @click="submitForm" type="button" class="btn btn-outline-primary btn-sm ml-auto mr-2">전체 초기화</button>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body py-10">
      <form ref="formFilter" @submit="submitForm">

        <div class="d-flex align-center justify-space-between">
          <h5>키워드</h5>
          <button @click="$refs.keyword.value = ''" type="button" class="btn">초기화</button>
        </div>
        <div class="ui-widget">
          <input type="search" ref="keyword" id="tags" size="50" class="form-control" placeholder="키워드를 입력해 주세요(최대 3개)">
        </div>

        <div class="d-flex align-center justify-space-between mt-10">
          <h5>카테고리</h5>
          <button @click="category = []" type="button" class="btn">초기화</button>
        </div>

        <div class="row mx-0 mt-3">
          <div class="col-6 form-check" v-for="item in categorys" :key="item.id">
            <input v-model="category" class="form-check-input" type="checkbox" :value="item" :id="'category'+item">
            <label class="form-check-label" :for="'category'+item">{{ item }}</label>
          </div>
        </div>

        <div class="d-flex align-center justify-space-between mt-10">
          <h5>투자단계</h5>
          <button type="button" class="btn">초기화</button>
        </div>

        <div class="mt-5">
          <v-slider :step="['seed', 'pre-A', 'series A', 'series B', 'series C+']"></v-slider>
        </div>

        <div class="d-flex align-center justify-space-between mt-10">
          <h5>최근투자일</h5>
          <button @click="radioInvest='전체'" type="button" class="btn">초기화</button>
        </div>

        <div class="">
          <div class="form-check" v-for="(item,i) in [ '전체', '최근 3개월', '최근 6개월', '최근 1년', '직접입력' ]" :key="item.id">
            <input class="form-check-input" type="radio" :value="item" :id="'invest'+i" v-model="radioInvest">
            <label class="form-check-label" :for="'invest'+i">{{ item }}</label>
          </div>
          <div v-if="radioInvest=='직접입력'" class="d-flex align-center mt-2">
            <input type="text" class="form-control" placeholder="2021-10">
            <div class="px-2">~</div>
            <input type="text" class="form-control" placeholder="2022-10">
          </div>
        </div>

        <div class="d-flex align-center justify-space-between mt-10">
          <h5>누적투자 유치</h5>
          <button type="button" class="btn">초기화</button>
        </div>

        <div class="mt-5">
          <v-slider :reset="show" :step="['0', '1억', '10억', '100억', '500억', '1000억+']"></v-slider>
        </div>

        <div class="d-flex align-center justify-space-between mt-10">
          <h5>고용인원</h5>
          <button @click="radioEmploy='전체'" type="button" class="btn">초기화</button>
        </div>

        <div class="">
          <div class="form-check" v-for="(item,i) in [ '전체', '0 ~ 10인', '11 ~ 50인', '51 ~ 100인', '100인 초과' ]" :key="item.id">
            <input class="form-check-input" type="radio" :value="item" :id="'employ'+i" v-model="radioEmploy">
            <label class="form-check-label" :for="'employ'+i">{{ item }}</label>
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
      </form>
    </div>
  </div>
</template>

<script>
import _ from '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js'
import VSlider from "./v-slider.vue";

export default {
  components: {VSlider},
  mounted() {
    this.autocomplete();
  },
  data() {
    return {
      show: false,
      radioInvest: '전체',
      radioEmploy: '전체',
      category: [],
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
      ],
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
    }
  },
  methods: {
    formsInit() {
      this.radioInvest = '전체';
      this.radioEmploy = '전체';
      this.category = [];
    },
    submitForm() {
      this.formsInit();
      this.$refs.formFilter.reset();
    },
    autocomplete() {
      // 자동완성
      // https://jqueryui.com/autocomplete/#multiple
      // jquery.ui 자동완성 https://api.jqueryui.com/autocomplete/

      const availableTags = this.keywords;

      function split(val) {
        return val.split(/,\s*/);
      }

      function extractLast(term) {
        return split(term).pop();
      }

      function removeError() {
        !$('.error-msg').length || $('.error-msg').remove();
      }

      $("#tags")
        // don't navigate away from the field on tab when selecting an item
        .on("keydown", function (event) {
          if (event.keyCode === $.ui.keyCode.TAB &&
            $(this).autocomplete("instance").menu.active) {
            event.preventDefault();
          }
        })
        .autocomplete({
          classes: {
            "ui-autocomplete": "custom-autocomplete"
          },
          minLength: 0,
          source: function (request, response) {
            // delegate back to autocomplete, but extract the last term
            response($.ui.autocomplete.filter(
              availableTags, extractLast(request.term)));
          },
          focus: function () {
            // prevent value inserted on focus
            removeError();
            return false;
          },
          select: function (event, ui) {
            var terms = split(this.value);
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push(ui.item.value);
            // add placeholder to get the comma-and-space at the end
            terms.push("");
            // terms = _.uniq(terms);

            if (terms.length <= 4) {
              this.value = terms.join(", ");
            } else {
              !$('.error-msg').length ? $(this).after('<div class="error-msg">최대 3개까지 가능합니다.</div>') : null;
            }
            return false;
          }
        });
    }
  },
}

</script>

<style>
.ui-autocomplete {
  z-index: 9999 !important;
}

.custom-autocomplete {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 352px;
}

.ui-menu-item-wrapper {
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 50px;
  padding-left: 1em !important;
  font-weight: 400 !important;
  margin: 2px !important;
}
</style>
