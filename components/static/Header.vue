<template>
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
                  <nuxt-link to="/last-users" class="nav-link" tag="a">Son Üyeler</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/online-users" class="nav-link" tag="a">Çevrimiçi Üyeler</nuxt-link>
                </li>
              </ul>
              <nuxt-link to="/chat-rooms" class="add-event">Sohbet Odaları</nuxt-link>
            </div>
            <ul class="group-icons">
              <li><nuxt-link to="/search" class="icon-set"><i class="fas fa-search"></i></nuxt-link></li>
              <li><nuxt-link to="/actions/smiles/in" class="icon-set"><i class="fas fa-smile"></i></nuxt-link></li>
              <li><nuxt-link to="/messages" class="icon-set"><i class="fas fa-envelope"></i></nuxt-link></li>
              <li><nuxt-link to="/actions/viewer/in" class="icon-set"><i class="fas fa-eye"></i></nuxt-link></li>

              
            </ul>
            <div class="account order-1 dropdown">
              <a href="#" class="account-link dropdown-toggle-no-caret" role="button" data-toggle="dropdown">
                <div class="user-dp"><img :src="'http://cdn.724chat.com/images/users/' + user.image" :alt="user.name"></div>
                <span class="d-none d-sm-block d-md-block">{{ user.name }}</span>
                <i class="fas fa-angle-down"></i>
              </a>
              <div class="dropdown-menu account-dropdown dropdown-menu-right">
                <nuxt-link to="/messages" class="link-item">Mesaj Kutum</nuxt-link>
                <nuxt-link to="/settings" class="link-item">Profil Bilgilerim</nuxt-link>
                <a @click="logOut" class="link-item">Çıkış</a>
              </div>
            </div>
          </nav>
          <div class="overlay"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    methods : {
      logOut()
      {
        this.$store.dispatch("logOut");
        this.$router.push("/");
      }
    },
    computed : {
      user()
      {
        return this.$store.getters.getUser;
      }
    }
  }
</script>
