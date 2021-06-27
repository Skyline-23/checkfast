<template>
    <div class="result">
        <div class="result-title">
            내 점수
        </div>
        <ResultList v-for="time, index in $root.times" :key="index" v-bind:time="time" />
        <div class="result-average">
            평균
        </div>
        <ResultList v-bind:time="$root.times.reduce((a,b) => a+b) / $root.times.length" />
        <router-link to='/'>
            <button class="result-btn">메인화면으로 돌아가기</button>
        </router-link>
    </div>
</template>

<script>
import ResultList from '../components/ResultList.vue';

export default {
    name: 'Result',
    components: {ResultList},
    beforeDestroy() {
        this.$root.times = []
    }
}
</script>
<style lang='scss'>
.result {
    width: 300px;
    margin: 100px auto;

    &-title {
        padding: 10px;
        text-align: center;
        color: white;
        background-color: #000000;
    }
    &-btn {
        width: 100%;
        border: none;
        padding: 10px;
        background-color: #ddd;
    }
    &-average {
        padding: 10px;
        text-align: center;
        color: white;
        background-color: #000000;
    }
}
</style>