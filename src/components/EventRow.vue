<template>
    <article class="eventRow__container">
        <EventCard v-for="artist in artists" :artist="artist" :key="artist.id" />
    </article>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
    name: 'EventRow',
    props: ['artists'],
    components: {
        EventCard
    },
    data() {
        return {
           
        }
    }
}
</script>

<style scoped>
    .eventRow__container {
        display: flex;
        /* Create fallback for gap for older browsers - https://caniuse.com/flexbox-gap */
        gap: 2rem;
    }
    @media (max-width: 50rem){
        .eventRow__container {
            flex-direction: column;
        }
    }
</style>


