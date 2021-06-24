<template>
    <div>
        <div class="resultList">
            {{ time }}
        </div>
</div>
</template>
<script>
export default {
    name: 'ResultList',
    props: ['time']
}
</script>
<style lang="scss">
.resultList {
    margin: 10px 0;
    padding: 10px 5px;
    border: 1px solid #ddd;
}
</style>