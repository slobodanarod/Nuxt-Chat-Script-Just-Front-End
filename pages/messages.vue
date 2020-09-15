<template>
    <main class="dashboard-mp">
        <div class="dash-tab-links">
            <div class="container">
                <div class="dash-discussions mb-20 bpm-50">
                    <div class="text-center" v-if="convs.length < 1">Henüz bir mesaj bulunmamaktadır.</div>
                    <div v-else id="content-wrapper">
                        <div class="container-fluid pb-0">
                            <div class="row">
                                <div class="col-lg-4 msg col-sm-12">
                                    <div class="rightbox">
                                        <div class="msg-scroll">
                                            <div v-for="conv in convs" class="rightmsg" :key="conv.id">
                                                <nuxt-link :to="'message/' + conv.id">
                                                <div class="message-radius">
                                                    <img :src=" 'http://cdn.724chat.com/images/users/' + conv.profile.image"
                                                         :alt="conv.profile.name" :title="conv.profile.name">
                                                </div>
                                                <div class="message-heading">
                                                    <h4>{{ conv.profile.name}}</h4>
                                                    <p>{{ conv.last_msg}}</p>
                                                </div>
                                                <div class="message-heading1">
                                                    <span><timeago
                                                        :datetime="conv.updated_at"></timeago></span>
                                                </div>
                                                <div class="clearfix"></div>
                                                </nuxt-link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                               
                                <div class="col-lg-8 col-md-12 col-sm-12">
                                    <h3 style="text-align: center; margin-top: 50px;">Lütfen görüntülemek istediğiniz
                                        sohbeti seçiniz.</h3>
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
import axios from 'axios';
import firebase from 'firebase'

    export default {
        name: "Messages", 
        data ()
        {
            return {
                convs: []
            }
        }, mounted ()
        {
            this.getAll();
        }, methods: {
            getAll ()
            {
                var data = {
                    user_id: this.user.id
                };
                axios.post('/api/messages/all',data ).then((res) => {
                    this.convs = res.data;
                }).catch((err) => {

                });
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

<style scoped>
    .st3 { float: left;}
     .message-inner-dt p {margin-bottom: 0}

</style>
