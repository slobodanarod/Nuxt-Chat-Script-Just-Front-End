<template>
    <div>
        <div v-if="user.name">
            <main class="categories-mp">
                <div class="main-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="blog-heading text-center">
                                    <h2>Sohbet Odaları</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div v-for="(room,index) in rooms" :key="index" class="col-lg-4 col-md-6">
                                <div class="our-blogs">
                                    <div class="blog-img">
                                        <nuxt-link :to="'/room/' + room.room_slug">
                                        <img :src="'http://cdn.724chat.com/images/rooms/' + room.room_image"
                                            :alt="room.toom_name"></nuxt-link>
                                    </div>
                                    <div class="blog-item1">
                                        <nuxt-link :to="'/room/' + room.room_slug"><h4>{{ room.room_name }}</h4></nuxt-link>
                                        <p>{{ room.room_desc }}</p>
                                        <div class="by-cmmnt">
<!--                                            <div class="by-user">   <router-link :to="{ name : 'room' , params: { url: room.room_slug } }">232 kişi içeride</router-link>  </div>-->
                                            <div class="comnt-rght">
                                                <span><i class="far fa-comment"></i> {{ counts[index].count }} mesaj var</span>
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
        <div v-else>
            <main class="categories-mp">
                <div class="main-section">
                    <div class="container">
                        <div class="alert alert-info text-center">
                            Henüz üye olmadığın için sohbet odalarına giremezsin.
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

	export default {
		name: "chatrooms",
        data()
        {
        	return {
                rooms : [],counts : []
            }
        },
        mounted()
        {
        	this.get();
        },
        methods: {
			get()
            {
            	var data = 1;
            	axios.post("/api/chat/rooms/get",data).then((res) => {
            		this.rooms = res.data.rooms;
            		this.counts = res.data.counts;
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

</style>
