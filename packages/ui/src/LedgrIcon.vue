<template>
  <Component
    :is="map[name]"
    class="default:size-5"
  />
</template>

<script setup lang="ts">
import type { AsyncComponentLoader } from 'vue';
import { defineAsyncComponent, shallowRef, watch } from 'vue';

const props = defineProps<{
  name: string
}>();

const map = shallowRef<Record<string, AsyncComponentLoader>>({});

watch(() => props.name, () => {
  map.value[props.name] ||= defineAsyncComponent(() => (
    import(`~/assets/images/icons/${props.name}.svg`).catch(() => {})
  ));
}, { immediate: true });
</script>
