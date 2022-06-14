<template>
    <section class="hero">
        <img src="../assets/hero.jpg" alt="Tacobitch" class="hero__image">
        <h1 class="hero__heading">{{ heading }}</h1> 
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
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: var(--font-family-display);
        font-size: clamp(3rem, 7vw, 9.4rem);
        font-weight: 900;
        text-transform: uppercase;
        color: #EF6305;
        text-align: center;
    }
</style>


