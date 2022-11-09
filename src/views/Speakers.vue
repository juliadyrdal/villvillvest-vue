<template>
    <section>
        <HeadingMain>
            Konferanse 2022
        </HeadingMain>
        <PageBody :pageId="428475" />
        <EventGridSpeakers :speakers="speakers" />
    </section>
</template>

<script>
import HeadingMain from '@/components/HeadingMain.vue'
import Paragraph from '@/components/Paragraph.vue'
import EventGridSpeakers from '@/components/EventGridSpeakers.vue'
import PageBody from '@/components/PageBody.vue'

export default {
    // TASK: Add isLoading boolean, add animation to EventGrid when true
    name: 'Speakers',
    components: {
    HeadingMain, Paragraph, EventGridSpeakers, PageBody
  },
     data() {
        return {
            speakers: null,
            info: null,
        }
    },
    mounted() {
        axios
        .get('https://app.appmiral.com/api/v6/events/villvillvest/editions/villvillvest2022/artists?child_edition=villvillvest2022conference&max_per_page=74', {
            headers: {
            'x-protect': process.env.VUE_APP_APPMIRAL_API_KEY_22
        }
        })
      .then(response => (this.speakers = response.data.data))

      //console.log(this.speakers.data)
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





