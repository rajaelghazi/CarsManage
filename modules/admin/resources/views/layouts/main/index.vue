<template>
	<MainLayout>
		<template #sidebar>
			<Sidebar :key="Date.now()"/>
		</template>

		<slot></slot>
	</MainLayout>
</template>

<script setup lang="ts">
import { MainLayout } from '@views/layouts';
import Sidebar from './_partials/sidebar.vue';


</script>