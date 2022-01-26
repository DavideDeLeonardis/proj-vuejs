<template>
    <div id="app">
        <Header />
        <Main />
        <Footer />

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
    }
};
</script>

<style lang="scss">
@import "./assets/scss/partials/_commons.scss";
@import "./assets/scss/partials/_app.scss";
</style>
