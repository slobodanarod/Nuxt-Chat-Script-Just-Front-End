<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
              <nuxt-link to="/" class="order-1 order-lg-0 ml-lg-0 ml-3 mr-auto" ><img src="~/assets/images/logo.png" alt="724 Chat"></nuxt-link>
              <button class="navbar-toggler align-self-start" type="button">
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu" id="navbarSupportedContent">
                <ul class="navbar-nav align-self-stretch">
                  <li class="nav-item active">
                    <nuxt-link class="nav-link" to="/home">Anasayfa <span class="sr-only">(current)</span></nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link to="/login" class="nav-link" tag="a">Giriş Yap</nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link to="/register" class="nav-link" tag="a">Kayıt Ol</nuxt-link>
                  </li>
                 
                  <li class="nav-item">
                    <nuxt-link to="/contact" class="nav-link" tag="a">İletişim</nuxt-link>
                  </li>
                </ul>
                <nuxt-link to="/rooms" class="add-event">Sohbet Odaları</nuxt-link>
              </div>
            </nav>
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../components/static/Footer'
  export default {
    middleware : ["session-control",'authNone'],
    components: {
      Footer
    }
  }
</script>
<style>

</style>
