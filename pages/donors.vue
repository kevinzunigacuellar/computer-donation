<script setup lang="ts">
definePageMeta({
  layout: "admin-layout",
  middleware: ["auth", "staff-only"],
  name: "Donors",
});
</script>
<template>
  <p>This is the donors page</p>
</template>
