<template>
    <main>
        <div class="container">
            <section class="container-intro">
                <img src="../assets/img/technology_thumbnail-1-400x300.jpg" alt="img intro main">

                <div class="feature">
                    <span>
                        <font-awesome-icon :icon="['fab', 'bandcamp']" />Business Growth
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
                        <font-awesome-icon :icon="['fab', 'squarespace']" />Business Growth
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
                        <font-awesome-icon :icon="['fas', 'users']" />Business Growth
                    </span>
                    <h2>Harness your social proof</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quaerat, aliquam a 
                        architecto aspernatur dolores enim maiores ipsa natus, porro et ab voluptatem placeat illum nisi quo doloribus iusto eius!</p>
                    <button>Get a Consultation</button>
                </div>
            </section>

            <!-- collaboration brands -->
            <section class="brands">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto qui eius quaerat et accusamus ea, nemo consequatur quisquam! Delectus amet adipisci possimus voluptatem esse facere doloribus perferendis, consectetur ad sint?
            </section>

            <!-- case studies -->
            <section class="trust"></section>
        </div>

        <!-- characteristics -->
        <div class="bg-gray">
            <section class="container">
                <div class="top"></div>
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
    name: 'Main'
}
</script>

<style scoped lang="scss">
@import "../assets/scss/partials/_main.scss";
</style>
