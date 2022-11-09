<template>
    <!-- Task: Add loader animation -->
    <div class="event-grid__container">
        <EventCardSpeaker class="event-grid__card" v-for="speaker in speakers" :speaker="speaker" :key="speaker.id" />
    </div>
</template>

<script>
import EventCardSpeaker from '@/components/EventCardSpeaker.vue'
export default {
    name: 'EventGridSpeakers',
    props: ['speakers'],
    components: {
        EventCardSpeaker
    }
}
</script>

<style scoped>
    .event-grid__container {
        --min: 40rem;
        --gap: 2rem;

        display: grid;
        grid-gap: var(--gap);
        /* min() with 100% prevents overflow
        in extra narrow spaces */
        grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    }
</style>


