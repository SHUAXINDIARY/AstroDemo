<style lang="less">
.vueContainer {
    margin-top: 1px;
    width: 100vw;
    height: 20vh;
    text-align: center;
    line-height: 20vh;
}
</style>
<template>
    <div @click="updateTitle" class="vueContainer">
        {{ title }} - By Vue
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "FilterApp",
    setup() {
        const title = ref("Filter App");

        const updateTitle = () => {
            console.log("调试window - vue", window, window.test);
            title.value = `ReRender Filter App - \n ${parseInt(Math.random() * 1000 + "")}`;
        };

        return {
            title,
            updateTitle,
        };
    },
};
</script>