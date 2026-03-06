<template>
  <Component
    :is="map[name]"
    class="default:size-5"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>();

const map = shallowRef<Record<string, Component>>({});

watch(() => props.name, () => {
  map.value[props.name] ||= defineAsyncComponent(() => (
    import(`~/assets/images/icons/${props.name}.svg`).catch(() => {})
  ));
}, { immediate: true });
</script>
