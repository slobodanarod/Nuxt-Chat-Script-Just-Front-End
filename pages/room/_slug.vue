<template>
  <div>
    <main class="dashboard-mp" v-if="room">
      <div class="dash-dts">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="event-title">
                <div>
                  <img
                    class="room-image"
                    :src="'http://cdn.724chat.com/images/rooms/' + room.room_image"
                    :alt="room.room_name"
                  />
                  <h3>{{ room.room_name }}</h3>
                  <span>{{ room.room_desc }}</span>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div class="dash-tab-links">
        <div class="container">
          <div class="dash-discussions mb-20 bpm-50">
            <div id="content-wrapper">
              <div class="container-fluid pb-0">
                <div class="row">


                    <div class="col-lg-3 msg col-sm-12">
                                        <div class="rightbox">
                                            <div class="rightside">
                                                <h5 style="margin:10px;">Çevrimiçi Olanlar</h5>
                                            </div>
                                            <div class="msg-scroll" id="online-users">
                                                <div v-if="users">
                                                    <div class="rightmsg" v-for="(ou,index) in users" :key="index">
                                                        <div class="message-radius">
                                                            <img src="/images/online.png" style="width:16px;height:auto;"  alt="online user" title="online user">
                                                        </div>
                                                        <div class="message-heading">
                                                            <nuxt-link :to="'/profile/' + ou.slug"> <h4>{{ ou.name }}</h4></nuxt-link>
                                                        </div>
                                                        <div class="message-heading1">
                                                            <span>yaş {{ ageFunc(ou.borndate)}}</span>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                  <div class="col-lg-9 col-md-9 col-sm-12">
                    <div class="main-conversation-box">
                      <div class="messages-line _mCS_1">
                        <div
                          id="mCSB_1"
                          class="mCS-light mCSB_vertical mCSB_inside"
                          tabindex="0"
                          style="max-height: none;"
                        >
                          <div
                            id="mCSB_1_container"
                            class="mCSB_container"
                            style="position: relative; top: 0px; left: 0px;"
                            dir="ltr"
                          >
                            <div class="main-message-box">
                              <div class="messg-usr-img">
                                <a href="#">
                                  <img src="/images/messages/1_chat.jpg" alt class="mCS_img_loaded" />
                                </a>
                              </div>
                            </div>
                            <div
                              v-for="m in messages"
                              class="main-message-box"
                              :key="m.id"
                              :class="{ 'st3' : m.user_id != user.id , ' ta-right' : m.user_id == user.id }"
                            >
                              <div class="message-dt" :class="{ 'st3' : m.user_id != user.id}">
                                <div class="message-inner-dt">
                                  <p><nuxt-link :to="'/profile/' + m.user_slug">{{ m.user_name }}</nuxt-link> : {{ m.text}}</p>
                                </div>
                                <span>
                                  <timeago :datetime="m.created_at" :auto-update="60"></timeago>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="message-send-area">
                        <form @submit.prevent="onSubmit">
                          <div class="mf-field">
                            <input type="text" name="message" v-model="message.text" id="message"placeholder="mesajını yaz" />
                            <button type="submit">Gönder</button>
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
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
export default {
  name: "room",
  data() {
    return {
      room: null,
      message: {},
      messages: [],
      users: [],
      count: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var data = {
        slug: this.$route.params.slug,
        user_id : this.user.id
      };
      this.users = [];
      axios.post("/api/chat/room/init", data).then((res) => {
          this.room = res.data.room;
          this.users = res.data.users;
        });
        firebase
        .firestore()
        .collection(this.$route.params.slug)
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
        user_id: this.user.id,
        user_name : this.user.name,
        user_slug : this.user.slug,
        room_id: this.room.id,
        text: this.message.text,
        created_at : Date.now()
      };
      firebase
        .firestore()
        .collection(this.$route.params.slug)
        .add(data)
        .then(function () {
          console.log("Mesaj başarıyla gönderildi.");
        })
        .catch(function (error) {
          console.error("Hata oluştu: ", error);
        });

      this.message = { content: "" };

    },ageFunc (borndate)
            {
                var tarih = new Date();
                var yil = tarih.getFullYear();
                var year = borndate.substring(0, 4);
                return yil - year;
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
.room-image {
  float: left;
  width: 200px;
  margin-right: 10px;
}

.st3 {
  float: left;
}

.message-inner-dt p {
  margin-bottom: 0;
}
#online-users{
    height:400px;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>
