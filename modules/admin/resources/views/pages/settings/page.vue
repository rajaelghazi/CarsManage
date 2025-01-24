<template>
	<div class="md:flex items-start gap-5 mx-auto md:my-10 max-w-6xl">
	  <aside
		class="space-y-6 bg-white dark:bg-surface-900 md:max-w-xs flex-none w-full sticky top-0 md:p-5 md:border rounded-xl border-surface-200 dark:border-surface-700 md:block"
		:class="[open ? 'block' : 'hidden']">
		<header class="flex items-start gap-4 w-full">
		  <Avatar label="MA" class="size-9 bg-surface-900 text-surface-50 text-sm" />
		  <span class="inline-flex flex-col items-start">
			<span class="font-bold text-base">Nom d'utilisateur</span>
			<span class="text-xs">lorem@gmail.com</span>
		  </span>
		</header>
  
		<Divider />
  
		<ul class="space-y-1">
		  <li v-for="(item, label) in sidebarItems" :key="label" :class="[
			'border hover:border-surface-300 hover:dark:border-zinc-700 hover:bg-surface-50/5 z-30 relative flex text-base items-center gap-3 px-4 py-2.5 rounded-border cursor-pointer hover:border-px',
			active === label
			  ? 'border-surface-300 bg-surface-50 text-surface-800 hover:text-surface-600'
			  : 'border-transparent text-surface-600',
		  ]" @click="setHash(label)">
			<i class="fi" :class="item.icon"></i>
			<span class="capitalize font-medium">{{ translateLabel(label) }}</span>
		  </li>
		</ul>
	  </aside>
  
	  <div class="max-w-4xl flex-1 w-full md:block" :class="[open ? 'hidden' : 'block']">
		<component 
		  v-if="getCurrentComponent"
		  :is="getCurrentComponent" 
		  @close="open = true" 
		/>
		<div v-else class="p-4 text-center text-gray-500">
		  Chargement...
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount, computed } from 'vue';
  import { MainLayout } from '@admin/views/layouts'
  import Général from './general/index.js';
  import Personnel from './staff/index.js';
  import Rôles from './roles/index.js';
  import Profil from './profile/index.js';
  import Localisations from './locations/index.js';
  import Notifications from './notifications/index.js';
  
  const active = ref('general') // Default active item
  const open = ref(false)
  
  // Combine all imports
  const sidebarItems = {
	...Général,
	...Personnel,
	...Rôles,
	...Profil,
	...Localisations,
	...Notifications,
  }

  const translations = {
	'staff': 'Personnel',
	'general': 'Général',
	'roles': 'Rôles',
	'profile': 'Profil',
	'locations': 'Localisations',
	'notifications': 'Notifications'
  }
  
  const translateLabel = (label) => {
	return translations[label] || label
  }
  
  const slugify = str => str.toLowerCase()
	.normalize('NFD')
	.replace(/[\u0300-\u036f]/g, '')
	.replaceAll(' ', '-')
  
  const setHash = (label) => {
	window.location.hash = slugify(label)
	active.value = label
	open.value = false
  }
  
  const getCurrentComponent = computed(() => {
	return sidebarItems[active.value]?.component
  })
  
  onBeforeMount(() => {
	if (window.location.hash) {
	  const hash = window.location.hash.replace(/^#/, "")
	  if (Object.keys(sidebarItems).includes(hash)) {
		active.value = hash
	  }
	}
  });
  
  defineOptions({ layout: MainLayout })
  </script>