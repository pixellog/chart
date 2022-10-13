<template>
  <div class="navbar">
    <div class="container">
      <div class="d-flex justify-content-between align-center w-100">
        <a href="./" class="font-weight-black nav-link fs-4 text-decoration-none bi">RNB</a>
        <div class="hstack gap-3">
          <a class="link-secondary text-decoration-none" href="dashboard.html">대시보드</a>
          <a class="link-secondary text-decoration-none" href="./guide.html">이력검색</a>
          <a class="link-secondary text-decoration-none" href="./">설정</a>

          <button class="btn rounded" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="material-symbols-outlined lh-base">menu</span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <a href="/guide.html">가이드</a>
            </div>
          </div>

          <div class="dropdown">
            <a href="#none" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="rounded-pill"
                   src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=36&h=36"/>
            </a>
            <ul class="dropdown-menu dropdown-menu-end text-caption">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
