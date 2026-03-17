<template>
  <div class="space-y-1 rounded-lg border border-zinc-600 bg-zinc-900 p-4">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-zinc-400">
        {{ account.name }}
      </p>

      <LedgrIcon
        class="rotate-[225deg]"
        name="arrow"
      />
    </div>

    <p class="text-xl font-medium">
      {{ toCurrency(account.balance) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Account } from '~/types/api';

defineProps<{
  account: Account
}>();
</script>
