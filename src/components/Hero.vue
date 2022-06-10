<template>
    <section class="hero">
        <img src="../assets/hero.jpg" alt="Tacobitch" class="hero__image">
        <h1 class="hero__heading">{{ heading }}</h1> 
        <HeroCTA />
    </section>
</template>

<script>
import HeroCTA from '@/components/HeroCTA.vue'

export default {
    name: 'Hero',
    props: ['heading'],
    components: {
        HeroCTA
    }
}
</script>

<style lang="css">
    .hero {
        margin-top: -10rem;
    }
    .hero__image {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    .hero__heading {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        font-family: var(--font-family-display);
        font-size: 9.4rem;
        font-weight: 900;
        text-transform: uppercase;
        color: #EF6305;
        text-align: center;
    }
</style>


