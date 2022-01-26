<template>
    <main>
        <div class="container">
            <section class="container-intro">
                <img src="../assets/img/technology_thumbnail-1-400x300.jpg" alt="img intro main">

                <div class="feature">
                    <span>
                        <font-awesome-icon :icon="['fab', 'bandcamp']" />Business growth
                    </span>
                    <h2>Increase brand awarness</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat, aliquam a 
                        architecto aspernatur dolores enim maiores ipsa natus, porro et ab voluptatem placeat illum nisi quo doloribus iusto eius!</p>
                    <button>Get a Consultation</button>
                </div>
            </section>

            <section class="container-intro order-intro">
                <div class="feature">
                    <span>
                        <font-awesome-icon :icon="['fab', 'squarespace']" />Investors in people
                    </span>
                    <h2>In-House sales training</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat, aliquam a 
                        architecto aspernatur dolores enim maiores ipsa natus, porro et ab voluptatem placeat illum nisi quo doloribus iusto eius!</p>
                    <button>Get a Consultation</button>
                </div>
                
                <img src="../assets/img/construction_thumbnail-400x300.jpg" alt="img intro main">
            </section>

            <section class="container-intro">
                <img src="../assets/img/cryptocurrency-400x300.jpg" alt="img intro main">

                <div class="feature">
                    <span>
                        <font-awesome-icon :icon="['fas', 'users']" />Social media analysis
                    </span>
                    <h2>Harness your social proof</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat, aliquam a 
                        architecto aspernatur dolores enim maiores ipsa natus, porro et ab voluptatem placeat illum nisi quo doloribus iusto eius!</p>
                    <button>Get a Consultation</button>
                </div>
            </section>

            <!-- brands -->
            <section class="brands">
                <h2>Some brands we work with</h2>
                <span class="subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, sapiente.</span>

                <div class="container-brands">
                    <img 
                        v-for="(brand, index) in brands" 
                        :key="index" 
                        :src="brand.img" 
                        :alt="brand.alt"
                    >
                </div>

                <div class="contact">
                    <div class="profile">
                        <img src="../assets/img/marketing-expert-cta.png" alt="img marketing expert">
                        <div>
                            <span>Sandy Reiff</span><br>
                            <span>Marketing Consulent Extra</span>
                        </div>
                    </div>
                    <span>Drive Leads and Sales with Avada</span>
                    <button>
                        <font-awesome-icon icon="phone-alt" />
                        <a href="#">(555) 802-1234</a>
                    </button>
                </div>
            </section>

            <!-- case studies -->
            <section class="trust">
                <h2>Trusted by Leading Organization</h2>
                <div class="container-cases">
                    <div class="case">
                        <img src="../assets/img/case-studies-1-400x450.jpg" alt="img case study">
                        <p>How Spaces attracted five million visitors by improving the content</p>
                        <div>200%</div>
                        <span>Higher revenue from digital</span>
                    </div>
                    <div class="case">
                        <img src="../assets/img/case-studies-4-400x450.jpg" alt="img case study">
                        <p>Creativity helped Hemisferio increase their brand reach vertically</p>
                        <div>10x</div>
                        <span>Sales increase with the same ad spend</span>
                    </div>
                    <div class="case">
                        <img src="../assets/img/case-studies-6-400x450.jpg" alt="img case study">
                        <p>How DigitalBox used AI- powered data insight to boost sales</p>
                        <div>3-year</div>
                        <span>Partnership with Avada Consultant</span>
                    </div>
                </div>
                <button>Read more case studies</button>
            </section>
        </div>

        <!-- characteristics -->
        <div class="bg-gray">
            <section class="container">
                <div class="container-intro">
                    <div class="feature">
                        <h2>We boost our clients' bottom line by optimizing their growth potential</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat, aliquam a 
                            architecto aspernatur dolores enim maiores ipsa natus.</p>
                        <button>Why work with us</button>
                    </div>
                
                    <img src="../assets/img/we-boost-our-clients-400x366.jpg" alt="img intro main">
                </div>

                <div class="middle"></div>

                <div class="awards"></div>
            </section>
        </div>

        <!-- employe quote -->
        <div class="container"></div>

        <!-- resources  -->
        <div class="bg-gray">
            <section class="container"></section>
        </div>

        <!-- contact card -->
        <div class="bg-black">
            <section class="container"></section>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Main',
    data() {
        return {
            brands: [
                {
                    "img": require('../assets/img/abstract.png'),
                    "alt": "logo Abstract"
                },
                {
                    "img": require('../assets/img/cglobal.png'),
                    "alt": "logo CGlobal"
                },
                {
                    "img": require('../assets/img/next.png'),
                    "alt": "logo Next"
                },
                {
                    "img": require('../assets/img/hemisferio.png'),
                    "alt": "logo Hemisferio"
                },
                {
                    "img": require('../assets/img/spaces.png'),
                    "alt": "logo Spaces"
                },
                {
                    "img": require('../assets/img/digitalbox.png'),
                    "alt": "logo Digitalbox"
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/partials/_main.scss";
</style>
