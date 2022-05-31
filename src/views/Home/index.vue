<template>
  <div class="container-fluid">
    <custom-header></custom-header>
    <div class="bg-blue-gradient h-20">
      <div class="container">
        <div class="d-flex align-items-center">
          <img
            class="picture mt-2"
            src="@/assets/images/Group 6.png"
            alt="foto de perfil do usuário"
          />
          <div class="ml-1">
            <h3>Pâmela Costa <span>(Disponivel)</span></h3>
            <p class="mt-1">UI Designer</p>
          </div>
        </div>
        <div class="mt-2">
          <custom-input
            :inputType="'text'"
            :placeholder="'Pesquisar contatos na Web'"
          ></custom-input>
        </div>
        <div class="mt-3" >
          <img
            class=""
            src="@/assets/images/Favoritos.png"
            alt="foto de perfil do usuário"
          />
          <div>
            <ul>
              <li v-for="image in data.images" :key="image.id" class="mt-2">
                <img :src="image.src" width="220" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer class="bg-gray">
        <div class="container w-100" style="height: 320px">
          <div class="align-items-center d-flex mt-3" style="height: 200px">
            Novidades
          </div>
          <div class="line-footer"></div>
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
.picture {
  width: 90px;
  height: 90px;
}

.bg-blue-gradient {
  background: linear-gradient(64.31deg, #58d4f9 2.8%, #097bdb 97.47%);
}

.bg-gray {
  background: linear-gradient(180deg, #eff8fa 0%, #e9f5fc 47.79%, #d0e8f2 100%);
}

.line-footer {
  width: 100%;
  height: 2px;
  background: #c4c4c4;
  box-shadow: -3px 0px 6px rgba(0, 0, 0, 0.4);
}
</style>

<script setup>
import CustomInput from "@/components/CustomInput.vue";
import { reactive } from "@vue/reactivity";
import CustomHeader from "./CustomHeader.vue";

const data = reactive({
  images: [
    {
      id: 1,
      src: "src/assets/images/Débora Pereira.png",
    },
    {
      id: 2,
      src: "src/assets/images/Débora Pereira.png",
    },
    {
      id: 3,
      src: "src/assets/images/Débora Pereira.png",
    },
    {
      id: 4,
      src: "src/assets/images/Débora Pereira.png",
    },
  ],
});
</script>
