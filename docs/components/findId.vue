<template>
  <!-- findIdModal -->
  <div class="modal fade" id="findIdModal" tabindex="-1" aria-labelledby="findIdModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <!--        <div class="modal-header">-->
        <!--          <h1 class="modal-title fs-5">개인정보 처리방침</h1>-->
        <!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
        <!--        </div>-->
        <div class="modal-body text-secondary pa-15">

          <div v-if="show">
            <h3 class="mb-10 text-center">아이디 찾기</h3>

            <input type="text" class="form-control" placeholder="이름">
            <input type="mail" class="form-control mt-3" placeholder="이메일">

            <button type="button" @click="show=!show" class="btn btn-primary w-100 btn-lg mt-5">확인</button>
          </div>
          <div v-else>
            <h5>고객님의 계정을 찾았습니다.</h5>
            <p>아이디 확인 후 로그인해 주세요.</p>

            <hr>

            <div class="d-flex pa-4 pr-5">
              <div>
                <img class="rounded-pill" :src="userImg+'&w=42&h=42'"/>
              </div>
              <div class="ml-3">
                <h6 class="mb-1">pixel***</h6>
                <div class="text-secondary text-opacity-50">가입일 2022.06.12</div>
              </div>
            </div>

            <a data-bs-toggle="modal" data-bs-target="#findIdModal"
               href="#none" class="btn btn-primary w-100 btn-lg mt-5">확인</a>
          </div>

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
