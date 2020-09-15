<template>
  <div>
    <main class="dashboard-mp">
      <div class="dash-tab-links">
        <div class="container">
          <div class="dash-discussions mb20">
            <div class="main-section">
              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col-lg-4 col-md-12">
                    <div class="search-bar-main">
                      <h1 class="text-center">Kullanıcı Ara</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="all-search-events">
                <div style="padding-bottom:15px; width:100%;float:left;" >
                  <form @submit.prevent="onSubmit()">
                    <div class="form-group">
                      <input type="text" v-model="s" class="form-control form-control-lg" />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-success">Kullanıcı Ara</button>
                    </div>
                  </form>
                </div>
                <div class="row" v-if="users.length > 0">
                  <div class="col-lg-3 col-md-6" v-for="(o,index) in users" :key="index">
                    <div class="user-data full-width">
                      <div class="user-profile">
                        <div class="userbg-dt dpbg-1">
                          <nuxt-link :to="'/profile/' + o.slug">
                            <div class="usr-pic">
                              <img
                                :src="'http://cdn.724chat.com/images/users/' + o.image "
                                :alt="o.name"
                              />
                            </div>
                          </nuxt-link>
                        </div>
                        <div class="user-main-details">
                          <h4>{{ o.name }}</h4>
                          <span>
                            <timeago :datetime="o.created_at" :auto-update="60"></timeago>
                          </span>
                        </div>
                        <ul class="follow-msg-dt">
                          <li>
                            <div class="msg-dt-sm">
                              <nuxt-link :to="'/profile/' + o.slug">
                                <button class="msg-btn1">Mesaj At</button>
                              </nuxt-link>
                            </div>
                          </li>
                          <li>
                            <div class="follow-dt-sm">
                              <nuxt-link :to="'/profile/' + o.slug">
                                <button class="follow-btn1">Takip Et</button>
                              </nuxt-link>
                            </div>
                          </li>
                        </ul>
                        <div class="profile-link">
                          <nuxt-link :to="'/profile/' + o.slug">Profili Görüntüle</nuxt-link>
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
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "search",
  data() {
    return {
      users: [],
      s: "",
    };
  },
  created() {},
  methods: {
    onSubmit() {
      var data = {
        s: this.s,
      };
      axios.post("/api/get/search-user", data).then((res) => {
        this.users = res.data;
      });
    },
  },
};
</script>
<style scoped>
</style>
