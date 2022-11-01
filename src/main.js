import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Vue3Mq } from "vue3-mq";
import { SanityBlocks } from 'sanity-blocks-vue-component';

const app = createApp(App)

app.use(router)

app.use(Vue3Mq, {
    preset: 'tailwind'
})

app.component('sanity-blocks', SanityBlocks);

app.mount('#app')
