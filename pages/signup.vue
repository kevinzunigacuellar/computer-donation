<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

definePageMeta({
  middleware: ["is-authenticated"],
});

const supabase = useSupabaseClient();
const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(50),
    // This is used to display form level errors (server errors from Supabase auth)
    form: z.null().optional(),
  }),
);

const { handleSubmit, setFieldError, isSubmitting } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  try {
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          name: values.name,
          role: "user",
        },
      },
    });
    if (error) throw new Error(error.message);
    await navigateTo("/login/");
  } catch (error) {
    if (error instanceof Error) {
      setFieldError("form", error.message);
    }
  }
});
</script>
<template>
  <div class="w-full lg:grid lg:grid-cols-2 min-h-svh">
    <div class="flex items-center justify-center py-12 order-2">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold tracking-tight">Create an account</h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to create an account
          </p>
        </div>
        <form @submit="onSubmit" class="grid gap-6">
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="name" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel for="password">Password</FormLabel>
              <FormControl>
                <Input type="password" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" class="w-full" :disabled="isSubmitting">
            Create account
          </Button>
          <FormField name="form">
            <FormItem>
              <FormMessage />
            </FormItem>
          </FormField>
        </form>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <NuxtLink to="/login/" class="underline underline-offset-4">
            Sign in
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="hidden bg-muted lg:block">
      <img
        src="/placeholder.svg"
        alt="Image"
        class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>
