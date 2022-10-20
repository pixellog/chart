<template>
  <div class="vh-100 d-flex flex-column">
    <navs></navs>

    <section>

      <div class="category-area">
        <div class="container py-6 d-flex align-center justify-space-between">
          <h4 class="text-white mb-0">데이터룸</h4>
          <div class="d-flex align-center">
            <div class="form-check form-check-inline text-white">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
              <label class="form-check-label" for="inlineRadio1">신규</label>
            </div>
            <div class="form-check form-check-inline text-white">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">업데이트</label>
            </div>
            <div class="d-flex align-center ml-5">
              <i class="material-symbols-outlined mr-n9 position-relative">search</i>
              <input type="search" class="form-control rounded-pill pl-10 border-0" placeholder="Search" style="width: 240px;"/>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-15">
        <table class="table table-hover">
          <thead>
          <tr>
            <th :class="i==0 || 'text-center'" v-for="(item, i) in ['기업명','등록일','업데이트','상태']" :key="item.id">{{ item }}</th>
          </tr>
          </thead>
          <tbody class="table-group-divider">
          <tr v-for="(item, i) in 10" :key="item.id">
            <td><router-link to="./dashboard" class="link-secondary">고위드데이터</router-link></td>
            <td class="text-center text-secondary" style="width: 150px;">2022.11.25</td>
            <td class="text-center text-secondary" style="width: 150px;">2022.11.25</td>
            <td class="text-center pb-0" style="width: 100px;">
              <i v-if="i!==1" class="material-symbols-outlined font-weight-light text-primary">check_circle</i>
              <div v-else>
                <a href="#none" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="material-symbols-outlined font-weight-light text-danger">unpublished</i>
                </a>
                <div :class="true || 'show'" class="dropdown-menu dropdown-menu-end- text-caption pa-3" style="width: 230px;">
                  <h6>Error Info</h6>
                  <ul class="text-caption list-unstyled mb-0">
                    <li class="d-flex"><span class="title text-secondary text-opacity-50 col-4">모듈명</span><span class="">-</span></li>
                    <li class="d-flex"><span class="title text-secondary text-opacity-50 col-4">모듈코드</span><span class="">-</span></li>
                    <li class="d-flex"><span class="title text-secondary text-opacity-50 col-4">에러코드</span><span class="">-</span></li>
                    <li class="d-flex"><span class="title text-secondary text-opacity-50 col-4">발생일시</span><span class="">2022.11.25 15:22:00</span></li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>

        <div id="pagination1" class="tui-pagination mt-10"></div>
      </div>

    </section>

    <footers></footers>
  </div>
</template>

<script>
import navs from "../components/navs.vue";
import footers from "../components/footers.vue";
import CounterNumber from "../components/counterNumber.vue";

export default {
  components: {
    navs,
    footers,
    CounterNumber
  },
  mounted() {
    var pagination1 = new tui.Pagination('pagination1', {
      totalItems: 500,
      itemsPerPage: 10,
      visiblePages: 5
    });
  }
}
</script>

<style scoped>
</style>
