<template>
    <div class="hero__info">
        <a href="#" class="hero__box-1">
            <p class="hero__paragraph">Se lineup 2021 <span>&rarr;</span></p>
        </a>
        <router-link class="hero__box-2" :to="{ name: 'Billetter' }">
            <p class="hero__paragraph">Kjøp billett <span>&rarr;</span></p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HeroCTA'
}
</script>


<style scoped>
    .hero__info {
        display: flex;
        position: relative;
        left: 0;
        bottom: 6rem;
        background: #fff;
        width: 40rem;
        height: 6rem;
        z-index: 2;
    }
    .hero__box-1, .hero__box-2 {
        text-decoration: none;
        flex-basis: 50%;
        padding-top: 2rem;
        padding-left: 2rem;
        position: relative;
        display: block;
    }
    /* .hero__box-1:hover span, .hero__box-2:hover span {
        margin-left: 20px;
    } */
    .hero__box-1 {
        background: #fff;
        color: #333;
    }
    .hero__box-2 {
        background: #F2EDED;
        color: #EF6305;
    }
    .hero__paragraph {
        margin-top: 0px;
        font-weight: bolder;
        font-size: 1.6rem;
        transition: all .2 ease-in;
    }
    .hero__paragraph span {
        margin-left: 1rem;
        transition: all .2 ease-in;
    }
    .hero__paragraph:hover {
        margin-left: 2rem;
    }
</style>


