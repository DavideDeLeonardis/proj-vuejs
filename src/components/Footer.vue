<template>
    <footer>
        <div class="container">
            <div class="col-left">
                <p>Grow your online business strategically, and improve customer retention.</p>
                <a href="#">
                    <font-awesome-icon 
                        v-for="social in socials" 
                        :key="social" 
                        :icon="['fab', social]" />
                </a>
            </div>

            <!-- lists -->
            <div class="col-right">
                <h4>Services</h4>
                <ul>
                    <li
                        v-for="(link, index) in servicesLinks"
                        :key="`B${index}`"
                    >
                        <a href="#">{{ link }}</a>
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
                        <a href="#">{{ link }}</a>
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
                        <a href="#">{{ link }}</a>
                    </li>
                </ul>
            </div>

            <div class="col-bottom">
                <span>2020 AvadaConsulting Powered by Wordpress</span>
                <a href="#">Call Us (555) 802-1234</a>
                <span>info@yourcompany.com</span>
            </div>
        </div>
    </footer>
</template>

<script>


export default {
    name: 'Footer',
    data() {
        return {
            socials: [
                'facebook-f',
                'twitter',
                'instagram',
                'youtube',
                'linkedin-in',
                'tiktok'
            ],
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
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/partials/_footer.scss";
</style>
