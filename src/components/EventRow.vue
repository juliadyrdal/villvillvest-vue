<template>
    <article class="eventRow__container">
        <EventCard class="eventRow__card" v-for="artist in artists" :artist="artist" :key="artist.id" />
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
        justify-content: space-between;
        /* Create fallback for gap for older browsers - https://caniuse.com/flexbox-gap */
        /* gap: 2rem; */
    }
    .eventRow__container .eventRow__card:not(:last-child) {
        margin-right: 2rem;
    }
    @media (max-width: 600px){
        .eventRow__container {
            flex-direction: column;
        }
        .eventRow__container .eventRow__card:not(:last-child) {
        margin-bottom: 2rem;
    }
    }
</style>


