<template>
    <main class="contact-mp">
        <div class="main-section">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="contact-heading text-center" >
                            <h2>Bizimle iletişime geç</h2>
                            <p>Bir sorun veya problemin varsa bizimle iletişime geç..</p>
                        </div>
                       
                        <div class="contact-form" >
                            <form @submit.prevent="onSubmit">
                                <div class="form-group">
                                    <input class="title-discussion-input" v-model="contact.name" type="text"
                                           placeholder="İsim">
                                </div>
                                <div class="form-group">
                                    <input class="title-discussion-input" v-model="contact.mail" type="email"
                                           placeholder="E-Posta Adresi">
                                </div>
                                <div class="form-group">
                                    <textarea class="replt-comnt" v-model="contact.message"
                                              placeholder="Ne söylemek istiyorsun?"></textarea>
                                </div>
                                <button class="send-m-btn" type="submit">Mesajı Gönder</button>
                            </form>
                        </div>
                    

                        <div v-if="alert" class="alert alert-success" style="margin-top:10px;">
                            {{ alert }}
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
        layout : 'nonUser',
        name: "contact",data ()
        {
            return {
                contact: {}, alert: ""
            }
        }, methods: {
            onSubmit ()
            {
                var data = {
                    name: this.contact.name, mail: this.contact.mail, message: this.contact.message
                };
                axios.post("/api/contact/message", data).then((res) => {
                        this.alert = "Mesajınız bize ulaştı. En kısa zamanda e-posta adresinize geri dönüş yapılacaktır.";
                });
            }
        }
    }
</script>

<style scoped>

</style>
