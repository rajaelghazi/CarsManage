<template>
    <div class="w-12 h-12 relative">
        <label :for="`imageInput-${id}`" class="block w-full h-full cursor-pointer relative">
            <template v-if="imagePreview">
                <div>
                    <img :src="imagePreview" alt="Preview" class="w-full h-full object-cover rounded-lg" />
                </div>
            </template>
            <template v-else>
                <div class="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                    <i class="fi fi-rr-upload text-gray-400"></i>
                </div>
            </template>

            <input type="file" :id="`imageInput-${id}`" accept="image/*" @change="handleImageUpload" class="hidden" />
        </label>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
const imagePreview = ref(null)

const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            imagePreview.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}
</script>