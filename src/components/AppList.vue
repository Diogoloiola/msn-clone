<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">{{ item.value }}</li>
  </ul>
</template>
<style scope>
.list {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.list li {
  padding: 8px;
}
</style>

<script setup>
const { list } = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>
