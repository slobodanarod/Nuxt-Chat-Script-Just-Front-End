<template>
  <div>
    <Header ></Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../components/static/Header";
  import Footer from '../components/static/Footer'
  import axios from "axios";
  import Cookie from 'js-cookie'
  export default {
    middleware : ["session-control",'auth'],
    components: {
      Header, Footer
    }
    // created () {
      //axios.post("/api/user/init", { token: Cookie.get("authKey") }).then((res) => {
       //this.$store.dispatch("setUser",res.data.user);
      //});
   // }
  }
</script>
<style>

</style>
