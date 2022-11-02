<template>
    <section>
        <HeadingMain>
            Artister 2022
        </HeadingMain>
        <Paragraph>
            Hvert år kommer noen av de beste og mest talentfulle artistene til Vill Vill Vest. Klikk deg inn og finn en ny favoritt! Vi oppdaterer fortløpende med nye artister frem mot festivalen.
        </Paragraph>
        <EventGrid :artists="artists" />
    </section>
</template>

<script>
import HeadingMain from '@/components/HeadingMain.vue'
import Paragraph from '@/components/Paragraph.vue'
import EventGrid from '@/components/EventGrid.vue'

export default {
    // TASK: Add isLoading boolean, add animation to EventGrid when true
    name: 'Artists',
    components: {
    HeadingMain, Paragraph, EventGrid
  },
     data() {
        return {
            artists: null,
            info: null,
        }
    },
    mounted() {
        axios
        .get('https://app.appmiral.com/api/v6/events/villvillvest/editions/villvillvest2022/artists?child_edition=villvillvest2022festival&max_per_page=74', {
            headers: {
            'x-protect': process.env.VUE_APP_APPMIRAL_API_KEY_22
        }
        })
      .then(response => (this.artists = response.data.data))

      //console.log(this.artists.data)
    }
}
</script>


<style scoped>
section {
    margin-top: 8rem;
    /* Clamp Fallback for < Safari 13.1 */
    margin-left: min(max(2rem, 3vw), 5rem);
    margin-right: min(max(2rem, 3vw), 5rem);
    margin-left: clamp(2rem, 3vw, 5rem);
    margin-right: clamp(2rem, 3vw, 5rem);
}
</style>





