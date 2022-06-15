<template>
    <nav id="navigation">
        <figure>
            <img class="navigation__blob" src="../assets/blobb.png" alt="Abstrakt illustrasjon"> 
        </figure>
        <div class="navigation__container">
            <NavCategory v-for="category in categoryList" @clickLink="parentEmit" :category="category" :key="category.heading" />
        </div> 
         
    </nav>
</template>

<script>
import NavCategory from '@/components/NavCategory.vue'
export default {
    name: 'Navigation',
    components: {
        NavCategory
    },
    data() {
        return {
            categoryList: [
                {
                    "heading": "Billetter",
                    "links": [
                        {
                            "link": "Billetter",
                            "title": "Billetter"
                        },
                        {
                            "link": "Frivillig",
                            "title": "Bli frivillig"
                        }
                    ]
                },
                {
                   "heading": "Festival",
                    "links": [
                        {
                            "link": "Artists",
                            "title": "Artister 2022"
                        },
                        {
                            "link": "UngDelegat",
                            "title": "Ung Delegat"
                        }
                    ] 
                },
                {
                   "heading": "Om Vill Vill Vest",
                    "links": [
                        {
                            "link": "OmVillVillVest",
                            "title": "Om Vill Vill Vest"
                        },
                        {
                            "link": "KontaktOss",
                            "title": "Kontakt Oss"
                        }
                    ] 
                }
            ]
        }
    },
    methods: {
        // Event emitted from child component -> 
        // emit further to parent component
        parentEmit() {
            this.$emit('clickEvent')
        }
    }
    
}
</script>

<style scoped>
#navigation {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 8rem;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 100;
}
.navigation__blob {
    margin-top: 13vh;
    margin-left: 5vw;
    width: 35rem;
    transform: rotate(-35deg)
}

.navigation__container {
    display: flex;
    gap: 10rem;
    margin-right: 10vw;
    margin-top: 14vh;
}
</style>



