<template>
  <div :class="['flex space-x-2 justify-center items-center', className]">
    <div class="h-3 w-3 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div class="h-3 w-3 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div class="h-3 w-3 bg-current rounded-full animate-bounce"></div>
  </div>
</template>

<script lang="ts" setup>
import type { LoaderBaseProps } from "../types/loaders";

const { class: className = "" } = defineProps<LoaderBaseProps>();
</script>
