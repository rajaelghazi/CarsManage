<template>
	<FileUpload v-bind="$attrs" @select="onSelectedFiles">
		<template #header="{ chooseCallback, uploadCallback, clearCallback, files, ...rest }">
			<div @click="chooseCallback" class="flex items-center flex-1 py-6 -mb-5 justify-center flex-col">
				<i class="fi fi-rr-upload text-2xl text-gray-500 mb-7"></i>
				
				<p class="mb-0.5">
					<button class="text-primary cursor-pointer">{{ $t('Click here') }}</button> {{ $t('to upload file.') }}
				</p>
				
				<small class="text-sm text-gray-500">
					{{ $t('Supported formats: png, jpeg (1Mo each)') }}
				</small>

				<slot v-if="$slots.progress" name="progress"></slot>
			</div>
		</template>

		<template #content="{ files, removeFileCallback, messages }">
			<div class="border p-4 rounded-xl mt-1" v-if="files.length > 0 || model">
				<Message v-if="error" size="small" severity="error" class="mb-3" variant="simple" closable>
					{{ error }}
				</Message>

				<Message v-for="error in messages" size="small" severity="error" class="mb-3" variant="simple" closable>
					{{ error }}
				</Message>

				<div class="flex flex-wrap divide-y divide-surface">
					<div v-if="typeof model == 'string'" class="w-full py-3 first:pt-0 last:pb-0 flex items-center gap-4">
						<img class="border w-12 flex-none rounded-xl aspect-square" :src="$asset(model)" />
						
						<div class="overflow-hidden w-full">
							<div class="flex items-center justify-between gap-4">
								<strong class="font-semibold flex-1 w-full text-sm text-ellipsis whitespace-nowrap overflow-hidden">Image preview</strong>
								<i class="fi fi-rr-trash text-red-500" @click="onRemoveTemplatingFile(model, removeFileCallback, index)"></i>
							</div>

							<small class="block">Unknown</small>
						</div>
					</div>

					<div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="w-full py-3 first:pt-0 last:pb-0 flex items-center gap-4">
						<img v-if="file.type.startsWith('image')" class="border w-12 flex-none rounded-xl aspect-square" :alt="file.name" :src="file.objectURL" />
						<i v-else class="fi fi-rr-file border w-12 flex-none rounded-xl aspect-square grid" />
						
						<div class="overflow-hidden w-full">
							<div class="flex items-center justify-between gap-4">
								<strong class="font-semibold flex-1 w-full text-sm text-ellipsis whitespace-nowrap overflow-hidden">{{ file.name }}</strong>
								<i class="fi fi-rr-trash text-red-500" @click="onRemoveTemplatingFile(file, removeFileCallback, index)"></i>
							</div>

							<small class="block">{{ formatSize(file.size) }}</small>
						</div>
					</div>
				</div>
			</div>
		</template>
	</FileUpload>
</template>

<script setup>
import { ref, useAttrs } from 'vue';
import FileUpload from 'primevue/fileupload';

const files = ref([]);
const totalSize = ref(0);
const totalSizePercent = ref(0);

const attrs = useAttrs()
const model = defineModel()

const props = defineProps({
	error: String,
	progress: Number,
	
	minimal: {
		type: Boolean,
		default: false
	}
})

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
	removeFileCallback(index);

	totalSize.value -= parseInt(formatSize(file.size));
	totalSizePercent.value = totalSize.value / 10;

	model.value = null
};

const onSelectedFiles = (event) => {
	const isMultiple = attrs.multiple

	files.value = event.files;
	model.value = isMultiple ? event.files : event.files[0];

	files.value.forEach((file) => {
		totalSize.value += parseInt(formatSize(file.size));
	});
};

const formatSize = (bytes) => {
	const k = 1024;
	const sizes = ["B", "KB", "MB",];

	if (bytes === 0) return `0 ${sizes[0]}`;

	const i = Math.floor(Math.log(bytes) / Math.log(k));
	const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(3));

	return `${formattedSize} ${sizes[i]}`;
};
</script>