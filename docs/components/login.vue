<template>
  <layout>
    <div class="container mt-15 pt-15">
      <div class="card rounded-lg mx-auto" style="width: 500px;">
        <div class="card-body pa-15">
          <h3 class="mb-10 text-center">로그인</h3>
          <input type="mail" class="form-control" placeholder="이메일">
          <input type="password" class="form-control mt-3" placeholder="비밀번호">
          <div class="d-flex justify-space-between mt-5">
            <div><input type="checkbox"> 보안접속</div>

            <div>
              <a href="#none" class="link-secondary" data-bs-toggle="modal" data-bs-target="#findIdModal">아이디 찾기</a>
              <find-id></find-id>
              <div class="vr mx-4"/>
              <a href="#none" class="link-secondary" data-bs-toggle="modal" data-bs-target="#findPasswordModal">비밀번호 찾기</a>
              <find-password></find-password>
            </div>

          </div>

          <a href="./dataroom.html" class="btn btn-primary w-100 btn-lg mt-5">로그인</a>
          <a href="#none" data-bs-toggle="modal" data-bs-target="#joinModal" class="btn btn-outline-primary w-100 btn-lg mt-3">회원가입</a>
          <join></join>

        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "./layout.vue";
import findId from "./findId.vue";
import findPassword from "./findPassword.vue";
import join from "./join.vue";

export default {
  components: {
    Layout,
    findId,
    findPassword,
    join
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
