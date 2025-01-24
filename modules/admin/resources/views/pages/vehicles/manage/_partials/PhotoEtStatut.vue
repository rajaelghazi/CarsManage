<template>
  <BaseCard title="Photo et statut" class="space-y-4">
    <BaseField name="photo" label="Photo du véhicule" :errors="form.errors">
      <BaseLabel for="photo">{{ $t('Photo') }}</BaseLabel>
      <div>
        <label for="image"
          class="cursor-pointer flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors h-32">
          <i class="fi fi-rr-add-image text-3xl text-gray-500"></i>
          <span class="ml-3 text-gray-500">{{ $t('Choisir une image') }}</span>
          <input type="file" id="image" class="hidden" @change="handleImageChange" accept="image/*" />
        </label>
        <div v-if="selectedImage" class="mt-4 flex flex-row items-center">
          <img :src="selectedImage" alt="Selected" class="h-20 object-container rounded-md mr-4" />
          <div class="flex-1">
            <p class="text-gray-600 text-sm truncate w-52">{{ selectedFileName }}</p>
          </div>
          <button type="button" @click="removeImage" class="text-red-500 hover:text-red-700 focus:outline-none">
            <i class="fi fi-rr-cross-circle text-xl"></i>
          </button>
        </div>
      </div>
    </BaseField>
    <BaseField name="status" label="Statut du véhicule" :errors="form.errors">
      <BaseLabel for="status">{{ $t('Statut du véhicule') }}</BaseLabel>
      <Select v-model="form.status" :options="statuses" placeholder="Choisissez un statut" />
    </BaseField>
    <BaseField name="entryDate" label="Date d'entrée" :errors="form.errors">
      <BaseLabel for="entryDate">{{ $t('Date d\'entrée') }}</BaseLabel>
      <DatePicker v-model="form.entryDate" placeholder="Choisissez une date" />
    </BaseField>
  </BaseCard>
</template>

<script setup>
import {ref} from 'vue'
const statuses = ['Panne', 'En maintenance', 'Réservé', 'Disponible'];

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
});


const selectedImage = ref(null);
const selectedFileName = ref(null);

const handleImageChange = (event) => {
	const file = event.target.files[0];
	if (file) {
		selectedFileName.value = file.name;
		const reader = new FileReader();
		reader.onload = (e) => {
			selectedImage.value = e.target.result;
		};
		reader.readAsDataURL(file);
	}
};

const removeImage = () => {
	selectedImage.value = null;
	selectedFileName.value = null;
	document.getElementById("image").value = "";
};
</script>