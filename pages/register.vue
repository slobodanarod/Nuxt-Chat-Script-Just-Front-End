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
                      <nuxt-link to="index"><img src="images/login-register/logo.svg" alt=""></nuxt-link>
                    </div>
                    <div class="lr-text">
                      <h2>Tamamen Ücretsiz</h2>
                      <p>724chat tamamen ücretsizdir. Sizden kesinlikle para talep etmiyoruz.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="lr-right">
                    <div class="login-register-form">
                      <form @submit.prevent="onSubmit">
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <input v-model="user.name"
                                     class="title-discussion-input"
                                     type="text" placeholder="Kullanıcı Adı"
                                     required>
                              <small>{{nickerror}}</small>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input v-model="user.email"
                                     class="title-discussion-input"
                                     type="email" placeholder="E-Posta Adresi"
                                     required>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <input v-model="user.password"
                                     class="title-discussion-input"
                                     type="password" placeholder="Şifre" required>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <input v-model="user.password_confirmation"
                                     class="title-discussion-input" type="password"
                                     placeholder="Şifre Tekrar" required>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <select class="form-control" v-model="user.gender">
                                <option selected value="1">Erkek</option>
                                <option value="2">Kadın</option>
                              </select>
                            </div>
                          </div>

                          <div class="col">
                            <div class="form-group">
                              <select class="form-control" v-model="user.city">
                                <option v-for="c in cities" :value="c.id" :key="c.id">{{ c.CityName }}</option>
                              </select>
                            </div>
                          </div>

                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label class="float-left">Doğum Tarihi</label>
                              <input v-model="user.borndate"
                                     class="form-control"
                                     type="date" placeholder=""
                                     required>
                            </div>
                          </div>
                        </div>
                        <div class="rgstr-dt-txt">
                          Üye olarak <a href="#">Kuralları</a>, <a href="#">Üyelik
                          Politikasını</a> ve <a href="#">Çerez Politikasını</a> kabul
                          ediyorum.
                        </div>
                        <button class="login-btn" type="submit">Kaydı Tamamla</button>
                        <div class="login-link">Zaten hesabın var mı?
                          <router-link to="/login">Giriş Yap</router-link>
                        </div>
                      </form>

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

  export default {
    layout: 'nonUser', data ()
    {
      return {
        user: {name: null, email: null, password: null, borndate: null, gender: 1, city : 1, password_confirmation: null},
        loading: false,
        nickerror: null,
        isInvalid: 'is-invalid',
        submitActive: false,
        cities: []
      }
    }, created ()
    {
      this.getCities();
    }, methods: {
       getCities()
            {
                axios.get("/api/get/cities").then(res => {
                    this.cities = res.data;
                })
            },
      onSubmit ()
      {
        this.loading = true;
        if (this.user.name === null || this.user.email === null || this.user.password === null)
        {
          alert("Lütfen boş yer bırakmayınız.");
        }
        else
        {
          return axios.post('/api/user/register', {
            name: this.user.name,
            email: this.user.email,
            password: this.user.password,
            borndate: this.user.borndate,
            city: this.user.city,
            gender: this.user.gender,
            password_confirmation: this.user.password_confirmation
          }).then((res) => {
            this.$store.dispatch('registerUser', res.data);
              this.$router.push("/settings");
          }).catch((err) => console.log(err));


        }
      }
    }
  }
</script>
