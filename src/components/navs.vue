<template>
  <div class="navbar">
    <div class="container">
      <div class="d-flex justify-content-between w-100">
        <a href="/" class="text-white font-weight-black fs-4 text-decoration-none">RNB</a>
        <div class="hstack gap-3">
          <a class="link-light text-decoration-none" href="/">대시보드</a>
          <a class="link-light text-decoration-none" href="/">이력검색</a>
          <a class="link-light text-decoration-none" href="/">설정</a>
          <a class="link-light text-decoration-none" href="/guide.html">가이드</a>
          <button class="btn btn-light rounded" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="material-symbols-outlined lh-base">menu</span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              ...
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
    }
  },
}
</script>

<style scoped>
.navbar {
  background-color: #272660;
  z-index: 100;
  top: 0;
}
</style>
