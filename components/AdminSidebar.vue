<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar";
import { Laptop, Package, SquareUserRound } from "lucide-vue-next";

const props = defineProps<SidebarProps>();
const navRoutes = [
  {
    path: "/inventory/",
    label: "Inventory",
    icon: Package,
  },
  {
    path: "/donors/",
    label: "Donors",
    icon: SquareUserRound,
  },
];

const route = useRoute();
route.matched;
const isRouteActive = (path: string) => {
  // add trailing slash to path to normalize comparison
  const currentRoute = route.path.endsWith("/") ? route.path : route.path + "/";
  const currentPath = path.endsWith("/") ? path : path + "/";

  return currentRoute === currentPath;
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <NuxtLink to="/">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <Laptop class="size-4" />
              </div>
              <div class="flex flex-col gap-0.5 leading-none">
                <span class="font-semibold">Acme</span>
              </div>
            </NuxtLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem v-for="route in navRoutes" :key="route.path">
            <SidebarMenuButton as-child :is-active="isRouteActive(route.path)">
              <NuxtLink :to="route.path">
                <component :is="route.icon" /><span>{{ route.label }}</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <NavUser />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
