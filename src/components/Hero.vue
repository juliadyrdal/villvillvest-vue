<template>
    <section class="hero">
        <img src="../assets/hero-16-9.jpg" alt="Tacobitch" class="hero__image">
        <span class="hero__heading">{{ heading }}</span> 
    </section>
</template>

<script>

export default {
    name: 'Hero',
    props: ['heading'],
    components: {

    }
}
</script>

<style scoped>
    .hero {
        margin-top: -10rem;
    }
    .hero__image {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: center;
    }
    .hero__heading {
        position: absolute;
        top: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: var(--font-family-display);
        /* Clamp Fallback for < Safari 13.1 */
        font-size: min(max(3rem, 7vw), 9.4rem);
        font-size: clamp(2rem, 7vw, 7.4rem);
        font-weight: 900;
        text-transform: uppercase;
        color: #fff;
        text-align: center;
    }
</style>


