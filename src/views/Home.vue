<template>
  <div class="home">
    <div class="title">
      스피드 테스트
    </div>
    <div class="explain">
      시작하기 버튼을 누르시고 화면이 검정색으로 바뀔때 최대한 빠르게 마우스를
      클릭해보세요!
    </div>
    <div class="bottom">
      <router-link to="/wait">
        <button class="button">
          시작하기
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="css" scoped>
.home {
  width: 700px;
  margin: 200px auto;
}
.title {
  width: 100%;
  height: 180px;
  font-size: 80px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50px 50px 0 0;
  background-color: black;
}
.explain {
  width: 698px;
  height: 150px;
  display: flex;
  font-size: 18px;
  justify-content: center;
  border: 1px solid black;
  align-items: center;
}
.button {
  width: 100%;
  height: 50px;
  font-size: 24px;
  border: none;
  border-radius: 0 0 50px 50px;
  color: white;
  background-color: black;
}
</style>
