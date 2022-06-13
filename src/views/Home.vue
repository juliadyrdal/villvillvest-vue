<template>
    <Hero heading="9. – 11. September" />
    <Intro />
    <ArtistSection />
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Intro from '@/components/Intro.vue'
import ArtistSection from '@/components/ArtistSection.vue'


export default {
  name: 'Home',
  props: ['url'],
  components: {
    Hero, Intro, ArtistSection
  }
}
</script>

