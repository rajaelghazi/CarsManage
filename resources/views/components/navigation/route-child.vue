<template>
	<Link :href="link" :class="{ 'active': isActive }" class="route-child cursor-pointer group ml-10 py-2.5 flex items-center relative">
		<div class="absolute route-indecator -left-7 w-0.5 h-full z-30 dark:bg-surface-600"></div>
		<svg width="18" height="44" viewBox="0 0 18 44" fill="none" class="absolute -left-7 -top-1">
			<!-- arc -->
			<path class="stroke-surface-300 dark:stroke-surface-600" d="M1 14V17.5C1 20.2614 3.23858 22.5 6 22.5H15" stroke-width="2"></path>
			
			<!-- arrow -->
			<path :class="isActive ? 'stroke-surface-900 fill-surface-900 dark:stroke-surface-100 dark:fill-surface-100' : 'stroke-surface-300 fill-surface-300 dark:stroke-surface-600 dark:fill-surface-600'" d="M11.136 26.2862L11.1313 26.2863C11.1243 26.2863 11.1174 26.2849 11.1109 26.2823C11.1045 26.2796 11.0986 26.2756 11.0937 26.2707L11.0937 26.2707L11.0917 26.2687C11.0805 26.2575 11.0742 26.2422 11.0742 26.2263C11.0742 26.2105 11.0805 26.1953 11.0917 26.1841C11.0917 26.184 11.0917 26.184 11.0917 26.184L14.4286 22.8471L14.7822 22.4936L14.4286 22.14L11.1009 18.8123C11.0922 18.8014 11.0875 18.7878 11.0877 18.7737C11.088 18.7582 11.0943 18.7434 11.1052 18.7324C11.1162 18.7214 11.131 18.7151 11.1466 18.7149C11.1606 18.7146 11.1743 18.7193 11.1852 18.7281L14.9083 22.4512C14.9195 22.4625 14.9258 22.4777 14.9258 22.4936C14.9258 22.5095 14.9195 22.5247 14.9083 22.5359L11.1758 26.2685L11.1758 26.2685L11.1736 26.2707C11.1687 26.2756 11.1628 26.2796 11.1564 26.2823C11.1499 26.2849 11.143 26.2863 11.136 26.2862Z"></path>
			
			<path :class="isActive ? 'stroke-surface-900 dark:stroke-surface-100' : 'stroke-surface-300 dark:stroke-surface-600'" d="M1 14V17.5C1 20.2614 3.23858 22.5 6 22.5H15" stroke-width="2"></path>
			<path :class="isActive ? 'stroke-surface-900 dark:stroke-surface-100' : 'stroke-surface-300 dark:stroke-surface-600'" d="M1 0 V14" stroke-width="2"></path>
		</svg>
	
		<span :class="['leading-6 font-medium text-sm ml-1.5 group-hover:text-surface-900 dark:group-hover:text-surface-100', isActive ? 'text-surface-900 dark:text-surface-100' : 'text-surface-400 dark:text-surface-600']">
			<slot></slot>
		</span>
	</Link>
</template>

<script setup>
import { computed } from 'vue';
import { usePage } from '@inertiajs/vue3';

const props = defineProps({
	link: String
})

const $page = usePage()
const isActive = computed(() => props.link.endsWith($page.url))
</script>

<style scoped>
.route-child:hover .route-indecator {
    @apply bg-surface-900 dark:bg-surface-100;
}

.route-child.active .route-indecator {
    @apply bg-surface-900 dark:bg-surface-100;
}
</style>