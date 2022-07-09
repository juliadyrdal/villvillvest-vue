<template>
   <div class="SubMenu__container">
       <button @click="$emit('clickBack')">&#60; Back</button>
       <div v-if="list">{{ list.heading }}</div>
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
        position: absolute;
        top: 22%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    button {
        box-shadow: none;
        background-color: transparent;
        font-size: 3rem;
        border: none;
        cursor: pointer;
    }
</style>


