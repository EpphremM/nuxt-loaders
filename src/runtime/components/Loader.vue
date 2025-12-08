<template>
  <div>Hi</div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

const log = () => {
  console.log("this is the loader");
};

onMounted(log);
</script>
