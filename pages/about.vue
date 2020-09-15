<template>
    <main class="discussion-mp">
        <div class="main-section">
            <div class="about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="checkout-heading text-center">
                                <h2>{{ info.name }}</h2>
                            </div>
                            <div class="about-text" v-html="info.content">  </div>
                        </div>
                      
                    </div>
               </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
	export default {
		name: "about",
        layout : 'nonUser',
        data(){
		    return {
                info : {}
            }
        },
        mounted () {
		    this.get();
        },
        methods:{
		    get()
            {
                var data = {
                    page_id : 1
                }
                axios.post("/api/get/page",data).then((res) => {
                    this.info = res.data;
                })
            }
        }
	}
</script>

<style scoped>

</style>
