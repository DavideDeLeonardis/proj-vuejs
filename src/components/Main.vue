<template>
    <main>
        <div class="container">
            <!-- intro -->
            <section class="container-intro intro">
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

            <section class="container-intro intro order-intro">
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

            <section class="container-intro intro">
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
                        :key="`A${index}`" 
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
                        <div class="img-color">
                            <img src="../assets/img/case-studies-1-400x450.jpg" alt="img case study">
                        </div>
                        <p>How Spaces attracted five million visitors by improving the content</p>
                        <div>200%</div>
                        <span>Higher revenue from digital</span>
                    </div>
                    <div class="case">
                        <div class="img-color">
                            <img src="../assets/img/case-studies-4-400x450.jpg" alt="img case study">
                        </div>
                        <p>Creativity helped Hemisferio increase their brand reach vertically</p>
                        <div>10x</div>
                        <span>Sales increase with the same ad spend</span>
                    </div>
                    <div class="case">
                        <div class="img-color">
                            <img src="../assets/img/case-studies-6-400x450.jpg" alt="img case study">
                        </div>
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
            <section class="container characteristics">
                <div class="container-intro order-intro">
                    <div class="feature">
                        <h2>We boost our clients' bottom line by optimizing their growth potential</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat, aliquam a 
                            architecto aspernatur dolores enim maiores ipsa natus.</p>
                        <button>Why work with us</button>
                    </div>
                
                    <img src="../assets/img/we-boost-our-clients-400x366.jpg" alt="img intro main">
                </div>

                <div class="middle">
                    <div class="col">
                        <h4>We build relationships</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil officia odit dolore ipsam sapiente quisquam.</p>
                        <h4>Proprietary process</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil officia odit dolore ipsam sapiente quisquam.</p>
                    </div>
                    <div class="col">
                       <div class="col-left">
                            <font-awesome-icon :icon="['fas', 'plus-square']" />
                            <div class="content-middle">
                                <h5>Accountability</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div class="col-left">
                            <font-awesome-icon :icon="['fas', 'plus-square']" />
                            <div class="content-middle">
                                <h5>Transparency</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                       <div class="col-left">
                            <font-awesome-icon :icon="['fas', 'plus-square']" />
                            <div class="content-middle">
                                <h5>Investment</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="awards">
                    <span>Awards</span>
                    <div class="container-awards">
                        <div 
                            v-for="(award, index) in awards" 
                            :key="`B${index}`" 
                            class="award"
                        >
                            <img :src="award.img" :alt="award.alt">
                            <span>{{ award.text }}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- employe quote -->
        <section class="container quote">
            <div class="container-intro">
                <img src="../assets/img/large-testimonial-600x583.jpg" alt="img intro main">

                <div class="feature">
                    <blockquote>"The team at Avada Consultant is faboulus. They helped us unlock our potential
                        online and offline. We have experienced year on year growth due to theri progressive approach."</blockquote><br>
                    <span>Kate Schadler</span><br>
                    <span>Marketing Consulent - Abstract</span>
                </div>
            </div>
        </section>

        <!-- resources  -->
        <div class="bg-gray">
            <section class="container resources">
                <div class="resources-top">
                    <h2>Marketing Resouces: <br> Insider Advice on How to Increase Online Sales</h2>
                    <button>Explore all resources</button>
                </div>

                <div class="container-cases">
                    <div class="case">
                        <div class="img-color">
                            <img src="../assets/img/blog-posts-6-200x133.jpg" alt="img resource">
                        </div>
                        <p>Marketing tips nad tricks for your website</p>
                    </div>
                    <div class="case">
                        <div class="img-color">
                            <img src="../assets/img/blog-posts-5-200x133.jpg" alt="img resource">
                        </div>
                        <p>How to write stunning blog post titles</p>
                    </div>
                    <div class="case">
                        <div class="img-color">
                            <img src="../assets/img/blog-posts-4-200x133.jpg" alt="img resource">
                        </div>
                        <p>Techniques to reduce facebook ads spend</p>
                    </div>
                </div>
            </section>
        </div>

        <!-- contact card -->
        <section class="form">
            <div class="container">
                <div class="form-left">
                    <h1>Let's make things happen</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam maiores aliquam amet, nisi aperiam totam.</p>
                    <hr>
                    <blockquote>"The team at Avada Consultant is faboulus. They helped us unlock our potential
                        online and offline. We have experienced year on year growth due to theri progressive approach."</blockquote>
                    <span>George Anderson</span><br>
                    <span>Digitalbox CEO</span>
                </div>

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
        </section>
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
            ],
            awards: [
                {
                    "img": require('../assets/img/award-a-200x191.png'),
                    "alt": "img award",
                    "text": "Winner Seo Master MAGT Smart Start Award 2017"
                },
                {
                    "img": require('../assets/img/award-b-200x191.png'),
                    "alt": "img award",
                    "text": "Top Social Media Agencies Next Partner 2018"
                },
                {
                    "img": require('../assets/img/award-c-200x191.png'),
                    "alt": "img award",
                    "text": "10 Fastest Growing Abstract Solution Providers 2019"
                },
                {
                    "img": require('../assets/img/award-d-200x191.png'),
                    "alt": "img award",
                    "text": "National Excellence Agencie Award Winner 020"
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/partials/main";
</style>
