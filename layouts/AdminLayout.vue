<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <SidebarProvider>
    <AdminSidebar />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4"
      >
        <div class="flex items-center">
          <SidebarTrigger class="-ml-1 mr-2" />
          <Separator
            orientation="vertical"
            class="mr-4 data-[orientation=vertical]:h-4"
          />
          <h1 class="text-base font-medium">{{ route.meta.name }}</h1>
        </div>
        <ThemeSelect />
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
