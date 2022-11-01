<template>
    <!-- PageDynamic component: adds h1 heading and page body from api, slot for additional content -->
    <!-- Pass the pageId to the PageDynamic component, this will add page body from api to component -->
    <PageDynamic :pageId="pageId">
        <!-- Add content for the HeadingMain component -->
        <template v-slot:heading>
            Våre Samarbeidspartnere
        </template>
        <template v-slot:staticContent>
            <!-- Static content goes here -->
            <section class="sponsorsMain sponsors u-margin-top-4">
                <h2>Hovedpartnere</h2>
                <ul class="sponsorsGrid">
                    <li><img src="@/assets/sponsors/kulturraadet-1.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/FV-1.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Bergen-Kommune-1.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Music-Norway-1.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/SPV-1.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/BT-1.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/MK-BRAK-1.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Gramo-1.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/OK-1.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Grieg-Foundation-1.webp" alt=""></li>
                </ul>
            </section>

            <section class="sponsors">
                <h2>Faglige Partnere</h2>
                <ul class="sponsorsGrid">
                    <li><img src="@/assets/sponsors/nk-2.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/MF-2.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/nopa-2.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Gramart-2.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/neema-2.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/biff-2.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Promus-2.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/SPOT-2.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/MCN-2.webp" alt=""></li>
                </ul>
            </section>

            <section class="sponsors">
                <h2>Kuratorer</h2>
                <ul class="sponsorsGrid">
                    <li><img src="@/assets/sponsors/Bergen-Jazzforum-3.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Uflakks-3.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/EKKO-3.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/PerfectSoundsForever-3.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Urort-3.webp" alt=""></li>
                </ul>
            </section>

            <section class="sponsors">
                <h2>Sponsorer og bidragsytere</h2>
                <ul class="sponsorsGrid">
                    <li><img src="@/assets/sponsors/ticketco-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/obos-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Tono-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/frifond-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/fritt-ord-logo-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/bkolon-4.svg" alt=""></li>
                    <li><img src="@/assets/sponsors/visit-bergen-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/crescat-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Nordnes-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/leroy-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/lervig-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/BMF-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/Urort-3.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/CREO-4.webp" alt=""></li>
                    <li><img src="@/assets/sponsors/vy-4.webp" alt=""></li>
                </ul>
            </section>
        </template>
    </PageDynamic>
</template>

<script>
import PageDynamic from '@/components/PageDynamic.vue'
export default {
    components: {
        PageDynamic
    },
    data() {
        return {
            // Id of the page in the Appmiral database. Use ID as title may differ.
            pageId: 428409,
        }
    }
}
</script>

<style scoped>
h2 {
    font-family: var(--font-family-medium);
    font-size: 2.8rem;
    color: var(--signal-color);
}

.sponsorsMain {
    margin-top: 8rem;
}

.sponsors {
    margin-bottom: 4rem;
    /* Clamp Fallback for < Safari 13.1 */
    padding-left: min(max(2rem, 3vw), 5rem);
    padding-right: min(max(2rem, 3vw), 5rem);
    padding-left: clamp(2rem, 3vw, 5rem);
    padding-right: clamp(2rem, 3vw, 5rem);
}
.sponsorsGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    margin-top: 4rem;
    min-width: 0;
    list-style: none;
}
.sponsorsGrid li {
    min-height: 0;
    margin-bottom: 8rem;
}

.sponsorsGrid li:not(:last-child) {
    margin-right: 8vw;
}
.sponsorsGrid img {
    min-height: 0;
    max-width: 100%;
}

@media (max-width: 600px) {
    h2 {
        padding-bottom: 2rem;
    }
    .sponsorsGrid {
        grid-template-columns: 1fr 1fr;
    }
}
</style>
