<template>
    <div>
        <PageSection>
            <!-- Component with slot, incase more than one font color -->
            <HeadingMain>
                <slot name="heading"></slot>
            </HeadingMain>
            <PageBody :pageId="pageId" />
        </PageSection>
        <section>
            <slot name="staticContent"></slot>
        </section>
    </div>
</template>

<script>
import PageSection from '@/components/PageSection.vue'
import HeadingMain from '@/components/HeadingMain.vue'
import PageBody from '@/components/PageBody.vue'
export default {
    components: {
        PageSection, HeadingMain, PageBody
    },
    props: ['pageId'],
}
</script>