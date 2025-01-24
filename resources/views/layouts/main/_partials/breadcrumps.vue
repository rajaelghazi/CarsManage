<template>
    <Breadcrumb :home="home" :model="items" class="bg-transparent border-b flex-none border-zinc-300 dark:border-zinc-700 px-7">
        <template #separator>
            <i class="fi fi-rr-angle-double-small-right mx-2"></i>
        </template>

        <template #item="{ item }">
            <Link class="cursor-pointer flex items-center" v-if="item.route" :href="item.route">
                <i class="fi text-lg" v-if="item.icon" :class="item.icon"></i>
                <span class="text-surface-500 dark:text-surface-0 capitalize">{{ item.label }}</span>
            </Link>

            <span v-else class="font-medium">{{ item.label }}</span>
        </template>
    </Breadcrumb>
</template>

<script setup>
import { usePage } from '@inertiajs/vue3'

const { props: { auth } } = usePage()

const home = {
    icon: 'fi-rr-home', route: '/'
};

const items = [
    { label: 'Home', route: '/' },
];
</script>
