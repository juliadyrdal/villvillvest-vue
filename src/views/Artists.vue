<template>
<div>
    <div class="page-width">
        <h1 class="heading u-padding-top-4"><span class="color-accent">Artister</span> 2021</h1>
        <p class="paragraph u-padding-bottom-2">Hvert år kommer noen av de beste og mest talentfulle artistene til Vill Vill Vest. Klikk deg inn og finn en ny favoritt! Vi oppdaterer fortløpende med nye artister frem mot festivalen.</p>
        <EventGrid :artists="artists" />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import EventGrid from '@/components/EventGrid.vue'

export default {
    // TASK: Add isLoading boolean, add animation to EventGrid when true
    name: 'Artists',
    components: {
    Header, EventGrid
  },
     data() {
        return {
            artists: null,
            info: null
        }
    },
    mounted() {
        axios
        .get('https://app.appmiral.com/api/v6/events/villvillvest/editions/villvillvest2021/artists?child_edition=villvillvest2021festival&max_per_page=74', {
            headers: {
            'x-protect': process.env.VUE_APP_APPMIRAL_API_KEY
        }
        })
      .then(response => (this.artists = response.data.data))

      //console.log(this.artists.data)
    }
}
</script>


<style lang="css">
    
</style>





