<template>
    <div>
        <div id="header" :class="{'header--alt': navIsShowing}">
            <router-link @click="closeNav" to="/"><img class="logo" src="@/assets/logo-2021-orange.png" alt="Vill Vill Vest Logo"></router-link>
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
            navIsShowing: false
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
            const bodyEl = document.body;
            bodyEl.classList.remove("navOpen");
        }
    }
}
</script>


<style scoped>
#header {
    display: flex;
    height: 10rem;
    z-index: 100;
    position: relative;
}
.header--alt {
    background: #fff;
}
#header .logo {
    width: 10rem;
}

.nav-container {
    display: grid;
    grid-template-columns: 35% 1fr 1fr 1fr;
    grid-column-gap: 6rem;
    margin-top: 17vh;
    padding-left: 7rem;
    padding-right: 7rem;
}
.nav-blob {
    margin-top: 10rem;
    width: 35rem;
    transform: rotate(-35deg)
}
.nav-heading {
    color: #EF6305;
    font-size: 2.4rem;
}
.nav-list {
    list-style: none;
    padding-left: 0;
}
.nav-item {
    padding-bottom: 2rem;
    font-size: 2rem;
}
.nav-social {
    margin-top: 2rem;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    justify-self: start;
}
.social-link {
    font-size: 3rem;
    color: #EF6305;
    text-decoration: none;
}
.social-link:not(:last-child) {
    margin-right: 4rem;
}
</style>







