<script setup lang="ts">
definePageMeta({
  layout: "admin-layout",
  middleware: ["auth", "staff-only"],
  name: "Inventory",
});
</script>
<template>
  <p>This is the inventory page</p>
</template>
