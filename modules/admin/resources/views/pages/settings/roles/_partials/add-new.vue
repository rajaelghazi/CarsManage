<template>
	<BaseModal v-model="createRole" title="Nouveau rôle">
	  <template #action>
		<Button label="Créer" size="small" />
	  </template>
  
	  <BaseCard>
		<FormField name="role_name" class="flex items-end gap-2 mb-5">
		  <div class="space-y-2 flex-1">
			<label class="text-sm font-medium" for="role_name">{{ $t('Nom du rôle') }}</label>
			<InputText type="text" id="role_name" fluid />
		  </div>
		</FormField>
  
		<div class="space-y-3">
		  <div class="flex items-center justify-between">
			<label class="text-sm font-medium">{{ $t('Sélectionner les permissions') }}</label>
  
			<div class="flex items-center">
			  <Button :label="$t('Tout sélectionner')" size="small" variant="link" @click="selectAll" />
			  <Button :label="$t('Développer tout')" size="small" variant="link" @click="expandAll" />
			</div>
		  </div>
  
		  <div class="space-y-1">
			<Panel
			  v-for="(group, index) in permissionGroups"
			  :key="index"
			  toggleable
			  :collapsed="group.collapsed"
			>
			  <template #header>
				<div class="flex items-center gap-2">
				  <Checkbox
					:inputId="group.id"
					:name="group.name"
					:value="group.id"
					@change="toggleGroup(group)"
					:checked="group.selectedCount === group.permissions.length"
				  />
				  <span class="font-bold">{{ group.label }}</span>
				</div>
			  </template>
  
			  <template #icons>{{ group.selectedCount }}/{{ group.permissions.length }}</template>
  
			  <div class="grid grid-cols-2 gap-4 mt-4">
				<div
				  v-for="(permission, idx) in group.permissions"
				  :key="idx"
				  class="flex items-center gap-2"
				>
				  <Checkbox
					:inputId="permission.id"
					:name="permission.name"
					:value="permission.id"
					v-model="permission.checked"
					@change="updateCount(group)"
				  />
				  <label :for="permission.id">{{ permission.label }}</label>
				</div>
			  </div>
			</Panel>
		  </div>
		</div>
	  </BaseCard>
	</BaseModal>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const permissionGroups = ref([
	{
	  id: 'vehicles',
	  label: 'Véhicules',
	  name: 'permissions',
	  permissions: [
		{ id: 'view_vehicles', label: 'Voir', checked: false },
		{ id: 'add_vehicles', label: 'Créer', checked: false },
		{ id: 'edit_vehicles', label: 'Modifier', checked: false },
	  ],
	  selectedCount: 0,
	  collapsed: true,
	},
	{
	  id: 'clients',
	  label: 'Clients',
	  name: 'permissions',
	  permissions: [
		{ id: 'view_clients', label: 'Voir', checked: false },
		{ id: 'add_clients', label: 'Créer', checked: false },
		{ id: 'edit_clients', label: 'Modifier', checked: false },
	  ],
	  selectedCount: 0,
	  collapsed: true,
	},
	{
	  id: 'reservations',
	  label: 'Réservations',
	  name: 'permissions',
	  permissions: [
		{ id: 'view_reservations', label: 'Voir', checked: false },
		{ id: 'add_reservations', label: 'Créer', checked: false },
		{ id: 'edit_reservations', label: 'Modifier', checked: false },
	  ],
	  selectedCount: 0,
	  collapsed: true,
	},
	{
	  id: 'payments',
	  label: 'Paiements',
	  name: 'permissions',
	  permissions: [
		{ id: 'view_payments', label: 'Voir', checked: false },
		{ id: 'add_payments', label: 'Créer', checked: false },
		{ id: 'edit_payments', label: 'Modifier', checked: false },
	  ],
	  selectedCount: 0,
	  collapsed: true,
	},
	{
	  id: 'reports_analytics',
	  label: 'Rapports et Analyses',
	  name: 'permissions',
	  permissions: [
		{ id: 'view_reports_analytics', label: 'Voir', checked: false },
	  ],
	  selectedCount: 0,
	  collapsed: true,
	},
	{
	  id: 'calendar',
	  label: 'Calendrier',
	  name: 'permissions',
	  permissions: [
		{ id: 'view_calendar', label: 'Voir', checked: false },
		{ id: 'add_calendar', label: 'Créer', checked: false },
		{ id: 'edit_calendar', label: 'Modifier', checked: false },
	  ],
	  selectedCount: 0,
	  collapsed: true,
	},
	{
	  id: 'dashboard',
	  label: 'Tableur de Bord',
	  name: 'permissions',
	  permissions: [
		{ id: 'view_dashboard', label: 'Voir', checked: false },
	  ],
	  selectedCount: 0,
	  collapsed: true,
	},
  ]);
  
  function updateCount(group) {
	group.selectedCount = group.permissions.filter((p) => p.checked).length;
  }
  
  function toggleGroup(group) {
	const isChecked = group.selectedCount === 0;
	group.permissions.forEach((permission) => (permission.checked = isChecked));
	updateCount(group);
  }
  
  function selectAll() {
	permissionGroups.value.forEach((group) => {
	  group.permissions.forEach((permission) => (permission.checked = true));
	  updateCount(group);
	});
  }
  
  function expandAll() {
	permissionGroups.value.forEach((group) => {
	  group.collapsed = false;
	});
  }
  </script>
  