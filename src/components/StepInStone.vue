<script setup>
const props = defineProps({
  wxrdvalue: String,
  wxrdtype: String,
  content: String,
  related: String,
  uuid: String,
  image: String,
})
</script>

<template>
  <h1>{{ wxrdvalue }}</h1>
  <sub>{{ wxrdtype }}  {{ uuid }}</sub>

  <div class="card">
    <p>
      {{ content }}
    </p>
    <p>
      {{ related }}
    </p>

    <img :src="props.image">
  </div>
</template>

<style>
img {
    max-width: 100%;
    height: auto;
  }
</style>
