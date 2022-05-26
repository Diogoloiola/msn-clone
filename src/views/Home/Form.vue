<template>
  <section class="box">
    <form @submit.prevent="emit('handleLogin')">
      <div>
        <custom-input
          :inputType="'text'"
          :placeholder="'E-mail'"
        ></custom-input>
      </div>
      <div class="mt-1">
        <custom-input
          :inputType="'password'"
          :placeholder="'Senha'"
        ></custom-input>
      </div>
      <div class="mt-1">
        <p class="forget-password"><a href="">Esqueceu sua senha?</a></p>
      </div>
      <div>
        <div class="d-flex mt-1">
          <h3 class="user-status">Entrar como</h3>
          <app-select :options="data"></app-select>
        </div>
      </div>
      <div>
        <div class="d-flex mt-1">
          <input class="mr-1" type="checkbox" />
          <p>Lembrar minha ID e senha</p>
        </div>
        <div class="d-flex mt-1">
          <input class="mr-1" type="checkbox" />
          <p>Entrar automaticamente <a href="">Opções</a></p>
        </div>
      </div>
      <div class="mt-1 d-flex">
        <div>
          <button class="button" type="submit">Entrar</button>
        </div>
        <div>
          <button class="button ml-1">Cancelar</button>
        </div>
      </div>
      <div class="mt-1">
        <p>Não possui um Windows Live ID? <a href="">Inscreva-se</a></p>
      </div>
    </form>
  </section>
</template>

<style scoped>
.box {
  width: 60%;
}
.forget-password a {
  text-decoration: none;
}
.user-status {
  font-weight: 300;
}
.button {
  width: 100%;
  border: none;
  outline: none;
  background-color: #c4c4c4;
  padding: 10px 15px;
  border-radius: 5px;
}
</style>

<script setup>
import CustomInput from "@/components/CustomInput.vue";
import AppSelect from "../../components/AppSelect.vue";

import { reactive } from "@vue/reactivity";

const data = reactive({
  statusOptions: [
    {
      id: 1,
      value: "Disponivel",
    },
    {
      id: 2,
      value: "Ocupado",
    },
  ],
});

const emit = defineEmits(["handleLogin"]);
</script>
