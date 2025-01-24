<template>
	<aside class="flex grow flex-col dark:bg-zinc-900">
		<div class="block py-5 shrink-0 items-center px-5 md:px-8 bg-black">
			<img class="h-5 w-auto" src="/assets/logo-white.png" alt="Cars">
		</div>

		<div class="border-r h-full flex flex-col border-gray-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 overflow-y-auto">
			<nav class="flex flex-col flex-1 z-30 py-5 px-4 md:px-5">
				<slot></slot>
			</nav>

			<Divider class="my-0 border border-zinc-200 dark:border-zinc-700" />
	
			<ul class="flex flex-col gap-1.5 overflow-hidden px-4 md:px-5 py-4">
				<slot name="end"></slot>
			</ul>
		</div>
	</aside>
</template>