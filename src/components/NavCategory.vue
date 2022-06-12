<template>
    <div>
        <div class="navCategory">
            <h2 class="navCategory__heading">{{ category.title }}</h2>
            <ul class="navCategory__list">
                <li v-for="entry in category.links" :key="entry.link">
                    <!-- Refactor: Emit ToggleNav to Header -->
                    <router-link @click="toggleNav" :to="{ name: entry.link }">
                    <span>{{ entry.link }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavCategory',
    props: ['category'],   
}
</script>

<style scoped>
.navCategory__heading {
    padding-bottom: 1.6rem;
    font-size: 3rem;
    font-family: var(--font-family-medium);
    color: var(--signal-color);
}
.navCategory__list {
    list-style: none;
    padding: 0;
}
.navCategory__list li {
    padding-bottom: 1.8rem;
}
.navCategory__list a {
    font-size: 2.6rem;
}
.navCategory__list a:hover {
    text-decoration: underline;
    text-decoration-color: var(--signal-color);
    text-decoration-style: double;
}
</style>


