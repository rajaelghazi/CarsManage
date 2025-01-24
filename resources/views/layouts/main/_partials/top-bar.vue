<template>
	<div class="sticky top-0 z-40 flex py-3 shrink-0 items-center gap-x-4 bg-black px-4 sm:gap-x-6 sm:px-6">
		<button @click="$emit('open')" type="button" class="-m-2.5 p-2.5 text-white lg:hidden">
			<i class="fi fi-rr-bars-staggered"></i>
		</button>

		<div class="block h-6 w-px bg-surface-0/30 md:hidden" aria-hidden="true"></div>

		<div class="flex flex-1 justify-between lg:gap-x-6 text-white">
			<div class="flex items-center gap-x-9 md:gap-x-10 lg:gap-x-10 w-fit ltr:ml-auto rtl:mr-auto rtl:ml-0">

				<Button label="Vérifier la disponibilité" class="h-9" @click="showModal" />

				<VehicleModal v-model="isModalVisible" />


				<button type="button" class="text-white/50 hover:text-white mt-3">
					<OverlayBadge class="h-3 -mt-4" :value="0" severity="danger" size="small">
						<i class="fi fi-rr-bell text-xl md:text-2xl"></i>
					</OverlayBadge>
				</button>

				<button type="button" class="text-white/50 hover:text-white mt-3">
					<OverlayBadge class="h-3 -mt-4" value="0" severity="danger" size="small">
						<i class="fi fi-rr-messages text-xl md:text-2xl"></i>
					</OverlayBadge>
				</button>

				<div class="block h-6 w-px bg-surface-0/30" aria-hidden="true"></div>

				<div class="relative">
					<div class="flex justify-center">
						<button @click="menu.toggle" class="flex items-center gap-2 rounded-xl">
							<BaseAvatar class="size-9" />
							<i class="fi fi-rr-angle-small-down text-xl" />
						</button>

						<Menu ref="menu" :model="menuItems" @show="onMenuShow" class="mt-2 w-64" :popup="true">
							<template #start>
								<button class="flex items-start pt-3 pb-2 px-4 gap-4 w-full">
									<span class="inline-flex flex-col items-start dark:text-zinc-300">
										<span class="font-bold text-base">{{ auth.user.fullname }}</span>
										<span class="text-sm">{{ auth.user.email }}</span>
									</span>
								</button>

								<Divider class="my-0" />

								<div class="p-3 w-full">
									<SelectButton v-model="activeTheme" :options="themes"
										@update:modelValue="changeTheme" class="w-full" />
								</div>
							</template>

							<template #submenulabel="{ item }">
								<span class="font-bold text-sm block">{{ item.label }}</span>
							</template>

							<template #item="{ item, props }">
								<ModalLink v-if="item.as" :href="item.route" navigate class="flex items-center gap-3"
									v-bind="props.action">
									<i v-if="item.icon" :class="item.icon" class="fi text-base" />
									<span>{{ item.label }}</span>
								</ModalLink>

								<Link v-else :href="item.route" :method="item?.method" class="flex items-center gap-3"
									v-bind="props.action">
								<i v-if="item.icon" :class="item.icon" class="fi text-base" />
								<span>{{ item.label }}</span>
								</Link>
							</template>
						</Menu>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { usePage } from "@inertiajs/vue3";
import { ref, computed, onMounted } from "vue";
import VehicleModal from './modal.vue';

const isModalVisible = ref(false);

const showModal = () => {
	isModalVisible.value = true;
};

const activeTheme = ref('Light');
const themes = ref(['Light', 'Dark']);

const { props: { auth } } = usePage();

const isActive = computed(
	() => id => true
)

const menu = ref();
const menuItems = ref([
	{
		separator: true
	},
	{
		label: 'Profile',
		as: 'modal-link',
		icon: 'fi-rr-user',
	},
	{
		separator: true
	},
	{
		label: 'Logout',
		route: $route('logout'),
		method: 'POST',
		icon: 'fi-rr-exit',
	},
	{
		separator: true
	},
]);

const onMenuShow = () => { }

const changeTheme = (value) => {
	const htmlElement = document.documentElement;
	localStorage.setItem('theme', value);

	if (value === 'Dark') {
		htmlElement.classList.add('dark');
	} else {
		htmlElement.classList.remove('dark');
	}
};

const setTheme = () => activeTheme.value = localStorage.getItem('theme');

onMounted(setTheme)
</script>

<style>
.p-badge.p-component.p-badge-circle {
	outline-color: #792e88;
}

.p-togglebutton {
	width: 100%
}
</style>