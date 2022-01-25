<template>
    <header>
        <div class="header-top">
            <div class="container">
                <a href="#"><img src="../assets/img/avada-marketing-logo-2x-200x37.png" alt="AvadaConsultant logo"></a>

                <!-- navbar --> <!-- import Bootstrap--> 
                <nav>
                    <ul>
                        <li 
                            v-for="(link, index) in links"
                            :key="`A${index}`"
                        >
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                    <div>
                        <font-awesome-icon icon="phone-alt" />
                        <a href="#">(555) 802-1234</a>
                    </div>
                    <button class="btn">Free Quotes</button>
                </nav>
                <font-awesome-icon icon="bars" />
            </div>
        </div>

        <div class="jumbo">
            <div class="container">
                <!-- jumbo-left -->
                <div class="jumbo-left">
                    <h1>Unlock Your Online Growth Potential</h1>
                    <p>Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture</p>
                    <button>
                        Our Services
                        <font-awesome-icon icon="arrow-right" />
                    </button>
                </div>

                <!-- card -->
                <div class="container-card">
                    <div class="card">
                        <img src="../assets/img/marketing-consultant-expert.jpg" alt="img Expert jumbo">
                        <span>Richard Madsen</span>
                        <span class="card-info">Marketing Consultant Expert</span>
                        <div>
                            <font-awesome-icon icon="phone-alt" />
                            <a href="#">(555) 802-1234</a>
                        </div>
                        <form>
                            <input type="text" placeholder="Your Name*">
                            <input type="text" placeholder="Your Email*">
                            <input type="text" placeholder="Your Phone Number*">
                            <button>Get a Callback</button>
                        </form>
                        <span class="card-info">By submitting my data I agree to be contacted</span>
                    </div>
                </div>
            </div>

            <!-- widgets -->
            <div class="container-widgets">
                <div class="widget">
                    <font-awesome-icon icon="folder" />
                    <span>Demos</span>
                </div>
                <div class="widget">
                    <div class="price"><span>$</span>39</div>
                    <span>On Sale</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            links: [
                'Home',
                'Services',
                'Why Us',
                'Case Studies',
                'About',
                'Blog'
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/partials/_header.scss";
</style>
