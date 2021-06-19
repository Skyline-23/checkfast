<template>
  <div class="home">
    <router-link to="/wait">
      <button class="Start-button">시작하기</button>
    </router-link>
  </div>
</template>

<style lang="css" scoped>
.Start-button{
  margin-top: 300px;
  width: 300px;
  height: 30px;
  border: 0px;
  border-radius: 50px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  44px 44px 100px #c5c5c5,
  -44px -44px 100px #fbfbfb;
}
.home{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>