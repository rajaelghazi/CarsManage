<template>
	<BaseCard :title="`#${order.code}`" class="-m-1">
		<template #start>
			<Checkbox name="pizza" :value="order.id" />
		</template>

		<template #end>
			<div class="ml-auto flex items-center gap-2">
				<Tag severity="info" class="text-2xs">Sent</Tag>
				<Tag :value="order.delivery.label" class="text-2xs" severity="success" size="small"></Tag>
			</div>
		</template>

		<div class="flex items-center justify-between">
			<strong class="block leading-none">{{ order.customer.full_name }}</strong>
		</div>

		<ul class="mt-3 grid grid-cols-2 gap-2">
			<li class="flex items-center gap-3 text-sm">
				<i class="fi fi-rr-phone-call"></i>
				<span class="text-zinc-500 dark:text-zinc-500">{{ order.customer.phone }}</span>
			</li>
			<li class="flex items-center gap-3 text-sm">
				<i class="fi fi-rr-truck-loading flex-none"></i>
				<span class="text-zinc-500 dark:text-zinc-500">{{ order.deliverer.full_name }}</span>
			</li>
			<li class="flex items-center gap-3 text-sm">
				<i class="fi fi-rr-clock"></i>
				<span class="text-zinc-500 dark:text-zinc-500">{{ order.created_at }}</span>
			</li>
			<li class="flex items-center gap-3 text-sm">
				<i class="fi fi-rr-box"></i>
				<span class="text-zinc-500 dark:text-zinc-500">2 products, 3 items</span>
			</li>
		</ul>

		<template #footer>
			<div class="flex items-center justify-between gap-2">
				<strong class="text-lg">{{ order.price }} MAD</strong>

				<div class="flex items-center gap-4">
					<div class="flex items-center gap-1">
						<Tag :value="order.confirmation.label" :class="order.confirmation.color" class="text-2xs" size="small"></Tag>
						<Tag v-if="order.confirmation.value" :value="order.confirmation.value" class="text-2xs" size="small"></Tag>
					</div>

					<ModalLink class="ml-auto"
						:href="$route('merchant.ordes.show', { order: order.id })" navigate>
						<i class="fi fi-rr-eye text-zinc-500"></i>
					</ModalLink>
				</div>
			</div>
		</template>
	</BaseCard>
</template>

<script setup>
const props = defineProps({
	order: Object
})
</script>