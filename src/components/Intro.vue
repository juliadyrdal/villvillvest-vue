<template>
    <section>
        <!-- <HeadingMain :title="title"/> -->
        <HeadingMain>
            Vill Vill Vest 2022
        </HeadingMain>
        <Paragraph>
            Vi inviterer deg til å ta del i den syvende utgaven av Vill Vill Vest. 1.- 3. september skal 60 av de beste og mest interessante nye norske artistene spille på musikalske strenger og hjertestrenger på Bergens kjente og kjære scener. Sikre deg din billett nå.
        </Paragraph>
    </section>
</template>

<script>
import HeadingMain from '@/components/HeadingMain.vue'
import HeadingSection from '@/components/HeadingSection.vue'
import Paragraph from '@/components/Paragraph.vue'
export default {
    components: {
        HeadingMain, HeadingSection, Paragraph
    },
    data() {
        return {
            title: "Vill Vill Vest 2021"
        }
    }
}
</script>

<style scoped>
    section {
        margin-top: 8rem;
        /* Clamp fallback for < Safari 13.1 */
        margin-left: min(max(2rem, 3vw), 5rem);
        margin-right: min(max(2rem, 3vw), 5rem);
        margin-left: clamp(2rem, 3vw, 5rem);
        margin-right: clamp(2rem, 3vw, 5rem);
    }
</style>


