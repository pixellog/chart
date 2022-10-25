<template>
  <div class="modal fade" id="profileModal" tabindex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">


        <div v-if="step1">
          <div class="modal-header border-0">
            <h1 class="modal-title fs-5">프로필 수정</h1>
          </div>

          <div class="modal-body">
            <div class="d-flex">
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

            <button @click="step1=false; step2=true"
                    type="button" class="btn btn-outline-primary w-100 mt-5">비밀번호 변경
            </button>
          </div>

          <div class="modal-footer py-0 border-0">
            <button type="button" class="btn" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn">확인</button>
          </div>
        </div>

        <div v-else-if="step2">
          <div class="modal-header border-0 pb-0">
            <h1 class="modal-title fs-5">비밀번호 변경</h1>
          </div>

          <div class="modal-body">
            <input type="password" class="form-control" placeholder="기존 비밀번호">
            <input type="password" class="form-control mt-3" placeholder="새 비밀번호 입력">
            <input type="password" class="form-control mt-3" placeholder="새 비밀번호 확인">

            <button type="button" @click="step2=false"
                    data-bs-toggle="modal" data-bs-target="#profileModal"
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
      step1: true,
      step2: false,
      userImg: userImg,
    }
  },
  mounted() {
    const myModalEl = document.getElementById('profileModal')
    myModalEl.addEventListener('hidden.bs.modal', event => {
      this.initStep()
    })
  },
  methods: {
    initStep() {
      this.step1 = true
      this.step2 = false
    }
  },
}
</script>

<style scoped>

</style>
