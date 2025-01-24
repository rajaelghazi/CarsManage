<template>
	<Sidebar>
		<ul class="flex flex-col gap-2 overflow-hidden">
			<Route :link="to('dashboard')" :active="current('dashboard')" icon="fi-rr-home">
				{{ $t('Tableau de bord') }}
			</Route>

			<Route :link="to('reservation.index')" :active="current('reservation.index')" icon="fi-rr-reservation-table">
				{{ $t('Réservations') }}
			</Route>
			
			<Route :link="to('payment.index')" :active="current('payment.index')" icon="fi-rr-money-bill-wave">
				{{ $t('Payments') }}
			</Route>

			<Route :link="to('vehicle.index')" :active="current('vehicle.index')" icon="fi-rr-car-side">
				{{ $t('Véhicules') }}
			</Route>

			<Route :link="to('customer.index')" :active="current('customer.index')" icon="fi-rr-users-alt">
				{{ $t('Clients') }}
			</Route>

			<Route :link="to('analytics.index')" :active="current('analytics.index')" icon="fi-rr-chart-histogram">
				{{ $t('Rapports et analyses') }}
			</Route>
		</ul>

		<template #end>
			<Route :link="to('settings.index')" :active="current('settings.*')" icon="fi-rr-settings">
				<div class="flex items-center justify-between w-full">
					<span>{{ $t('paramètres') }}</span>
					<i class="fi fi-rr-arrow-right text-sm rtl:rotate-180"></i>
				</div>
			</Route>
		</template>
	</Sidebar>
</template>

<script setup>
import { computed } from 'vue';
import { Sidebar, Route, RouteChild } from '@views/components';

const current = (link) => $route().current(`admin.${link}`)
const to = (link) => $route(`admin.${link}`)
</script>