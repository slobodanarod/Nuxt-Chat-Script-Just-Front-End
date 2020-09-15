<template>

  <div>
    <main class="dashboard-mp">
      <div class="dash-tab-links">
        <div class="container">
          <div class="setting-page mb-20">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="setting-form">
                  <div class="alert alert-success text-center">
                    Aşağıdaki bilgileri girerek daha fazla kişinin sana erişmesini sağlayabilirsin.
                  </div>
                  <div class="user-data full-width">
                    <div class="about-left-heading">
                      <h3>Profil Resmi <small>Profil resmi girmek zorunlu değildir.</small></h3>
                    </div>
                    <div class="prsnl-info">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <div class="form-group">
                            <span>Şuan ki profil resmin</span>
                            <div class="setting-dp">
                              <img :src="'http://cdn.724chat.com/images/users/' + user.image" :alt="user.image">
                            </div>
                            <div class="setting-upload">
                              <div class="addpic" id="OpenImgUpload1">
                                <form enctype="multipart/form-data">
                                  <input type="file" id="file1" class="form-control" v-on:change="onImageChange">
                                  <label for="file1">Resim Seç</label>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form @submit.prevent="onSubmit">
                    <div class="user-data full-width">
                      <div class="about-left-heading">
                        <h3>Profil Yazısı *</h3>
                      </div>
                      <div class="prsnl-info">
                        <div class="row">
                          <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                              <label>Profil Yazısı seni çok iyi tanıtmalı *</label>
                              <textarea class="replt-comnt" v-model="user.description" placeholder="profil yazını buraya girmelisin">{{ user.description }}</textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user-data full-width">
                      <div class="about-left-heading">
                        <h3>Profil Bilgilerin</h3>
                      </div>
                      <div class="prsnl-info">
                        <div class="row">
                          <div class="col-lg-6 col-md-12">
                            <div class="form-group">
                              <label>Kullanıcı adı *</label>
                              <input class="payment-input" type="text" :value="user.name" disabled>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-12">
                            <div class="form-group">
                              <label>E-Posta Adresi*</label>
                              <input class="payment-input" type="email" disabled :value="user.email">
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-12">
                            <div class="form-group">
                              <label>Cinsiyet *</label>
                              <select class="form-control" v-model="user.gender" disabled>
                                <option value="1">Erkek</option>
                                <option value="2">Kadın</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-lg-6 col-md-12">
                            <div class="form-group">
                              <label>Şehir *</label>
                              <select class="form-control" v-model="user.city">
                               <option v-for="c in cities" :value="c.id" :key="c.id">{{ c.CityName }}</option>
                             </select>
                            </div>
                          </div>
                          <div class="col-lg-12 col-md-12">
                            <div class="form-group">
                              <label>Doğum Tarihi *</label>
                              <input class="form-control" v-model="user.borndate"
                                     type="date"
                                     placeholder="08/29/1991">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="add-crdt-amnt">

                      <button class="setting-save-btn" type="submit">Kaydet</button>
                                            <div class="alert alert-success" style="margin-top:10px" v-if="alert">
                                                <span style="color:black">{{ alert }}</span>
                                            </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

</template>

<script>
  import axios from "axios";
  export default {
    name: "settings",
    data(){
      return{
        image : null,
        cities : [],
        alert : "",
      }
    },
    computed: {
      user ()
      {
        return this.$store.getters.getUser;
      }
    },
    created()
    {
        this.getCities();
    },
    methods : {
      onSubmit()
            {
            	axios.post("/api/user/settings/update", this.user).then((res) => {
                        this.alert = "Başarıyla güncellendi";
                }).catch((err) => {

                });
            },
            getCities()
            {
                axios.get("/api/get/cities").then(res => {
                    this.cities = res.data;
                })
            },

      onImageChange (e)
      {
        this.image = e.target.files[ 0 ];
        e.preventDefault();
        let currentObj = this;
        const config = {
          headers: {'content-type': 'multipart/form-data'}
        };
        let formData = new FormData();
        formData.append('image', this.image);
        formData.append('user_id', this.user.id);
        axios.post('/api/user/imageUpload', formData, config)
          .then((response) => {
            this.user.image = response.data;
            this.$store.dispatch("setUserImage",response.data);
          })
          .catch(function (error) {
            currentObj.output = error;
          });
      }
    }
  }
</script>

<style scoped>

</style>
