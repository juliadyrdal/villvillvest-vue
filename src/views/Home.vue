<template>
    <Hero heading="9. – 11. September" />
    <Intro />
    <ArtistSection />
    <!-- <PartnersMain /> -->
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Intro from '@/components/Intro.vue'
import ArtistSection from '@/components/ArtistSection.vue'
import PartnersMain from '@/components/PartnersMain.vue'


export default {
  name: 'Home',
  props: ['url'],
  components: {
    Hero, Intro, ArtistSection, PartnersMain
  }
}
</script>

