<template>
  <div class="p-4">
    <ul class="space-y-2">
      <li
        v-for="account in db.accounts"
        :key="account.id"
      >
        <AccountCard :account />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import db from '~/assets/db.json';
</script>
