<template>
  <input
    class="input"
    :type="props.inputType"
    :placeholder="props.placeholder"
  />
</template>

<style scope>
.input {
  width: 100%;
  padding: 10px 15px;
  border: none;
  outline: none;
  border: 1px solid #9eb3c9;
  border-radius: 5px;
}
</style>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    required: true,
  },
});
</script>
