<template>
  <footer class="footer-bg">
    <div class="container">
      <div class="row" >
        <div class="col-lg-6 col-md-12" v-if="!this.$store.state.user">
          <div class="footer-left">
            <ul>
              <li>
                <nuxt-link to="/about">Hakkımızda</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/privacy">Üyelik Koşulları</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blogs">Blog</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/use-of-cookie">Çerez Kullanımı</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">İletişim</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="footer-right">
            <ul class="copyright-text">
              <li>
                <nuxt-link to="/">
                  <img src="~/assets/images/logo-2.png" alt="724 Chat" />
                </nuxt-link>
              </li>
              <li>
                <div class="ftr-1">
                  <i class="far fa-copyright"></i> 2020
                  <a href="https://www.724chat.com">724chat</a>. Tüm hakları saklıdır.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
