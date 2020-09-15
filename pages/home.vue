<template>
  <div>
    <main v-if="user">
      <div class="main-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-5">
              <div class="main-left-sidebar">
                <div class="user-data full-width">
                  <div class="user-profile">
                    <div class="username-dt dpbg-1">
                      <div class="usr-pic">
                        <img
                          :src="'http://cdn.724chat.com/images/users/' + user.image "
                          :alt="user.name"
                        />
                      </div>
                    </div>
                    <div class="user-main-details" style="padding: 70px 0 10px 0;">
                      <h4>{{ user.name }}</h4>
                    </div>
                  </div>
                </div>

                <div class="user-data full-width">
                  <div class="categories-items">
                    <router-link class="category-item" to="/actions/viewer/in">
                      <i class="fas fa-bullhorn"></i>Profilini Gezenler
                    </router-link>
                    <router-link class="category-item" to="/actions/smiles/in">
                      <i class="fas fa-flag"></i> Gülümsemeler
                    </router-link>
                    <router-link class="category-item" to="/settings">
                      <i class="fas fa-pen-nib"></i>Resmini Güncelle
                    </router-link>
                    <router-link class="category-item" to="/change/password">
                      <i class="fas fa-key"></i>Şifreni Değiştir
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-7">
              <div class="main-posts">
                <div class="add-activity">
                  <form @submit.prevent="onSubmit">
                    <div class="activity-group">
                      <textarea
                        class="add-activity-des"
                        v-model="post.content"
                        placeholder="Şu an ne düşünüyorsun ?"
                      ></textarea>
                    </div>

                    <div class="activity-button">
                      <button class="act-btn-post" v-if="post.content" type="submit">Gönder</button>
                    </div>
                    <span v-if="pError" class="alert alert-danger">{{ pError }}</span>
                  </form>
                </div>
                <div v-for="(p,index) in posts" :key="index">
                  <div class="activity-posts" v-if="p.type == 1 ">
                    <div class="activity-group1">
                      <div class="main-user-dts1">
                        <nuxt-link :to="'/profile/' + p.slug">
                          <img :src="'http://cdn.724chat.com/images/users/'+p.image" :alt="p.name" />
                        </nuxt-link>
                        <div class="user-text3">
                          <nuxt-link :to="'/profile/' + p.slug">
                            <h4>{{ p.name }}</h4>
                          </nuxt-link>
                          <span>
                            <timeago :datetime="p.olusturma_tarihi"></timeago>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="activity-descp">
                      <p>{{ p.post_content }}</p>
                    </div>
                  </div>

                  <div class="activity-posts" v-if="p.type == 2 ">
                    <div class="activity-group1">
                      <div class="main-user-dts1">
                        <nuxt-link :to="'/profile/' + p.slug">
                          <img :src="'http://cdn.724chat.com/images/users/'+p.image" :alt="p.name" />
                        </nuxt-link>
                        <div class="user-text3">
                          <h4>
                            <nuxt-link :to="'/profile/' + p.slug" style="color:black;">{{ p.name }}</nuxt-link>
                          </h4>
                          <p>
                            <nuxt-link
                              :to="'/room/' + p.room_slug"
                              style="color:black; font-weight:bold;"
                            >{{ p.room_name}}</nuxt-link>
                            {{ p.post_content }}<span style="float:right"><timeago
                                                        :datetime="p.olusturma_tarihi"></timeago></span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="activity-descp">
                      <p></p>
                    </div>
                  </div>
                  <div class="activity-posts" v-if="p.type == 3 ">
                    <div class="activity-group1">
                      <div class="main-user-dts1">
                        <nuxt-link :to="'/profile/' + p.slug">
                          <img :src="'http://cdn.724chat.com/images/users/'+p.image" :alt="p.name" />
                        </nuxt-link>
                        <div class="user-text3">
                          <h4>
                            <nuxt-link :to="'/profile/' + p.slug" style="color:black;">{{ p.name }}</nuxt-link>
                          </h4>
                          <p>
                            <nuxt-link
                              :to="'/room/' + p.room_slug"
                              style="color:black; font-weight:bold;"
                            >{{ p.room_name}}</nuxt-link>
                            {{ p.post_content }}<span style="float:right"><timeago
                                                        :datetime="p.olusturma_tarihi"></timeago></span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="activity-descp">
                      <p></p>
                    </div>
                  </div>
                  <div class="activity-posts" v-if="p.type == 4 ">
                    <div class="activity-group1">
                      <div class="main-user-dts1">
                                                 <nuxt-link :to="'/profile/' + p.slug">
                          <img :src="'http://cdn.724chat.com/images/users/'+p.image" :alt="p.name" />
                        </nuxt-link>
                        <div class="user-text3">
                          <h4>
                            <nuxt-link :to="'/profile/' + p.slug" style="color:black;">{{ p.name }}</nuxt-link>
                          </h4>
                          <p>{{ p.post_content }}<span style="float:right"><timeago :datetime="p.olusturma_tarihi"></timeago></span></p>
                        </div>
                      </div>
                    </div>
                    <div class="activity-descp">
                      <p></p>
                    </div>
                  </div>
                </div>

                <div class="main-loader mb-50">
                  <button id="load-more" @click="getPosts(page+1)">Daha Fazla Yükle</button>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="right-side-items">
                <div style="margin-bottom:10px;" class="explore-events">
                  <img src="https://via.placeholder.com/250x250" />
                </div>
                <div class="post-event">
                  <h6>Sen de sohbete katıl!</h6>
                  <p>
                    Canlı sohbet odalarına girerek sen de sohbete katıl! Herkese uygun sohbet
                    odaları
                  </p>
                  <router-link to="/chat-rooms" class="add-nw-event">Sohbete Katıl</router-link>
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
  name: "home",
  data() {
    return {
      post: { content: "" },
      posts: {},
      page: {},
      pError: null,
    };
  },
  mounted() {
    this.getPosts(1);
  },
  methods: {
    onSubmit() {
      if (this.post.content === "") {
        this.pError = "Boş yazı gönderemezsin.";
      } else {
        this.pError = null;
        var data = {
          user_id: this.user.id,
          post_content: this.post.content,
        };
        axios.post("/api/post/send", data).then((res) => {
          this.post = { content: "" };
          this.getPosts(1);
        });
      }
    },
    getPosts(page = 1) {
      var data = {
        user_id: 0,
      };
      axios.post("/api/post/get?page=" + page, data).then((res) => {
        if (page === 1) {
          this.posts = res.data.data;
        } else {
          for (var index = 0; index < res.data.data.length; ++index) {
            this.posts.push(res.data.data[index]);
          }
        }
        this.page = res.data.current_page;
      });
      return this.posts;
    },
    asyncData(context) {
      callback(null, {
        posts: this.getPosts(1),
      });
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style scoped>
#load-more {
  width: 100%;
  background: #ec5569;
  padding: 4px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border: 0;
}
</style>
