<template>
    <FileUpload :name="name" :chooseLabel="label" :auto="true" :chooseIcon="'fi fi-rr-cloud-upload-alt'"
        :multiple="multiple" @select="onSelect" :showUploadButton="false" :showCancelButton="false" @upload="onUpload"
        :accept="accept" :maxFileSize="1000000">

        <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
            <Button @click="chooseCallback()" icon="fi fi-rr-cloud-upload-alt" label="Upload" severity="secondary"
                variant="outlined"></Button>
        </template>

        <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
            <Message v-for="message of messages" :key="message"
                :class="{ 'mb-8': !files.length && !uploadedFiles.length }" severity="error">
                {{ message }}
            </Message>

            <!-- guallery layout (preferable for images) -->
            <div v-if="gallery" class="flex flex-col gap-8 w-full">
                <!-- <Message v-for="message of messages" :key="message" :class="{ 'mb-8': !files.length && !uploadedFiles.length}" severity="error">
                {{ message }}
            </Message> -->
                <div v-if="files.length > 0">
                    <div class="flex flex-col gap-1 border border-gray-300 border-dashed rounded-xl p-5 w-full">
                        <div class="flex flex-col gap-1 mb-2 w-fit">
                            <Image :src="files[0].objectURL" :alt="files[0].name" width="200" height="200"
                                class="object-cover" preview />
                            <Button icon="fi fi-rr-trash" label="remove" text
                                @click="onRemoveTemplatingFile(files[0], removeFileCallback, 0)" outlined
                                severity="danger" size="small" class="w-fit" />
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size">
                                <div v-if="index > 0" class="flex flex-col gap-1">
                                    <Image :src="file.objectURL" :alt="file.name" width="50" class="h-12 object-cover"
                                        preview />
                                    <Button icon="fi fi-rr-trash" text
                                        @click="onRemoveTemplatingFile(files, removeFileCallback, index)" outlined
                                        severity="danger" size="small" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                    <div class="flex flex-col gap-1 border border-gray-300 border-dashed rounded-xl p-5 w-full">
                        <div class="flex flex-col gap-1 mb-2 w-fit">
                            <Image :src="uploadedFiles[0].objectURL" :alt="uploadedFiles[0].name" width="200"
                                height="200" class="object-cover" preview />
                            <Button icon="fi fi-rr-trash" label="remove" text @click="removeUploadedFileCallback(0)"
                                outlined severity="danger" size="small" class="w-fit" />
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size">
                                <div v-if="index > 0" class="flex flex-col gap-1">
                                    <Image :src="file.objectURL" :alt="file.name" width="50" class="h-12 object-cover"
                                        preview />
                                    <Button icon="fi fi-rr-trash" text @click="removeUploadedFileCallback(index)"
                                        outlined severity="danger" size="small" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- none guallery layout -->
            <div v-else>
                <div v-if="files.length > 0">
                    <div class="flex flex-col gap-1 border border-gray-300 border-dashed rounded-xl p-5 w-full">
                        <!-- if file is image -->
                        <div v-if="isImageFile(files[0])" class="flex flex-col gap-1 mb-2 w-full">
                            <div class="flex flex-col gap-2 w-full">
                                <div v-for="(file, index) of files" :key="file.name + file.type + file.size">
                                    <div v-if="index >= 0"
                                        class="flex justify-between items-center w-full border-y border-dashed pt-2 mb-2">
                                        <div class="flex items-center gap-1">
                                            <Image :src="file.objectURL" :alt="file.name" width="60" height="60"
                                                class="object-cover w-fit" preview />
                                            <span class="text-sm font-medium text-gray-500">{{ file.name }}</span>
                                        </div>
                                        <Button icon="fi fi-rr-trash" text
                                            @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined
                                            severity="danger" size="small" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- file is not an image -->
                        <div v-else>
                            <div v-for="(file, index) of files" class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <i class="fi fi-rr-file text-xl"></i>
                                    <span class="text-sm">{{ file.name }}</span>
                                </div>
                                <Button icon="fi fi-rr-trash" label="remove" text
                                    @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined
                                    severity="danger" size="small" class="w-fit" />
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                    <div class="flex flex-col gap-1 border border-gray-300 border-dashed rounded-xl p-5 w-full">
                        <!-- if file is image -->
                        <div v-if="isImageFile(uploadedFiles[0])" class="flex flex-col gap-1 mb-2 w-full">
                            <div class="flex flex-col gap-2 w-full">
                                <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size">
                                    <div v-if="index >= 0"
                                        class="flex justify-between items-center w-full border-y border-dashed pt-2 mb-2">
                                        <div class="flex items-center gap-1">
                                            <Image :src="file.objectURL" :alt="file.name" width="60" height="60"
                                                class="object-cover w-fit" preview />
                                            <span class="text-sm font-medium text-gray-500">{{ file.name }}</span>
                                        </div>
                                        <Button icon="fi fi-rr-trash" text @click="removeUploadedFileCallback(index)"
                                            outlined severity="danger" size="small" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- if file is not an image -->
                        <div v-else>
                            <div v-for="(file, index) of uploadedFiles" class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <i class="fi fi-rr-file text-xl"></i>
                                    <span class="text-sm">{{ file.name }}</span>
                                </div>
                                <Button icon="fi fi-rr-trash" label="remove" text @click="removeUploadedFileCallback(index)"
                                    outlined severity="danger" size="small" class="w-fit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template #empty>
            <div
                class="-mt-4 w-full flex flex-col items-center justify-center p-5 border border-gray-300 border-dashed rounded-xl">
                <i class="fi fi-rr-cross-circle text-2xl text-gray-500 mb-3"></i>
                <span class="mb-1">{{ $t(empty) }}</span>
                <span class="text-xs text-gray-500">{{ $t('Drag and drop here') }}</span>
            </div>
        </template>
    </FileUpload>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    name: {
        type: String,
        default: 'upload'
    },
    label: {
        type: String,
        default: 'Upload',
    },
    accept: {
        type: String,
        default: 'image/*',
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    onSelect: {
        type: Function,
        default: () => { },
    },
    onUpload: {
        type: Function,
        default: () => { },
    },
    gallery: {
        type: Boolean,
        default: false
    },
    empty: {
        type: String,
        default: 'Upload an image here'
    }
})

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
    removeFileCallback(index);
    totalSize.value -= parseInt(formatSize(file.size));
    totalSizePercent.value = totalSize.value / 10;
};

const uploadEvent = (callback) => {
    totalSizePercent.value = totalSize.value / 10;
    callback();
};

const onTemplatedUpload = () => {
    toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3000 });
};

const isImageFile = (file) => {
    console.log(file.type)
    return file.type.startsWith('image/')
}

</script>
