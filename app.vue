<template>
  <UContainer class="min-h-screen flex items-center">
    <UCard
      class="flex-1"
      :ui="{
        background: 'bg-gray-50 dark:bg-gray-800/50',
        ring: 'ring-1 ring-gray-300 dark:ring-gray-700',
        divide: 'divide-y divide-gray-300 dark:divide-gray-700',
        header: { base: 'font-bold' },
      }"
    >
      <template #header> Welcome to the playground! </template>

      <p class="text-gray-500 dark:text-gray-400">Try your components here!</p>
      <UButton label="Open" @click="isOpen1 = true" />
      <UModal v-model="isOpen1" prevent-close>
        <div class="h-48 p-4">
          Modal 1
          <UButton label="Open2" @click="isOpen2 = true" />
          <UButton label="Close" @click="isOpen1 = false" />
          <!-- <UModal v-model="isOpen2" prevent-close>
            <div class="h-24 p-4">Modal 2</div>
            <UButton label="Close" @click="isOpen2 = false" />
          </UModal> -->
        </div>
      </UModal>
      <UModal v-model="isOpen2" prevent-close>
        <div class="h-24 p-4">Modal 2</div>
        <UButton label="Close" @click="isOpen2 = false" />
      </UModal>
    </UCard>
  </UContainer>
</template>

<script setup>
const isOpen1 = ref(false);
const isOpen2 = ref(false);
</script>

<style>
body {
  @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}
</style>
