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
            <div 
                v-for="(list, index) in lists"
                :key="`H${index}`"
                class="col-right"
            >
                <h4>{{ list.heading }}</h4>
                <ul>
                    <li
                        v-for="(link, index) in list.links"
                        :key="`I${index}`"
                    >
                        <a href="#">{{ link }}</a>
                    </li>
                </ul>
            </div>

            <div class="col-bottom">
                <span>2020 AvadaConsulting Powered by Wordpress</span>
                <a href="#">Call Us {{ phoneNumber }}</a>
                <span>info@yourcompany.com</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        phoneNumber: {
            type: String
        }
    },
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
            lists: [
                {
                    heading: "Services",
                    links: [
                        'Home',
                        'Services',
                        'Why Us',
                        'Case Studies',
                        'About',
                        'Blog'
                    ]
                },
                {
                    heading: "Resources",
                    links: [
                        'Marketing Plan', 
                        'Sales Development', 
                        'Digital Marketing', 
                        'Pricing, Why Us', 
                        'Case Study'
                    ]
                },
                {
                    heading: "Company",
                    links: [
                        'Who We Are',
                        'Contact Us',
                        'Careers'
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/partials/footer";
</style>
