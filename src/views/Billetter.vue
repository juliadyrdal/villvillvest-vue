<template>
    <!-- PageDynamic component: adds h1 heading and page body from api, slot for additional content -->
    <!-- Pass the pageId to the PageDynamic component, this will add page body from api to component -->
    <PageDynamic :pageId="pageId">
        <!-- Add content for the HeadingMain component -->
        <template v-slot:heading>
            Billetter
        </template>
        <template v-slot:staticContent>
            <!-- Static content: ticket cards -->
        </template>
    </PageDynamic>
    <hr />
    <section>
        <div class="ticket-grid">
            <TicketCard title="Festivalpass">
                <li>Festivalpass: <span>890,-</span></li>
                <li>Studentpass: <span>749,-</span></li>
                <template #usp>
                    <span class="color-accent u-bold">Gir tilgang til alle festivalens konserter</span>
                </template>
            </TicketCard>

            <TicketCard title="Dagspass">
                <li>Dagspass torsdag: <span>349,-</span></li>
                <li>Dagspass fredag eller lørdag: <span>399,-</span></li>
                <template #usp>
                    <span>Gir tilgang til alle festivalens konserter for den valgte dagen</span>
                </template>

            </TicketCard>

            <TicketCard title="Delegatpass">
                <li>Pris fra 15/06: <span>1 290,-</span></li>
                <li>Pris fra 15/08: <span>1 490,-</span></li>
                <li>Pris fra 15/10: <span>1 690,-</span></li>
                <li>Studentpris: <span>990,-</span></li>
                <template #usp>
                    <span class="color-accent u-bold">Nå</span>
                    <span class="color-accent u-bold">Early Bird pris: 990,-</span>
                </template>
            </TicketCard>
        </div>
    </section>
</template>

<script>
import PageDynamic from '@/components/PageDynamic.vue'
import TicketCard from '@/components/TicketCard.vue'
import Paragraph from '@/components/Paragraph.vue'
import { defineComponent, computed, reactive } from 'vue'

export default {
    components: {
        PageDynamic, TicketCard, Paragraph
    },
    data() {
        return {
            // Id of the page in the Appmiral database. Use ID as title may differ.
            pageId: 428410,
        }
    }
}
</script>

<style scoped>
    section {
        /* Fallback for < Safari 13.1 */
        margin-left: min(max(2rem, 3vw), 5rem);
        margin-right: min(max(2rem, 3vw), 5rem);
        margin-left: clamp(2rem, 3vw, 5rem);
        margin-right: clamp(2rem, 3vw, 5rem);
        min-height: 30vh;
        display: flex;
        justify-content: center;
    }
    hr {
        border: none;
        border-bottom: .5px solid var(--signal-color-secondary);
        width: 75%;
    }
    .ticket-grid {
        margin-top: 8rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 85%;
        align-content: center;
    }

    ul span {
        padding-left: 2rem;
        font-weight: bold;
    }

    @media (max-width: 1400px) {
        .ticket-grid {
            width: 100%;
        }
    }

    @media (max-width: 900px) {
        .ticket-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
        }
    }
</style>

