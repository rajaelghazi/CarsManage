<template>
	<BaseCard>
		<DataView class="-mx-5 -mt-3" v-bind="$attrs" :layout="$layout">
			<template #header>
				<div class="flex flex-col md:flex-row justify-between gap-2 px-1 mb-1">
					<div v-if="$slots.actions" class="flex items-center gap-2">
						<slot name="actions"></slot>
					</div>

					<div class="flex gap-2">
						<div class="flex-none" v-if="$slots.filter">
							<Button @click="refresh" class="flex-none w-11 h-full" severity="secondary" outlined>
								<i class="fi fi-rr-refresh" :class="{'animate-spin': isRefreshing}"></i>
							</Button>
						</div>

						<IconField v-if="$slots.search" class="md:max-w-sm w-full">
							<InputIcon class="fi fi-rr-search" />
							<slot name="search"></slot>
						</IconField>

						<div class="flex-none" v-if="$slots.filter">
							<BasePopover>
								<template #action="{ toggle }">
									<Button icon="fi fi-rr-filter" @click="toggle" class="flex-none w-11"
										severity="secondary" outlined />
								</template>

								<slot name="filter"></slot>
							</BasePopover>
						</div>
					</div>
				</div>
			</template>

			<template #list>
				<DataTable scrollable v-bind="$attrs" class="-mb-4 border-none !rounded-2xl" :table-Style="`min-width: ${width}`"
					:value="dataset">
					<slot></slot>

					<template #expansion="slotProps">
						<slot name="expansion" :data="slotProps.data"></slot>
					</template>
				</DataTable>

				<div v-if="dataset.length == 0" class="mx-5">
					<slot name="empty"></slot>
				</div>
			</template>

			<template v-if="$slots.mobile" #grid>
				<div v-if="dataset.length == 0" class="mx-5 mt-5">
					<slot name="empty"></slot>
				</div>

				<div v-else class="p-5 -mb-3 space-y-2">
					<slot name="mobile" :items="dataset"></slot>
				</div>
			</template>

			<template #empty>
				<div class="mt-5 mx-5">
					<slot name="empty"></slot>
				</div>
			</template>
		</DataView>

		<template v-if="paginate && dataset.length" #footer>
			<BasePagination :meta="$attrs.value.meta" />
		</template>
	</BaseCard>
</template>

<script setup>
import { ref, useAttrs, useSlots, onBeforeMount, computed } from 'vue'

import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';

import { useRefresh } from "@scripts/composables"

const props = defineProps({
	width: {
		type: String,
		default: 'auto'
	},

	paginate: {
		type: Boolean,
		default: false
	},

	layout: {
		type: String,
		default: 'list'
	},

	refresh: Array
})

const { isRefreshing, refresh } = useRefresh(props.refresh)
const $layout = ref(props.layout)

const attrs = useAttrs()
const slots = useSlots()

const dataset = computed(() => {
	if (props.paginate) {
		return attrs.value.data
	}

	return attrs.value
})

onBeforeMount(() => {
	const width = window.innerWidth

	if (width <= 500 && slots.mobile) {
		$layout.value = 'grid'
	}
})
</script>