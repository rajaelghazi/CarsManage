import { defineAsyncComponent } from 'vue';

export default {
    'notifications': {
        icon: 'fi-rr-bell',
        component: defineAsyncComponent(
            () => import('./index.vue')
        )
    },
}
