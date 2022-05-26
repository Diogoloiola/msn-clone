<template>
  <section class="box">
    <form action="">
      <div>
        <input class="input" type="text" placeholder="E-mail" />
      </div>
      <div class="mt-1">
        <input class="input" type="text" placeholder="Senha" />
      </div>
      <div class="mt-1">
        <p class="forget-password"><a href="">Esqueceu sua senha?</a></p>
      </div>
      <div>
        <div class="d-flex mt-1">
          <h3 class="user-status">Entrar como</h3>
          <select class="ml-1" name="" id="">
            <option value="">Disponivel</option>
            <option value="">Ocupado</option>
            <option value="">Ausente</option>
          </select>
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
          <button class="button ml-1" type="submit">Cancelar</button>
        </div>
      </div>
      <div class="mt-1">
        <p>Não possui um Windows Live ID? <a href="">Inscreva-se</a></p>
      </div>
    </form>
  </section>
</template>

<style scoped>
.input {
  width: 100%;
  padding: 10px 15px;
  border: none;
  outline: none;
  border: 1px solid #9eb3c9;
  border-radius: 5px;
}
.box {
  width: 60%;
}
.forget-password a {
  text-decoration: none;
}
.user-status{
  font-weight: 300;
}
.button{
  width: 100%;
  border: none;
  outline: none;
  background-color: #c4c4c4;
  padding: 10px 15px;
  border-radius: 5px;
}
</style>
