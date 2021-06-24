<template>
    <div class="result">
        <div class="result-title">
            Your Score
        </div>
        <ResultList v-for="time, index in $root.times" :key="index" v-bind:time="time" />
        <router-link to='/'>
            <button class="result-btn">home</button>
        </router-link>
    </div>
</template>

<script>
import ResultList from '../components/ResultList.vue';

export default {
    name: 'Result',
    components: {ResultList},
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
}
</style>