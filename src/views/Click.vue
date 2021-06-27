<template>
  <div class="click" v-on:click="onButtonCliked">
    Click
  </div>
</template>

<style lang="css">
.click {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  color: white;
  height: 100vh;
  overflow: hidden;
}
body.bbb {
  background-color: black;
}
</style>

<script>
export default {
  data() {
    return {
      loadTime: 0,
      clickTime: 0,
      checktime: 0,
    };
  },
  beforeMount() {
    if (this.$root.times.length >= 5) {
      this.$router.push({ path: "/result" });
    }
  },
  mounted() {
    document.body.className = "bbb";
    this.$nextTick(() => {
      let date = new Date();
      this.loadTime = date.getTime();
    });
  },
  beforeDestroy() {
    document.body.className = "";
  },
  methods: {
    onButtonCliked() {
      // 새로운 타임을 받아 차이를 계산
      let date = new Date();
      this.clickTime = date.getTime();
      this.checktime = (this.clickTime - this.loadTime) / 1000;
      console.log(this.checktime);

      // 걸린시간을 변수에 저장
      this.$root.times.push(this.checktime);

      // 5번보다 큰 경우 결과 화면 출력
      if (this.$root.times.length >= 5) {
        this.$router.push({ path: "/result" });
      } else {
        // 그렇지 않은 경우 다시 대기 화면 출력
        this.$router.push({ path: "/wait" });
      }
    },
  },
};
</script>
