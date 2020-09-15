<template>
  <main class="dashboard-mp">
    <div class="dash-tab-links">
      <div class="container">
        <div class="dash-discussions mb-20 bpm-50">
          <div class="text-center" v-if="2 < 1">Henüz bir mesaj bulunmamaktadır.</div>
          <div v-else id="content-wrapper">
            <div class="container-fluid pb-0">
              <nuxt-link to="/messages" class="back-to-messages">
                <i class="fas fa-caret-left"></i> Mesajlara Geri Dön
              </nuxt-link>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12" v-if="cprofile.image != null ">
                  <div class="main-conversation-box">
                    <div class="message-bar-head">
                      <div class="usr-msg-details">
                        <div class="usr-ms-img">
                          <img
                            :src="'http://cdn.724chat.com/images/users/'+ cprofile.image"
                            :alt="cprofile.name"
                            class="mCS_img_loaded"
                          />
                        </div>
                        <div class="usr-mg-info">
                          <nuxt-link :to="'/profile/' + cprofile.slug">
                            <h3>{{cprofile.name}}</h3>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="message-heading2">
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                    <div class="messages-line">
                      <div
                        id="mCSB_1"
                        class="mCS-light mCSB_vertical mCSB_inside"
                        tabindex="0"
                        style="max-height: none;"
                      >
                        <div
                          class="mCSB_container"
                          style="position: relative;top: 90px;left: 0px;"
                          dir="ltr"
                        >
                          <div class="main-message-box">
                            <div class="messg-usr-img">
                              <a href="#">
                                <img
                                  src="http://cdn.724chat.com//images/messages/1_chat.jpg"
                                  alt
                                  class="mCS_img_loaded"
                                />
                              </a>
                            </div>
                          </div>
                          <div v-for="m in messages" :key="m.id">
                            <div class="main-message-box ta-right" v-if="m.user_id == user.id">
                              <div class="message-dt">
                                <div class="message-inner-dt">
                                  <p>{{ m.message }}</p>
                                </div>
                                <span>
                                  <timeago :datetime="m.created_at"></timeago>
                                </span>
                              </div>
                            </div>

                            <div class="main-message-box st3" v-else>
                              <div class="message-dt st3">
                                <div class="message-inner-dt">
                                  <p>{{ m.message }}</p>
                                </div>
                                <span>
                                  <timeago :datetime="m.created_at"></timeago>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="message-send-area">
                      <form @submit.prevent="onSubmit">
                        <div class="mf-field">
                          <input
                            type="text"
                            name="message"
                            v-model="message.content"
                            placeholder="Mesajınızı buraya yazınız."
                          />
                          <button type="submit">Gönder</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12" v-else>
                  <h3 style="text-align: center; margin-top: 50px;">Bir hata oluştu.</h3>
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
import firebase from "firebase";

export default {
  name: "Messages",
  data() {
    return {
      messages: [],
      cprofile: {},
      message: { content: "" },
      conv_id: null,
    };
  },
  mounted() {
    
    this.readFromRealtimeDb();
  },
  methods: {
    readFromRealtimeDb() {
      var data = {
        id: this.$route.params.id,
        user_id: this.user.id,
      };

      axios.post("/api/get/conv", data).then((res) => {
        this.cprofile = res.data.profile;
      });


      firebase
        .firestore()
        .collection(this.$route.params.id)
        .orderBy("created_at")
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if ((change.type = "added")) {
              let doc = change.doc;
              this.messages.push(doc.data());
            }
            
          });
        });
    },
    onSubmit() {

      var data = {
        c_id: this.$route.params.id,
        message: this.message.content,
        user_id: this.user.id,
        created_at: Date.now(),
        status: 0,
        delete: "",
        view: 0,
      };

      //LAST MSG
      axios.post("/api/message/last_msg",{ conv_id : this.$route.params.id, message : this.message.content}).then(res => {


         // MESAJI EKLEME
      firebase
        .firestore()
        .collection(this.$route.params.id)
        .add(data)
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });

      });

     

      this.message = { content: "" };
     
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
.st3 {
  float: left;
}
.message-inner-dt p {
  margin-bottom: 0;
}
.back-to-messages {
  color: purple;
  padding-left: 5px;
  font-size: 25px;
  margin-bottom: 10px;
}
</style>