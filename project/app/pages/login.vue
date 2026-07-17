<script setup lang="ts">
import type {AuthFormField, FormSubmitEvent} from "@nuxt/ui"
definePageMeta({
    layout:"login",
    middleware:"guest"
})
const {login} = useAuth()
const toast = useToast()

function showToast(){
    toast.add({
        title:'Incorrect Info',
        description:'Entered incorrect information',
        actions:[{
            icon:'i-lucide-reply',
            color:'neutral',
            label:'Reply0',
            variant:'outline',
        }]
    })
}

const username = ref("")
const password = ref("")

const handleLogin = async () => {
  console.log("login button clicked")
  const success = await login(
    username.value, 
    password.value
  )
  if (success){
    await navigateTo("/")
  }else{
    console.log("Invalid username or password")
  }
}




</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">

    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

      <!-- Logo / Heading -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-primary">
          Ecommerce
        </h1>

        <p class="text-gray-500 mt-2">
          Login to continue shopping
        </p>
      </div>

      <!-- Form -->
      <form class="space-y-6">

        <UFormField
          label="Username"
          name="username"
        >
          <UInput
            v-model="username"
            placeholder="Enter your username"
            icon="i-lucide-user"
            size="xl"
          />
        </UFormField>

        <UFormField
          label="Password"
          name="password"
        >
          <UInput
            v-model="password"
            type="password"
            placeholder="Enter your password"
            icon="i-lucide-lock"
            size="xl"
          />
        </UFormField>

        <UButton
          block
          size="xl"
          color="primary"
          @click = "handleLogin"
        >
          Login
        </UButton>

      </form>

      <!-- Demo credentials -->
      <!-- <div class="mt-8 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
        <p class="font-semibold mb-2">
          Demo Credentials
        </p>

        <p>
          Username:
          <span class="font-medium">mor_2314</span>
        </p>

        <p>
          Password:
          <span class="font-medium">83r5^_</span>
        </p>
      </div> -->

    </div>

  </div>
</template>