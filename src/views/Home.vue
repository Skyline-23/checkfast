<template>
  <div class="home">
    <div class="title">
      스피드 테스트
    </div>
    <div>
    <router-link to="/wait">
      <button class="Start-button">시작하기</button>
    </router-link>
    </div>
  </div>
</template>

<style lang="css" scoped>
.Start-button{
  float: left;
  margin-top: 300px;
  width: 300px;
  height: 30px;
  border: 0px;
  border-radius: 50px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow:  44px 44px 100px #c5c5c5,
  -44px -44px 100px #fbfbfb;
}
.title {
  width: 738px;
  height: 183px;
  float: left;
  background: linear-gradient(270deg, #00D1FF 0%, rgba(57, 207, 126, 0.66) 100%);
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>