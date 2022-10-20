<template>
  <div class="vh-100 d-flex flex-column">
    <navs></navs>

    <section class="flex-grow-1 d-flex align-center justify-center">

      <div class="container">
        <div class="card rounded-lg mx-auto" style="width: 500px;">
          <div class="card-body pa-15">
            <h3 class="mb-10 text-center">로그인</h3>
            <input type="mail" class="form-control" placeholder="이메일">
            <input type="password" class="form-control mt-5" placeholder="비밀번호">
            <div class="d-flex justify-space-between mt-5">
              <div class=""><input type="checkbox"> 보안접속</div>

              <div>
                <a href="#none" class="link-secondary" data-bs-toggle="modal" data-bs-target="#findIdModal">아이디 찾기</a>
                <find-id></find-id>
                <div class="vr mx-4"/>
                <a href="#none" class="link-secondary" data-bs-toggle="modal" data-bs-target="#findPasswordModal">비밀번호 찾기</a>
                <find-password></find-password>
              </div>

            </div>

            <router-link to="/dataroom" class="btn btn-primary w-100 btn-lg mt-10">로그인</router-link>

          </div>
        </div>
      </div>
    </section>

    <footers></footers>
  </div>
</template>

<script>
import navs from "../components/navs.vue";
import footers from "../components/footers.vue";
import findId from "../components/findId.vue";
import findPassword from "../components/findPassword.vue";

export default {
  components: {
    navs,
    footers,
    findId,
    findPassword
  },
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style scoped>
.navbar .hstack.gap-4 {
  display: none;
}
.card {
  border: 1px solid #DBDBDB;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.04);
}
.modal-sm {
  --bs-modal-width: 380px;
}
</style>
