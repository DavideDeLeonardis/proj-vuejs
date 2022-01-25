<template>
    <footer>
        <div class="container">
            <div class="col-left">
                <p>Grow your online business strategically, and improve customer retention.</p>
                <!-- <a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a> -->
            </div>

            <!-- lists -->
            <div class="col-right">
                <h4>Services</h4>
                <ul>
                    <li
                        v-for="(link, index) in servicesLinks"
                        :key="`B${index}`"
                    >
                        {{ link }}
                    </li>
                </ul>
            </div>
            <div class="col-right">
                <h4>Resources</h4>
                <ul>
                    <li
                        v-for="(link, index) in resourcesLinks"
                        :key="`C${index}`"
                    >
                        {{ link }}
                    </li>
                </ul>
            </div>
            <div class="col-right">
                <h4>Company</h4>
                <ul>
                    <li
                        v-for="(link, index) in companyLinks"
                        :key="`D${index}`"
                    >
                        {{ link }}
                    </li>
                </ul>
            </div>


            <div class="col-bottom">
                <span>2020 AvadaConsulting Powered by Wordpress</span>
                <span>Call Us (555) 802-1234</span>
                <span>info@yourcompany.com</span>
            </div>
        </div>
    </footer>
</template>

<script>
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// library.add(faFacebookF);

export default {
    name: 'Footer',
    components: {
        // FontAwesomeIcon
    },
    data() {
        return {
            servicesLinks: [
                'Home',
                'Services',
                'Why Us',
                'Case Studies',
                'About',
                'Blog'
            ],
            resourcesLinks: [
                'Marketing Plan', 
                'Sales Development', 
                'Digital Marketing', 
                'Pricing, Why Us', 
                'Case Study'
            ],
            companyLinks: [
                'Who We Are',
                'Contact Us',
                'Careers'
            ],
            social: [

            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/partials/_footer.scss";
</style>
