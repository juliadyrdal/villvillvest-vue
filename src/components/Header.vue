<template>
    <div>
        <div id="header" :class="{'header--alt': navIsShowing}">
            <router-link @click="closeNav" to="/"><img class="logo" :src="logoColor" alt="Vill Vill Vest Logo"></router-link>
            <Hamburger @toggleHamburger="toggleNav" :navIsShowing="navIsShowing" />
        </div>

    <!-- Refactor: separate components for nav and nav items -->
        <Navigation @clickEvent="toggleNav" v-if="navIsShowing" />
        
    </div>
</template>

<script>
import Hamburger from '@/components/Hamburger.vue'
import Navigation from '@/components/Navigation.vue'
export default {
    name: 'Header',
    components: {
        Hamburger, Navigation
    },
    data() {
        return {
            navIsShowing: false,
            logoSignal: require('../assets/logo-2021-orange.png'),
            logoWhite: require('../assets/logo-2021-white.png'),
        }
    },
    computed: {
        logoColor() {
            if(this.$route.name === "Home" && !this.navIsShowing) {
                return this.logoWhite;
            } else {
                return this.logoSignal;
            }
        }
    },
    methods: {
        toggleNav() {
            this.navIsShowing = !this.navIsShowing;
            // Stops body element from scrolling while nav overlay is visible
            const bodyEl = document.body;
            if(this.navIsShowing) {
                bodyEl.classList.add("navOpen");
            } else {
                bodyEl.classList.remove("navOpen");
            }
        },
        // Close nav when clicking on logo/Home button, enable scroll on body element
        closeNav() {
            this.navIsShowing = false;
            this.logoSrc = this.logoWhite;
            const bodyEl = document.body;
            bodyEl.classList.remove("navOpen");
        }
    }
}
</script>


<style scoped>
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    position: relative;
    /* Clamp Fallback for < Safari 13.1 */
    padding-left: min(max(2rem, 3vw), 5rem);
    padding-right: min(max(2rem, 3vw), 5rem);
    padding-left: clamp(2rem, 3vw, 5rem);
    padding-right: clamp(2rem, 3vw, 5rem);
}
.header--alt {
    background: #fff;
}
#header .logo {
    /* Fallback for < Safari 13.1 */
    width: min(max(7rem, 8vw), 10rem);
    width: clamp(7rem, 8vw, 10rem);
}
</style>







