<template>
    <div id="app">
        <Header :phoneNumber="phoneNumber" />
        <Main :phoneNumber="phoneNumber" />
        <Footer :phoneNumber="phoneNumber" />

        <div class="message">
            <div class="container-customer-service">
                <img class="customer-service" src="./assets/img/marketing-consultant-expert.jpg" alt="img customer service">
                <font-awesome-icon :icon="['fas', 'times']" />
            </div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem.
        </div>

        <div class="icon-message">
            <font-awesome-icon :icon="['fas', 'comment-alt']" />
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
    name: "App",
    components: {
        Header,
        Main,
        Footer
    },
    data() {
        return {
            phoneNumber: "(555) 802-1234"
        }
    }
};
</script>

<style lang="scss">
@import "./assets/scss/style";
</style>
