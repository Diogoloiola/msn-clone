<template>
  <section class="container">
    <div class="content">
      <div class="content-header d-flex align-items-center justify-content-between">
        <div class="d-flex">
          <img src="./assets/images/mini_logo.png" alt="mini logo" />
          <h3 class="title-header ml-1">Windows Live Messenger</h3>
        </div>
        <img src="./assets/images/buttons.png" alt="buttons" />
      </div>
      <div class="content-body">
        <div class="images">
          <img src="./assets/images/Icone Messenger.png" alt="logo msn" />
          <div>
            <h3 class="title">Windows Live</h3>
            <p class="subtile">Messenger</p>
            <p class="subtitle-two mt-2">Iniciando...</p>
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

.content {
  width: 50%;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.images {
  width: 50%;
  display: flex;
  align-items: center;
}

.title {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 43px;
  color: #262626;
}
.subtile {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 85px;

  color: rgba(38, 38, 38, 0.79);
}
.subtile-two {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #383838;
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
