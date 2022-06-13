<template>
    <nav id="navigation">
        <figure>
            <img class="navigation__blob" src="../assets/blobb.png" alt="Abstrakt illustrasjon"> 
        </figure>
        <div class="navigation__container">
            <NavCategory v-for="category in categoryList" @clickLink="parentEmit" :category="category" :key="category.title" />
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
                    "title": "Billetter",
                    "links": [
                        {
                            "link": "Billetter",
                            "link-title": "Billetter"
                        },
                        {
                            "link": "Frivillig",
                            "link-title": "Bli frivillig"
                        }
                    ]
                },
                {
                   "title": "Festival",
                    "links": [
                        {
                            "link": "Artists",
                            "link-title": "Artister 2022"
                        },
                        {
                            "link": "UngDelegat",
                            "link-title": "Ung Delegat"
                        }
                    ] 
                },
                {
                   "title": "Om Vill Vill Vest",
                    "links": [
                        {
                            "link": "OmVillVillVest",
                            "link-title": "Om Vill Vill Vest"
                        },
                        {
                            "link": "KontaktOss",
                            "link-title": "Kontakt Oss"
                        }
                    ] 
                }
            ]
        }
    },
    methods: {
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



