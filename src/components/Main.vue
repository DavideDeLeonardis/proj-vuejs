<template>
    <main>
        <div class="container">
            <!-- intro -->
            <section 
                v-for="(intro, index) in intros"
                :key="`B${index}`"
                class="container-intro intro"
            >
                <img 
                    :src="require(`../assets/img/${intro.img}`)" 
                    :alt="intro.alt"
                >

                <div class="feature">
                    <span>
                        <font-awesome-icon :icon="[intro.prefix, intro.icon]" />{{ intro.subheading }}
                    </span>
                    <h2>{{ intro.heading }}</h2>
                    <p>{{ intro.text }}</p>
                    <button>{{ intro.button }}</button>
                </div>
            </section>

            <!-- brands -->
            <section class="brands">
                <h2>Some brands we work with</h2>
                <span class="subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, sapiente.</span>

                <div class="container-brands">
                    <img 
                        v-for="(brand, index) in brands" 
                        :key="`C${index}`" 
                        :src="require(`../assets/img/${brand.img}`)"
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
                        <a href="#">{{ phoneNumber }}</a>
                    </button>
                </div>
            </section>

            <!-- case studies -->
            <section class="trust">
                <h2>Trusted by Leading Organization</h2>
                <div class="container-cases">
                    <div 
                        v-for="(testimonial, index) in testimonials"
                        :key="`D${index}`"
                        class="case"
                    >
                        <div class="img-color">
                            <img 
                                :src="require(`../assets/img/${testimonial.img}`)" 
                                :alt="testimonial.alt"
                            >
                        </div>
                        <p>{{ testimonial.text }}</p>
                        <div>{{ testimonial.heading }}</div>
                        <span>{{ testimonial.subheading }}</span>
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
                        <div 
                            v-for="(quality, index) in qualities"
                            :key="`E${index}`"
                            class="col-left"
                        >
                            <font-awesome-icon :icon="[quality.prefix, quality.icon]" />
                            <div class="content-middle">
                                <h5>{{ quality.heading }}</h5>
                                <p>{{ quality.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="awards">
                    <span>Awards</span>
                    <div class="container-awards">
                        <div 
                            v-for="(award, index) in awards" 
                            :key="`F${index}`" 
                            class="award"
                        >
                            <img 
                                :src="require(`../assets/img/${award.img}`)" 
                                :alt="award.alt"
                            >
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
                    <div 
                        v-for="(resource, index) in resources"
                        :key="`G${index}`"
                        class="case"
                    >
                        <div class="img-color">
                            <img 
                                :src="require(`../assets/img/${resource.img}`)" 
                                :alt="resource.alt"
                            >
                        </div>
                        <p>{{ resource.text }}</p>
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
                        <a href="#">{{ phoneNumber }}</a>
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
    props: {
        phoneNumber: {
            type: String
        }
    },
    data() {
        return {
            intros: [
                {
                    "img": "technology_thumbnail-1-400x300.jpg",
                    "alt": "img 1 intro main",
                    "prefix": "fab",
                    "icon": "bandcamp",
                    "subheading": "Business growth",
                    "heading": "Increase brand awarness",
                    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat, aliquam a architecto aspernatur dolores enim maiores ipsa natus, porro et ab voluptatem placeat illum nisi quo doloribus iusto eius!",
                    "button": "Get a Consultation"
                },
                {
                    "img": "construction_thumbnail-400x300.jpg",
                    "alt": "img 2 intro main",
                    "prefix": "fab",
                    "icon": "squarespace",
                    "subheading": "Investors in people",
                    "heading": "In-House sales training",
                    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat, aliquam a architecto aspernatur dolores enim maiores ipsa natus, porro et ab voluptatem placeat illum nisi quo doloribus iusto eius!",
                    "button": "Get a Consultation"
                },
                {
                    "img": "cryptocurrency-400x300.jpg",
                    "alt": "img 3 intro main",
                    "prefix": "fas",
                    "icon": "users",
                    "subheading": "Social media analysis",
                    "heading": "Harness your social proof",
                    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat, aliquam a architecto aspernatur dolores enim maiores ipsa natus, porro et ab voluptatem placeat illum nisi quo doloribus iusto eius!",
                    "button": "Get a Consultation"
                }
            ],
            testimonials: [
                {
                    "img": "case-studies-1-400x450.jpg",
                    "alt": "img 1 case study",
                    "text": "How Spaces attracted five million visitors by improving the content",
                    "heading": "200%",
                    "subheading": "Higher revenue from digital"
                },
                {
                    "img": "case-studies-4-400x450.jpg",
                    "alt": "img 2 case study",
                    "text": "Creativity helped Hemisferio increase their brand reach vertically",
                    "heading": "10x",
                    "subheading": "Sales increase with the same ad spend"
                },
                {
                    "img": "case-studies-6-400x450.jpg",
                    "alt": "img 3 case study",
                    "text": "How DigitalBox used AI- powered data insight to boost sales",
                    "heading": "3-year",
                    "subheading": "Partnership with Avada Consultant"
                }
            ],
            qualities: [
                {
                    "prefix": "fas",
                    "icon": "plus-square",
                    "heading": "Accountability",
                    "text": "Lorem ipsum dolor sit amet"
                },
                {
                    "prefix": "fas",
                    "icon": "plus-square",
                    "heading": "Transparency",
                    "text": "Lorem ipsum dolor sit amet"
                },
                {
                    "prefix": "fas",
                    "icon": "plus-square",
                    "heading": "Investment",
                    "text": "Lorem ipsum dolor sit amet"
                }
            ],
            brands: [
                {
                    "img": "abstract.png",
                    "alt": "logo Abstract"
                },
                {
                    "img": "cglobal.png",
                    "alt": "logo CGlobal"
                },
                {
                    "img": "next.png",
                    "alt": "logo Next"
                },
                {
                    "img": "hemisferio.png",
                    "alt": "logo Hemisferio"
                },
                {
                    "img": "spaces.png",
                    "alt": "logo Spaces"
                },
                {
                    "img": "digitalbox.png",
                    "alt": "logo Digitalbox"
                }
            ],
            awards: [
                {
                    "img": "award-a-200x191.png",
                    "alt": "img award",
                    "text": "Winner Seo Master MAGT Smart Start Award 2017"
                },
                {
                    "img": "award-b-200x191.png",
                    "alt": "img award",
                    "text": "Top Social Media Agencies Next Partner 2018"
                },
                {
                    "img": "award-c-200x191.png",
                    "alt": "img award",
                    "text": "10 Fastest Growing Abstract Solution Providers 2019"
                },
                {
                    "img": "award-d-200x191.png",
                    "alt": "img award",
                    "text": "National Excellence Agencie Award Winner 020"
                }
            ],
            resources: [
                {
                    "img": "blog-posts-6-200x133.jpg",
                    "alt": "img 1 resource",
                    "text": "Marketing tips nad tricks for your website"
                },
                {
                    "img": "blog-posts-5-200x133.jpg",
                    "alt": "img 2 resource",
                    "text": "How to write stunning blog post titles"
                },
                {
                    "img": "blog-posts-4-200x133.jpg",
                    "alt": "img 3 resource",
                    "text": "Techniques to reduce facebook ads spend"
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/partials/main";
</style>
