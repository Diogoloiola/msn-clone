<template>
  <header>
    <div class="header d-flex bg-blue justify-content-between">
      <div class="ml-1 justify-content-between align-items-center d-flex">
        <img src="@/assets/images/mini_logo.png" alt="logo msn" />
        <h3 class="ml-1">Windows Live Messenger</h3>
      </div>
      <div>
        <img src="@/assets/images/buttons.png" alt="buttons" />
      </div>
    </div>
    <div class="bg-blue" style="border-top: 1px solid #a7b1b6">
      <div class="container">
        <div style="width: 20%">
          <app-list :list="data.list"></app-list>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import AppList from "../../components/AppList.vue";
import { reactive } from "@vue/reactivity";

const data = reactive({
  list: [
    {
      id: 1,
      value: "Arquivos",
    },
    {
      id: 2,
      value: "Contatos",
    },
    {
      id: 3,
      value: "Ações",
    },
    {
      id: 4,
      value: "Ferramentas",
    },
    {
      id: 5,
      value: "Ajuda",
    },
    {
      id: 6,
      value: "Plus",
    },
  ],
});
</script>
