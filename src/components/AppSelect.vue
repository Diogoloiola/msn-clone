<template>
  <select class="ml-1" id="select">
    <option
      v-for="status in options.statusOptions"
      :value="status.value"
      :key="status.id"
    >
      {{ status.value }}
    </option>
  </select>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
});

const { options } = props;
</script>
