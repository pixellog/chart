<template>
  <!-- errorInfoModal -->
  <div class="modal fade" id="errorInfoModal" tabindex="-1" aria-labelledby="errorInfoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Error Info</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pa-4 text-left">

          <div class="alert alert-secondary">
            <ul class="unlist mb-0">
              <li>인증서 만료일 : 2022.10.30 (인증서 갱신이 필요합니다.)</li>
              <li>국세청 조회 인증서 여부 :
                <span v-if="true" class="text-primary">정상</span>
                <span v-else class="text-danger">국세청 조회 가능한 인증서가 없습니다.</span>
              </li>
            </ul>
          </div>
          <table class="table table-hover table-sm">
            <thead>
            <tr>
              <th class="text-center" v-for="item in ['모듈명','모듈코드','에러코드','발생일시']" :key="item.id">
                {{ item }}
              </th>
            </tr>
            </thead>
            <tbody class="table-group-divider">
            <tr v-for="item in 10" :key="item.id">
              <td class="text-center">국세청-사업자등록증명</td>
              <td class="text-center">KRNT0001010030</td>
              <td class="text-center">2040</td>
              <td class="text-center">2022.11.25 15:22:00</td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      userImg: userImg,
    }
  },
}
</script>

<style scoped>

</style>
