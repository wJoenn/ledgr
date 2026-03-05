<template>
  <div>
    <div class="flex items-center gap-2">
      <Wallet class="size-5" />

      <p>{{ $t('hello') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Wallet from '~/assets/images/icons/wallet.svg';
</script>
