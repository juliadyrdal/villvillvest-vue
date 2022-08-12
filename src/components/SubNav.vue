<template>
   <div class="SubMenu__container">
       <button @click="$emit('clickBack')">&#60; Back</button>
       <h1 v-if="list">{{ list.heading }}</h1>
       <ul v-if="list">
           <li v-for="item in list.links" :key="item.link"><a>{{ item.title }}</a></li>
       </ul>
   </div>
</template>

<script>
export default {
    props: ['list'], 
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    .SubMenu__container {
        width: 30rem;
        height: 50vh;
        padding-left: 5rem;
        /* position: absolute;
        top: 22%;
        left: 55%;
        transform: translate(-50%, -50%); */
    }
    button {
        box-shadow: none;
        background-color: transparent;
        color: #666;
        font-size: 2rem;
        border: none;
        cursor: pointer;
    }
    h1 {
        margin-top: 6rem;
        font-size: 3.2rem;
        font-family: var(--font-family-medium);
        color: var(--signal-color);
    }
    ul {
        margin-top: 4rem;
        padding-left: 0;
        list-style: none;
    }
    li:not(:last-child) {
        margin-bottom: 4rem;
    }
    a {
        font-size: 2.2rem;
    }
</style>


