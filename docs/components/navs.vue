<template>
  <div class="navbar">
    <div class="container">
      <div class="d-flex justify-content-between align-center w-100">
        <router-link to="./" class="font-weight-black nav-link fs-4 text-decoration-none bi">
          <img src="/assets/img/bi.svg" alt="GDS"/>
        </router-link>
        <div class="hstack gap-4">
          <router-link v-for="(item,i) in navs" :key="item.id"
             :to="item.to"
             class="nav-link">
            {{ item.title }}
          </router-link>

          <div class="dropdown">
            <a href="#none" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="rounded-pill"
                   :src="userImg+'&w=36&h=36'"/>
            </a>

            <div class="dropdown-menu dropdown-menu-end text-caption pb-0 mt-1">
              <div class="card border-0">
                <div class="d-flex pa-4 pr-5">
                  <div>
                    <img class="rounded-pill" :src="userImg+'&w=42&h=42'"/>
                  </div>
                  <div class="ml-3">
                    <h6 class="mb-1">김항기</h6>
                    <div class="text-secondary text-opacity-50">until99@gowid.com</div>
                    <div class="d-flex align-center mt-2">
                      <i class="material-symbols-outlined font-weight-light">settings</i>
                      <a href="#none" class="ml-1 nav-link text-decoration-underline">프로필 변경하기</a>
                    </div>
                  </div>
                </div>
                <button type="button" class="card-footer btn btn-primary mb-0 text-white">로그아웃</button>
              </div>
            </div>
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
      userImg: userImg,
      path: path,
      navs: [
        {title: '로그인', to: '/login'},
        {title: '데이터룸', to: '/dataroom'},
        {title: '대시보드', to: '/dashboard'},
      ]
    }
  },
  mounted() {
    // console.log(routes)
  }
}

</script>

<style>
.navbar .nav-link {
  padding: 5px 0;
  border-bottom: 3px solid transparent;
}
</style>
