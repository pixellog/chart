<template>
  <div class="modal fade" id="joinModal" tabindex="-1" aria-labelledby="joinModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-secondary pa-15">

          <div v-if="step1">
            <h3 class="mb-10 text-center">회원가입</h3>

            <input type="mail" class="form-control mt-3" placeholder="이메일">

            <div class="mt-3">
              <input type="checkbox" class="mr-2">
              <a href="#none" data-bs-toggle="modal" data-bs-target="#serviceModal" class="text-primary">이용약관</a>과
              <a href="#none" data-bs-toggle="modal" data-bs-target="#privacyModal" class="text-primary">개인정보처리방침</a>에 동의합니다.
            </div>

            <button type="button" @click="step1=false; step2=true"
                    class="btn btn-primary w-100 btn-lg mt-10">확인
            </button>
          </div>
          <div v-else-if="step2">
            <h5>인증메일을 확인해 주세요</h5>
            <p class="mt-5">인증메일을 확인하여 회원가입을 완료해 주세요.</p>


            <button type="button" @click="step2=false; step3=true"
                    class="btn btn-primary w-100 btn-lg mt-5">확인
            </button>
          </div>

          <div v-else-if="step3">
            <h5>인증이 완료되었습니다.</h5>
            <p class="mt-5"><a href="#none" @click="step3=false; step4=true">비밀번호 재설정</a> 페이지로 이동하여 비밀번호를 변경하세요.</p>


            <button type="button" @click="step3=false; step4=true"
                    class="btn btn-primary w-100 btn-lg mt-5">확인
            </button>
          </div>

          <div v-else-if="step4">
            <h3 class="mb-10 text-center">비밀번호 재설정</h3>

            <input type="password" class="form-control mt-5" placeholder="새 비밀번호 입력">
            <input type="password" class="form-control mt-3" placeholder="새 비밀번호 확인">

            <button type="button" @click="step4=false; initStep"
                    data-bs-toggle="modal" data-bs-target="#joinModal"
                    class="btn btn-primary w-100 btn-lg mt-10">확인
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
      step1: true,
      step2: false,
      step3: false,
      step4: false,
    }
  },
  mounted() {
    const myModalEl = document.getElementById('joinModal')
    myModalEl.addEventListener('hidden.bs.modal', event => {
      this.initStep()
    })
  },
  methods: {
    initStep() {
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
    }
  },
}


</script>

<style scoped>

</style>
