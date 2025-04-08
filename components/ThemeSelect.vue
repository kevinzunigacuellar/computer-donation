<script setup lang="ts">
import { Sun, MoonStar, LaptopMinimal } from "lucide-vue-next";

const colorMode = useColorMode();

const IconToRender = computed(() => {
  switch (colorMode.preference) {
    case "system":
      return LaptopMinimal;
    case "light":
      return Sun;
    case "dark":
      return MoonStar;
    default:
      // Fallback to a default icon if needed
      return LaptopMinimal;
  }
});

const SelectValueString = computed(
  () =>
    colorMode.preference.charAt(0).toUpperCase() +
    colorMode.preference.slice(1),
);
</script>

<template>
  <Select v-model="colorMode.preference">
    <SelectTrigger>
      <SelectValue class="w-28">
        <component :is="IconToRender" class="mr-1" /> {{ SelectValueString }}
      </SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="system">
        <LaptopMinimal class="mr-1" /> System
      </SelectItem>
      <SelectItem value="light"> <Sun class="mr-1" /> Light </SelectItem>
      <SelectItem value="dark"> <MoonStar class="mr-1" /> Dark </SelectItem>
    </SelectContent>
  </Select>
</template>
