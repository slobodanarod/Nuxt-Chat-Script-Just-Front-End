<template>
<div>
    <div class="title-bar">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ol class="title-bar-text">
                        <li class="breadcrumb-item"><router-link to="/">Ana Sayfa</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/blog">Blog</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ blog.title}}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
,
    <main class="blog-mp">
        <div class="main-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="blog-main-img">
                            <img :src="'http://cdn.724chat.com/images/blogs/'+blog.image" :alt="blog.title">
                        </div>
                        <div class="date-user1">
                            <div class="date-itm-left">
                                {{ blog.created_at }}
                            </div>
                        </div>
                        <div class="blog-main-content">
                            <div class="blog-title-des">
                                <h2>{{ blog.title }}</h2>
                                    {{ blog.content }}
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
import axios from 'axios';
	export default {
        name: "detail",
        layout : 'nonUser',
        data(){
            return {
                blog : {}
            }
        },
        methods : {
            get(){
                var data = {
                    sef_link: this.$route.params.slug
                };
                axios.post("/api/get/blog",data).then(res => {
                    this.blog = res.data.blog;
                });
            }
        },
        created()
        {
            this.get();
        }
	}
</script>

<style scoped>

</style>
