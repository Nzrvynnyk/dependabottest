<script setup>
import { ref } from 'vue'

import StepInStone from '~/components/StepInStone.vue'

const testWxrds = ref([
  {
    wxrdvalue: 'test',
    wxrdtype: '',
    content: '',
    related: '',
    uuid: '',
    image: '',
  },
  {
    wxrdvalue: 'test2',
    wxrdtype: '',
    content: '',
    related: '',
    uuid: '',
    image: '',
  },
  {
    wxrdvalue: 'test3',
    wxrdtype: '',
    content: '',
    related: '',
    uuid: '',
    image: '',
  },
])
</script>

<template>
  <p>
    Wxrds
  </p>

  <StepInStone
    v-for="wxrd in testWxrds"
    :key="wxrd.uuid"
    :uuid="wxrd.uuid"
    :wxrdvalue="wxrd.wxrdvalue"
    :wxrdtype="wxrd.wxrdtype"
    :content="wxrd.content"
    :related="wxrd.related"
    :image="wxrd.image"
  />
</template>
