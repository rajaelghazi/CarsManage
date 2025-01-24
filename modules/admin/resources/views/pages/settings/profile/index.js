import { defineAsyncComponent } from 'vue';

export default {
	'profile': {
		icon: 'fi-rr-user-skill-gear',
		component: defineAsyncComponent(
			() => import('./index.vue')
		)
	}
}