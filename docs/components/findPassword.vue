<template>
  <!-- findPasswordModal -->
  <div class="modal fade" id="findPasswordModal" tabindex="-1" aria-labelledby="findPasswordModalLabel" aria-hidden="true">
    <div :class="show || 'modal-sm'" class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div :class="show ? 'pa-15' : 'pa-8'" class="modal-body text-secondary">

          <div v-if="show">
            <h3 class="mb-10 text-center">비밀번호 찾기</h3>

            <input type="mail" class="form-control mt-3" placeholder="이메일">

            <button type="button" @click="show=!show"
                    class="btn btn-primary w-100 btn-lg mt-5">확인
            </button>
          </div>

          <div v-else>
            <h6 class="mb-5 text-center-">이메일 확인</h6>

            <div class="text-secondary">
              가입하신 이메일로 비밀번호가 발송되었습니다. <br>
              메일을 받지 못하셨다면 스팸함을 확인해 보세요.
            </div>

            <button type="button" @click="show=!show"
                    data-bs-toggle="modal" data-bs-target="#findPasswordModal"
                    class="btn btn-primary w-100 btn-lg mt-5">확인
            </button>
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
    }
  },
}
</script>

<style scoped>
.modal-sm {
  --bs-modal-width: 380px;
}
</style>
