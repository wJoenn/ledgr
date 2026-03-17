<template>
  <div class="space-y-8">
    <div class="flex gap-4">
      <LedgrIcon
        class="size-14"
        name="wallet"
      />

      <div>
        <h1 class="text-2xl font-semibold">
          {{ $t('accounts.title') }}
        </h1>

        <p class="font-medium text-zinc-500">
          {{ $t('accounts.accounts', db.accounts.length) }}
        </p>
      </div>
    </div>

    <div class="space-y-8">
      <div class="space-y-4">
        <div class="flex items-end justify-between gap-2">
          <div>
            <h2 class="font-medium text-zinc-400">
              {{ $t('accounts.totalBalance') }}
            </h2>

            <p class="text-3xl font-medium">
              {{ toCurrency(sumBy(db.accounts, 'balance')) }}
            </p>
          </div>

          <LedgrIcon
            class="box-content size-6 rounded-full bg-main p-3"
            name="plus"
          />
        </div>

        <AccountCard :account="mainAccount" />
      </div>

      <div
        v-for="(accounts, type) in groups"
        :key="type"
        class="space-y-4"
      >
        <h3 class="text-xl font-medium">
          {{ $t(`accounts.type.${type}`) }}
        </h3>

        <ul class="grid grid-cols-2 gap-4">
          <li
            v-for="account in accounts"
            :key="account.uuid"
          >
            <AccountCard :account />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Account } from '~/types/api';

import db from '~/assets/db.json';

const mainAccount = computed<Account>(() => db.accounts.find(({ category }) => category === 'main')!);
const otherAccounts = computed<Account[]>(() => db.accounts.filter(({ category }) => category !== 'main'));
const groups = computed<Record<Account['category'], Account[]>>(() => groupBy(otherAccounts.value, 'category'));
</script>
