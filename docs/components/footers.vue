<template>
  <footer class="py-5 text-white text-caption" style="background-color: #272660;">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <img style="width: 80px; height: auto; filter: invert(.75); margin-top: 2px;"
               src="https://www.gowid.com/static/media/logovector_logo_basic_black.291ed9f7.svg">
        </div>
        <div class="col-auto flex-grow-1 lh-lg" style="color:rgba(255,255,255,.5);">
          <div class="hstack gap-2 lh-1">
            주식회사 고위드
            <div class="vr"/>
            대표이사 : 김항기
            <div class="vr"/>
            사업자등록번호 : 261-81-25793
            <div class="vr"/>
            통신판매업신고 : 제 2020-서울강남-01863호
            대표전화 : 02-6105-8101
            <div class="vr"/>
            이메일 : support@gowid.com
          </div>
          서울특별시 강남구 도산대로 317, 14층 (신사동, 호림아트센터 1빌딩)

          <div class="d-flex mt-3">
            <div class="hstack gap-3 lh-1">
              <a class="nav-link" href="#none" data-bs-toggle="modal" data-bs-target="#privacyModal">개인정보 처리방침</a>
              <div class="vr"/>
              <a class="nav-link" href="#none" data-bs-toggle="modal" data-bs-target="#serviceModal">고위드 통합서비스 이용약관</a>
            </div>
            <!-- privacyModal -->
            <div class="modal fade" id="privacyModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header black--text border-0">
                    <h1 class="modal-title fs-5">개인정보 처리방침</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body text--secondary">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi, atque corporis cumque dicta eos error facere ipsam minima officiis provident saepe sapiente voluptatem voluptates voluptatibus. Dignissimos minus quaerat unde!</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- serviceModal -->
            <div class="modal fade" id="serviceModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header black--text border-0">
                    <h1 class="modal-title fs-5">고위드 통합서비스 이용약관</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body text--secondary">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi, atque corporis cumque dicta eos error facere ipsam minima officiis provident saepe sapiente voluptatem voluptates voluptatibus. Dignissimos minus quaerat unde!</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
