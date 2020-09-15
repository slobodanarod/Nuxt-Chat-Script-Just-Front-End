<template>
  <main class="register-mp">
    <div class="main-section">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-10">
            <div class="login-register-bg">
              <div class="row no-gutters">
                <div class="col-lg-6">
                  <div class="lg-left">
                    <div class="lg-logo">
                      <a href="index.html"><img src="images/login-register/logo.svg" alt=""></a>
                    </div>
                    <div class="lr-text">
                      <h2>Hemen Giriş Yap</h2>
                      <p>Tamamen ücretsiz bir şekilde giriş yapabilirsin.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="lr-right">
                    <div class="login-register-form">
                      <form @submit.prevent="onSubmit">
                        <div class="form-group">
                          <input class="title-discussion-input" type="email" v-model="user.email"
                                 placeholder="E-posta adresin">
                        </div>
                        <div class="form-group">
                          <input class="title-discussion-input" type="password" v-model="user.password"
                                 placeholder="Şifren">
                        </div>
                        <button class="login-btn" type="submit">Giriş Yap</button>
                        <div class="alert alert-danger" v-if="error">{{ error }}</div>
                      </form>
                      <a href="#" class="forgot-link">Parolamı Unuttum?</a>
                      <div class="regstr-link">Henüz hesabın yok mu ?
                        <nuxt-link to="/register">Hemen ücretsiz üye ol</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import axios from "axios";
  import Cookie from "js-cookie";

  export default {
    layout: 'nonUser', data ()
    {
      return {
        user: {email: null, password: null}, error: null
      }
    }, methods: {
      onSubmit ()
      {
        if (this.user.email === null || this.user.password === null)
        {
          alert("lütfen tüm bilgileri doldurun.");
        }
        else
        {


          axios.post('/api/user/login', {
            email: this.user.email, password: this.user.password,
          }).then((res) => {
            this.$store.dispatch("loginUser", res.data);
            this.$router.push("/home");
          }).catch((err) => {
            this.error = "Lütfen bilgilerinizi kontrol ediniz.";
            this.user.password = null;
          });
          

        }
      }
    }
  }
</script>
