<template>
	<Section title="Profil">
		<BaseCard title="Général">
			<template #end>
				<div class="ml-auto -m-1">
					<Button label="Enregistrer" size="small" outlined severity="secondary"/>
				</div>
			</template>
			
			<div class="grid md:grid-cols-2 gap-4">
				<FormField name="first_name" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="first_name">{{ $t('Nom de l\'entreprise') }}</label>
						<InputText type="email" id="first_name" fluid />
					</div>
				</FormField>

				<FormField name="first_name" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="first_name">{{ $t('Nom de famille') }}</label>
						<InputText type="email" id="first_name" fluid />
					</div>
				</FormField>
			</div>
		</BaseCard>

		<BaseCard title="Sécurité">
			<template #end>
				<div class="ml-auto -m-1">
					<Button label="Enregistrer" size="small" outlined severity="secondary"/>
				</div>
			</template>
	
			<div class="grid md:grid-cols-2 gap-4">
				<FormField name="first_name" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="first_name">{{ $t('Mot de passe actuel') }}</label>
						<Password :feedback="false" toggleMask id="first_name" fluid />
					</div>
				</FormField>

				<FormField name="first_name" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="first_name">{{ $t('Nouveau mot de passe') }}</label>
						<Password :feedback="false" toggleMask id="first_name" fluid />
					</div>
				</FormField>
			</div>
		</BaseCard>
	</Section>
</template>

<script setup>
import Section from '../_shared/section.vue';
</script>
