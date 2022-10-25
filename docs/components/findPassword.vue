<template>
  <!-- findPasswordModal -->
  <div class="modal fade" id="findPasswordModal" tabindex="-1" aria-labelledby="findPasswordModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body pa-15">

          <div v-if="step">
            <h3 class="text-center">비밀번호 찾기</h3>

            <input type="mail" class="form-control mt-8" placeholder="이메일">

            <button type="button" @click="step=!step"
                    class="btn btn-primary btn-lg w-100 mt-8">확인
            </button>
          </div>

          <div v-else>
            <h5>이메일 확인</h5>

            <div class="text-secondary mt-8">
              가입하신 이메일로 비밀번호가 발송되었습니다. <br>
              메일을 받지 못하셨다면 스팸함을 확인해 보세요.
            </div>

            <button data-bs-dismiss="modal" type="button"
                    class="btn btn-primary btn-lg w-100 mt-8">확인
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
      step: true,
    }
  },
  mounted() {
    const myModalEl = document.getElementById('findPasswordModal')
    myModalEl.addEventListener('hidden.bs.modal', event => {
      this.step = true
    })
  },
}
</script>

