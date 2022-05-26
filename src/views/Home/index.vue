<template>
  <section class="container">
    <div class="content">
      <div
        class="content-header d-flex align-items-center justify-content-between"
      >
        <div class="d-flex">
          <img src="@/assets/images/mini_logo.png" alt="mini logo" />
          <h3 class="title-header ml-1">Windows Live Messenger</h3>
        </div>
        <img src="@/assets/images/buttons.png" alt="buttons" />
      </div>
      <div class="content-body">
        <animation-login v-if="data.isAuthorized"></animation-login>
        <div v-else>
          <custom-header></custom-header>
          <div class="custom-container">
            <profile-picture></profile-picture>
            <custom-form @handleLogin="handleLogin"></custom-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mt-2 {
  margin-top: 20px;
}

.container {
  width: 100%;
  height: 100%;
  background: linear-gradient(64.31deg, #58d4f9 2.8%, #097bdb 97.47%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-container {
  width: 90%;
  margin: auto;
  display: flex;
  margin-top: 40px;
  justify-content: space-around;
}

.content {
  width: 40%;
  height: 60%;
}

.content-header {
  background: linear-gradient(
    270deg,
    #3a99e4 50%,
    rgba(255, 254, 255, 0.13) 89.09%
  );
  box-shadow: -3px -3px 4px rgba(0, 0, 0, 0.15), 3px 3px 4px rgba(0, 0, 0, 0.15);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 35px;
  padding: 10px;
}

.content-body {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.title-header {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #000000;
}
</style>

<script setup>
import { reactive } from "@vue/reactivity";
import AnimationLogin from "@/components/AnimationLogin.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import CustomForm from "./Form.vue";
import CustomHeader from "./Header.vue";

const data = reactive({
  isAuthorized: false,
});

async function handleLogin() {
  data.isAuthorized = !data.isAuthorized;
  await new Promise(resolve => setTimeout(resolve, 2000)) // Adicionado sleep de dois segundos
}
</script>
