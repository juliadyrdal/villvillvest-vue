<script setup>
import HeadingMain from '../components/HeadingMain.vue'
import Paragraph from '../components/Paragraph.vue'
</script>

<template>
    <main>
        <HeadingMain>
          Om Vill Vill Vest
        </HeadingMain>
          <Paragraph>Formål (fra vedtekter): Vill Vill Vest skal være en musikkfestival og samarbeidsplattform for arrangører og musikkbransje i Bergen og på Vestlandet. Festivalen skal styrke Bergensregionens musikkmiljø og tilstøtende kunstformer, og bli et naturlig møtepunkt for nasjonal og internasjonal musikkbransje og kreative næringer.</Paragraph>

          <div class="ordered-list">
          <Paragraph><h2>Målsetninger</h2>
          <ol>
              <li>Vill Vill Vest skal løfte frem nye artister, styrke samarbeidet mellom musikkaktører og bygge en sterkere lokal, regional og nasjonal musikkbransje.</li>
              <li>Vill Vill Vest skal inspirere til etablering av nye virksomheter og styrke deres nettverk i et globalt musikkmarked.</li>
              <li>Vill Vill Vest skal være en synlig og relevant showcasefestival og belyse næringspotensialet i muisikkfeltet og ævrige kulturnæringer.</li>
              <li>Artistprogrammet på Vill Vill Vest skal være relevant og således ha en kommersiell apell for både norsk og internasjonal musikkbransje.</li>
          </ol></Paragraph>
          </div>

          <Paragraph>Ved å bygge en merkevare og nettverksorganisasjon som er bygget rundt unike styrker ved Bergen og musikkmiljøet i byen, kan vi lage en møteplass mellom artister, bransje og publikum som vil bidra til økt eksport- og utvikling av lokale og Norske artister, og som kan være et attraktivt alternativ til større internasjonale bransjefestivaler.</Paragraph>
    </main>


</template>

<style scoped>
    main {

        /* Fallback for < Safari 13.1 */
        margin-left: min(max(2rem, 3vw), 5rem);
        margin-right: min(max(2rem, 3vw), 5rem);
        margin-left: clamp(2rem, 3vw, 5rem);
        margin-right: clamp(2rem, 3vw, 5rem);
        min-height: 30vh;
    }

    .ordered-list {
        margin-top: 6rem;
        margin-bottom: 6rem;
    }

    li {
        margin-top: 2rem;
    }
</style>



