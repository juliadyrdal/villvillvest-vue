<template>
    <!-- PageDynamic component: adds h1 heading and page body from api, slot for additional content -->
    <!-- Pass the pageId to the PageDynamic component, this will add page body from api to component -->
    <PageDynamic :pageId="pageId">
        <!-- Add content for the HeadingMain component -->
        <template v-slot:heading>
            Delegate tickets
        </template>
        <template v-slot:staticContent>
            <!-- Static content: ticket cards -->
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
            pageId: 428420,
        }
    }
}
</script>

