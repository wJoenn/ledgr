<template>
  <div class="space-y-2 rounded-xl border border-zinc-600 bg-zinc-900 p-4">
    <div class="flex items-center justify-between">
      <p class="text-lg">
        {{ account.name }}
      </p>

      <LedgrIcon
        class="rotate-[225deg]"
        name="arrow"
      />
    </div>

    <p class="text-2xl">
      {{ toCurrency(account.balance) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Account } from '~/types';

defineProps<{
  account: Account
}>();
</script>
