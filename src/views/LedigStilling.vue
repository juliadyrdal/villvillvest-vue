<script setup>
import HeadingMain from '../components/HeadingMain.vue'
import Paragraph from '../components/Paragraph.vue'
</script>

<template>
    <main>
        <HeadingMain>
          Prosjektleder Vill Vill Vest
        </HeadingMain>
          <Paragraph>Vi søker en allsidig prosjektleder i fast stilling som vil være med å videreutvikle en av Norges viktigste musikk- og bransjefestivaler. Som prosjektleder i Vill Vill Vest vil du være en viktig del av et lite team, og ha en rekke ulike ansvarsområder. Vi er en liten stab og personlig egnethet vil settes høyt.</Paragraph>

          <Paragraph>Prosjektleder vil få ha administrativt ansvar sammen med festivalsjef. Stillingsprosent mellom 50-70% og kan tilpasses den rette kandidat.</Paragraph>

          <div class="ordered-list">
          <Paragraph><h2>Arbeidsoppgaver:</h2>
          <ul>
              <li>Arrangementsplanlegging- og avvikling</li>
              <li>Utarbeidelse og oppfølging av samarbeidsavtaler</li>
              <li>Søknadsskriving og rapportering</li>
              <li>Programplanlegging</li>
              <li>Tekstproduksjon til pressemeldinger, nyhetsbrev og annet informasjonsmateriell</li>
              <li>Innholdsproduksjon til digitale kanaler som nettside og sosiale medier</li>
              <li>Stedfortreder for festivalsjef ved behov</li>
              <li>Stillingens arbeidsoppgaver kan endres ved behov, og vil variere i løpet av året. Noe kvelds og</li>
              <li>helgearbeid må påregnes i perioden når festivalen avvikles.</li>
          </ul></Paragraph>
          </div>

          <div class="ordered-list">
          <Paragraph><h2>Ønskede kvalifikasjoner:</h2>
          <ul>
              <li>Kjennskap til- og erfaring fra musikkbransjen, fortrinnsvis innen konserter og/eller festivaler.</li>
              <li>Erfaring med å lede og gjennomføre prosjekter</li>
              <li>Evne til å jobbe både overordnet strategisk, samt med konkret detaljplanlegging</li>
              <li>God skriftlig og muntlig formuleringsevne på norsk og engelsk</li>
              <li>Erfaring med drift av og innholdsproduksjon til nettsider og sosiale medier</li>
              <li>Relevant utdannelse er en fordel, men ikke et kriterie</li>
              
          </ul></Paragraph>
          </div>

          <div class="ordered-list">
          <Paragraph><h2>Ønskede egenskaper:</h2>
          <ul>
              <li>Strukturert, ryddig og nøyaktig</li>
              <li>Positiv, fleksibel og kan håndtere flere parallelle oppgaver</li>
              <li>Målrettet, initiativrik og selvstendig</li>
              <li>Gode samarbeidsevner</li>
              <li>Har engasjement og interesse for musikk</li>
              <li>Personlig egnethet vil bli vektlagt.</li>
          </ul></Paragraph>
          </div>

          <div class="ordered-list">
          <Paragraph><h2>Vi tilbyr:</h2>
          <ul>
              <li>Stilling mellom 50-70% avhengig av ønske og kvalifikasjoner</li>
              <li>Mulighet til å være med å forme egen stilling avhengig av kompetanse</li>
              <li>En sentral rolle i en liten og dynamisk organisasjon</li>
              <li>En unik sjanse til å være med å forme Norges viktigste møteplass for musikkbransjen</li>
              <li>Interessante samarbeid med nøkkelorganisasjoner i musikbransjen</li>
              <li>Flotte kontorer i Nygårdsgaten i Bergen sentrum (B:kolon)</li>
              <li>En fleksibel arbeidsdag med muligheter for noe hjemmekontor</li>
              <li>Lønn etter avtale</li>
            </ul></Paragraph>
          </div>

        <h2>Om arbeidsgiveren</h2>
          <Paragraph>Vill Vill Vest er en nasjonal musikk- og bransjefestival som arrangeres i september hvert år. Festivalen består av en konferanse og en musikkfestival og har på sine seks leveår etablert seg som Vestlandets viktigste musikkfestival og arena for nyetablerte artister. Vill Vill Vest er en viktig møteplass der lokale musikkselskap får bygget nettverk med bransjeaktører på hjemmebane, og en arena hvor aktuelle nasjonale artister i oppstartsfasen får mulighet til å opptre for nasjonal- og internasjonal musikkbransje. På denne måten legger Vill Vill Vest til rette for norsk musikk som internasjonal eksportvare, og for en uforglemmelig publikumsopplevelse for både musikkbransje og øvrige festivalgjengere.
.</Paragraph>
        <div class="contact">
            <ul>
                <li>For mer opplysninger om stillingen, kan du ta kontakt med</li>
                <li>Festivalsjef: Simen Korneliussen</li>
                <li>E-post: <a href="mailto:simen@villvillvest.no">simen@villvillvest.no"</a></li>
                <li>Telefon: +47 985 61 643</li>
            </ul>

            <ul>
                <li>ELLER</li>
                <li>Styreleder: Hanne Thunestvedt</li>
                <li>E-post: <a href="mailto:hanne.thunestvedt@gmail.com">hanne.thunestvedt@gmail.com"</a></li>
                <li>Telefon: +47 414 26 638</li>
            </ul>

            <ul>
                <li>Ønsket oppstart: februar/mars 2023</li>
                <li>Søknadsfrist: 24. november</li>
            </ul>
        </div>
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

    .contact {
        margin-top:  6rem;
    }
    .contact ul {
        margin-top: 6rem;
        list-style: none;
        padding-left: 0;
    }
</style>



