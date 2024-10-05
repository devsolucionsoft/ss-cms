<template>
  <div>
    <Example />
    <span>Bienvenidos</span>
    <button @click="handleLogin">Login</button>
    <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
</template>
<script setup>
import { useAuthService } from "../services/auth/useAuthService";
const AuthService = useAuthService();
console.log(AuthService);

const handleLogin = async () => {
  try {
    const response = await AuthService.login({
      username: "atila",
      password: "12345678",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>
