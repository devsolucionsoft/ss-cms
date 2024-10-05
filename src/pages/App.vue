<template>
  <div>
    <span>Bienvenidos</span>
    <button @click="handleLogin">Login</button>
  </div>
</template>
<script setup>
import { useAuthService } from "../services/auth/useAuthService";
const AuthService = useAuthService();
console.log(AuthService);

const handleLogin = async () => {
  try {
    const response = await AuthService.login();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>
