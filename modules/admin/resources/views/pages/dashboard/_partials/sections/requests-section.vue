<template>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
			<BaseCard title="New Order requests">
				<template #end>
					<div class="ml-auto -m-1">
						<Button label="View more" size="small" outlined />
					</div>
				</template>
				<template v-if="orderRequests.length > 0">
                    <p class="text-sm">
                        {{ $t('You Have new order requests, you can verify your fees and accept to process them.') }}
                    </p>
					<ul role="list" class="divide-y divide-gray-100 border-t mt-4 border-gray-100">
						<li v-for="request in orderRequests" :key="request.id" class="py-2">
							<div class="flex items-center gap-x-3">
								<h3 class="flex-auto truncate text-sm/6 font-semibold text-gray-900">{{ request.full_name }}
								</h3>
								<time :datetime="request.dateTime" class="flex-none text-xs text-gray-500">{{ request.date
									}} ago</time>
							</div>
							<p class=" truncate text-sm text-gray-500">
								<span class="text-gray-700">{{ request.business_name }}</span>
							</p>
						</li>
					</ul>
				</template>
				<template v-else>
					<div class="border border-gray-200 rounded-xl p-5 h-56 flex flex-col items-center justify-center">
						<i class="fi fi-rr-octagon-xmark text-gray-500"></i>
						<p class="text-sm text-gray-500">No new requests</p>
					</div>
				</template>
			</BaseCard>
			<BaseCard title="New Partner request">
				<template #end>
					<div class="ml-auto -m-1">
						<Button label="View more" size="small" outlined />
					</div>
				</template>
				<template v-if="partnerRequests.length > 0">
                    <p class="text-sm">{{$t('You Have new Partner requests, contact them and cofirm your fees.')}}</p>
					<ul role="list" class="divide-y divide-gray-100 border-t mt-4 border-gray-100">
						<li v-for="request in partnerRequests" :key="request.id" class="py-2">
							<div class="flex items-center gap-x-3">
								<h3 class="flex-auto truncate text-sm/6 font-semibold text-gray-900">{{
									request.full_name }}
								</h3>
								<time :datetime="request.dateTime" class="flex-none text-xs text-gray-500">{{
									request.date
									}} ago</time>
							</div>
							<p class=" truncate text-sm text-gray-500">
								<span class="text-gray-700">{{ request.business_name }}</span>
							</p>
						</li>
					</ul>
				</template>
				<template v-else>
					<div class="border border-gray-200 rounded-xl p-5 h-56 flex flex-col items-center justify-center">
						<i class="fi fi-rr-octagon-xmark text-gray-500"></i>
						<p class="text-sm text-gray-500">No new requests</p>
					</div>
				</template>
			</BaseCard>
		</div>
</template>
<script setup>
const orderRequests = [
	
]

const partnerRequests = [
{
		id: 1,
		full_name: 'Merchant 1',
		business_name: 'business name',
		commit: '2d89f0c8',
		branch: 'main',
		date: '1h',
		dateTime: '2023-01-23T11:00',
	},
	{
		id: 2,
		full_name: 'Merchant 1',
		business_name: 'business name',
		commit: '249df660',
		branch: 'main',
		date: '3h',
		dateTime: '2023-01-23T09:00',
	},
	{
		id: 3,
		full_name: 'Merchant 3',
		business_name: 'business name',
		commit: '11464223',
		branch: 'main',
		date: '12h',
		dateTime: '2023-01-23T00:00',
	}
]
</script>