<template>
  <div class="container-fluid">
    <header class="header d-flex bg-blue justify-content-between">
      <div class="ml-1 justify-content-between align-items-center d-flex">
        <img src="@/assets/images/mini_logo.png" alt="logo msn" />
        <h3 class="ml-1">Windows Live Messenger</h3>
      </div>
      <div>
        <img src="@/assets/images/buttons.png" alt="buttons" />
      </div>
    </header>
    <div class="bg-blue" style="border-top: 1px solid #a7b1b6">
      <div class="container">
        <div style="width: 20%">
          <app-list :list="data.list"></app-list>
        </div>
      </div>
    </div>
    <div
      style="
        background: linear-gradient(64.31deg, #58d4f9 2.8%, #097bdb 97.47%);
        height: 20%;
      "
    >
      <div class="container">
        <div class="d-flex align-items-center">
          <img
            style="margin-top: 20px"
            class="picture"
            src="@/assets/images/Group 6.png"
            alt="foto de perfil do usuário"
          />
          <div class="ml-1">
            <h3>Pâmela Costa <span>(Disponivel)</span></h3>
            <p class="mt-1">UI Designer</p>
          </div>
        </div>
        <div style="margin-top: 30px">
          <custom-input
            :inputType="'text'"
            :placeholder="'Pesquisar contatos na Web'"
          ></custom-input>
        </div>
        <div class="mt-1" style="margin-top: 30px">
          <img
            class=""
            src="@/assets/images/Favoritos.png"
            alt="foto de perfil do usuário"
          />
          <div>
            <ul>
              <li class="mt-2">
                <img
                  src="@/assets/images/Débora Pereira.png"
                  alt=""
                  width="220"
                />
              </li>
              <li class="mt-2">
                <img
                  src="@/assets/images/Débora Pereira.png"
                  alt=""
                  width="220"
                />
              </li>
              <li class="mt-2">
                <img
                  src="@/assets/images/Débora Pereira.png"
                  alt=""
                  width="220"
                />
              </li>
              <li class="mt-2">
                <img
                  src="@/assets/images/Débora Pereira.png"
                  alt=""
                  width="220"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer class="bg-gray">
        <div class="container" style="width: 100%; height: 320px">
          <div
            style="
              display: flex;
              height: 200px;
              align-items: center;
              margin-left: 30px;
            "
          >
            Novidades
          </div>
          <div
            style="
              width: 100%;
              height: 2px;
              background: #c4c4c4;
              box-shadow: -3px 0px 6px rgba(0, 0, 0, 0.4);
            "
          ></div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  width: 100%;
  height: 100%;
}

.container {
  width: 98%;
  margin: auto;
}

.bg-blue {
  background: #c7dae8;
}

.header {
  height: 40px;
}

.list {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.list li {
  padding: 8px;
}

.picture {
  width: 90px;
  height: 90px;
}

span {
  font-weight: 200;
}
ul {
  list-style-type: none;
}

.bg-gray {
  background: linear-gradient(180deg, #eff8fa 0%, #e9f5fc 47.79%, #d0e8f2 100%);
}
</style>

<script setup>
import CustomInput from "@/components/CustomInput.vue";
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
