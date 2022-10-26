<template>
  <div class="modal fade" id="profileModal" tabindex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body pa-10 pb-5">

          <h5>프로필 수정</h5>

          <div class="d-flex mt-8">
            <div>
              <img class="rounded-pill" :src="userImg+'&w=42&h=42'"/>
            </div>
            <div class="ml-3">
              <h6 class="mb-1">김항기</h6>
              <div class="text-secondary">until99@gowid.com</div>
            </div>
          </div>

          <input type="file" class="form-control mt-3" placeholder="">
          <div class="text-caption mt-2">* 이미지의 크기는 가로X세로 50px이 적당합니다.</div>

          <a href="#none" data-bs-toggle="modal" data-bs-target="#changePasswordModal"
             type="button" class="btn btn-outline-primary btn-lg w-100 mt-5">비밀번호 변경
          </a>

          <div class="d-flex justify-end mt-5">
            <button type="button" class="btn" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn" data-bs-dismiss="modal" @click="openToasts('프로필이 수정되었습니다.')">확인</button>
          </div>

        </div>
      </div>
    </div>
  </div>

  <toasts :value="toast"></toasts>

  <div class="modal fade" id="changePasswordModal" tabindex="-1" aria-labelledby="changePasswordModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body pa-10">

          <h3 class="text-center">비밀번호 변경</h3>

          <input type="password" class="form-control mt-5" placeholder="기존 비밀번호">
          <input type="password" class="form-control mt-3" placeholder="새 비밀번호 입력">
          <input type="password" class="form-control mt-3" placeholder="새 비밀번호 확인">

          <button type="button" data-bs-toggle="modal" data-bs-target="#profileModal"
                  @click="openToasts('비밀번호가 변경되었습니다.')"
                  class="btn btn-primary btn-lg w-100 mt-5">확인
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toasts from "./toasts.vue";

export default {
  components: {Toasts},
  data() {
    return {
      userImg: userImg,
      toast: ''
    }
  },
  mounted() {
  },
  methods: {
    openToasts(x) {
      this.toast = x;
      const toastLiveExample = document.getElementById('toasts')
      const toast = new bootstrap.Toast(toastLiveExample)
      toast.show()
    }
  },
}
</script>

<style scoped>

</style>
