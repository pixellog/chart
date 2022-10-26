<template>
  <div class="navbar">
    <div class="container">
      <div class="d-flex justify-content-between align-center w-100">
        <a href="./" class="font-weight-black nav-link fs-4 text-decoration-none bi">
          <img src="assets/img/bi.svg" alt="GDS"/>
        </a>

        <div class="d-flex align-center">
          <a v-if="!path.match('.html')" class="btn btn-outline-primary btn-sm rounded-pill px-5" href="./login.html">LOGIN</a>

          <div class="d-flex align-center" v-if="path.match('dashboard.html')">
            <i class="material-symbols-outlined mr-n9 position-relative">search</i>
            <input type="search" class="form-control rounded-pill pl-10 mr-5" placeholder="Search" style="width: 240px;"/>
          </div>

          <div v-if="path.match('dataroom.html')||path.match('dashboard.html')" class="hstack gap-4">

            <div class="dropdown">
              <a href="#none" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="rounded-pill" :src="userImg+'&w=36&h=36'"/>
              </a>

              <div class="dropdown-menu dropdown-menu-end text-caption pb-0 mt-1">
                <div class="card border-0">
                  <div class="d-flex pa-4 pr-5">
                    <div>
                      <img class="rounded-pill" :src="userImg+'&w=42&h=42'"/>
                    </div>
                    <div class="ml-3">
                      <h6 class="mb-1">김항기</h6>
                      <div class="text-secondary">until99@gowid.com</div>
                      <div class="d-flex align-center mt-2">
                        <i class="material-symbols-outlined font-weight-light icon-sm">settings</i>
                        <a href="#none"
                           data-bs-toggle="modal" data-bs-target="#profileModal"
                           class="ml-1 nav-link text-decoration-underline">프로필 변경하기</a>
                      </div>
                    </div>
                  </div>
                  <a href="./login.html" class="card-footer btn btn-primary mb-0 text-white">로그아웃</a>
                </div>
              </div>
            </div>

            <profile></profile>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from '../components/profile.vue'

export default {
  components: {
    profile
  },
  data() {
    return {
      userImg: userImg,
      path: path,
    }
  },
  mounted() {
    // console.log(this.path)
  }
}

</script>

<style>
.navbar .nav-link {
  padding: 5px 0;
  border-bottom: 3px solid transparent;
}

.navbar .nav-link:hover {
  color: #622B9A;
}

.navbar .nav-link.active {
  color: #622B9A;
  border-color: #622B9A;
}
</style>
