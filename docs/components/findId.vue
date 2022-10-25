<template>
  <!-- findIdModal -->
  <div class="modal fade" id="findIdModal" tabindex="-1" aria-labelledby="findIdModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body pa-15">

          <div v-if="step">
            <h3 class="text-center">아이디 찾기</h3>

            <input type="text" class="form-control mt-8" placeholder="이름">
            <input type="mail" class="form-control mt-3" placeholder="이메일">

            <button @click="step=!step"
                    type="button" class="btn btn-primary btn-lg w-100 mt-8">확인
            </button>
          </div>

          <div v-else>
            <h5>고객님의 계정을 찾았습니다.</h5>
            <p>아이디 확인 후 로그인해 주세요.</p>

            <hr>

            <div class="d-flex py-2">
              <div>
                <img class="rounded-pill" :src="userImg+'&w=42&h=42'"/>
              </div>
              <div class="ml-3">
                <h6 class="mb-1">pixel***</h6>
                <div class="text-secondary text-opacity-75">가입일 2022.06.12</div>
              </div>
            </div>

            <button data-bs-dismiss="modal" type="button"
                    class="btn btn-primary btn-lg w-100 mt-5">확인
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
      userImg: userImg,
    }
  },
  mounted() {
    const myModalEl = document.getElementById('findIdModal')
    myModalEl.addEventListener('hidden.bs.modal', event => {
      this.step = true
    })
  },
  methods: {
  },
}
</script>

