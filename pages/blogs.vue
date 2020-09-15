<template>
    <div>
        <div class="title-bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ol class="title-bar-text">
                            <li class="breadcrumb-item"><router-link to="/">Anasayfa</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <main class="categories-mp">
            <div class="main-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6" v-for="blog in blogs" :key="blog.id">
                            <div class="our-blogs">
                                <div class="blog-img">
                                    <nuxt-link tag="a" :to="'/blog/' + blog.sef_link">
                                        <img :src="'http://cdn.724chat.com/images/blogs/' + blog.image" :alt="blog.title">
                                    </nuxt-link>
                                </div>
                                <div class="blog-item1">
                                    <nuxt-link tag="h4" :to="'/blog/' + blog.sef_link">
                                        {{ blog.title }}
                                    </nuxt-link>
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
        name: "blogs",
        layout : 'nonUser',
        data(){
            return {
                blogs : []
            }
        },
        mounted ()
        {
            this.get();
        }, 
        methods:
        {
            get()
            {
                axios.get("/api/get/blogs").then((res) => {
                    this.blogs = res.data.blogs;
                })
            }
        }
    }
</script>

<style scoped>

</style>
