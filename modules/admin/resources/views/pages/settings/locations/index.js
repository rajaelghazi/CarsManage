import { defineAsyncComponent } from 'vue';

export default {
    'locations': {
        icon: 'fi-rr-map-marker',
        component: defineAsyncComponent(
            () => import('./index.vue')
        )
    },
}
