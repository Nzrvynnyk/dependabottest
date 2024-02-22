<script setup lang="ts">
const props = defineProps<{ anyMyrKi: string }>()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewMyrKi(props.anyMyrKi)
})
</script>

<template>
  <div>
    <p>
      -
    </p>

    <div text-4xl>
      <div i-carbon-misuse-outline inline-block />
    </div>

    <p>
      -
    </p>

    <p text-sm opacity-75>
      <em>MYRKI '{{ props.anyMyrKi }}' NOT RECOGNIZED</em>
    </p>

    <p text-sm opacity-75>
      Please verify you entered it correctly.
    </p>

    <template v-if="user.otherMyrKis.length">
      <p mt-4 text-sm>
        <span opacity-75>Recently attempts:</span>
        <ul>
          <li v-for="otherMyrKi in user.otherMyrKis" :key="otherMyrKi">
            <RouterLink :to="`/myrKiSs/${otherMyrKi}`" replace>
              {{ otherMyrKi }}
            </RouterLink>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        m="3 t6" text-sm btn
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
